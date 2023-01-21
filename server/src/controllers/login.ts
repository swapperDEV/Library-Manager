import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import { CatchError, ResponseError } from "../types/error";
const bcrypt = require("bcryptjs");

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
        "A user with this email could not be found."
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
    req.session.user = user;
    res.status(200).json({ user: user, session: req.session });
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
  res.status(200).json({ user: req.session.user, session: req.session.id });
};

export const logoutSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.session.destroy(function (err: ResponseError) {
    if (!err) {
      res.status(200).json({ message: "session destroyed" });
    }
  });
};
