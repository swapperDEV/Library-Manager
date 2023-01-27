import express, { Router } from "express";
import { body } from "express-validator/check";
import { getLibraryData } from "../controllers/library";
import { authChecker } from "../middleware/isAuth";

const router = Router();

//POST /library
router.post("/", [body("name")], authChecker, getLibraryData);

export default router;
