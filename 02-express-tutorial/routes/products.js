const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getByQuery,
} = require("../controllers/products.js");

router.route("/products").get(getProducts);
router.route("/products/:productID").get(getProductById);
router.route("/query").get(getByQuery);

module.exports = router;
