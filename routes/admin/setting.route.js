//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const settingController = require("../../controllers/admin/setting.controller");

//create Setting
//route.post("/create", checkAccessWithSecretKey(), settingController.store);

//update Setting
route.patch("/update", settingController.update);

//get setting data
route.get("/", settingController.index);

//handle setting switch
route.patch("/handleSwitch", settingController.handleSwitch);

//handle water mark setting
route.patch("/updateWatermarkSetting", settingController.updateWatermarkSetting);

module.exports = route;
