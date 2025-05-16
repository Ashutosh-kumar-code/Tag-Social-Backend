const express = require("express");
const route = express.Router();

//Controller
const dashboardController = require("../../controllers/admin/dashboard.controller");

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//get admin panel dashboard
route.get("/dashboardCount",  dashboardController.dashboardCount);

//get date wise chartAnalytic for users, videos, shorts
route.get("/chartAnalytic",  dashboardController.chartAnalytic);

//get date wise chartAnalytic for active users, inActive users
route.get("/chartAnalyticOfactiveInactiveUser",  dashboardController.chartAnalyticOfactiveInactiveUser);

module.exports = route;
