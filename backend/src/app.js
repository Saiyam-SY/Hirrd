import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

// common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));
app.use(cookieParser());

// import apis
import userRouter from "./routes/user.route.js";

//apis
app.use("/api/v1/user", userRouter);

export { app };
