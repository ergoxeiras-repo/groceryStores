const express = require("express");
const router = express.Router();

const ugieinhDiatrofhController = require("../../controller/products/healthyDietController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", ugieinhDiatrofhController.diatrofh);
router.get("/ugieinh-diatrofh", ugieinhDiatrofhController.ugieinhDiatrofh);
router.get("/ugieinh-diatrofh/xwris-gloutenh", ugieinhDiatrofhController.xwrisGloutenh);
router.get("/ugieinh-diatrofh/xwris-zaxarh", ugieinhDiatrofhController.xwrisZaxarh);
router.get("/ugieinh-diatrofh/xwris-laktozh", ugieinhDiatrofhController.xwrisLaktozh);
router.get("/ugieinh-diatrofh/me-stevia", ugieinhDiatrofhController.meStevia);
router.get("/ugieinh-diatrofh/biologika", ugieinhDiatrofhController.biologika);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ugieinh-diatrofh/:id", ugieinhDiatrofhController.ugieinhDiatrofh);
router.get("/ugieinh-diatrofh/xwris-gloutenh/:id", ugieinhDiatrofhController.xwrisGloutenh);
router.get("/ugieinh-diatrofh/xwris-zaxarh/:id", ugieinhDiatrofhController.xwrisZaxarh);
router.get("/ugieinh-diatrofh/xwris-laktozh/:id", ugieinhDiatrofhController.xwrisLaktozh);
router.get("/ugieinh-diatrofh/me-stevia/:id", ugieinhDiatrofhController.meStevia);
router.get("/ugieinh-diatrofh/biologika/:id", ugieinhDiatrofhController.biologika);

module.exports = router;