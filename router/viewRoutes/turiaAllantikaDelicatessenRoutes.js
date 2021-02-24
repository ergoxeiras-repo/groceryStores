const express = require("express");

const router = express.Router();

const turiaAllantikaDelicatessenController = require("../../controller/viewControllers/turiaAllantikaDelicatessenController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, turiaAllantikaDelicatessenController.turiaAllantikaDelicatessen);
router.get("/turia", authController.isLoggedIn, turiaAllantikaDelicatessenController.turia);
router.get("/turia/feta", authController.isLoggedIn, turiaAllantikaDelicatessenController.feta);
router.get("/turia/kremwdh-aloifwmena", authController.isLoggedIn, turiaAllantikaDelicatessenController.kremwdhAloifwmena);
router.get("/turia/mozzarella", authController.isLoggedIn, turiaAllantikaDelicatessenController.mozzarella);
router.get("/turia/graviera", authController.isLoggedIn, turiaAllantikaDelicatessenController.graviera);
router.get("/turia/kefaloturi", authController.isLoggedIn, turiaAllantikaDelicatessenController.kefaloturi);
router.get("/turia/parmezana", authController.isLoggedIn, turiaAllantikaDelicatessenController.parmezana);
router.get("/turia/regato", authController.isLoggedIn, turiaAllantikaDelicatessenController.regato);
router.get("/turia/gouda-edam-emmental-cheddar", authController.isLoggedIn, turiaAllantikaDelicatessenController.goudaEdamEmmentalCheddar);
router.get("/turia/xaloumi", authController.isLoggedIn, turiaAllantikaDelicatessenController.xaloumi);
router.get("/turia/hmiskluro-kaseri", authController.isLoggedIn, turiaAllantikaDelicatessenController.hmiskluroKaseri);
router.get("/turia/mple", authController.isLoggedIn, turiaAllantikaDelicatessenController.mple);
router.get("/turia/trimmeno", authController.isLoggedIn, turiaAllantikaDelicatessenController.trimmeno);
router.get("/turia/se-fetes", authController.isLoggedIn, turiaAllantikaDelicatessenController.seFetes);
router.get("/allantika", authController.isLoggedIn, turiaAllantikaDelicatessenController.allantika);
router.get("/allantika/zampon", authController.isLoggedIn, turiaAllantikaDelicatessenController.zampon);
router.get("/allantika/galopoula-kotopoulo", authController.isLoggedIn, turiaAllantikaDelicatessenController.galopoulaKotopoulo);
router.get("/allantika/wmoplath", authController.isLoggedIn, turiaAllantikaDelicatessenController.wmoplath);
router.get("/allantika/loukanika", authController.isLoggedIn, turiaAllantikaDelicatessenController.loukanika);
router.get("/allantika/salami-aeros", authController.isLoggedIn, turiaAllantikaDelicatessenController.salamiAeros);
router.get("/allantika/mortadela", authController.isLoggedIn, turiaAllantikaDelicatessenController.mortadela);
router.get("/allantika/mpeikon-panseta-mprizola", authController.isLoggedIn, turiaAllantikaDelicatessenController.mpeikonPansetaMprizola);
router.get("/allantika/pariza-parizaki", authController.isLoggedIn, turiaAllantikaDelicatessenController.parizaParizaki);
router.get("/delicatessen", authController.isLoggedIn, turiaAllantikaDelicatessenController.delicatessen);
router.get("/delicatessen/psaria-alipasta", authController.isLoggedIn, turiaAllantikaDelicatessenController.psariaAlipasta);
router.get("/delicatessen/salates", authController.isLoggedIn, turiaAllantikaDelicatessenController.salates);
router.get("/delicatessen/elies", authController.isLoggedIn, turiaAllantikaDelicatessenController.elies);
router.get("/delicatessen/toursi", authController.isLoggedIn, turiaAllantikaDelicatessenController.toursi);
router.get("/delicatessen/xalvas", authController.isLoggedIn, turiaAllantikaDelicatessenController.xalvas);

module.exports = router;