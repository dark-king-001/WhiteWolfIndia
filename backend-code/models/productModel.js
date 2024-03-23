const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  skuCode: { type: String },
  stock: { type: Number, default: 0 },
  FAQ: { type: String },
  keyFeatures: { type: String },
  how_to_use: { type: String },
  meta_title: { type: String },
  meta_description: { type: String },
  newArrival: { type: Boolean, default: true },
  bestSeller: { type: Boolean, default: true },
  ratings: [
    {
      name: { type: String },
      email: { type: String },
      orderId: { type: String },
      rating: { type: Number, default: 0 },
      title: { type: String },
      detail: { type: String },
      dateAdded: { type: Date, default: Date.now },
    },
  ],
  originalPrice: { type: Number, required: true },
  offeredPrice: { type: Number, required: true },
  imageLink: [{ type: String }],
  createdAt: { type: Date },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
