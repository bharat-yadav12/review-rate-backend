import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    founded: {
      type: Date
    },
    rating: {
      type: Number,
      default: 0
    },
    reviewCount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
