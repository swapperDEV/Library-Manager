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
exports.createCardId = void 0;
const user_1 = __importDefault(require("../models/user"));
const createCardId = (library, name) => __awaiter(void 0, void 0, void 0, function* () {
    let cardId = "";
    for (let i = 0; i < 5; i++) {
        cardId += library[i].toLowerCase().charCodeAt(0) - 97 + 1;
    }
    for (let i = 0; i < 5; i++) {
        cardId += name[i].toLowerCase().charCodeAt(0) - 97 + 1;
    }
    for (let i = 0; i < 5; i++) {
        cardId += Math.floor(Math.random() * 9);
    }
    const cardExists = yield user_1.default.findOne({ cardId });
    if (cardExists) {
        (0, exports.createCardId)(library, name);
    }
    else {
        console.log(cardId);
        return cardId.toString();
    }
});
exports.createCardId = createCardId;
