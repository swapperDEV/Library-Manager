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
exports.logoutSession = exports.checkLogin = exports.loginAdmin = exports.loginUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt = require("bcryptjs");
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
            const error = new Error("A user with this email could not be found.");
            error.statusCode = 401;
            throw error;
        }
        const isPasswordCorrect = yield bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            const error = new Error("Wrong password!");
            error.statusCode = 401;
            throw error;
        }
        req.session.user = user;
        res.status(200).json({ user: user, session: req.session });
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
    res.status(200).json({ user: req.session.user, session: req.session.id });
});
exports.checkLogin = checkLogin;
const logoutSession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy(function (err) {
        if (!err) {
            res.status(200).json({ message: "session destroyed" });
        }
    });
});
exports.logoutSession = logoutSession;
