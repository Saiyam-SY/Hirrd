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
import companyRouter from "./routes/company.route.js";
import userRouter from "./routes/user.route.js";

//apis
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);

export { app };
