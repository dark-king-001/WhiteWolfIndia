const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionControllers");

// done
router.get("/collections", collectionController.getAllCollections);
// done
router.post("/collections", collectionController.createCollection);
router.get("/collections/:id", collectionController.getCollectionById);

// done
router.put("/collections/:id", collectionController.updateCollection);
// done
router.delete("/collections/:id", collectionController.deleteCollection);

module.exports = router;
