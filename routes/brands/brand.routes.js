const express = require("express");
const router = express.Router();
const brandController = require("../../controllers/brand/brand.controller");

// Add new brand
router.post("/add", brandController.addBrand);

router.post("/login", brandController.loginBrand); 

// Delete brand by ID
router.delete("/delete/:id", brandController.deleteBrand);

// Verify brand by ID
router.patch("/verify/:id", brandController.verifyBrand);

// List brands with optional filter
router.get("/list", brandController.listBrands);

module.exports = router;
