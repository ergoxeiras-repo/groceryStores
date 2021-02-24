const express = require("express");

const authController = require("../controller/apiControllers/authController");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword/:token", authController.resetPassword);
router.post("/updatePassword", checkAuth, authController.updatePassword);

module.exports = router;