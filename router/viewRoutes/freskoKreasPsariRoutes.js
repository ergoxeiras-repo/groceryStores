const express = require("express");

const router = express.Router();

const freskoKreasPsariController = require("../../controller/viewControllers/freskoKreasPsariController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, freskoKreasPsariController.freskoKreasPsari);
router.get("/nwpa-kreata", authController.isLoggedIn, freskoKreasPsariController.nwpaKreata);
router.get("/nwpa-kreata/mosxari", authController.isLoggedIn, freskoKreasPsariController.mosxari);
router.get("/nwpa-kreata/xoirino", authController.isLoggedIn, freskoKreasPsariController.xoirino);
router.get("/nwpa-kreata/arni-katsiki", authController.isLoggedIn, freskoKreasPsariController.arniKatsiki);
router.get("/nwpa-kreata/kotopoula-diafora-poulerika", authController.isLoggedIn, freskoKreasPsariController.kotopoulaDiaforaPoulerika);
router.get("/nwpa-kreata/kunhgi", authController.isLoggedIn, freskoKreasPsariController.kunhgi);
router.get("/nwpa-kreata/etoima-geumata", authController.isLoggedIn, freskoKreasPsariController.etoimaGeumata);
router.get("/freska-psaria-kai-thalassina", authController.isLoggedIn, freskoKreasPsariController.freskaPsariaThalassina);
router.get("/freska-psaria-kai-thalassina/psaria", authController.isLoggedIn, freskoKreasPsariController.psaria);

module.exports = router;