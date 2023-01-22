"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controllers/login");
const isAuth_1 = require("../middleware/isAuth");
const router = (0, express_1.Router)();
//POST /auth/login/user
router.post, "/login/user", login_1.loginUser;
//POST /auth/login/admin
router.post("/login/admin", login_1.loginAdmin);
//POST /auth/checklogin
router.post("/checklogin", isAuth_1.authChecker, login_1.checkLogin);
exports.default = router;
