//express
const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const premiumPlanController = require("../../controllers/admin/premiumPlan.controller");

//create premiumPlan by admin
route.post("/create", premiumPlanController.store);

//update premiumPlan by admin
route.patch("/update", premiumPlanController.update);

//delete premiumPlan by admin
route.delete("/delete",  premiumPlanController.destroy);

//get premiumPlan for admin
route.get("/",  premiumPlanController.index);

//handle activation of premiumPlan
route.patch("/handleisActive",  premiumPlanController.handleisActive);

//get premiumPlan histories of users (admin earning)
route.get("/getpremiumPlanHistory",  premiumPlanController.getpremiumPlanHistory);

module.exports = route;
