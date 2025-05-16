//express
const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const contactController = require("../../controllers/admin/contact.controller");

//create contact
route.post("/create",  contactController.store);

//update contact
route.patch("/update",  contactController.update);

//delete contact
route.delete("/delete",  contactController.destroy);

//get contact
route.get("/",  contactController.get);

module.exports = route;
