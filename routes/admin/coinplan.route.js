const express = require("express");
const route = express.Router();

//multer
const multer = require("multer");
const storage = require("../../");
const upload = multer({ storage });

//Controller
const coinplanController = require("../../controllers/admin/coinplan.controller");

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../checkAccess");

//create coinplan
route.post("/store",  coinplanController.store);

//update coinplan
route.patch("/update",  coinplanController.update);

//handle isPopular switch
route.patch("/handleisPopularSwitch",  coinplanController.handleisPopularSwitch);

//handle isActive switch
route.patch("/handleisActiveSwitch",  coinplanController.handleisActiveSwitch);

//delete coinplan
route.delete("/delete",  coinplanController.delete);

//get coinplan
route.get("/fetchCoinplan",  coinplanController.fetchCoinplan);

//get coinplan histories of users (admin earning)
route.get("/retrieveUserCoinplanRecords",  coinplanController.retrieveUserCoinplanRecords);

module.exports = route;
