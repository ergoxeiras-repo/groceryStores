const express = require("express");

const router = express.Router();

const viewController = require("../../controller/viewControllers/vrefikhFrontidaController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, viewController.vrefikhFrontida);
router.get("/vrefiko-gala", authController.isLoggedIn, viewController.vrefikoGala);
router.get("/vrefiko-gala/vrefiko-gala-1hs-hlikias", authController.isLoggedIn, viewController.vrefikoGala1hsHlikias);
router.post("/vrefiko-gala/vrefiko-gala-1hs-hlikias", authController.isLoggedIn, viewController.vrefikoGala1hsHlikias);
router.get("/vrefiko-gala/vrefiko-gala-2hs-hlikias", authController.isLoggedIn, viewController.vrefikoGala2hsHlikias);
router.get("/vrefiko-gala/vrefiko-gala-3hs-hlikias", authController.isLoggedIn, viewController.vrefikoGala3hsHlikias);
router.get("/vrefikes-trofes", authController.isLoggedIn, viewController.vrefikesTrofes);
router.get("/vrefikes-trofes/vrefikes-kremes", authController.isLoggedIn, viewController.vrefikesKremes);
router.get("/vrefikes-trofes/vrefika-giaourtia", authController.isLoggedIn, viewController.vrefikaGiaourtia);
router.get("/vrefikes-trofes/vrefika-snack", authController.isLoggedIn, viewController.vrefikaSnack);
router.get("/vrefikes-trofes/etoima-vrefika-geymata", authController.isLoggedIn, viewController.etoimaVrefikaGeymata);
router.get("/vrefikes-panes-mwromanthla", authController.isLoggedIn, viewController.vrefikesPanesMwromanthla);
router.get("/vrefikes-panes-mwromanthla/vrefikes-panes", authController.isLoggedIn, viewController.vrefikesPanes);
router.get("/vrefikes-panes-mwromanthla/mwromanthla", authController.isLoggedIn, viewController.mwromanthla);
router.get("/peripoihsh-swmatos", authController.isLoggedIn, viewController.peripoihshSwmatos);
router.get("/peripoihsh-swmatos/sampouan-afroloutra", authController.isLoggedIn, viewController.sampouanΑfroloutra);
router.get("/peripoihsh-swmatos/kremes-poudres-ladi", authController.isLoggedIn, viewController.kremesPoudresLadi);
router.get("/aksesouar", authController.isLoggedIn, viewController.aksesouar);
router.get("/aksesouar/piatakia-koutalakia-pirounakia", authController.isLoggedIn, viewController.piatakiaKoutalakiaPirounakia);
router.get("/aksesouar/vrefika-psalidakia", authController.isLoggedIn, viewController.vrefikaPsalidakia);
router.get("/aksesouar/mpimpero-saliares-pipiles", authController.isLoggedIn, viewController.mpimperoSaliaresPipiles);
router.get("/vrefiko-farmakeio", authController.isLoggedIn, viewController.vrefikoFarmakeio);
router.get("/vrefiko-farmakeio/rinika-apofraktika", authController.isLoggedIn, viewController.rinikaΑpofraktika);
router.get("/vrefika-aporrypantika", authController.isLoggedIn, viewController.vrefikaΑporrypantika);
router.get("/vrefika-aporrypantika/ygra-aporrypantika", authController.isLoggedIn, viewController.ygraAporrypantika);
router.get("/vrefika-aporrypantika/malaktika", authController.isLoggedIn, viewController.malaktika);
router.get("/vrefika-aporrypantika/aporrypantika-se-skonh", authController.isLoggedIn, viewController.aporrypantikaSeSkonh);

module.exports = router;