"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const library_1 = require("../controllers/library");
const isAuth_1 = require("../middleware/isAuth");
const router = (0, express_1.Router)();
//POST /library
router.post("/", [(0, check_1.body)("name")], isAuth_1.authChecker, library_1.getLibraryData);
exports.default = router;
