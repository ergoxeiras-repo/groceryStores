const express = require("express");

const reviewController = require("../controller/reviewController");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/create-product-review/:id", checkAuth, reviewController.createProductReview);

module.exports = router;