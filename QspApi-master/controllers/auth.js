import { JWT_COOKIE_EXPIRE, NODE_ENV } from "../Config";
import { asyncHandler } from "../middlewares/async";
import { UserModel } from "../Models/User";
import { ErrorResponse } from "./../uitils/ErrorResponse";
import jwt from "jsonwebtoken";
/*@Desc POST ROUTES
  @ACCESS PUBLIC
  @ROUTE '/api/v1/auth/register'
*/

export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await UserModel.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 201, res);
});

/*@Desc POST ROUTES
  @ACCESS PUBLIC
  @ROUTE '/api/v1/auth/login'
*/

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //validate email && password
  if (!email || !password) {
    return next(new ErrorResponse("please provide an email and password", 400));
  }
  //check for user
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("User not exits", 401));
  }
  //check if password match
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Password is not match", 401));
  }

  sendTokenResponse(user, 201, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  //create token
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (NODE_ENV === "production") {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

/*@Desc GET CURRENT logout in user
  @ACCESS PRIVATE
  @ROUTE '/api/v1/auth/logout'
*/

export const logout = asyncHandler(async (req, res, next) => {
  return req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

/*@Desc GET CURRENT logged in user
  @ACCESS PRIVATE
  @ROUTE '/api/v1/auth/me'
*/

export const getMe = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findById(req.user.id);
  res.status(200).json({
    success: true,
    data: user,
  });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const user = await UserModel.find({});
  res.status(200).json({
    success: true,
    data: user,
  });
});
