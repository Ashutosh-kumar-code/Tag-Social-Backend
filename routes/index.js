//express
const express = require("express");
const route = express.Router();

//admin index.js
const admin = require("./admin/index");

//client index.js
const client = require("./client/index");

//brand route.js
const brands = require("./brands/brand.routes");

// brand requirements route.js
const brandRequirements = require("./brands/requirement.routes");

route.use("/admin", admin);
route.use("/client", client);

route.use('/brand',brands)
route.use('/brand-requirement',brandRequirements)

module.exports = route;
