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
            res.status(200).json({ message: "Cannot find users" });
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
const createLibraryUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createLibraryUser = createLibraryUser;
const createLibraryAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createLibraryAdmin = createLibraryAdmin;
