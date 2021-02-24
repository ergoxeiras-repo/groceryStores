const getProducts = require("./getProducts");

exports.diatrofh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Διατροφή",
        mainTitles: ["Υγιεινή Διατροφή"],
        images: ["../images/τροφημα/διατροφη/διατροφη.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/diatrofh/ugieinh-diatrofh"],
        subTitles: [
                ["Χωρίς Γλουτένη",
                    "Χωρίς Ζάχαρη",
                    "Χωρίς Λακτόζη",
                    "Με Στέβια",
                    "Βιολογικά"]
        ],
        subHrefs: [
            ["/diatrofh/ugieinh-diatrofh/xwris-gloutenh",
                "/diatrofh/ugieinh-diatrofh/xwris-zaxarh",
                "/diatrofh/ugieinh-diatrofh/xwris-laktozh",
                "/diatrofh/ugieinh-diatrofh/me-stevia",
                "/diatrofh/ugieinh-diatrofh/biologika"]
        ]
    });
}

exports.ugieinhDiatrofh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Υγιεινή Διατροφή",
        mainTitles: ["Χωρίς Γλουτένη",
                    "Χωρίς Ζάχαρη",
                    "Χωρίς Λακτόζη",
                    "Με Στέβια",
                    "Βιολογικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/diatrofh/ugieinh-diatrofh/xwris-gloutenh",
                "/diatrofh/ugieinh-diatrofh/xwris-zaxarh",
                "/diatrofh/ugieinh-diatrofh/xwris-laktozh",
                "/diatrofh/ugieinh-diatrofh/me-stevia",
                "/diatrofh/ugieinh-diatrofh/biologika"]
    });
}

exports.xwrisGloutenh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χωρίς Γλουτένη");

    res.status(200).render("displayProducts", {
        title: "Χωρίς Γλουτένη",
        products
    });
}

exports.xwrisZaxarh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χωρίς Ζάχαρη");

    res.status(200).render("displayProducts", {
        title: "Χωρίς Ζάχαρη",
        products
    });
}

exports.xwrisLaktozh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χωρίς Λακτόζη");

    res.status(200).render("displayProducts", {
        title: "Χωρίς Λακτόζη",
        products
    });
}

exports.meStevia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Με Στέβια");

    res.status(200).render("displayProducts", {
        title: "Με Στέβια",
        products
    });
}

exports.biologika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βιολογικά");

    res.status(200).render("displayProducts", {
        title: "Βιολογικά",
        products
    });
}