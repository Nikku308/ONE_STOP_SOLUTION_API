import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    area: { type: String, required: true },   // Ramamurthy Nagar
    city: { type: String, required: true },   // Bangalore
    pincode: String,
  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);
