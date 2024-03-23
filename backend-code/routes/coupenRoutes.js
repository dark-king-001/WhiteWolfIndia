const express = require("express");
const router = express.Router();
const controllers = require("../controllers/couponControllers");

router.get("/coupons", controllers.getAllCoupons);

router.get("/coupons/:code", controllers.getCouponsByCode);

router.post("/coupons", controllers.addNewCoupon);

router.delete("/coupons/:code", controllers.deleteCouponByCode);

module.exports = router;
