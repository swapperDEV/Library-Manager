import { NextFunction, Request, Response } from "express";
import Library from "../models/library";
import User from "../models/user";
import { CatchError, ResponseError } from "../types/error";

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
) => {};

export const createLibraryAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
