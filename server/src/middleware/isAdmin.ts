import { Response, Request, NextFunction } from "express";
import { ResponseError } from "../types/error";

export const adminChecker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Session Checker: ${req.session.id}`);
  console.log(req.session);
  if (req.session.user.role === "admin") {
    next();
  } else {
    let error: ResponseError = new Error("Admin authentication failed.");
    error.statusCode = 401;
    next(error);
  }
};
