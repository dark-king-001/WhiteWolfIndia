const collections = require("./routes/collectionRoutes");
const products = require("./routes/productRoutes");
const coupons = require("./routes/coupenRoutes");
const orders = require("./routes/orderRoutes");
const user = require("./routes/userRoutes");

module.exports = [collections, products, coupons, orders, user];
