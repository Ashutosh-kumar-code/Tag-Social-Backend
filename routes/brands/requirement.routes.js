const express = require("express");
const router = express.Router();
const reqController = require("../../controllers/brand/requirement.controller");

// POST - Add new requirement
router.post("/add", reqController.addRequirement);

// DELETE - Delete by ID
router.delete("/delete/:id", reqController.deleteRequirement);

// GET - List all or by brandId
router.get("/list", reqController.listRequirements);

// PATCH - Toggle active status
router.patch("/toggle/:id", reqController.toggleRequirementStatus);

module.exports = router;
