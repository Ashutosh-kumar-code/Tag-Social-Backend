const express = require("express");
const route = express.Router();

//Controller
const coinplanController = require("../../controllers/client/coinplan.controller");

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//get coinplan
route.get("/retriveCoinplanByUser",  coinplanController.retriveCoinplanByUser);

//when user purchase the coinPlan create coinPlan history by user
route.post("/createCoinPlanHistory",  coinplanController.createCoinPlanHistory);

module.exports = route;
