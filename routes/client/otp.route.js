//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//Controller
const OTPController = require("../../controllers/client/otp.controller");

//create OTP when user login
route.post("/otplogin",  OTPController.otplogin);

//create OTP and send the email for password security
route.post("/create",  OTPController.store);

//verify the OTP
route.post("/verify",  OTPController.verify);

module.exports = route;
