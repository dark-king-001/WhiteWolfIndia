const Users = require("../schemas/user_schema");
const Orders = require("../schemas/order_schema");
const adminHistory = require("../schemas/admin_his_schema");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "No User in server" });
  }
};

module.exports = {
  getAllUsers,
  getAllOrders,
};
