const bcrypt = require("bcryptjs");
const Library = require("../models/library");
const User = require("../models/user");
const { validationResult } = require("express-validator/check");
const { deleteLibrary } = require("../utils/deleteLibrary");

exports.createLibrary = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    error.statusCode = 422;
    throw error;
  }
  const name = req.body.name;
  const adminPassword = req.body.adminPassword;
  const adminEmail = req.body.adminEmail;
  const adminName = req.body.adminName;
  const library = new Library({
    name: name,
  });
  Library.findOne({ name: name }).then((libraryExist) => {
    if (!libraryExist) {
      library
        .save()
        .then(() => {
          bcrypt
            .hash(adminPassword, 12)
            .then((hashedPw) => {
              const user = new User({
                email: adminEmail,
                password: hashedPw,
                name: adminName,
                library: name,
                role: "admin",
              });
              return user.save();
            })
            .then((result) => {
              console.log(result);
              res.status(201).json({
                message: "Library & admin acc created successfully!",
                admin: result,
                library: library,
              });
            })
            .catch((err) => {
              if (err) {
                deleteLibrary();
              }
              if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
            });
        })
        .catch((err) => {
          console.log(err);
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    } else {
      let error = new Error("Library exists");
      error.statusCode = 409;
      next(error);
    }
  });
};
