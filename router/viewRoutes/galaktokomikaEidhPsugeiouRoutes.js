const express = require("express");

const router = express.Router();

const galaktokomikaEidhPsugeiouController = require("../../controller/viewControllers/galaktokomikaEidhPsugeiouController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.galaktokomikaEidhPsugeiou);
router.get("/gala", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.gala);
router.get("/gala/fresko-gala", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.freskoGala);
router.get("/gala/upshlhs-pasteriwshs", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.upshlhsPasteriwshs);
router.get("/gala/sokolatouxo", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.sokolatouxo);
router.get("/gala/futiko", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.futiko);
router.get("/gala/evapore", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.evapore);
router.get("/giaourti", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.giaourti);
router.get("/giaourti/ageladino", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.ageladino);
router.get("/giaourti/katsikisio", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.katsikisio);
router.get("/giaourti/proveio", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.proveio);
router.get("/giaourti/straggisto", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.straggisto);
router.get("/giaourti/epidorpio", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.epidorpio);
router.get("/giaourti/paidiko", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.paidiko);
router.get("/giaourti/rofhma", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.rofhma);
router.get("/freskes-zymes-fylla", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.freskesZymesFylla);
router.get("/freskes-zymes-fylla/gia-krouasan", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.giaKrouasan);
router.get("/freskes-zymes-fylla/gia-pitsa", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.giaPitsa);
router.get("/freskes-zymes-fylla/gia-sfoliata", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.giaSfoliata);
router.get("/freskes-zymes-fylla/fyllo-kroustas", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.fylloKroustas);
router.get("/freskes-zymes-fylla/xwriatiko-fyllo", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.xwriatikoFyllo);
router.get("/xumoi-tsai", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.xumoiTsai);
router.get("/xumoi-tsai/xymoi", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.xumoi);
router.get("/xumoi-tsai/tsai", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.tsai);
router.get("/freskoi-zwmoi", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.freskoiZwmoi);
router.get("/auga", authController.isLoggedIn, galaktokomikaEidhPsugeiouController.auga);

module.exports = router;