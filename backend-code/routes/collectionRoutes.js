const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

router.get("/collections", collectionController.getAllCollections);
router.post("/collections", collectionController.createCollection);
router.get("/collections/:id", collectionController.getCollectionById);
router.put("/collections/:id", collectionController.updateCollection);
router.delete("/collections/:id", collectionController.deleteCollection);

module.exports = router;
