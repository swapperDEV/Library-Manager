"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLibrary = void 0;
const library_1 = __importDefault(require("../models/library"));
const deleteLibrary = (name) => {
    library_1.default.findOneAndRemove({ name: name }).catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};
exports.deleteLibrary = deleteLibrary;
