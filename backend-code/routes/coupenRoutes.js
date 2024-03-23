const express = require("express");
const router = express.Router();
const controllers = require("../controllers/couponControllers");

const authenticator = require("../middlewares/adminConfig");
const isAdminAuthenticated = authenticator.adminAuthenticater;
const isAuthenticated = authenticator.userAuthenticator;

router.get("/coupons", isAdminAuthenticated, controllers.getAllCoupons);

router.get("/coupons/:code", controllers.getCouponsByCode);

router.post("/coupons", isAdminAuthenticated, controllers.addNewCoupon);

router.delete(
  "/coupons/:code",
  isAdminAuthenticated,
  controllers.deleteCouponByCode
);

module.exports = router;
