// collectionController.js

const Collection = require("../models/collectionsModel");

// Controller function to handle GET request for retrieving all collections
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to handle POST request for creating a new collection
exports.createCollection = async (req, res) => {
  const newCollection = new Collection({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to handle GET request for retrieving a single collection by ID
exports.getCollectionById = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (collection === null) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to handle PUT request for updating an existing collection
exports.updateCollection = async (req, res) => {
  try {
    const updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedCollection === null) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.json(updatedCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to handle DELETE request for deleting a collection
exports.deleteCollection = async (req, res) => {
  try {
    const deletedCollection = await Collection.findByIdAndDelete(req.params.id);
    if (deletedCollection === null) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.json({ message: "Collection deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
