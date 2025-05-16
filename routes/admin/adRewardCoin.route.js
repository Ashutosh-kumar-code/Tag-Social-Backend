const express = require("express");
const route = express.Router();

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const adRewardCoinController = require("../../controllers/admin/adRewardCoin.controoler");

route.post("/storeAdReward",  adRewardCoinController.storeAdReward);

route.patch("/updateAdReward",  adRewardCoinController.updateAdReward);

route.get("/getAdReward",  adRewardCoinController.getAdReward);

route.delete("/deleteAdReward",  adRewardCoinController.deleteAdReward);

module.exports = route;
