const Coupons = require("../models/coupenModel");

exports.getCouponsByCode = async (req, res) => {
  try {
    const coupon = await Coupons.findOne({ code: req.params.code });
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getAllCoupons = async (req, res) => {
  try {
    const allCoupons = await Coupons.find();
    res.status(200).json(allCoupons);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addNewCoupon = async (req, res) => {
  try {
    const newCoupon = new Coupons(req.body);
    const savedCoupon = await newCoupon.save();
    const ledger = new adminHistory({
      email: req.session.email,
      action: `added new coupon (${newCoupon.code})`,
    });
    ledger.save();
    res.status(201).json({ message: "coupon successfully created" });
  } catch (error) {
    const ledger = new adminHistory({
      email: req.session.email,
      action: "adding new coupon failed",
    });
    ledger.save();
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteCouponByCode = async (req, res) => {
  try {
    const deletedCoupon = await Coupons.findOneAndDelete({
      code: req.params.code,
    });
    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    const ledger = new adminHistory({
      email: req.session.email,
      action: `deleted a coupon successfully (${deletedCoupon.code})`,
    });
    ledger.save();
    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (error) {
    const ledger = new adminHistory({
      email: req.session.email,
      action: "deleting a coupon failed",
    });
    ledger.save();
    res.status(500).json({ error: "Internal Server Error" });
  }
};
