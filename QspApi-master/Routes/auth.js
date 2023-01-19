import { Router } from "express";
import {
  login,
  register,
  getMe,
  logout,
  getAllUsers,
} from "./../controllers/auth";
import { authorize, protect } from "./../middlewares/auth";
const router = Router();
router.route("/register").post(register);
router.route("/login").post(login);
router
  .route("/me")
  .get(protect, authorize("publisher", "admin", "user"), getMe);
router
  .route("/all-users")
  .get(protect, authorize("publisher", "admin"), getAllUsers);
router
  .route("/logout")
  .get(protect, authorize("publisher", "admin", "user"), logout);

export { router as authRouter };
