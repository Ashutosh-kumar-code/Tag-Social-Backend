const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const dailyRewardCoinController = require("../../controllers/admin/dailyRewardCoin.controller");

route.post("/storeDailyReward",  dailyRewardCoinController.storeDailyReward);

route.patch("/updateDailyReward",  dailyRewardCoinController.updateDailyReward);

route.get("/getDailyReward",  dailyRewardCoinController.getDailyReward);

route.delete("/deleteDailyReward",  dailyRewardCoinController.deleteDailyReward);

module.exports = route;
