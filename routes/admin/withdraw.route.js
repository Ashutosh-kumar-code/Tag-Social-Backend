//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const WithdrawController = require("../../controllers/admin/withdraw.controller");

//store Withdraw
route.post("/create",  WithdrawController.store);

//update Withdraw
route.patch("/update",  WithdrawController.update);

//get Withdraw
route.get("/",  WithdrawController.get);

//delete Withdraw
route.delete("/",  WithdrawController.delete);

//handle isEnabled switch
route.patch("/handleSwitch",  WithdrawController.handleSwitch);

module.exports = route;
