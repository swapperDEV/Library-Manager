import express from "express";
import type { ErrorRequestHandler } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

//routes
import createLibraryRoute from "./routes/createlib";
import authRoutes from "./routes/auth";
import libraryRoutes from "./routes/library";
import { emailAuth } from "./settings";
const app = express();

app.use(bodyParser.json());

//nodemailer
const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailAuth.email,
    pass: emailAuth.password,
  },
});

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/createlib", createLibraryRoute);
app.use("/auth", authRoutes);
app.use("/library", libraryRoutes);

//error handling
app.use(((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
}) as ErrorRequestHandler);

//mongo db
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
