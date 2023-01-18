const Library = require("../models/library");

exports.deleteLibrary = (name) => {
  Library.findOneAndRemove({ name: name }).catch((err) => {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  });
};
