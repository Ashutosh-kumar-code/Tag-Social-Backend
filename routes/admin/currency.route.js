const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const currencyController = require("../../controllers/admin/currencyController");

route.post("/create",  currencyController.store);
route.patch("/update",  currencyController.update);
route.get("/",  currencyController.get);
route.get("/getDefault",  currencyController.getDefault);
route.patch("/default",  currencyController.defaultCurrency);
route.delete("/delete",  currencyController.destroy);

module.exports = route;
