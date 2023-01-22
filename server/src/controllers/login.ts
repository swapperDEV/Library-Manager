import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { CatchError, ResponseError } from "../types/error";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //rozdzielic na dwie route dla admina i usera
  //szukanie usera po login i haslo
  //zwraca jego profil w sesji
};

export const loginAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, password);
  try {
    const user = await User.findOne({ name: name });
    if (!user) {
      const error: ResponseError = new Error(
        "A user with this name could not be found."
      );
      error.statusCode = 401;
      throw error;
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      const error: ResponseError = new Error("Wrong password!");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        name: user.name,
        userId: user._id.toString(),
      },
      "swapperdev",
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({ user: user, token: token, userId: user._id.toString() });
  } catch (err: CatchError) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const checkLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("tw id", req.userId);
  const user = await User.findById(req.userId);
  res.status(200).json({ message: "authenticated", user: user });
};
