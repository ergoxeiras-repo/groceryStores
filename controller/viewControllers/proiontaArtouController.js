const getProducts = require("./getProducts");

exports.proiontaArtou = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Προιόντα Άρτου",
        mainTitles: ["Ψωμί", "Φρυγανιές Κρουτόν", "Κριτσίνια Παξιμάδια", "Κουλουράκια Βουτήματα", "Τσουρέκι"],
        images: ["../images/τροφημα/προιοντα_αρτου/ψωμι.jpg",
                "../images/τροφημα/προιοντα_αρτου/φρυγανιες_κρουτον.png",
                "../images/τροφημα/προιοντα_αρτου/κριτσινια_παξιμαδια.jpg",
                "../images/τροφημα/προιοντα_αρτου/κουλουρακια_βουτηματα.jpg",
                "../images/τροφημα/προιοντα_αρτου/τσουρεκι.png"],
        hrefs: ["/proionta-artou/pswmi", "/proionta-artou/fryganies-kroyton",
                "/proionta-artou/kritsinia-paximadia", "/proionta-artou/koulourakia-vouthmata",
                "/proionta-artou/tsoureki"]
    });
}

exports.pswmi = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Ψωμί",
        mainTitles: ["Φρέσκο Ψωμί", "Ψωμί του Τόστ", "Πίτες Ψωμάκια"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proionta-artou/pswmi/fresko-pswmi", "/proionta-artou/pswmi/pswmi-tou-tost",
                "/proionta-artou/pswmi/pites-pswmakia"]
    });
}

exports.freskoPswmi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φρέσκο Ψωμί");

    res.status(200).render("displayProducts", {
        title: "Φρέσκο Ψωμί",
        products
    });
}

exports.pswmiTouTost = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ψωμί Του Τόστ");

    res.status(200).render("displayProducts", {
        title: "Ψωμί του Τόστ",
        products
    });
}

exports.pitesPswmakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πίτες Ψωμάκια");

    res.status(200).render("displayProducts", {
        title: "Πίτες Ψωμάκια",
        products
    });
}

exports.fryganiesKroyton = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φρυγανιές Κρουτόν",
        mainTitles: ["Φρυγανιές", "Κρουτόν"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proionta-artou/fryganies-kroyton/fruganies", "/proionta-artou/fryganies-kroyton/kroyton"]
    });
}

exports.fruganies = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φρυγανιές");

    res.status(200).render("displayProducts", {
        title: "Φρυγανιές",
        products
    });
}

exports.kroyton = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρουτόν");

    res.status(200).render("displayProducts", {
        title: "Κρουτόν",
        products
    });
}

exports.kritsiniaPaximadia = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κριτσίνια Παξιμάδια",
        mainTitles: ["Κριτσίνια", "Παξιμάδια"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proionta-artou/kritsinia-paximadia/kritsinia", "/proionta-artou/kritsinia-paximadia/paximadia"]
    });
}

exports.kritsinia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κριτσίνια");

    res.status(200).render("displayProducts", {
        title: "Κριτσίνια",
        products
    });
}

exports.paximadia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παξιμάδια");

    res.status(200).render("displayProducts", {
        title: "Παξιμάδια",
        products
    });
}

exports.koulourakiaVouthmata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κουλουράκια Βουτήματα");

    res.status(200).render("displayProducts", {
        title: "Παξιμάδια",
        products
    });
}

exports.tsoureki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσουρέκι");

    res.status(200).render("displayProducts", {
        title: "Παξιμάδια",
        products
    });
}