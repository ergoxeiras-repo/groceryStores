const express = require("express");
const router = express.Router();

const tupopoihmenaTrofhmaController = require("../../controller/products/standardFoodsController");
const fetchSingleProductController = require("../../controller/fetchSingleProductController");

router.get("/", tupopoihmenaTrofhmaController.tupopoihmenaTrofhma);
router.get("/zymarika", tupopoihmenaTrofhmaController.zymarika);
router.get("/zymarika/makaronia", tupopoihmenaTrofhmaController.makaronia);
router.get("/zymarika/diafora-zumarika", tupopoihmenaTrofhmaController.diaforaZumarika);
router.get("/zymarika/paradosiaka", tupopoihmenaTrofhmaController.paradosiaka);
router.get("/ruzi", tupopoihmenaTrofhmaController.ruzi);
router.get("/ruzi/karolina", tupopoihmenaTrofhmaController.karolina);
router.get("/ruzi/glase", tupopoihmenaTrofhmaController.glase);
router.get("/ruzi/nuxaki", tupopoihmenaTrofhmaController.nuxaki);
router.get("/ruzi/parboiled", tupopoihmenaTrofhmaController.parboiled);
router.get("/ruzi/basmati", tupopoihmenaTrofhmaController.basmati);
router.get("/ruzi/jasmine", tupopoihmenaTrofhmaController.jasmine);
router.get("/ruzi/kastano", tupopoihmenaTrofhmaController.kastano);
router.get("/ruzi/agrio-kai-exwtiko", tupopoihmenaTrofhmaController.agrioKaiExwtiko);
router.get("/ruzi/rizoto", tupopoihmenaTrofhmaController.rizoto);
router.get("/ospria", tupopoihmenaTrofhmaController.ospria);
router.get("/ospria/fasolia", tupopoihmenaTrofhmaController.fasolia);
router.get("/ospria/fakes", tupopoihmenaTrofhmaController.fakes);
router.get("/ospria/revuthia", tupopoihmenaTrofhmaController.revuthia);
router.get("/ospria/fava", tupopoihmenaTrofhmaController.fava);
router.get("/ospria/koukia", tupopoihmenaTrofhmaController.koukia);
router.get("/ospria/sitari", tupopoihmenaTrofhmaController.sitari);
router.get("/ladi", tupopoihmenaTrofhmaController.ladi);
router.get("/ladi/elaiolado", tupopoihmenaTrofhmaController.elaiolado);
router.get("/ladi/purhnelaio", tupopoihmenaTrofhmaController.purhnelaio);
router.get("/ladi/sporelaio", tupopoihmenaTrofhmaController.sporelaio);
router.get("/ladi/mageirika-luph", tupopoihmenaTrofhmaController.mageirikaLuph);
router.get("/konserves", tupopoihmenaTrofhmaController.konserves);
router.get("/konserves/manitaria", tupopoihmenaTrofhmaController.manitaria);
router.get("/konserves/laxanika", tupopoihmenaTrofhmaController.laxanika);
router.get("/konserves/psari", tupopoihmenaTrofhmaController.psari);
router.get("/konserves/kreas", tupopoihmenaTrofhmaController.kreas);
router.get("/konserves/kompostes", tupopoihmenaTrofhmaController.kompostes);
router.get("/konserves/etoima-faghta", tupopoihmenaTrofhmaController.etoimaFaghta);
router.get("/aleuri-simigdali", tupopoihmenaTrofhmaController.aleuriSimigdali);
router.get("/aleuri-simigdali/sklhro", tupopoihmenaTrofhmaController.sklhro);
router.get("/aleuri-simigdali/malako", tupopoihmenaTrofhmaController.malako);
router.get("/aleuri-simigdali/farina", tupopoihmenaTrofhmaController.farina);
router.get("/aleuri-simigdali/olikhs-aleshs", tupopoihmenaTrofhmaController.olikhsAleshs);
router.get("/aleuri-simigdali/simigdali", tupopoihmenaTrofhmaController.simigdali);
router.get("/eidh-zaxaroplastikhs", tupopoihmenaTrofhmaController.simigdali);
router.get("/eidh-zaxaroplastikhs/kouvertoura", tupopoihmenaTrofhmaController.kouvertoura);
router.get("/eidh-zaxaroplastikhs/zaxarh-axnh", tupopoihmenaTrofhmaController.zaxarhAxnh);
router.get("/eidh-zaxaroplastikhs/vanilies", tupopoihmenaTrofhmaController.vanilies);
router.get("/eidh-zaxaroplastikhs/korn-flaour", tupopoihmenaTrofhmaController.kornFlaour);
router.get("/eidh-zaxaroplastikhs/mpeikin-paounter", tupopoihmenaTrofhmaController.mpeikinPaounter);
router.get("/eidh-zaxaroplastikhs/vaseis-pantespani", tupopoihmenaTrofhmaController.vaseisPantespani);
router.get("/eidh-zaxaroplastikhs/zele", tupopoihmenaTrofhmaController.zele);
router.get("/eidh-zaxaroplastikhs/kremes-santigi", tupopoihmenaTrofhmaController.kremesSantigi);
router.get("/eidh-zaxaroplastikhs/etoima-meigmata", tupopoihmenaTrofhmaController.etoimaMeigmata);
router.get("/eidh-zaxaroplastikhs/xrwma-zaxaroplastikhs", tupopoihmenaTrofhmaController.xrwmaZaxaroplastikhs);
router.get("/eidh-zaxaroplastikhs/magia", tupopoihmenaTrofhmaController.magia);
router.get("/eidh-zaxaroplastikhs/diafora-ulika", tupopoihmenaTrofhmaController.diaforaYlika);
router.get("/zaxarh", tupopoihmenaTrofhmaController.zaxarh);
router.get("/zaxarh/leukh", tupopoihmenaTrofhmaController.leukh);
router.get("/zaxarh/akatergasth", tupopoihmenaTrofhmaController.akatergasth);
router.get("/zaxarh/upokatastata-zaxarhs", tupopoihmenaTrofhmaController.upokatastataZaxarhs);
router.get("/mpaxarika-alati", tupopoihmenaTrofhmaController.mpaxarikaAlati);
router.get("/mpaxarika-alati/alati", tupopoihmenaTrofhmaController.alati);
router.get("/mpaxarika-alati/piperi", tupopoihmenaTrofhmaController.piperi);
router.get("/mpaxarika-alati/mpaxarika", tupopoihmenaTrofhmaController.mpaxarika);
router.get("/saltses-dressing", tupopoihmenaTrofhmaController.saltsesDressing);
router.get("/saltses-dressing/ketsap", tupopoihmenaTrofhmaController.ketsap);
router.get("/saltses-dressing/moustarda", tupopoihmenaTrofhmaController.moustarda);
router.get("/saltses-dressing/magioneza", tupopoihmenaTrofhmaController.magioneza);
router.get("/saltses-dressing/gia-zumarika", tupopoihmenaTrofhmaController.giaZumarika);
router.get("/saltses-dressing/gia-kreas", tupopoihmenaTrofhmaController.giaKreas);
router.get("/saltses-dressing/gia-psari", tupopoihmenaTrofhmaController.giaPsari);
router.get("/saltses-dressing/gia-salates", tupopoihmenaTrofhmaController.giaSalates);
router.get("/xudi-xumos-lemoniou", tupopoihmenaTrofhmaController.xudiXumosLemoniou);
router.get("/xudi-xumos-lemoniou/xudi", tupopoihmenaTrofhmaController.xudi);
router.get("/xudi-xumos-lemoniou/xudi-valsamiko", tupopoihmenaTrofhmaController.xudiValsamiko);
router.get("/xudi-xumos-lemoniou/krema-valsamiko", tupopoihmenaTrofhmaController.kremaValsamiko);
router.get("/xudi-xumos-lemoniou/xymos-lemoniou", tupopoihmenaTrofhmaController.xymosLemoniou);
router.get("/soupes-kuvoi-poures", tupopoihmenaTrofhmaController.soupesKuvoiPoures);
router.get("/soupes-kuvoi-poures/kuvoi-zwmos", tupopoihmenaTrofhmaController.kuvoiZwmos);
router.get("/soupes-kuvoi-poures/poures", tupopoihmenaTrofhmaController.poures);
router.get("/soupes-kuvoi-poures/mpesamel", tupopoihmenaTrofhmaController.mpesamel);
router.get("/soupes-kuvoi-poures/soupes-stigmhs", tupopoihmenaTrofhmaController.soupesStigmhs);

router.get("/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zymarika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zymarika/makaronia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zymarika/diafora-zumarika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zymarika/paradosiaka/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/karolina/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/glase/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/nuxaki/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/parboiled/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/basmati/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/jasmine/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/kastano/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/agrio-kai-exwtiko/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ruzi/rizoto/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/fasolia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/fakes/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/revuthia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/fava/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/koukia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ospria/sitari/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ladi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ladi/elaiolado/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ladi/purhnelaio/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ladi/sporelaio/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/ladi/mageirika-luph/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/manitaria/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/laxanika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/psari/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/kreas/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/kompostes/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/konserves/etoima-faghta/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/sklhro/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/malako/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/farina/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/olikhs-aleshs/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/aleuri-simigdali/simigdali/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/kouvertoura/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/zaxarh-axnh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/vanilies/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/korn-flaour/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/mpeikin-paounter/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/vaseis-pantespani/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/zele/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/kremes-santigi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/etoima-meigmata/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/xrwma-zaxaroplastikhs/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/magia/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/eidh-zaxaroplastikhs/diafora-ulika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zaxarh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zaxarh/leukh/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zaxarh/akatergasth/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/zaxarh/upokatastata-zaxarhs/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/mpaxarika-alati/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/mpaxarika-alati/alati/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/mpaxarika-alati/piperi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/mpaxarika-alati/mpaxarika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/ketsap/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/moustarda/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/magioneza/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/gia-zumarika/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/gia-kreas/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/gia-psari/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/saltses-dressing/gia-salates/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/xudi-xumos-lemoniou/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/xudi-xumos-lemoniou/xudi/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/xudi-xumos-lemoniou/xudi-valsamiko/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/xudi-xumos-lemoniou/krema-valsamiko/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/xudi-xumos-lemoniou/xymos-lemoniou/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/soupes-kuvoi-poures/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/soupes-kuvoi-poures/kuvoi-zwmos/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/soupes-kuvoi-poures/poures/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/soupes-kuvoi-poures/mpesamel/:id", fetchSingleProductController.fetchSingleProduct);
router.get("/soupes-kuvoi-poures/soupes-stigmhs/:id", fetchSingleProductController.fetchSingleProduct);

module.exports = router;