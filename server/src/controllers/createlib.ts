import bcrypt from "bcryptjs";
import Library from "../models/library";
import User from "../models/user";
import { validationResult } from "express-validator/check";
import { deleteLibrary } from "../utils/deleteLibrary";
import { Request, Response, NextFunction } from "express";

interface ResponseError extends Error {
  statusCode?: number;
}

export const createLibrary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error: ResponseError = new Error("Library exists");
    error.statusCode = 422;
    throw error;
  }
  const name = req.body.name;
  const adminPassword = req.body.adminPassword;
  const adminEmail = req.body.adminEmail;
  const adminName = req.body.adminName;
  const adminExists = await User.findOne({ name: adminName });
  if (adminExists) {
    let error: ResponseError = new Error("Admin exists, bad name");
    error.statusCode = 409;
    next(error);
  } else {
    const library = new Library({
      name: name,
      admin: adminName,
    });
    const libraryExists = await Library.findOne({ name: name });
    if (!libraryExists) {
      await library.save();
      try {
        const hashedPw = await bcrypt.hash(adminPassword, 12);
        const user = new User({
          email: adminEmail,
          password: hashedPw,
          name: adminName,
          library: name,
          role: "admin",
        });
        await user.save();
        res.status(201).json({
          message: "Library & admin acc created successfully!",
          admin: user,
          library: library,
        });
      } catch (err) {
        deleteLibrary(name);
        let error: ResponseError = new Error("Error during signup");
        error.statusCode = 500;
        next(error);
      }
    } else {
      let error: ResponseError = new Error("Library exists");
      error.statusCode = 409;
      next(error);
    }
  }
};
