const express = require("express");
const router = express.Router();

const productsController = require("../controller/apiControllers/productsController");

router.get("/search", productsController.search);

module.exports = router;