const express = require("express");
const router = express.Router();

const freskoKreasPsariController = require("../../controller/products/fishAndMeatController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", freskoKreasPsariController.freskoKreasPsari);
router.get("/nwpa-kreata", freskoKreasPsariController.nwpaKreata);
router.get("/nwpa-kreata/mosxari", freskoKreasPsariController.mosxari);
router.get("/nwpa-kreata/xoirino", freskoKreasPsariController.xoirino);
router.get("/nwpa-kreata/arni-katsiki", freskoKreasPsariController.arniKatsiki);
router.get("/nwpa-kreata/kotopoula-diafora-poulerika", freskoKreasPsariController.kotopoulaDiaforaPoulerika);
router.get("/nwpa-kreata/kunhgi", freskoKreasPsariController.kunhgi);
router.get("/nwpa-kreata/etoima-geumata", freskoKreasPsariController.etoimaGeumata);
router.get("/freska-psaria-kai-thalassina", freskoKreasPsariController.freskaPsariaThalassina);
router.get("/freska-psaria-kai-thalassina/psaria", freskoKreasPsariController.psaria);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/mosxari/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/xoirino/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/arni-katsiki/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/kotopoula-diafora-poulerika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/kunhgi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/nwpa-kreata/etoima-geumata/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/freska-psaria-kai-thalassina/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/freska-psaria-kai-thalassina/psaria/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;