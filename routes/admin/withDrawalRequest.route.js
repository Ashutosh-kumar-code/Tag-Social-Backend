const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

const WithdrawalRequestController = require("../../controllers/admin/withDrawalRequest.controller");

route.get("/",  WithdrawalRequestController.index);

route.patch("/accept",  WithdrawalRequestController.acceptWithdrawalRequest);

route.patch("/decline",  WithdrawalRequestController.declineWithdrawalRequest);

module.exports = route;
