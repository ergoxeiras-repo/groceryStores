const express = require("express");

const router = express.Router();

const diatrofhController = require("../../controller/viewControllers/diatrofhController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, diatrofhController.diatrofh);
router.get("/ugieinh-diatrofh", authController.isLoggedIn, diatrofhController.ugieinhDiatrofh);
router.get("/ugieinh-diatrofh/xwris-gloutenh", authController.isLoggedIn, diatrofhController.xwrisGloutenh);
router.get("/ugieinh-diatrofh/xwris-zaxarh", authController.isLoggedIn, diatrofhController.xwrisZaxarh);
router.get("/ugieinh-diatrofh/xwris-laktozh", authController.isLoggedIn, diatrofhController.xwrisLaktozh);
router.get("/ugieinh-diatrofh/me-stevia", authController.isLoggedIn, diatrofhController.meStevia);
router.get("/ugieinh-diatrofh/biologika", authController.isLoggedIn, diatrofhController.biologika);

module.exports = router;