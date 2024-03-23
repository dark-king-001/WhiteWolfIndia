const collections = require("./routes/collectionRoutes");
const products = require("./routes/productRoutes");
const coupons = require("./routes/coupenRoutes");
const orders = require("./routes/orderRoutes");
const user = require("./routes/userRoutes");
const admin = require("./routes/adminRoutes");

module.exports = [collections, products, coupons, orders, user, admin];
