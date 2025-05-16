//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const watchHistoryController = require("../../controllers/client/watchHistory.controller");

//when user view the video create watchHistory of the particular video
route.post("/createWatchHistory",  watchHistoryController.createWatchHistory);

//get user wise watchHistory
route.get("/getWatchHistory",  watchHistoryController.getWatchHistory);

module.exports = route;
