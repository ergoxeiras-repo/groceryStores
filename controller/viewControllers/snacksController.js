const getProducts = require("./getProducts");

exports.snacks = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Σνάκς",
        mainTitles: ["Σοκολάτες", "Μπισκότα", "Γλυκά Προιόντα Ζύμης", "Πατατάκια Γαριδάκια Ποπ Κορν",
                    "Κράκερς", "Ξηροί Καρποί", "Αποξυραμένα Φρούτα", "Ριζογκοφρέτες", "Τσίχλες Καραμέλες"],
        images: ["../images/τροφημα/σνακς/σοκολατες.jpg",
                "../images/τροφημα/σνακς/μπισκοτα.jpg",
                "../images/τροφημα/σνακς/γλυκα_προιοντα_ζυμης.jpg",
                "../images/τροφημα/σνακς/πατατακια_γαριδακια_ποπ_κορν.jpg",
                "../images/τροφημα/σνακς/κρακερς.jpg",
                "../images/τροφημα/σνακς/ξηροι_καρποι.jpg",
                "../images/τροφημα/σνακς/αποξυραμενα_φρουτα.jpg",
                "../images/τροφημα/σνακς/ριζογκοφρετα.jpg",
                "../images/τροφημα/σνακς/τσιχλες_καραμελες.jpg"],
        hrefs: ["/snacks/sokolates",
                "/snacks/mpiskota",
                "/snacks/glyka-proionta-zymhs",
                "/snacks/patatakia-garidakia-pop-corn",
                "/snacks/crackers",
                "/snacks/ksiroi-karpoi",
                "/snacks/apoksuramena-frouta",
                "/snacks/rizogkrofretes",
                "/snacks/tsixles-karameles"],
        subTitles: [
            ["Σοκολάτες Γάλακτος", "Σοκολάτες Υγείας", "Λευκές Σοκολάτες", "Σοκολατάκια", "Γκοφρέτες"],
            ["Κλασσικά Μπισκότα", "Γεμιστά Μπισκότα", "digestive"],
            ["Κρουασάν", "Κέικ", "Τσουρέκια"],
            ["Πατατάκια", "Γαριδάκια", "Nachos", "Ποπ Κορν"],
            ["Κράκερς"],
            ["Ξηροί Καρποί"],
            ["Αποξυραμένα Φρούτα"],
            ["Ριζογκοφρέτες"],
            ["Τσίχλες", "Καραμέλες", "Γλειφιτζούρια", "Ζελεδάκια"]
        ],
        subHrefs: [
            ["/snacks/sokolates/galaktos",
            "/snacks/sokolates/ugeias",
            "/snacks/sokolates/leukes",
            "/snacks/sokolates/sokolatakia",
            "/snacks/sokolates/gkofretes"],
            ["/snacks/mpiskota/klassika",
                "/snacks/mpiskota/gemista",
                "/snacks/mpiskota/digestive"],
            ["/snacks/glyka-proionta-zymhs/krouasan",
                "/snacks/glyka-proionta-zymhs/keik",
                "/snacks/glyka-proionta-zymhs/tsourekia"],
            ["/snacks/patatakia-garidakia-pop-corn/patatakia",
                "/snacks/patatakia-garidakia-pop-corn/garidakia",
                "/snacks/patatakia-garidakia-pop-corn/nachos",
                "/snacks/patatakia-garidakia-pop-corn/pop-corn"],
            ["/snacks/crackers"],
            ["/snacks/ksiroi-karpoi"],
            ["/snacks/apoksuramena-frouta"],
            ["/snacks/rizogkrofretes"],
            ["/snacks/tsixles-karameles/tsixles",
                "/snacks/tsixles-karameles/karameles",
                "/snacks/tsixles-karameles/gleifitzouria",
                "/snacks/tsixles-karameles/zeledakia"]
        ]
    });
}

exports.sokolates = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Σοκολάτες",
        mainTitles: ["Σοκολάτες Γάλακτος", "Σοκολάτες Υγείας", "Λευκές Σοκολάτες", "Σοκολατάκια", "Γκοφρέτες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/snacks/sokolates/galaktos",
                "/snacks/sokolates/ugeias",
                "/snacks/sokolates/leukes",
                "/snacks/sokolates/sokolatakia",
                "/snacks/sokolates/gkofretes"]
    });
}

exports.galaktos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γάλακτος");

    res.status(200).render("displayProducts", {
        title: "Σοκολάτες Γάλακτος",
        products
    });
}

exports.ugeias = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγείας");

    res.status(200).render("displayProducts", {
        title: "Σοκολάτες Υγείας",
        products
    });
}

exports.leukes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λευκές");

    res.status(200).render("displayProducts", {
        title: "Λευκές Σοκολάτες",
        products
    });
}

exports.sokolatakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σοκολατάκια");

    res.status(200).render("displayProducts", {
        title: "Σοκολατάκια",
        products
    });
}

exports.gkofretes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γκοφρέτες");

    res.status(200).render("displayProducts", {
        title: "Γκοφρέτες",
        products
    });
}

exports.mpiskota = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Μπισκότα",
        mainTitles: ["Κλασσικά Μπισκότα", "Γεμιστά Μπισκότα", "digestive"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/snacks/mpiskota/klassika",
                "/snacks/mpiskota/gemista",
                "/snacks/mpiskota/digestive"]
    });
}

exports.klassika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κλασσικά");

    res.status(200).render("displayProducts", {
        title: "Κλασσικά Μπισκότα",
        products
    });
}

exports.gemista = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γεμιστά");

    res.status(200).render("displayProducts", {
        title: "Γεμιστά Μπισκότα",
        products
    });
}

exports.digestive = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Digestive");

    res.status(200).render("displayProducts", {
        title: "digestive",
        products
    });
}

exports.glykaProiontaZymhs = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γλυκά Προιόντα Ζύμης",
        mainTitles: ["Κρουασάν", "Κέικ", "Τσουρέκια"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/snacks/glyka-proionta-zymhs/krouasan",
                "/snacks/glyka-proionta-zymhs/keik",
                "/snacks/glyka-proionta-zymhs/tsourekia"]
    });
}

exports.krouasan = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρουασάν");

    res.status(200).render("displayProducts", {
        title: "Κρουασάν",
        products
    });
}

exports.keik = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κέικ");

    res.status(200).render("displayProducts", {
        title: "Κέικ",
        products
    });
}

exports.tsourekia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσουρέκια");

    res.status(200).render("displayProducts", {
        title: "Τσουρέκια",
        products
    });
}

exports.patatakiaGaridakiaPopCorn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γλυκά Προιόντα Ζύμης",
        mainTitles: ["Πατατάκια", "Γαριδάκια", "Nachos", "Ποπ Κορν"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/snacks/patatakia-garidakia-pop-corn/patatakia",
                "/snacks/patatakia-garidakia-pop-corn/garidakia",
                "/snacks/patatakia-garidakia-pop-corn/nachos",
                "/snacks/patatakia-garidakia-pop-corn/pop-corn"]
    });
}

exports.patatakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πατατάκια");

    res.status(200).render("displayProducts", {
        title: "Πατατάκια",
        products
    });
}

exports.garidakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γαριδάκια");

    res.status(200).render("displayProducts", {
        title: "Γαριδάκια",
        products
    });
}

exports.nachos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Nachos");

    res.status(200).render("displayProducts", {
        title: "Nachos",
        products
    });
}

exports.popCorn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πόπ Κόρν");

    res.status(200).render("displayProducts", {
        title: "Ποπ Κορν",
        products
    });
}

exports.crackers = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κράκερς");

    res.status(200).render("displayProducts", {
        title: "Κράκερς",
        products
    });
}

exports.ksiroiKarpoi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξηροί Καρποί");

    res.status(200).render("displayProducts", {
        title: "Ξηροί Καρποί",
        products
    });
}

exports.apoksuramenaFrouta = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποξυραμένα Φρούτα");

    res.status(200).render("displayProducts", {
        title: "Αποξηραμένα Φρούτα",
        products
    });
}

exports.rizogkrofretes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ριζογκοφρέτες");

    res.status(200).render("displayProducts", {
        title: "Ριζογκοφρέτες",
        products
    });
}

exports.tsixlesKarameles = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Τσίχλες Καραμέλες",
        mainTitles: ["Τσίχλες", "Καραμέλες", "Γλειφιτζούρια", "Ζελεδάκια"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/snacks/tsixles-karameles/tsixles",
                "/snacks/tsixles-karameles/karameles",
                "/snacks/tsixles-karameles/gleifitzouria",
                "/snacks/tsixles-karameles/zeledakia"]
    });
}

exports.tsixles = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσίχλες");

    res.status(200).render("displayProducts", {
        title: "Τσίχλες",
        products
    });
}

exports.karameles = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καραμέλες");

    res.status(200).render("displayProducts", {
        title: "Καραμέλες",
        products
    });
}

exports.gleifitzouria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γλειφιτζούρια");

    res.status(200).render("displayProducts", {
        title: "Γλειφιτζούρια",
        products
    });
}

exports.zeledakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ζελεδάκια");

    res.status(200).render("displayProducts", {
        title: "Ζελεδάκια",
        products
    });
}