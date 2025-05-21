const Requirement = require("../../models/requirement.model");


// Add requirement
exports.addRequirement = async (req, res) => {
  try {
    const requirement = new Requirement(req.body);
    await requirement.save();
    res.status(201).json({ message: "Requirement posted", requirement });
  } catch (error) {
    res.status(500).json({ message: "Failed to post requirement", error });
  }
};

// Delete requirement by ID
exports.deleteRequirement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Requirement.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Requirement not found" });
    res.status(200).json({ message: "Requirement deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete requirement", error });
  }
};

// List all requirements (with optional brand filter)
exports.listRequirements = async (req, res) => {
  try {
    const { brandId } = req.query;
    const filter = {};
    if (brandId) filter.brand = brandId;

    const requirements = await Requirement.find(filter).populate("brand", "brandName email logo").sort({ createdAt: -1 });
    res.status(200).json({ count: requirements.length, requirements });
  } catch (error) {
    res.status(500).json({ message: "Failed to list requirements", error });
  }
};

// Toggle active status
exports.toggleRequirementStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const reqDoc = await Requirement.findById(id);
    if (!reqDoc) return res.status(404).json({ message: "Requirement not found" });

    reqDoc.isActive = !reqDoc.isActive;
    await reqDoc.save();

    res.status(200).json({ message: "Requirement status updated", isActive: reqDoc.isActive });
  } catch (error) {
    res.status(500).json({ message: "Failed to update status", error });
  }
};
