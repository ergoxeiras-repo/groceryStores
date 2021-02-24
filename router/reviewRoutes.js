const express = require("express");

const reviewController = require("../controller/apiControllers/reviewController");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/create-product-review", checkAuth, reviewController.createProductReview);
router.post("/create-store-review", checkAuth, reviewController.createStoreReview);

module.exports = router;