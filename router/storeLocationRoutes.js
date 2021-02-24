const express = require("express");
const router = express.Router();

const storeLocationController = require("../controller/apiControllers/storeLocationController");

router.get("/", storeLocationController.getAllStores);
router.post("/store-by-name", storeLocationController.getStoresByName);
router.post("/store-by-city", storeLocationController.getStoresByCity);
router.post("/store-by-city-and-name", storeLocationController.getStoresByCityAndName);
router.get("/:id", storeLocationController.getSingleStore);

module.exports = router;