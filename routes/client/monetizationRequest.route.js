const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

const MonetizationRequestController = require("../../controllers/client/monetizationRequest.controller");

//Monetization request made by particular user
route.post("/createMonetizationRequest",  MonetizationRequestController.createMonetizationRequest);

//get monetization for the particular user (after monetiization on)
route.get("/getMonetizationForUser",  MonetizationRequestController.getMonetizationForUser);

//get minimum criteria and actual result of particular user (check monetization for user)
route.get("/getMonetization",  MonetizationRequestController.getMonetization);

module.exports = route;
