const express = require("express");

const router = express.Router();

const katoikidiaController = require("../../controller/viewControllers/katoikidiaController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, katoikidiaController.katoikidia);
router.get("/eidh-gia-skyloys", authController.isLoggedIn, katoikidiaController.eidhGiaSkyloys);
router.get("/eidh-gia-skyloys/ygrh-trofh", authController.isLoggedIn, katoikidiaController.ygrhTrofh);
router.get("/eidh-gia-skyloys/xhra-trofh", authController.isLoggedIn, katoikidiaController.xhraTrofh);
router.get("/eidh-gia-skyloys/snak-gia-skulous", authController.isLoggedIn, katoikidiaController.snakGiaSkulous);
router.get("/eidh-gia-skyloys/aksesoyar-gia-skulous", authController.isLoggedIn, katoikidiaController.aksesoyarGiaSkulous);
router.get("/eidh-gia-gates", authController.isLoggedIn, katoikidiaController.eidhGiaGates);
router.get("/eidh-gia-gates/ygrh-trofh", authController.isLoggedIn, katoikidiaController.ygrhTrofh);
router.get("/eidh-gia-gates/xhra-trofh", authController.isLoggedIn, katoikidiaController.xhraTrofh);
router.get("/eidh-gia-gates/snak-gia-gates", authController.isLoggedIn, katoikidiaController.snakGiaGates);
router.get("/eidh-gia-gates/ammos-gia-gates", authController.isLoggedIn, katoikidiaController.ammosGiaGates);
router.get("/eidh-gia-gates/aksesoyar-gia-gates", authController.isLoggedIn, katoikidiaController.aksesoyarGiaGates);
router.get("/aksesouar-katoikidiwn", authController.isLoggedIn, katoikidiaController.aksesouarKatoikidiwn);

module.exports = router;