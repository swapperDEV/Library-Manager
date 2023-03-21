"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailForPassword = void 0;
const app_1 = require("../app");
const settings_1 = require("../settings");
const sendMailForPassword = (email) => {
    console.log("sending mail");
    app_1.transporter.sendMail({
        from: settings_1.emailAuth.email,
        to: email,
        subject: "TEST",
        text: "TEST",
    }, function (error) {
        if (error) {
            console.log(error, "ERROR jakis dziwny");
        }
    });
};
exports.sendMailForPassword = sendMailForPassword;
