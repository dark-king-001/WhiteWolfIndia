const express = require("express");
const router = express.Router();
// Schema and Model definitions here...
const adminHistory = require("../models/adminHistorySchema");

const controllers = require("../controllers/adminControllers");

const authenticator = require("../adminConfig");

// Define a middleware to check if the user is authenticated

const UserSessionTrack = require("../schemas/user_session_manager");

router.get(
  "/api/admin/getAllUserSessions",
  isAdminAuthenticated,
  async (req, res) => {
    try {
      const allUserSessions = await UserSessionTrack.find();
      res.json(allUserSessions);
    } catch (error) {
      res.status(500).json({ error: "No User in server" });
    }
  }
);

// admin tab
router.get("/adminwolf", isAdminAuthenticated, (req, res) => {
  res.render("Admin_page");
});

const Orders = require("../schemas/order_schema");

router.put(
  "/api/update-order-status/:razorpay_order_id",
  isAdminAuthenticated,
  async (req, res) => {
    const { razorpay_order_id } = req.params;
    const { status } = req.body;

    try {
      // Find the order by razorpay_order_id
      const order = await Orders.findOne({ razorpay_order_id });

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      // Update the status
      order.status = status;

      // Save the updated order
      await order.save();

      const ledger = new adminHistory({
        email: req.session.email,
        action: `Updating Order Status Successfull (${razorpay_order_id})`,
      });
      ledger.save();

      return res
        .status(200)
        .json({ message: "Order status updated successfully" });
    } catch (error) {
      console.error("Error updating order status:", error);
      const ledger = new adminHistory({
        email: req.session.email,
        action: "Updating order status failed",
      });
      ledger.save();
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get(
  "/api/admin/getAllUsers",
  isAdminAuthenticated,
  controllers.getAllUsers
);

router.get("/adminActionHistory", isAdminAuthenticated, async (req, res) => {
  try {
    const completeLedger = await adminHistory.find();
    res.json(completeLedger);
  } catch (error) {
    res.status(500).json({ error: "No User in server" });
  }
});

const Subscriber = require("../schemas/subscriber_schema");

router.get("/api/admin/subscribe", isAdminAuthenticated, async (req, res) => {
  try {
    const allSubscribers = await Subscriber.find();
    res.json(allSubscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
