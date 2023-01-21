"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = (req, res, next) => {
    console.log(`Session Checker: ${req.session.id}`);
    console.log(req.session, "_____test_____ ", req.session.user);
    if (req.session.user) {
        console.log(`Found User Session`);
        next();
    }
    else {
        let error = new Error("Authentication failed.");
        error.statusCode = 401;
        next(error);
    }
};
exports.authChecker = authChecker;
