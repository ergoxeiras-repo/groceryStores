const express = require("express");
const router = express.Router();

const katoikidiaController = require("../controller/apiControllers/katoikidiaController");
const fetchSingleProductController = require("../controller/apiControllers/fetchSingleProductController");

router.get("/", katoikidiaController.katoikidia);
router.get("/eidh-gia-skyloys", katoikidiaController.eidhGiaSkyloys);
router.get("/eidh-gia-skyloys/ygrh-trofh", katoikidiaController.ygrhTrofh);
router.get("/eidh-gia-skyloys/xhra-trofh", katoikidiaController.xhraTrofh);
router.get("/eidh-gia-skyloys/snak-gia-skulous", katoikidiaController.snakGiaSkulous);
router.get("/eidh-gia-skyloys/aksesoyar-gia-skulous", katoikidiaController.aksesoyarGiaSkulous);
router.get("/eidh-gia-gates", katoikidiaController.eidhGiaGates);
router.get("/eidh-gia-gates/ygrh-trofh", katoikidiaController.ygrhTrofh);
router.get("/eidh-gia-gates/xhra-trofh", katoikidiaController.xhraTrofh);
router.get("/eidh-gia-gates/snak-gia-gates", katoikidiaController.snakGiaGates);
router.get("/eidh-gia-gates/ammos-gia-gates", katoikidiaController.ammosGiaGates);
router.get("/eidh-gia-gates/aksesoyar-gia-gates", katoikidiaController.aksesoyarGiaGates);
router.get("/aksesouar-katoikidiwn", katoikidiaController.aksesouarKatoikidiwn);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-skyloys/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-skyloys/ygrh-trofh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-skyloys/xhra-trofh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-skyloys/snak-gia-skulous/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-skyloys/aksesoyar-gia-skulous/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/ygrh-trofh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/xhra-trofh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/snak-gia-gates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/ammos-gia-gates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-gia-gates/aksesoyar-gia-gates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aksesouar-katoikidiwn/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;