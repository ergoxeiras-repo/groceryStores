const getProducts = require("./getProducts");

exports.freskoKreasPsari = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φρέσκο Κρέας Ψάρι",
        mainTitles: ["Νωπά Κρέατα", "Φρέσκα Ψάρια Θαλασσινά"],
        images: ["../images/τροφημα/φρεσκο_κρεας_ψαρι/νωπα_κρεατα.jpg",
                "../images/τροφημα/φρεσκο_κρεας_ψαρι/φρεσκα_ψαρια_θαλασσινα.jpg"],
        hrefs: ["/fresko-kreas-kai-psari/nwpa-kreata",
                "/fresko-kreas-kai-psari/freska-psaria-kai-thalassina"],
        subTitles: [
            ["Μοσχάρι", "Χοιρινό", "Αρνί Κατσίκι", "Κοτόπουλα Διάφορα Πουλερικά",
            "Κυνήγι", "Έτοιμα Γεύματα"],
            ["Φρέσκα Ψάρια"]
        ],
        subHrefs: [
            ["/fresko-kreas-kai-psari/nwpa-kreata/mosxari",
                "/fresko-kreas-kai-psari/nwpa-kreata/xoirino",
                "/fresko-kreas-kai-psari/nwpa-kreata/arni-katsiki",
                "/fresko-kreas-kai-psari/nwpa-kreata/kotopoula-diafora-poulerika",
                "/fresko-kreas-kai-psari/nwpa-kreata/kunhgi",
                "/fresko-kreas-kai-psari/nwpa-kreata/etoima-geumata",],
            ["/fresko-kreas-kai-psari/freska-psaria-kai-thalassina/psaria"]
        ]
    });
}

exports.nwpaKreata = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Νωπά Κρέατα",
        mainTitles: ["Μοσχάρι", "Χοιρινό", "Αρνί Κατσίκι", "Κοτόπουλα Διάφορα Πουλερικά",
                    "Κυνήγι", "Έτοιμα Γεύματα"],
        images: ["../images/italy-1264104_1280.jpg", "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg",
                "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg",
                "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg",
                "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg",
                "../images/meat-4708595_640.jpg", "../images/meat-4708595_640.jpg"],
        hrefs: ["/fresko-kreas-kai-psari/nwpa-kreata/mosxari",
                "/fresko-kreas-kai-psari/nwpa-kreata/xoirino",
                "/fresko-kreas-kai-psari/nwpa-kreata/arni-katsiki",
                "/fresko-kreas-kai-psari/nwpa-kreata/kotopoula-diafora-poulerika",
                "/fresko-kreas-kai-psari/nwpa-kreata/kunhgi",
                "/fresko-kreas-kai-psari/nwpa-kreata/etoima-geumata",]
    });
}

exports.mosxari = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μοσχάρι");

    res.status(200).render("displayProducts", {
        title: "Μοσχάρι",
        products
    });
}

exports.xoirino = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χοιρινό");

    res.status(200).render("displayProducts", {
        title: "Χοιρινό",
        products
    });
}

exports.arniKatsiki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αρνί Κατσίκι");

    res.status(200).render("displayProducts", {
        title: "Αρνί Κατσίκι",
        products
    });
}

exports.kotopoulaDiaforaPoulerika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κοτόπουλα Διάφορα Πουλερικά");

    res.status(200).render("displayProducts", {
        title: "Κοτόπουλα Διάφορα Πουλερικά",
        products
    });
}

exports.kunhgi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κυνήγι");

    res.status(200).render("displayProducts", {
        title: "Κυνήγι",
        products
    });
}

exports.etoimaGeumata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Έτοιμα Γεύματα");

    res.status(200).render("displayProducts", {
        title: "Έτοιμα Γεύματα",
        products
    });
}

exports.freskaPsariaThalassina = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φρέσκα Ψάρια Θαλασσινά",
        mainTitles: ["Φρέσκα Ψάρια"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/fresko-kreas-kai-psari/freska-psaria-kai-thalassina/psaria"]
    });
}

exports.psaria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ψάρια");

    res.status(200).render("displayProducts", {
        title: "Ψάρια",
        products
    });
}