const Brand = require("../../models/brand.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Add a new brand
exports.addBrand = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const existing = await Brand.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Brand already exists with this email" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const brandData = { ...req.body, password: hashedPassword };

    const brand = new Brand(brandData);
    await brand.save();

    res.status(201).json({ message: "Brand registered successfully", brand });
  } catch (error) {
    res.status(500).json({ message: "Failed to register brand", error });
  }
};

// brand login
exports.loginBrand = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const brand = await Brand.findOne({ email });
    if (!brand)
      return res.status(404).json({ message: "Brand not found" });

    const isMatch = await bcrypt.compare(password, brand.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: brand._id, role: "brand" }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      brand: {
        id: brand._id,
        brandName: brand.brandName,
        email: brand.email,
        isVerified: brand.isVerified,
        logo: brand.logo,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// Delete brand by ID
exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Brand.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete brand", error });
  }
};

// Verify a brand by ID
exports.verifyBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndUpdate(id, { isVerified: true }, { new: true });
    if (!brand) return res.status(404).json({ message: "Brand not found" });
    res.status(200).json({ message: "Brand verified", brand });
  } catch (error) {
    res.status(500).json({ message: "Failed to verify brand", error });
  }
};

// List all brands with optional filters
exports.listBrands = async (req, res) => {
  try {
    const { isVerified } = req.query; // optional filter
    const filter = {};
    if (isVerified !== undefined) filter.isVerified = isVerified === "true";

    const brands = await Brand.find(filter).sort({ createdAt: -1 });
    res.status(200).json({ count: brands.length, brands });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch brands", error });
  }
};
