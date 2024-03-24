import express, { NextFunction, Request, Response } from "express";
import path from "path";
import router from "./routes/index.routes";
import { globalErrorHandler } from "./util/error";
import rateLimit from "express-rate-limit";
import cors from "cors";
import passportLocal from "./config/passport-local";
import cookieParser from "cookie-parser";
import passport from "passport";
import { verifyToken } from "./util/token";
import { User } from "./config/db";
import axios from "axios";
const PORT = process.env.PORT || 4040;
const END_POINT = process.env.END_POINT || "https://abc-limo-server.watemtrade.com/"
const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.static(path.join(__dirname, "uploads")));
app.use('/static', express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "https://abc-limousine.com",
      "https://abc-limo.netlify.app",
      "https://abc-limo-admin.netlify.app",
      "https://limo-admin.onrender.com",
      "https://seattle-limo.onrender.com",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
      "127.0.0.1:3000",
      "https://seattle-limos.onrender.com",
      "http://localhost",
      "127.0.0.1",
      "https://abclimo1.netlify.app",
      "https://abclimo2.netlify.app",
      "https://abclimo3.netlify.app",
    ],
  })
);
app.use(cookieParser());
app.use(passport.initialize({}));
app.use(router);
app.get("*", function (req, res) {
  return res.status(404).json({
    status: "fail",
    message: "Resource not found",
  });
});
app.use(rateLimit());
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
  // send test request every fifve mininute to keep server alive
  // setInterval(async () => {
  //   try {
  //     await axios.get(END_POINT + '/alive');
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }, 1000 * 60 * 5)
});
passportLocal(passport);
//global error handler
app.use(globalErrorHandler);
process.on("unhandledRejection", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  process.exit(1);

});

process.on("uncaughtException", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  process.exit(1);
});
