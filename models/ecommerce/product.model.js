import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true, default: 0 },
  description: { type: String, required: true },
  discount: { type: String, required: false },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  ProductImage: { type: String, required: true },
  stock: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema);