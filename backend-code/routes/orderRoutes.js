const express = require("express");
const router = express.Router();
// Schema and Model definitions here...

const authenticator = require("../middlewares/adminConfig");
const isAdminAuthenticated = authenticator.adminAuthenticater;
const isAuthenticated = authenticator.userAuthenticator;

const controllers = require("../controllers/orderControllers");

// Routes for Sales Schema:
// done
router.get("/api/order", isAuthenticated, controllers.getOrderByEmail);

// add a new order
router.post("/processPayment", controllers.paymentGateway);

router.post("/save/order", isAuthenticated, controllers.saveOrder);

// router.get("/check/order/:id",isAuthenticated, controllers.testAPI);

router.get(
  "/api/admin/getAllOrders",
  isAdminAuthenticated,
  controllers.getAllOrders
);

module.exports = router;
