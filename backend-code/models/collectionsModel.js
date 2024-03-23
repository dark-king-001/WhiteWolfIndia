const mongoose = require("mongoose");

// Define schema for the "Collection" collection
const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  containedProducts: [],
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the "Collection" model using the schema
const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
