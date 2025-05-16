const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const dailyRewardCoinController = require("../../controllers/client/dailyRewardCoin.controller");

//get daily reward coin
route.get("/getDailyRewardCoinByUser",  dailyRewardCoinController.getDailyRewardCoinByUser);

//earn coin from daily check In
route.patch("/handleDailyCheckInReward",  dailyRewardCoinController.handleDailyCheckInReward);

module.exports = route;
