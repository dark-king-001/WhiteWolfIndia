const express = require("express");
const router = express.Router();

const authenticator = require("../middlewares/adminConfig");
const isAdminAuthenticated = authenticator.adminAuthenticater;
const isAuthenticated = authenticator.userAuthenticator;

const collectionController = require("../controllers/collectionControllers");

// done
router.get("/collections", collectionController.getAllCollections);
// done
router.post(
  "/collections",
  isAdminAuthenticated,
  collectionController.createCollection
);
router.get("/collections/:id", collectionController.getCollectionById);

// done
router.put(
  "/collections/:id",
  isAdminAuthenticated,
  collectionController.updateCollection
);
// done
router.delete(
  "/collections/:id",
  isAdminAuthenticated,
  collectionController.deleteCollection
);

module.exports = router;
