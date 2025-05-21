const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, trim: true, required: true }, // Display name of the brand
    // contactPerson: { type: String, trim: true, default: "" }, // Point of contact name
    email: { type: String, trim: true, required: true, unique: true },
    logo: { type: String, default: null }, // Brand image/logo
    country: { type: String, trim: true, default: null },
    website: { type: String, trim: true, default: "" },
    password: { type: String,required: true  },
    
    socialMediaLinks: {
      instagramLink: { type: String, default: "" },
      facebookLink: { type: String, default: "" },
      twitterLink: { type: String, default: "" },
      linkedinLink: { type: String, default: "" },
    },

    description: { type: String, trim: true, default: "" },

    isVerified: { type: Boolean, default: false }, // Approved by admin

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

brandSchema.index({ createdAt: -1 });
brandSchema.index({ isVerified: 1 });
brandSchema.index({ email: 1 });

module.exports = mongoose.model("Brand", brandSchema);
