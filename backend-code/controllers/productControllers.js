const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProductUsingId = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await Product.findOne({ itemId });
    if (!item) {
      return res.status(404).redirect("/error404");
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Route to get a review based on email and orderId
exports.getAllReviews = async (req, res) => {
  try {
    // Find the product by itemId
    const product = await Product.findOne({ itemId: req.params.itemId });

    if (!product) {
      return res.status(404).redirect("/error404");
    }

    // Extract reviews based on email and exclude orderId
    let review = product.ratings.map(
      ({ email, rating, title, detail, dateAdded }) => ({
        email,
        rating,
        title,
        detail,
        dateAdded,
      })
    );

    if (!review) {
      review = {
        email: req.session.email,
        rating: 0,
        title: "",
        detail: "",
        dateAdded: Date.now(),
      };
    }

    res.status(200).json({ message: "Review found successfully", review });
  } catch (error) {
    console.error("Error getting review:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
