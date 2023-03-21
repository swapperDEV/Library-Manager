"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
//routes
const createlib_1 = __importDefault(require("./routes/createlib"));
const auth_1 = __importDefault(require("./routes/auth"));
const library_1 = __importDefault(require("./routes/library"));
const settings_1 = require("./settings");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
//nodemailer
const nodemailer = require("nodemailer");
exports.transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: settings_1.emailAuth.email,
        pass: settings_1.emailAuth.password,
    },
});
exports.transporter.sendMail({
    from: "Library Manager",
    to: "wiktormaciazek@gmail.com",
    subject: "TEST",
    text: "TEST",
}, function (error) {
    if (error) {
        console.log(error, "ERROR jakis dziwny");
    }
});
//CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use("/createlib", createlib_1.default);
app.use("/auth", auth_1.default);
app.use("/library", library_1.default);
//error handling
app.use(((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
}));
//mongo db
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017")
    .then((result) => {
    app.listen(8080);
})
    .catch((err) => console.log(err));
