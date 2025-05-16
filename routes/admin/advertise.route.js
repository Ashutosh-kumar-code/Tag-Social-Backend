const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const advertiseController = require("../../controllers/admin/advertise.controller");

//create advertise
//route.post("/create",  advertiseController.store);

//update advertise
route.patch("/update",  advertiseController.update);

//get advertise
route.get("/",  advertiseController.get);

//handle activation of the switch
route.patch("/handleSwitchForAd",  advertiseController.handleSwitchForAd);

module.exports = route;
