import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    discount: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "discount cannot be negative"],
      max: [100, "discount cannot be more than 100"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    Date: {
      type: Date,
      required: [true, "Date is required"],
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);