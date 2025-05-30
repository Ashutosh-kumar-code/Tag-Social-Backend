//express
const express = require("express");
const route = express.Router();

//s3multer
const upload = require("../../util/s3multer");

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const FileController = require("../../controllers/client/file.controller");

//upload content to digital ocean storage
route.put(
  "/upload-file",
  function (request, response, next) {
    upload(request, response, function (error) {
      if (error) {
        console.log("error in file ", error);
      } else {
        console.log("File uploaded successfully.");
        next();
      }
    });
  },
  FileController.uploadContent
);

//delete upload content from digital ocean storage
route.delete("/delete-upload", FileController.deleteUploadContent);

module.exports = route;
