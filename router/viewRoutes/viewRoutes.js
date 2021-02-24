const express = require("express");
const router = express.Router();

const viewController = require("../../controller/viewControllers/viewController");
const authController = require("../../controller/apiControllers/authController");

const vrefikhFrontidaRouter = require("./vrefikhFrontidaRoutes");
const kavaRouter = require("./kavaRoutes");
const proswpikhFrontidaRouter = require("./proswpikhFrontidaRoutes");
const katoikidiaRouter = require("./katoikidiaRoutes");
const katharistikaΧartikaΕidhΟikiakhsRouter = require("./katharistikaXartikaEidhOikiakhsRoutes");
const freskoKreasPsariRouter = require("./freskoKreasPsariRoutes");
const opwropwleioRouter = require("./opwropwleioRoutes");
const proiontaArtouRouter = require("./proiontaArtouRoutes");
const galaktokomikaEidhPsugeiouRouter = require("./galaktokomikaEidhPsugeiouRoutes");
const turiaAllantikaDelicatessenRouter = require("./turiaAllantikaDelicatessenRoutes");
const tupopoihmenaTrofhmaRouter = require("./tupopoihmenaTrofhmaRoutes");
const prwinoRofhmataRouter = require("./prwinoRofhmataRoutes");
const snacksRouter = require("./snacksRoutes");
const diatrofhRouter = require("./diatrofhRoutes");

router.get("/", authController.isLoggedIn, viewController.index);
router.get("/login", authController.isLoggedIn, viewController.login);
router.get("/signup", authController.isLoggedIn, viewController.signup);
router.get("/trofhma", authController.isLoggedIn, viewController.trofhma);
router.get("/offers", authController.isLoggedIn, viewController.offers);
router.get("/offers/masoutis-offers", authController.isLoggedIn, viewController.masoutisOffers);
router.get("/brochures", authController.isLoggedIn, viewController.brochures);
router.get("/brochures/masoutis-brochure", authController.isLoggedIn, viewController.masoutisBrochures);
router.get("/brochures/ab-brochure", authController.isLoggedIn, viewController.abBrochures);
router.get("/stores", authController.isLoggedIn, viewController.stores);
router.get("/communication", authController.isLoggedIn, viewController.communication);
router.get("/job-search", authController.isLoggedIn, viewController.jobSearch);
router.get("/search", authController.isLoggedIn,  viewController.search);
router.get("/search/products", authController.isLoggedIn, viewController.searchProducts);

router.use("/fresko-kreas-kai-psari", freskoKreasPsariRouter);
router.use("/opwropwleio", opwropwleioRouter);
router.use("/galaktokomika-kai-eidh-psugeiou", galaktokomikaEidhPsugeiouRouter);
router.use("/turia-allantika-delicatessen", turiaAllantikaDelicatessenRouter);
router.use("/tupopoihmena-trofhma", tupopoihmenaTrofhmaRouter);
router.use("/proionta-artou", proiontaArtouRouter);
router.use("/prwino-kai-rofhmata", prwinoRofhmataRouter);
router.use("/snacks", snacksRouter);
router.use("/diatrofh", diatrofhRouter);
router.use("/kava", kavaRouter);
router.use("/proswpikh-frontida", proswpikhFrontidaRouter);
router.use("/vrefikh-frontida", vrefikhFrontidaRouter);
router.use("/katoikidia", katoikidiaRouter);
router.use("/katharistika-xartika-eidh-oikiakhs", katharistikaΧartikaΕidhΟikiakhsRouter);




module.exports = router;