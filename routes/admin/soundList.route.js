//express
const express = require("express");
const route = express.Router();

const checkAccessWithSecretKey = require("../../checkAccess");

//controller
const soundListController = require("../../controllers/admin/soundList.controller");

//create soundList by admin
route.post("/createSoundList",  soundListController.createSoundList);

//update soundList by admin
route.patch("/updateSoundList",  soundListController.updateSoundList);

//get all soundList
route.get("/getSoundList",  soundListController.getSoundList);

//delete soundList by admin (multiple or single)
route.delete("/deleteSoundList",  soundListController.deleteSoundList);

module.exports = route;
