const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema(
  {
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    category: { type: String, trim: true, default: "" }, // optional
    deadline: { type: Date, default: null }, // optional
    isActive: { type: Boolean, default: true }, // brand can deactivate requirement
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

requirementSchema.index({ createdAt: -1 });
requirementSchema.index({ brand: 1 });

module.exports = mongoose.model("Requirement", requirementSchema);
