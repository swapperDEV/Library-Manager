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
exports.createLibraryAdmin = exports.createLibraryUser = exports.getLibraryMembers = exports.getLibraryData = void 0;
const library_1 = __importDefault(require("../models/library"));
const user_1 = __importDefault(require("../models/user"));
const check_1 = require("express-validator/check");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getLibraryData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const libraryName = req.body.name;
    try {
        const library = yield library_1.default.findOne({ name: libraryName });
        res.status(200).json(library);
        if (!library) {
            const error = new Error("A user with this name could not be found.");
            error.statusCode = 401;
            throw error;
        }
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.getLibraryData = getLibraryData;
const getLibraryMembers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const libraryName = req.body.name;
    try {
        const members = yield user_1.default.find({ library: libraryName })
            .where("role")
            .equals("member");
        if (!members || members.length == 0) {
            res.status(200).json([]);
        }
        else {
            res.status(200).json(members);
        }
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.getLibraryMembers = getLibraryMembers;
const createLibraryUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, check_1.validationResult)(req);
    if (!errors.isEmpty()) {
        let error = new Error("Validation error");
        error.statusCode = 422;
        throw error;
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const pesel = req.body.pesel;
    const phone = req.body.phone;
    const address = req.body.address;
    const library = req.body.library;
    const emailExists = yield user_1.default.findOne({ email: email });
    const phoneExists = yield user_1.default.findOne({ phone: phone });
    const peselExists = yield user_1.default.findOne({ pesel: pesel });
    if (emailExists && emailExists.library === library) {
        console.log(emailExists, "test");
        let error = new Error("User with this email exists in this library");
        error.statusCode = 409;
        next(error);
    }
    else {
        if (phoneExists && phone.library === library) {
            let error = new Error("User with this phone number exists in this library");
            error.statusCode = 409;
            next(error);
        }
        else {
            if (peselExists && peselExists.library === library) {
                let error = new Error("User with this pesel exists in this library");
                error.statusCode = 409;
                next(error);
            }
            else {
                try {
                    const hashedPw = yield bcryptjs_1.default.hash(password, 12);
                    const user = new user_1.default({
                        name,
                        email,
                        password: hashedPw,
                        memberInfo: { address, pesel, phone },
                        library,
                        role: "member",
                        rentedBooks: [],
                    });
                    yield user.save();
                    res.status(201).json({
                        message: "Created user!",
                        user,
                    });
                    console.log("user was created");
                }
                catch (err) {
                    let error = new Error("Error during signup");
                    error.statusCode = 500;
                    next(error);
                }
            }
        }
    }
});
exports.createLibraryUser = createLibraryUser;
const createLibraryAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createLibraryAdmin = createLibraryAdmin;
