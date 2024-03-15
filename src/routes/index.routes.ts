import { NextFunction, Request, Response, Router } from "express";
const router = Router();
import blogRouter from "./blog.routes";
import vehicleRouter from "./vehicle.routes";
import bookRouter from "./book.routes";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import serviceRouter from "./service.routes";
import { catchAsync } from "../util/error";
import prisma, { Blog, Book, User, Vehicle } from "../config/db";
import { isAuth } from "../util/auth";
import { sendMail } from "../config/mail";
import axios from "axios";
import axiosFormData from 'axios-form-data';
import { createReadStream } from "fs";
import FormData from "form-data";
import path from "path";
router.use("/auth", authRouter);
router.use("/blog", blogRouter);
router.use("/book", bookRouter);
router.use("/services", serviceRouter);
router.use("/user", catchAsync(isAuth), userRouter);
router.use("/vehicle", vehicleRouter);
router.post("/mail", async (req, res) => {
  const { name, email, phone, message } = req.body;
  await sendMail({
    name,
    email,
    phone,
    message,
  });
  res.send("success");
});
router.get("/stat", async (req, res) => {
  const numberOfPendingReservation = await Book.count({
    where: {
      status: "PENDING",
    },
  });
  const numberOfCompletedReservation = await Book.count({
    where: {
      status: "COMPLETED",
    },
  });
  const numberOfReservation = await Book.count();
  const numberOfRejectedReservation = await Book.count({
    where: {
      status: "REJECTED",
    },
  });
  const numberOfBlogs = await Blog.count();
  const numberOfVehicle = await Vehicle.count();
  const numberOfNewReservation = await Book.count({
    where: {
      createdAt: {
        gte: new Date(new Date().getTime() - 12 * 60 * 60 * 1000),
      },
    },
  });
  res.send({
    numberOfPendingReservation,
    numberOfCompletedReservation,
    numberOfRejectedReservation,
    numberOfBlogs,
    numberOfReservation,
    numberOfVehicle,
    numberOfNewReservation,
  });
});
router.get(
  "/me",
  catchAsync(isAuth),
  catchAsync(async (req: Request, res: Response) => {
    return res.json(req.user);
  })
);
router.get("/init", async (req, res) => {
  console.log("init");
  try {
    const user = await prisma.user.findMany({
      where: {

      }
    });
    if (user.length > 0) return res.status(200).json(user[0]);
    const newUser = await prisma.user.create({
      data: {
        email: "abclimo2000@gmail.com",
        lastName: "Andualem",
        firstName: "Andualem",
        password: "$2a$10$EZq8FjlPlFQJtctyPFfOfuYBRf1SAb57C/Kj1AzKUrgFfpSpzAQSG",
        // password: "123456",
      },
    })
    return res.status(200).json(newUser);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
    // throw new Error(error);
  }
});
router.get("/send-binary", async (req, res) => {
  let data = null;
  const form = new FormData();
  form.append('str', 'my value');
  form.append('img', createReadStream(path.join(__dirname, "../uploads/", "img-1708269089346-901584902.jpg")));
  try {
    // send post using axios and recive response
    const response = await axios.post('http://localhost:8000/api/upload', form, {
      headers: {
        ...form.getHeaders(),
        // You might need to set other headers depending on the server requirements
        // 'Authorization': 'Bearer YOUR_TOKEN',
        // 'Content-Type': 'multipart/form-data',
      },
    });
    data = response.data;
    console.log(response.data)
  } catch (error: any) {
    console.log(error.message)
  }
  return res.send(data)
});

export default router;
