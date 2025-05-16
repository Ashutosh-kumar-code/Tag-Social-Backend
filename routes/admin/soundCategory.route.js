//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const soundCategoryController = require("../../controllers/admin/soundCategory.controller");

//create soundCategory
route.post("/create",  soundCategoryController.create);

//update soundCategory
route.patch("/update",  soundCategoryController.update);

//delete soundCategory
route.delete("/delete",  soundCategoryController.destroy);

//get all soundCategory
route.get("/",  soundCategoryController.get);

module.exports = route;
