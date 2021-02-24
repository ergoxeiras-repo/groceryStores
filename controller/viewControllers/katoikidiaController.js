const getProducts = require("./getProducts");

exports.katoikidia = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κατοικίδια",
        mainTitles: ["Είδη για Σκύλους", "Είδη για Γάτες", "Αξεσουάρ Κατοικιδίων"],
        images: ["../images/κατοικιδια/για_σκυλους.jpg",
                "../images/κατοικιδια/για_γατες.jpg",
                "../images/κατοικιδια/αξεσουαρ.jpg"],
        hrefs: ["/katoikidia/eidh-gia-skyloys", "/katoikidia/eidh-gia-gates",
                "/katoikidia/aksesouar-katoikidiwn"]
    });
}

exports.eidhGiaSkyloys = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Είδη για Σκύλους",
        mainTitles: ["Υγρή Τροφή", "Ξηρά Τροφή", "Σνάκ για Σκύλους", "Αξεσουάρ για Σκύλους"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katoikidia/eidh-gia-skyloys/ygrh-trofh", "/katoikidia/eidh-gia-skyloys/xhra-trofh",
                "/katoikidia/eidh-gia-skyloys/snak-gia-skulous", "/katoikidia/eidh-gia-skyloys/aksesoyar-gia-skulous"]
    });
}

exports.ygrhTrofh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγρή Τροφή");

    res.status(200).render("displayProducts", {
        title: "Υγρή Τροφή",
        products
    });
}

exports.xhraTrofh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξηρά Τροφή");

    res.status(200).render("displayProducts", {
        title: "Ξηρά Τροφή",
        products
    });
}

exports.snakGiaSkulous = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σνάκ Για Σκύλους");

    res.status(200).render("displayProducts", {
        title: "Σνάκ για Σκύλους",
        products
    });
}

exports.aksesoyarGiaSkulous = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αξεσουάρ Για Σκύλους");

    res.status(200).render("displayProducts", {
        title: "Αξεσουάρ για Σκύλους",
        products
    });
}

exports.eidhGiaGates = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Είδη για Γάτες",
        mainTitles: ["Υγρή Τροφή", "Ξηρά Τροφή", "Σνάκ για Γάτες", "Άμμος για Γάτες", "Αξεσουάρ για Γάτες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katoikidia/eidh-gia-gates/ygrh-trofh", "/katoikidia/eidh-gia-gates/xhra-trofh",
                "/katoikidia/eidh-gia-gates/snak-gia-gates", "/katoikidia/eidh-gia-gates/ammos-gia-gates",
                "/katoikidia/eidh-gia-gates/aksesoyar-gia-gates"]
    });
}

exports.ygrhTrofh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγρή Τροφή");

    res.status(200).render("displayProducts", {
        title: "Υγρή Τροφή",
        products
    });
}

exports.xhraTrofh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξηρά Τροφή");

    res.status(200).render("displayProducts", {
        title: "Ξηρά Τροφή",
        products
    });
}

exports.snakGiaGates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σνάκ Για Γάτες");

    res.status(200).render("displayProducts", {
        title: "Σνάκ για Γάτες",
        products
    });
}

exports.ammosGiaGates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Άμμος Για Γάτες");

    res.status(200).render("displayProducts", {
        title: "Άμμος για Γάτες",
        products
    });
}

exports.aksesoyarGiaGates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αξεσουάρ Για Γάτες");

    res.status(200).render("displayProducts", {
        title: "Αξεσουάρ για Γάτες",
        products
    });
}

exports.aksesouarKatoikidiwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αξεσουάρ Κατοικιδίων",
        mainTitles: ["Αξεσουάρ Κατοικιδίων"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katoikidia/aksesouar-katoikidiwn"]
    });
}