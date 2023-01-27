import { Response, Request, NextFunction } from "express";
import { ResponseError } from "../types/error";
const jwt = require("jsonwebtoken");

export const authChecker = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get("Authorization");
  console.log(authHeader, "sprawdzam");
  if (!authHeader) {
    const error: ResponseError = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "swapperdev");
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error: ResponseError = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};
