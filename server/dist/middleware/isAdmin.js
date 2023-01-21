"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminChecker = void 0;
const adminChecker = (req, res, next) => {
    console.log(`Session Checker: ${req.session.id}`);
    console.log(req.session);
    if (req.session.user.role === "admin") {
        next();
    }
    else {
        let error = new Error("Admin authentication failed.");
        error.statusCode = 401;
        next(error);
    }
};
exports.adminChecker = adminChecker;
