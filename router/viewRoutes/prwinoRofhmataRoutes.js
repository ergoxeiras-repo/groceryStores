const express = require("express");

const router = express.Router();

const prwinoRofhmataController = require("../../controller/viewControllers/prwinoRofhmataController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, prwinoRofhmataController.prwinoRofhmata);
router.get("/dhmhtriaka", authController.isLoggedIn, prwinoRofhmataController.dhmhtriaka);
router.get("/dhmhtriaka/corn-flakes", authController.isLoggedIn, prwinoRofhmataController.cornFlakes);
router.get("/dhmhtriaka/muesli", authController.isLoggedIn, prwinoRofhmataController.muesli);
router.get("/dhmhtriaka/vrwmh", authController.isLoggedIn, prwinoRofhmataController.vrwmh);
router.get("/dhmhtriaka/enhlikwn", authController.isLoggedIn, prwinoRofhmataController.enhlikwn);
router.get("/dhmhtriaka/paidika", authController.isLoggedIn, prwinoRofhmataController.paidika);
router.get("/dhmhtriaka/mpares-dhmhtriakwn", authController.isLoggedIn, prwinoRofhmataController.mparesDhmhtriakwn);
router.get("/meli", authController.isLoggedIn, prwinoRofhmataController.meli);
router.get("/meli/thumarisia", authController.isLoggedIn, prwinoRofhmataController.thumarisia);
router.get("/meli/anthewn-kwnoforwn", authController.isLoggedIn, prwinoRofhmataController.anthewnKwnoforwn);
router.get("/meli/alles-poikilies", authController.isLoggedIn, prwinoRofhmataController.allesPoikilies);
router.get("/meli/basilikos-poltos", authController.isLoggedIn, prwinoRofhmataController.basilikosPoltos);
router.get("/marmelades", authController.isLoggedIn, prwinoRofhmataController.marmelades);
router.get("/marmelades/fraoula-kerasi", authController.isLoggedIn, prwinoRofhmataController.fraoulaKerasi);
router.get("/marmelades/rodakino-verikoko", authController.isLoggedIn, prwinoRofhmataController.rodakinoVerikoko);
router.get("/marmelades/vatomouro-vussino", authController.isLoggedIn, prwinoRofhmataController.vatomouroVussino);
router.get("/marmelades/alles-geuseis", authController.isLoggedIn, prwinoRofhmataController.allesGeuseis);
router.get("/aleimmata-karpwn", authController.isLoggedIn, prwinoRofhmataController.aleimmataKarpwn);
router.get("/aleimmata-karpwn/pralines", authController.isLoggedIn, prwinoRofhmataController.pralines);
router.get("/aleimmata-karpwn/taxini", authController.isLoggedIn, prwinoRofhmataController.taxini);
router.get("/aleimmata-karpwn/fystikovoythro", authController.isLoggedIn, prwinoRofhmataController.fystikovoythro);
router.get("/kafes-rofhmata", authController.isLoggedIn, prwinoRofhmataController.kafesRofhmata);
router.get("/kafes-rofhmata/espresso", authController.isLoggedIn, prwinoRofhmataController.espresso);
router.get("/kafes-rofhmata/stigmiaios", authController.isLoggedIn, prwinoRofhmataController.stigmiaios);
router.get("/kafes-rofhmata/filtrou", authController.isLoggedIn, prwinoRofhmataController.filtrou);
router.get("/kafes-rofhmata/ellhnikos", authController.isLoggedIn, prwinoRofhmataController.ellhnikos);
router.get("/kafes-rofhmata/kapsoules", authController.isLoggedIn, prwinoRofhmataController.kapsoules);
router.get("/kafes-rofhmata/upokatastata-sunodeuthka", authController.isLoggedIn, prwinoRofhmataController.upokatastataSunodeuthka);
router.get("/kafes-rofhmata/kakao-rofhmata-sokolatas", authController.isLoggedIn, prwinoRofhmataController.kakaoRofhmataSokolatas);
router.get("/tsai-afepsimata", authController.isLoggedIn, prwinoRofhmataController.tsaiAfepsimata);
router.get("/tsai-afepsimata/tsai", authController.isLoggedIn, prwinoRofhmataController.tsai);
router.get("/tsai-afepsimata/afepsimata", authController.isLoggedIn, prwinoRofhmataController.afepsimata);

module.exports = router;