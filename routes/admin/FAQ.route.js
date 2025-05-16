//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const FAQController = require("../../controllers/admin/FAQ.controller");

//create FAQ
route.post("/create",  FAQController.store);

//update FAQ
route.patch("/update",  FAQController.update);

//delete FAQ
route.delete("/delete",  FAQController.destroy);

//get FAQ
route.get("/",  FAQController.get);

module.exports = route;
