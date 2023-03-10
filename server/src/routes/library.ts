import express, { Router } from "express";
import { body } from "express-validator/check";
import {
  createLibraryAdmin,
  createLibraryUser,
  getLibraryData,
  getLibraryMembers,
} from "../controllers/library";
import { authChecker } from "../middleware/isAuth";

const router = Router();

//POST /library
router.post("/", [body("name")], authChecker, getLibraryData);

//POST /library/newmember
router.post(
  "/newmember",
  [body("email"), body("cardId"), body("password"), body("library")],
  createLibraryUser
);

//POST /library/newadmin
router.post(
  "/newadmin",
  [body("email"), body("name"), body("password"), body("library")],
  createLibraryAdmin
);

//POST /library/members
router.post("/members", authChecker, [body("name")], getLibraryMembers);

export default router;
