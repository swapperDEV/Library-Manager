"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLibrary = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const library_1 = __importDefault(require("../models/library"));
const user_1 = __importDefault(require("../models/user"));
const check_1 = require("express-validator/check");
const deleteLibrary_1 = require("../utils/deleteLibrary");
const jwt = require("jsonwebtoken");
const createLibrary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, check_1.validationResult)(req);
    if (!errors.isEmpty()) {
        let error = new Error("Validation error");
        error.statusCode = 422;
        throw error;
    }
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const coords = req.body.coords;
    const adminPassword = req.body.adminPassword;
    const adminEmail = req.body.adminEmail;
    const adminName = req.body.adminName;
    const adminExists = yield user_1.default.findOne({ name: adminName });
    if (adminExists) {
        let error = new Error("Admin exists, bad name");
        error.message = "Admin with this login exists";
        error.statusCode = 409;
        next(error);
    }
    else {
        const library = new library_1.default({
            name: name,
            address: address,
            phone: phone,
            coords: coords,
            adminName: adminName,
        });
        const libraryExists = yield library_1.default.findOne({ name: name });
        if (!libraryExists) {
            yield library.save();
            try {
                const hashedPw = yield bcryptjs_1.default.hash(adminPassword, 12);
                const user = new user_1.default({
                    email: adminEmail,
                    password: hashedPw,
                    name: adminName,
                    library: name,
                    role: "admin",
                });
                yield user.save();
                const token = jwt.sign({
                    name: adminName,
                    userId: user._id.toString(),
                }, "swapperdev", { expiresIn: "1h" });
                res.status(201).json({
                    message: "Library & admin acc created successfully!",
                    admin: user,
                    library: library,
                    token: token,
                    id: user._id.toString(),
                });
            }
            catch (err) {
                (0, deleteLibrary_1.deleteLibrary)(name);
                let error = new Error("Error during signup");
                error.statusCode = 500;
                error.message = "Error during signup";
                next(error);
            }
        }
        else {
            let error = new Error("Library exists");
            error.message = "Library with this name exists";
            error.statusCode = 409;
            next(error);
        }
    }
});
exports.createLibrary = createLibrary;
