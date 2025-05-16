//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const NotificationController = require("../../controllers/client/notification.controller");

//get notification list for that user
route.get("/getNotificationList", NotificationController.getNotificationList);

//clear all notification for particular user
route.delete("/clearNotificationHistory", NotificationController.clearNotificationHistory);

module.exports = route;
