import express, { Router } from "express";
import { checkLogin, loginAdmin, loginUser } from "../controllers/login";
import { authChecker } from "../middleware/isAuth";
const router = Router();

//POST /auth/login/user
router.post, "/login/user", loginUser;

//POST /auth/login/admin
router.post("/login/admin", loginAdmin);

//POST /auth/checklogin
router.post("/checklogin", authChecker, checkLogin);

export default router;
