import express from "express";
import morgan from "morgan";
import cors from 'cors';
import fileUpload from "express-fileupload";
import { BootCamp } from "./Routes/bootcamp";
import { PORT, NODE_ENV } from "./Config/index";
import { connectDb } from "./Config/db";
import { errorhandler } from "./middlewares/error";
import { Courses } from "./Routes/course";
import path from "path";
import { authRouter } from "./Routes/auth";
let app = express();

//connect Db
connectDb();
//LOGGER
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cors());
//ROUTES BLOCK
app.use("/api/v1/bootcamps", BootCamp);
app.use("/api/v1/courses", Courses);
app.use("/api/v1/auth", authRouter);

app.use(errorhandler);

app.listen(PORT, err => {
  if (err) throw err;
  console.log(
    `server is running on ${NODE_ENV} MODE && Port number ${PORT}green.bold`
  );
});
