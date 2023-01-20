"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const { createLibrary } = require("../controllers/createlib");
const router = (0, express_1.Router)();
//POST /createlib/new
router.post("/new", [
    (0, check_1.body)("name"),
    (0, check_1.body)("phone"),
    (0, check_1.body)("address"),
    (0, check_1.body)("coords"),
    (0, check_1.body)("adminEmail"),
    (0, check_1.body)("adminPassword"),
    (0, check_1.body)("adminName"),
], createLibrary);
exports.default = router;
