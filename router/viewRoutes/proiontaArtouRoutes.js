const express = require("express");

const router = express.Router();

const proiontaArtouController = require("../../controller/viewControllers/proiontaArtouController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, proiontaArtouController.proiontaArtou);
router.get("/pswmi", authController.isLoggedIn, proiontaArtouController.pswmi);
router.get("/pswmi/fresko-pswmi", authController.isLoggedIn, proiontaArtouController.freskoPswmi);
router.get("/pswmi/pswmi-tou-tost", authController.isLoggedIn, proiontaArtouController.pswmiTouTost);
router.get("/pswmi/pites-pswmakia", authController.isLoggedIn, proiontaArtouController.pitesPswmakia);
router.get("/fryganies-kroyton", authController.isLoggedIn, proiontaArtouController.fryganiesKroyton);
router.get("/fryganies-kroyton/fruganies", authController.isLoggedIn, proiontaArtouController.fruganies);
router.get("/fryganies-kroyton/kroyton", authController.isLoggedIn, proiontaArtouController.kroyton);
router.get("/kritsinia-paximadia", authController.isLoggedIn, proiontaArtouController.kritsiniaPaximadia);
router.get("/kritsinia-paximadia/kritsinia", authController.isLoggedIn, proiontaArtouController.kritsinia);
router.get("/kritsinia-paximadia/paximadia", authController.isLoggedIn, proiontaArtouController.paximadia);
router.get("/koulourakia-vouthmata", authController.isLoggedIn, proiontaArtouController.koulourakiaVouthmata);
router.get("/tsoureki", authController.isLoggedIn, proiontaArtouController.tsoureki);

module.exports = router;