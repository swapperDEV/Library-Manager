"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const library_1 = require("../controllers/library");
const isAuth_1 = require("../middleware/isAuth");
const router = (0, express_1.Router)();
//POST /library
router.post("/", [(0, check_1.body)("name")], isAuth_1.authChecker, library_1.getLibraryData);
//POST /library/newmember
router.post("/newmember", [
    (0, check_1.body)("name"),
    (0, check_1.body)("email"),
    (0, check_1.body)("password"),
    (0, check_1.body)("pesel"),
    (0, check_1.body)("library"),
    (0, check_1.body)("phone"),
    (0, check_1.body)("address"),
], library_1.createLibraryUser);
//POST /library/newadmin
router.post("/newadmin", [(0, check_1.body)("email"), (0, check_1.body)("name"), (0, check_1.body)("password"), (0, check_1.body)("library")], library_1.createLibraryAdmin);
//POST /library/members
router.post("/members", isAuth_1.authChecker, [(0, check_1.body)("name")], library_1.getLibraryMembers);
exports.default = router;
