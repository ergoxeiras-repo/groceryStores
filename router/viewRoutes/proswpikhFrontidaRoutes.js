const express = require("express");

const router = express.Router();

const proswpikhFrontidaController = require("../../controller/viewControllers/proswpikhFrontidaController");
const authController = require("../../controller/apiControllers/authController");

router.get("/", authController.isLoggedIn, proswpikhFrontidaController.proswpikhFrontida);
router.get("/gia-andres", authController.isLoggedIn, proswpikhFrontidaController.giaAndres);
router.get("/gia-andres/afroi-xurismatos", authController.isLoggedIn, proswpikhFrontidaController.afroiXurismatos);
router.get("/gia-andres/xuristika-mias-xrhshs", authController.isLoggedIn, proswpikhFrontidaController.xuristikaMiasXrhshs);
router.get("/gia-andres/xuristikes-mhxanes-antallaktika", authController.isLoggedIn, proswpikhFrontidaController.xuristikesMhxanesAntallaktika);
router.get("/gia-andres/after-shave", authController.isLoggedIn, proswpikhFrontidaController.afterShave);
router.get("/gia-gunaikes", authController.isLoggedIn, proswpikhFrontidaController.giaGunaikes);
router.get("/gia-gunaikes/katharismos-proswpou", authController.isLoggedIn, proswpikhFrontidaController.katharismosProswpou);
router.get("/gia-gunaikes/enudatwsh-proswpou", authController.isLoggedIn, proswpikhFrontidaController.enudatwshProswpou);
router.get("/gia-gunaikes/xurafakia", authController.isLoggedIn, proswpikhFrontidaController.xurafakia);
router.get("/gia-gunaikes/makigiaz", authController.isLoggedIn, proswpikhFrontidaController.makigiaz);
router.get("/gia-gunaikes/apotrixwtika", authController.isLoggedIn, proswpikhFrontidaController.apotrixwtika);
router.get("/gia-gunaikes/servietes-tampon", authController.isLoggedIn, proswpikhFrontidaController.servietesTampon);
router.get("/proswpikh-ygieinh", authController.isLoggedIn,  proswpikhFrontidaController.proswpikhYgieinh);
router.get("/proswpikh-ygieinh/panes-enhlikwn", authController.isLoggedIn,  proswpikhFrontidaController.panesEnhlikwn);
router.get("/proswpikh-ygieinh/vamvakia", authController.isLoggedIn,  proswpikhFrontidaController.vamvakia);
router.get("/proswpikh-ygieinh/mpatonetes", authController.isLoggedIn,  proswpikhFrontidaController.mpatonetes);
router.get("/proswpikh-ygieinh/antishptika", authController.isLoggedIn,  proswpikhFrontidaController.antishptika);
router.get("/proionta-swmatos", authController.isLoggedIn, proswpikhFrontidaController.proiontaSwmatos);
router.get("/proionta-swmatos/afroloutra-afrontous", authController.isLoggedIn, proswpikhFrontidaController.afroloutraAfrontous);
router.get("/proionta-swmatos/sfouggaria", authController.isLoggedIn, proswpikhFrontidaController.sfouggaria);
router.get("/proionta-swmatos/aposmhtika", authController.isLoggedIn, proswpikhFrontidaController.aposmhtika);
router.get("/proionta-swmatos/sapounia", authController.isLoggedIn, proswpikhFrontidaController.sapounia);
router.get("/proionta-swmatos/kallwpismos", authController.isLoggedIn, proswpikhFrontidaController.kallwpismos);
router.get("/frontida-malliwn", authController.isLoggedIn, proswpikhFrontidaController.frontidaMalliwn);
router.get("/frontida-malliwn/sampouan-kremes", authController.isLoggedIn, proswpikhFrontidaController.sampouanKremes);
router.get("/frontida-malliwn/vafes", authController.isLoggedIn, proswpikhFrontidaController.vafes);
router.get("/frontida-malliwn/spary-gel", authController.isLoggedIn, proswpikhFrontidaController.sparyGel);
router.get("/parafarmakeutika-eidh", authController.isLoggedIn, proswpikhFrontidaController.parafarmakeutikaEidh);
router.get("/parafarmakeutika-eidh/epithemata-epidesmoi", authController.isLoggedIn, proswpikhFrontidaController.epithemataEpidesmoi);
router.get("/parafarmakeutika-eidh/alkoolouxoi-losion", authController.isLoggedIn, proswpikhFrontidaController.alkoolouxoiLosion);
router.get("/parafarmakeutika-eidh/gantia-maskes-surigges", authController.isLoggedIn, proswpikhFrontidaController.gantiaMaskesSurigges);
router.get("/parafarmakeutika-eidh/proionta-profylaxhs", authController.isLoggedIn, proswpikhFrontidaController.proiontaProfylaxhs);
router.get("/stomatikh-ugieinh", authController.isLoggedIn, proswpikhFrontidaController.stomatikhUgieinh);
router.get("/stomatikh-ugieinh/odontovoyrtses", authController.isLoggedIn, proswpikhFrontidaController.odontovoyrtses);
router.get("/stomatikh-ugieinh/odontokremes", authController.isLoggedIn, proswpikhFrontidaController.odontokremes);
router.get("/stomatikh-ugieinh/stomatika-dialymata", authController.isLoggedIn, proswpikhFrontidaController.stomatikaDialymata);
router.get("/stomatikh-ugieinh/stomatika-nhmata", authController.isLoggedIn, proswpikhFrontidaController.stomatikaNhmata);
router.get("/antihliaka", authController.isLoggedIn, proswpikhFrontidaController.antihliaka);
router.get("/antihliaka/antihliaka-swmatos", authController.isLoggedIn, proswpikhFrontidaController.antihliakaSwmatos);

module.exports = router;