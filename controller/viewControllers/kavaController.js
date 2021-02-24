const getProducts = require("./getProducts");
const Product = require("../../model/productModel");

exports.kava = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κάβα",
        mainTitles: ["Κρασιά", "Αναψυκτικά", "Χυμοί Κρύα Ροφήματα", "Μπύρες", "Εμφιαλωμένα νερά",
                    "Ποτά"],
        images: ["../images/καβα/κρασια.jpg",
                "../images/καβα/αναψυκτικα.jpg",
                "../images/καβα/χυμοι_κρυα_ροφηματα.jpg",
                "../images/καβα/μπυρες.jpg",
                "../images/καβα/εμφιαλωμενο_νερο.jpg",
                "../images/καβα/ποτα.jpg",
                "../images/kava/",
                "../images/kava/"],
        hrefs: ["/kava/krasia", "/kava/anapsyktika",
                "/kava/xymoi-krya-rofhmata", "/kava/mpures",
                "/kava/emfyalwmena-nera", "/kava/pota"],
        subTitles: [
            ["Λευκά Κρασιά", "Κόκκινα Κρασιά", "Ροζέ Κρασιά", "Γλυκά Κρασιά", "Αφρώδεις Οίνοι"],
            ["Cola", "Γκαζόζα", "Λεμονάδα", "Πορτοκαλάδα", "Σόδα Τόνικ","Ενεργειακά Ισοτονικά", "Άλλες Γεύσεις"],
            ["Χυμοί Μακράς Διάρκειας", "ice tea", "ice coffee"],
            ["Lager", "Pils", "Weiss", "Ale", "Radler", "Χωρίς Αλκοόλ"],
            ["Επιτραπέζιο Μεταλλικό Νερο", "Ανθρακούχο Νερό"],
            ["Ουίσκι", "Βότκα", "Τζίν", "Ρούμι", "Τεκίλα", "Μηλίτης", "Τσίπουρο", "Ούζο", "Κονιάκ","Λικέρ", "Απεριτίφ"]
        ],
        subHrefs: [
            ["/kava/krasia/leuko-krasi", "/kava/krasia/kokkino-krasi",
            "/kava/krasia/roze-krasi", "/kava/krasia/glyka-krasia",
            "/kava/krasia/afrwdeis-oinoi"],
            ["/kava/anapsyktika/cola", "/kava/anapsyktika/gkazoza",
            "/kava/anapsyktika/lemonada", "/kava/anapsyktika/portokalada",
            "/kava/anapsyktika/soda-tonic", "/kava/anapsyktika/energeiaka-isotonika",
            "/kava/anapsyktika/alles-geyseis"],
            ["/kava/xymoi-krya-rofhmata/xumoi-makras-diarkeias",
            "/kava/xymoi-krya-rofhmata/ice-tea",
            "/kava/xymoi-krya-rofhmata/ice-coffee"],
            ["/kava/mpures/lager", "/kava/mpures/pils", "/kava/mpures/weiss",
            "/kava/mpures/ale", "/kava/mpures/radler", "/kava/mpures/xwris-alkool"],
            ["/kava/emfyalwmena-nera/epitrapezio-metalliko-nero",
            "/kava/emfyalwmena-nera/anthrakouxo-nero"],
            ["/kava/pota/ouiski", "/kava/pota/vodka",
            "/kava/pota/tzin", "/kava/pota/roumi",
            "/kava/pota/tekila", "/kava/pota/mhliths",
            "/kava/pota/tsipouro", "/kava/pota/ouzo",
            "/kava/pota/koniak", "/kava/pota/liker",
            "/kava/pota/aperitif"]
        ]
    });
}

exports.krasia = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κρασιά",
        mainTitles: ["Λευκά Κρασιά", "Κόκκινα Κρασιά", "Ροζέ Κρασιά", "Γλυκά Κρασιά", "Αφρώδεις Οίνοι"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/kava/krasia/leuko-krasi", "/kava/krasia/kokkino-krasi",
                "/kava/krasia/roze-krasi", "/kava/krasia/glyka-krasia",
                "/kava/krasia/afrwdeis-oinoi"]
    });
}

exports.leukoKrasi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λευκά κρασιά");

    res.status(200).render("displayProducts", {
        title: "Λευκά Κρασιά",
        products
    });
}

exports.kokkinoKrasi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κόκκινα Κρασιά");

    res.status(200).render("displayProducts", {
        title: "Κόκκινα Κρασιά",
        products
    });
}

exports.rozeKrasi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ροζέ Κρασιά");

    res.status(200).render("displayProducts", {
        title: "Ροζέ Κρασιά",
        products
    });
}

exports.glykaKrasia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γλυκά Κρασιά");

    res.status(200).render("displayProducts", {
        title: "Γλυκά Κρασιά",
        products
    });
}

exports.afrwdeisOinoi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αφρώδεις Οίνοι");

    res.status(200).render("displayProducts", {
        title: "Αφρώδεις Οίνοι",
        products
    });
}

exports.anapsyktika = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αναψυκτικά",
        mainTitles: ["Cola", "Γκαζόζα", "Λεμονάδα", "Πορτοκαλάδα", "Σόδα Τόνικ",
                    "Ενεργειακά Ισοτονικά", "Άλλες Γεύσεις"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/kava/anapsyktika/cola", "/kava/anapsyktika/gkazoza",
                "/kava/anapsyktika/lemonada", "/kava/anapsyktika/portokalada",
                "/kava/anapsyktika/soda-tonic", "/kava/anapsyktika/energeiaka-isotonika",
                "/kava/anapsyktika/alles-geyseis"]
    });
}

exports.cola = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Cola");

    res.status(200).render("displayProducts", {
        title: "Cola",
        products
    });
}

exports.gkazoza = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γκαζόζα");

    res.status(200).render("displayProducts", {
        title: "Γκαζόζα",
        products
    });
}

exports.lemonada = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λεμονάδα");

    res.status(200).render("displayProducts", {
        title: "Λεμονάδα",
        products
    });
}

exports.portokalada = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πορτοκαλάδα");

    res.status(200).render("displayProducts", {
        title: "Πορτοκαλάδα",
        products
    });
}

exports.sodaTonic = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Soda-Tonic");

    res.status(200).render("displayProducts", {
        title: "Σόδα Τόνικ",
        products
    });
}

exports.energeiakaIsotonika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ενεργειακά Ισοτονικά");

    res.status(200).render("displayProducts", {
        title: "Ενεργειακά Ισοτονικά",
        products
    });
}

exports.allesGeyseis = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Άλλες Γεύσεις");

    res.status(200).render("displayProducts", {
        title: "Άλλες Γεύσεις",
        products
    });
}

exports.xymoiKryaRofhmata = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Χυμοί Κρύα Ροφήματα",
        mainTitles: ["Χυμοί Μακράς Διάρκειας", "ice tea", "ice coffee"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/kava/xymoi-krya-rofhmata/xumoi-makras-diarkeias", "/kava/xymoi-krya-rofhmata/ice-tea",
                "/kava/xymoi-krya-rofhmata/ice-coffee"]
    });
}

exports.xumoiMakrasDiarkeias = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χυμοί Μακράς Διάρκειας");

    res.status(200).render("displayProducts", {
        title: "Χυμοί Μακράς Διάρκειας",
        products
    });
}

exports.iceTea = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ice-Tea");

    res.status(200).render("displayProducts", {
        title: "Ice Tea",
        products
    });
}

exports.iceCoffee = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ice-Coffee");

    res.status(200).render("displayProducts", {
        title: "Ice Coffee",
        products
    });
}

exports.mpures = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Μπύρες",
        mainTitles: ["Lager", "Pils", "Weiss", "Ale", "Radler", "Χωρίς Αλκοόλ"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/kava/mpures/lager", "/kava/mpures/pils", "/kava/mpures/weiss", "/kava/mpures/ale",
                "/kava/mpures/radler", "/kava/mpures/xwris-alkool"]
    });
}

exports.lager = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Lager");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Lager",
        products
    });
}

exports.pils = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Pils");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Pils",
        products
    });
}

exports.weiss = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Weiss");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Weiss",
        products
    });
}

exports.ale = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ale");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Ale",
        products
    });
}

exports.radler = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Radler");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Radler",
        products
    });
}

exports.xwrisAlkool = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χωρίς Αλκοόλ");

    res.status(200).render("displayProducts", {
        title: "Μπύρες Χωρίς Αλκοόλ",
        products
    });
}

exports.emfyalwmenaNera = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κρασία",
        mainTitles: ["Επιτραπέζιο Μεταλλικό Νερο", "Ανθρακούχο Νερό"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/kava/emfyalwmena-nera/epitrapezio-metalliko-nero", "/kava/emfyalwmena-nera/anthrakouxo-nero"]
    });
}

exports.epitrapezioMetallikoNero = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Επιτραπέζιο Μεταλλικό Νερό");

    res.status(200).render("displayProducts", {
        title: "Επιτραπέζιο Μεταλλικό Νερό",
        products
    });
}

exports.anthrakouxoNero = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ανθρακούχο Νερό");

    res.status(200).render("displayProducts", {
        title: "Ανθρακούχο Νερό",
        products
    });
}

exports.pota = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Ποτά",
        mainTitles: ["Ουίσκι", "Βότκα", "Τζίν", "Ρούμι", "Τεκίλα", "Μηλίτης", "Τσίπουρο", "Ούζο", "Κονιάκ",
        "Λικέρ", "Απεριτίφ"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg"],
        hrefs: ["/kava/pota/ouiski", "/kava/pota/vodka",
                "/kava/pota/tzin", "/kava/pota/roumi",
                "/kava/pota/tekila", "/kava/pota/mhliths",
                "/kava/pota/tsipouro", "/kava/pota/ouzo",
                "/kava/pota/koniak", "/kava/pota/liker",
                "/kava/pota/aperitif"]
    });
}

exports.ouiski = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ουίσκι");

    res.status(200).render("displayProducts", {
        title: "Ουίσκι",
        products
    });
}

exports.vodka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βότκα");

    res.status(200).render("displayProducts", {
        title: "Βότκα",
        products
    });
}

exports.tzin = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τζίν");

    res.status(200).render("displayProducts", {
        title: "Τζίν",
        products
    });
}

exports.roumi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ρούμι");

    res.status(200).render("displayProducts", {
        title: "Ρούμι",
        products
    });
}

exports.tekila = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τεκίλα");

    res.status(200).render("displayProducts", {
        title: "Τεκίλα",
        products
    });
}

exports.mhliths = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μηλίτης");

    res.status(200).render("displayProducts", {
        title: "Μηλίτης",
        products
    });
}

exports.tsipouro = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσίπουρο");

    res.status(200).render("displayProducts", {
        title: "Τσίπουρο",
        products
    });
}

exports.ouzo = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ούζο");

    res.status(200).render("displayProducts", {
        title: "Ούζο",
        products
    });
}

exports.koniak = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κονιάκ");

    res.status(200).render("displayProducts", {
        title: "Κονιάκ",
        products
    });
}

exports.liker = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λικέρ");

    res.status(200).render("displayProducts", {
        title: "Λικέρ",
        products
    });
}

exports.aperitif = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Απεριτίφ");

    res.status(200).render("displayProducts", {
        title: "Απεριτίφ",
        products
    });
}