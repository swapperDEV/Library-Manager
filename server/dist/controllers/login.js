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
exports.checkLogin = exports.loginAdmin = exports.loginUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //rozdzielic na dwie route dla admina i usera
    //szukanie usera po login i haslo
    //zwraca jego profil w sesji
});
exports.loginUser = loginUser;
const loginAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const password = req.body.password;
    console.log(name, password);
    try {
        const user = yield user_1.default.findOne({ name: name });
        if (!user) {
            const error = new Error("A user with this name could not be found.");
            error.statusCode = 401;
            throw error;
        }
        const isPasswordCorrect = yield bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            const error = new Error("Wrong password!");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign({
            name: user.name,
            userId: user._id.toString(),
        }, "swapperdev", { expiresIn: "1h" });
        res
            .status(200)
            .json({ user: user, token: token, userId: user._id.toString() });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});
exports.loginAdmin = loginAdmin;
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("tw id", req.userId);
    const user = yield user_1.default.findById(req.userId);
    res.status(200).json({ message: "authenticated", user: user });
});
exports.checkLogin = checkLogin;
