const getProducts = require("./getProducts");
const { product } = require("puppeteer");

exports.turiaAllantikaDelicatessen = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Τυριά Αλλαντικά Delicatessen",
        mainTitles: ["Τυριά", "Αλλαντικά", "Delicatessen"],
        images: ["../images/τροφημα/τυρια_αλλαντικα_delicatessen/τυρια.jpg",
                "../images/τροφημα/τυρια_αλλαντικα_delicatessen/αλλαντικα.jpg",
                "../images/τροφημα/τυρια_αλλαντικα_delicatessen/delicatessen.jpg"],
        hrefs: ["/turia-allantika-delicatessen/turia",
                "/turia-allantika-delicatessen/allantika",
                "/turia-allantika-delicatessen/delicatessen"],
        subTitles: [
                    ["Φέτα", "Κρεμώδη Αλοιφώμενα", "Mozzarella", "Γραβιέρα", "Κεφαλοτύρι", "Παρμεζάνα", "Regato",
                    "Gouda Edam Emmental Cheddar", "Χαλούμι", "Ημίσκλυρο Κασέρι", "Μπλέ Κασέρι",
                    "Τριμμένο", "Σε Φέτες"],
                    ["Ζαμπόν", "Γαλοπούλα Κοτόπουλο", "Ωμοπλάτη", "Λουκάνικα", "Σαλάμι Αέρος", "Μορταδέλα",
                    "Μπέικον Πανσέτα Μπριζόλα", "Πάριζα Παριζάκι"],
                    ["Ψάρια Αλίπαστα", "Σαλάτες", "Ελιές", "Τουρσί", "Χαλβάς"]
        ],
        subHrefs: [
                    ["/turia-allantika-delicatessen/turia/feta",
                    "/turia-allantika-delicatessen/turia/kremwdh-aloifwmena",
                    "/turia-allantika-delicatessen/turia/mozzarella",
                    "/turia-allantika-delicatessen/turia/graviera",
                    "/turia-allantika-delicatessen/turia/kefaloturi",
                    "/turia-allantika-delicatessen/turia/parmezana",
                    "/turia-allantika-delicatessen/turia/regato",
                    "/turia-allantika-delicatessen/turia/gouda-edam-emmental-cheddar",
                    "/turia-allantika-delicatessen/turia/xaloumi",
                    "/turia-allantika-delicatessen/turia/hmiskluro-kaseri",
                    "/turia-allantika-delicatessen/turia/mple",
                    "/turia-allantika-delicatessen/turia/trimmeno",
                    "/turia-allantika-delicatessen/turia/se-fetes"],
                    ["/turia-allantika-delicatessen/allantika/zampon",
                    "/turia-allantika-delicatessen/allantika/galopoula-kotopoulo",
                    "/turia-allantika-delicatessen/allantika/wmoplath",
                    "/turia-allantika-delicatessen/allantika/loukanika",
                    "/turia-allantika-delicatessen/allantika/salami-aeros",
                    "/turia-allantika-delicatessen/allantika/mortadela",
                    "/turia-allantika-delicatessen/allantika/mpeikon-panseta-mprizola",
                    "/turia-allantika-delicatessen/allantika/pariza-parizaki"],
                    ["/turia-allantika-delicatessen/delicatessen/psaria-alipasta",
                    "/turia-allantika-delicatessen/delicatessen/salates",
                    "/turia-allantika-delicatessen/delicatessen/elies",
                    "/turia-allantika-delicatessen/delicatessen/toursi",
                    "/turia-allantika-delicatessen/delicatessen/xalvas"]
        ]
    });
}

exports.turia = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Τυριά",
        mainTitles: ["Φέτα", "Κρεμώδη Αλοιφώμενα", "Mozzarella", "Γραβιέρα", "Κεφαλοτύρι", "Παρμεζάνα", "Regato",
                    "Gouda Edam Emmental Cheddar", "Χαλούμι", "Ημίσκλυρο Κασέρι", "Μπλέ Κασέρι",
                    "Τριμμένο", "Σε Φέτες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/turia-allantika-delicatessen/turia/feta",
                "/turia-allantika-delicatessen/turia/kremwdh-aloifwmena",
                "/turia-allantika-delicatessen/turia/mozzarella",
                "/turia-allantika-delicatessen/turia/graviera",
                "/turia-allantika-delicatessen/turia/kefaloturi",
                "/turia-allantika-delicatessen/turia/parmezana",
                "/turia-allantika-delicatessen/turia/regato",
                "/turia-allantika-delicatessen/turia/gouda-edam-emmental-cheddar",
                "/turia-allantika-delicatessen/turia/xaloumi",
                "/turia-allantika-delicatessen/turia/hmiskluro-kaseri",
                "/turia-allantika-delicatessen/turia/mple",
                "/turia-allantika-delicatessen/turia/trimmeno",
                "/turia-allantika-delicatessen/turia/se-fetes"]
    });
}

exports.feta = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φέτα");

    res.status(200).render("displayProducts", {
        title: "Φέτα",
        products
    });
}

exports.kremwdhAloifwmena = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρεμώδη Αλοιφώμενα");

    res.status(200).render("displayProducts", {
        title: "Κρεμώδη Αλοιφώμενα",
        products
    });
}

exports.mozzarella = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Mozzarella");

    res.status(200).render("displayProducts", {
        title: "Mozzarella",
        products
    });
}

exports.graviera = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γραβιέρα");

    res.status(200).render("displayProducts", {
        title: "Γραβιέρα",
        products
    });
}

exports.kefaloturi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κεφαλοτύρι");

    res.status(200).render("displayProducts", {
        title: "Κεφαλοτύρι",
        products
    });
}

exports.parmezana = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παρμεζάνα");

    res.status(200).render("displayProducts", {
        title: "Παρμεζάνα",
        products
    });
}

exports.regato = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Regato");

    res.status(200).render("displayProducts", {
        title: "Regato",
        products
    });
}

exports.goudaEdamEmmentalCheddar = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Gouda Edam Emmental Cheddar");

    res.status(200).render("displayProducts", {
        title: "Gouda Edam Emmental Cheddar",
        products
    });
}

exports.xaloumi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαλούμι");

    res.status(200).render("displayProducts", {
        title: "Χαλούμι",
        products
    });
}

exports.hmiskluroKaseri = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ημίσκλυρο Κασέρι");

    res.status(200).render("displayProducts", {
        title: "Ημίσκλυρο Κασέρι",
        products
    });
}

exports.mple = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπλέ");

    res.status(200).render("displayProducts", {
        title: "Μπλέ Κασέρι",
        products
    });
}

exports.trimmeno = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τριμμένο");

    res.status(200).render("displayProducts", {
        title: "Τριμμένο",
        products
    });
}

exports.seFetes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σε Φέτες");
    console.log(products);

    res.status(200).render("displayProducts", {
        title: "Σε Φέτες",
        products
    });
}

exports.allantika = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αλλαντικά",
        mainTitles: ["Ζαμπόν", "Γαλοπούλα Κοτόπουλο", "Ωμοπλάτη", "Λουκάνικα", "Σαλάμι Αέρος", "Μορταδέλα",
                    "Μπέικον Πανσέτα Μπριζόλα", "Πάριζα Παριζάκι"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/turia-allantika-delicatessen/allantika/zampon",
                "/turia-allantika-delicatessen/allantika/galopoula-kotopoulo",
                "/turia-allantika-delicatessen/allantika/wmoplath",
                "/turia-allantika-delicatessen/allantika/loukanika",
                "/turia-allantika-delicatessen/allantika/salami-aeros",
                "/turia-allantika-delicatessen/allantika/mortadela",
                "/turia-allantika-delicatessen/allantika/mpeikon-panseta-mprizola",
                "/turia-allantika-delicatessen/allantika/pariza-parizaki"]
    });
}

exports.zampon = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ζαμπόν");

    res.status(200).render("displayProducts", {
        title: "Ζαμπόν",
        products
    });
}

exports.galopoulaKotopoulo = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γαλοπούλα Κοτόπουλο");

    res.status(200).render("displayProducts", {
        title: "Γαλοπούλα Κοτόπουλο",
        products
    });
}

exports.wmoplath = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ωμοπλάτη");

    res.status(200).render("displayProducts", {
        title: "Ωμοπλάτη",
        products
    });
}

exports.loukanika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λουκάνικα");

    res.status(200).render("displayProducts", {
        title: "Λουκάνικα",
        products
    });
}

exports.salamiAeros = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σαλάμι Αέρος");

    res.status(200).render("displayProducts", {
        title: "Σαλάμι Αέρος",
        products
    });
}

exports.mortadela = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μορταδέλα");

    res.status(200).render("displayProducts", {
        title: "Μορταδέλα",
        products
    });
}

exports.mpeikonPansetaMprizola = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπέικον Πανσέτα Μπριζόλα");

    res.status(200).render("displayProducts", {
        title: "Μπέικον Πανσέτα Μπριζόλα",
        products
    });
}

exports.parizaParizaki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πάριζα Παριζάκι");

    res.status(200).render("displayProducts", {
        title: "Πάριζα Παριζάκι",
        products
    });
}

exports.delicatessen = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Delicatessen",
        mainTitles: ["Ψάρια Αλίπαστα", "Σαλάτες", "Ελιές", "Τουρσί", "Χαλβάς"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/turia-allantika-delicatessen/delicatessen/psaria-alipasta",
                "/turia-allantika-delicatessen/delicatessen/salates",
                "/turia-allantika-delicatessen/delicatessen/elies",
                "/turia-allantika-delicatessen/delicatessen/toursi",
                "/turia-allantika-delicatessen/delicatessen/xalvas"]
    });
}

exports.psariaAlipasta = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ψάρια Αλίπαστα");

    res.status(200).render("displayProducts", {
        title: "Ψάρια Αλίπαστα",
        products
    });
}

exports.salates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σαλάτες");

    res.status(200).render("displayProducts", {
        title: "Σαλάτες",
        products
    });
}

exports.elies = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ελιές");

    res.status(200).render("displayProducts", {
        title: "Ελιές",
        products
    });
}

exports.toursi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τουρσί");

    res.status(200).render("displayProducts", {
        title: "Τουρσί",
        products
    });
}

exports.xalvas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαλβάς");

    res.status(200).render("displayProducts", {
        title: "Χαλβάς",
        products
    });
}