import { NextFunction } from "express";
import Library from "../models/library";
declare let next: NextFunction;

export const deleteLibrary = (name: string) => {
  Library.findOneAndRemove({ name: name }).catch((err) => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};
