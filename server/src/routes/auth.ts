import express, { Router } from "express";
import {
  checkLogin,
  loginAdmin,
  loginUser,
  logoutSession,
} from "../controllers/login";
import { authChecker } from "../middleware/isAuth";

const router = Router();

//POST /auth/login/user
router.post,
  "/login/user",
  // [

  // ],
  loginUser;

//POST /auth/login/admin
router.post("/login/admin", loginAdmin);

//POST /auth/logout
router.post("/logout", authChecker, logoutSession);

//GET /auth/checklogin
router.get("/checklogin", checkLogin);

export default router;
