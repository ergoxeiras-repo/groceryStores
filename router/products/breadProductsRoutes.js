const express = require("express");
const router = express.Router();

const proiontaArtouController = require("../../controller/products/breadProductsController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", proiontaArtouController.proiontaArtou);
router.get("/pswmi", proiontaArtouController.pswmi);
router.get("/pswmi/fresko-pswmi", proiontaArtouController.freskoPswmi);
router.get("/pswmi/pswmi-tou-tost", proiontaArtouController.pswmiTouTost);
router.get("/pswmi/pites-pswmakia", proiontaArtouController.pitesPswmakia);
router.get("/fryganies-kroyton", proiontaArtouController.fryganiesKroyton);
router.get("/fryganies-kroyton/fruganies", proiontaArtouController.fruganies);
router.get("/fryganies-kroyton/kroyton", proiontaArtouController.kroyton);
router.get("/kritsinia-paximadia", proiontaArtouController.kritsiniaPaximadia);
router.get("/kritsinia-paximadia/kritsinia", proiontaArtouController.paximadia);
router.get("/kritsinia-paximadia/paximadia", proiontaArtouController.paximadia);
router.get("/koulourakia-vouthmata", proiontaArtouController.koulourakiaVouthmata);
router.get("/tsoureki", proiontaArtouController.tsoureki);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pswmi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pswmi/fresko-pswmi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pswmi/pswmi-tou-tost/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pswmi/pites-pswmakia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/fryganies-kroyton/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/fryganies-kroyton/fruganies/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/fryganies-kroyton/kroyton/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/kritsinia-paximadia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/kritsinia-paximadia/kritsinia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/kritsinia-paximadia/paximadia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/krouton/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/koulourakia-vouthmata/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/tsoureki/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;