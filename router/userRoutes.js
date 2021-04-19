const express = require("express");

const authController = require("../controller/authController");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.patch("/update-password", checkAuth, authController.updatePassword);

module.exports = router;