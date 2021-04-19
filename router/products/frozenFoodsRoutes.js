const express = require("express");
const router = express.Router();

const frozenFoodsController = require("../../controller/products/frozenFoodsController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", frozenFoodsController.forzenFood);
router.get("/laxanika", frozenFoodsController.laxanika);
router.get("/frouta", frozenFoodsController.frouta);
router.get("/patates", frozenFoodsController.patates);
router.get("/fulla-zumes", frozenFoodsController.fullaZumes);
router.get("/pites-pitakia", frozenFoodsController.pitesPitakia);
router.get("/pitses-peinirli", frozenFoodsController.pitsesPeinirli);
router.get("/krouasan", frozenFoodsController.krouasan);
router.get("/thallasina-psaria", frozenFoodsController.thallasinaPsaria);
router.get("/kreata", frozenFoodsController.kreata);
router.get("/pagwta", frozenFoodsController.pagwta);
router.get("/etoima-geumata", frozenFoodsController.etoimaGeumata);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/laxanika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/frouta/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/patates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/fulla zumes/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pites pitakia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pitses peinirli/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/krouasan/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/thallasina psaria/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/kreata/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/pagwta/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/etoima geumata/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;