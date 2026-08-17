import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ministry: {
      type: String,
      required: true,
    },
    eligibility: [String],
    benefits: [String],
    applicationProcess: {
      type: String,
      required: true,
    },
    documents: [String],
    category: {
      type: String,
      enum: ["Education", "Employment", "Financial", "Health", "Safety"],
      required: true,
    },
    state: {
      type: String,
    },
    website: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Scheme", schemeSchema);
