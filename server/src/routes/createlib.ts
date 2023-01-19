import express, { Router } from "express";
import { body } from "express-validator/check";
const { createLibrary } = require("../controllers/createlib");

const router = Router();

//POST /createlib/new
router.post(
  "/new",
  [
    body("name").trim().isLength({ min: 10 }),
    body("adminEmail")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
    body("adminPassword").trim().isLength({ min: 5 }),
    body("adminName").trim().isLength({ min: 5 }),
  ],
  createLibrary
);

export default router;
