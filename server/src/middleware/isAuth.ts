import { Response, Request, NextFunction } from "express";
import { ResponseError } from "../types/error";

export const authChecker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Session Checker: ${req.session.id}`);
  console.log(req.session, "_____test_____ ", req.session.user);
  if (req.session.user) {
    console.log(`Found User Session`);
    next();
  } else {
    let error: ResponseError = new Error("Authentication failed.");
    error.statusCode = 401;
    next(error);
  }
};
