const Users = require("../models/userModel");
const Orders = require("../models/orderModel");
const adminHistory = require("../models/adminHistorySchema");

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "No User in server" });
  }
};
