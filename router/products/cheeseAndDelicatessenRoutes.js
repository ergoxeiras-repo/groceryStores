const express = require("express");
const router = express.Router();

const turiaAllantikaDelicatessenController = require("../../controller/products/cheeseAndDelicatessenController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", turiaAllantikaDelicatessenController.turiaAllantikaDelicatessen);
router.get("/turia", turiaAllantikaDelicatessenController.turia);
router.get("/turia/feta", turiaAllantikaDelicatessenController.feta);
router.get("/turia/kremwdh-aloifwmena", turiaAllantikaDelicatessenController.kremwdhAloifwmena);
router.get("/turia/mozzarella", turiaAllantikaDelicatessenController.mozzarella);
router.get("/turia/graviera", turiaAllantikaDelicatessenController.graviera);
router.get("/turia/kefaloturi", turiaAllantikaDelicatessenController.kefaloturi);
router.get("/turia/parmezana", turiaAllantikaDelicatessenController.parmezana);
router.get("/turia/regato", turiaAllantikaDelicatessenController.regato);
router.get("/turia/gouda-edam-emmental-cheddar", turiaAllantikaDelicatessenController.goudaEdamEmmentalCheddar);
router.get("/turia/xaloumi", turiaAllantikaDelicatessenController.xaloumi);
router.get("/turia/hmiskluro-kaseri", turiaAllantikaDelicatessenController.hmiskluroKaseri);
router.get("/turia/mple", turiaAllantikaDelicatessenController.mple);
router.get("/turia/trimmeno", turiaAllantikaDelicatessenController.trimmeno);
router.get("/allantika", turiaAllantikaDelicatessenController.allantika);
router.get("/allantika/zampon", turiaAllantikaDelicatessenController.zampon);
router.get("/allantika/galopoula-kotopoulo", turiaAllantikaDelicatessenController.galopoulaKotopoulo);
router.get("/allantika/wmoplath", turiaAllantikaDelicatessenController.wmoplath);
router.get("/allantika/loukanika", turiaAllantikaDelicatessenController.loukanika);
router.get("/allantika/salami-aeros", turiaAllantikaDelicatessenController.salamiAeros);
router.get("/allantika/mortadela", turiaAllantikaDelicatessenController.mortadela);
router.get("/allantika/mpeikon-panseta-mprizola", turiaAllantikaDelicatessenController.mpeikonPansetaMprizola);
router.get("/allantika/pariza-parizaki", turiaAllantikaDelicatessenController.parizaParizaki);
router.get("/delicatessen", turiaAllantikaDelicatessenController.delicatessen);
router.get("/delicatessen/psaria-alipasta", turiaAllantikaDelicatessenController.psariaAlipasta);
router.get("/delicatessen/salates", turiaAllantikaDelicatessenController.salates);
router.get("/delicatessen/elies", turiaAllantikaDelicatessenController.elies);
router.get("/delicatessen/toursi", turiaAllantikaDelicatessenController.toursi);
router.get("/delicatessen/xalvas", turiaAllantikaDelicatessenController.xalvas);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/feta/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/kremwdh-aloifwmena/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/mozzarella/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/graviera/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/kefaloturi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/parmezana/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/regato/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/gouda-edam-emmental-cheddar/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/xaloumi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/hmiskluro-kaseri/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/mple/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/turia/trimmeno/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/zampon/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/galopoula-kotopoulo/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/wmoplath/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/loukanika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/salami-aeros/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/mortadela/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/mpeikon-panseta-mprizola/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/allantika/pariza-parizaki/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/psaria-alipasta/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/salates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/elies/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/toursi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/delicatessen/xalvas/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;