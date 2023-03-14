import { NextFunction, Request, Response } from "express";
import Library from "../models/library";
import User from "../models/user";
import { CatchError, ResponseError } from "../types/error";
import { validationResult } from "express-validator/check";
import bcrypt from "bcryptjs";

export const getLibraryData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const libraryName = req.body.name;
  try {
    const library = await Library.findOne({ name: libraryName });
    res.status(200).json(library);
    if (!library) {
      const error: ResponseError = new Error(
        "A user with this name could not be found."
      );
      error.statusCode = 401;
      throw error;
    }
  } catch (err: CatchError) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const getLibraryMembers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const libraryName = req.body.name;
  try {
    const members = await User.find({ library: libraryName })
      .where("role")
      .equals("member");
    if (!members || members.length == 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(members);
    }
  } catch (err: CatchError) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const createLibraryUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error: ResponseError = new Error("Validation error");
    error.statusCode = 422;
    throw error;
  }
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const pesel = req.body.pesel;
  const phone = req.body.phone;
  const address = req.body.address;
  const library = req.body.library;
  const emailExists = await User.findOne({ email: email });
  const phoneExists = await User.findOne({ phone: phone });
  const peselExists = await User.findOne({ pesel: pesel });
  if (emailExists && emailExists.library === library) {
    console.log(emailExists, "test");
    let error: ResponseError = new Error(
      "User with this email exists in this library"
    );
    error.statusCode = 409;
    next(error);
  } else {
    if (phoneExists && phone.library === library) {
      let error: ResponseError = new Error(
        "User with this phone number exists in this library"
      );
      error.statusCode = 409;
      next(error);
    } else {
      if (peselExists && peselExists.library === library) {
        let error: ResponseError = new Error(
          "User with this pesel exists in this library"
        );
        error.statusCode = 409;
        next(error);
      } else {
        try {
          const hashedPw = await bcrypt.hash(password, 12);
          const user = new User({
            name,
            email,
            password: hashedPw,
            memberInfo: { address, pesel, phone },
            library,
            role: "member",
            rentedBooks: [],
          });
          await user.save();
          res.status(201).json({
            message: "Created user!",
            user,
          });
          console.log("user was created");
        } catch (err) {
          let error: ResponseError = new Error("Error during signup");
          error.statusCode = 500;
          next(error);
        }
      }
    }
  }
};

export const createLibraryAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
