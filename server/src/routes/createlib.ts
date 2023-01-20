import express, { Router } from "express";
import { body } from "express-validator/check";
const { createLibrary } = require("../controllers/createlib");

const router = Router();

//POST /createlib/new
router.post(
  "/new",
  [
    body("name"),
    body("phone"),
    body("address"),
    body("coords"),
    body("adminEmail"),
    body("adminPassword"),
    body("adminName"),
  ],
  createLibrary
);

export default router;
