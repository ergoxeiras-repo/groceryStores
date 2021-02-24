const express = require("express");

const router = express.Router();

const snacksController = require("../../controller/viewControllers/snacksController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, snacksController.snacks);
router.get("/sokolates", authController.isLoggedIn, snacksController.sokolates);
router.get("/sokolates/galaktos", authController.isLoggedIn, snacksController.galaktos);
router.get("/sokolates/ugeias", authController.isLoggedIn, snacksController.ugeias);
router.get("/sokolates/leukes", authController.isLoggedIn, snacksController.leukes);
router.get("/sokolates/sokolatakia", authController.isLoggedIn, snacksController.sokolatakia);
router.get("/sokolates/gkofretes", authController.isLoggedIn, snacksController.gkofretes);
router.get("/mpiskota", authController.isLoggedIn, snacksController.mpiskota);
router.get("/mpiskota/klassika", authController.isLoggedIn, snacksController.klassika);
router.get("/mpiskota/gemista", authController.isLoggedIn, snacksController.gemista);
router.get("/mpiskota/digestive", authController.isLoggedIn, snacksController.digestive);
router.get("/glyka-proionta-zymhs", authController.isLoggedIn, snacksController.glykaProiontaZymhs);
router.get("/glyka-proionta-zymhs/krouasan", authController.isLoggedIn, snacksController.krouasan);
router.get("/glyka-proionta-zymhs/keik", authController.isLoggedIn, snacksController.keik);
router.get("/glyka-proionta-zymhs/tsourekia", authController.isLoggedIn, snacksController.tsourekia);
router.get("/patatakia-garidakia-pop-corn", authController.isLoggedIn, snacksController.patatakiaGaridakiaPopCorn);
router.get("/patatakia-garidakia-pop-corn/patatakia", authController.isLoggedIn, snacksController.patatakia);
router.get("/patatakia-garidakia-pop-corn/garidakia", authController.isLoggedIn, snacksController.garidakia);
router.get("/patatakia-garidakia-pop-corn/nachos", authController.isLoggedIn, snacksController.nachos);
router.get("/patatakia-garidakia-pop-corn/pop-corn", authController.isLoggedIn, snacksController.popCorn);
router.get("/crackers", authController.isLoggedIn, snacksController.crackers);
router.get("/ksiroi-karpoi", authController.isLoggedIn, snacksController.ksiroiKarpoi);
router.get("/apoksuramena-frouta", authController.isLoggedIn, snacksController.apoksuramenaFrouta);
router.get("/rizogkrofretes", authController.isLoggedIn, snacksController.rizogkrofretes);
router.get("/tsixles-karameles", authController.isLoggedIn, snacksController.tsixlesKarameles);
router.get("/tsixles-karameles/tsixles", authController.isLoggedIn, snacksController.tsixles);
router.get("/tsixles-karameles/karameles", authController.isLoggedIn, snacksController.karameles);
router.get("/tsixles-karameles/gleifitzouria", authController.isLoggedIn, snacksController.gleifitzouria);
router.get("/tsixles-karameles/zeledakia", authController.isLoggedIn, snacksController.zeledakia);

module.exports = router;