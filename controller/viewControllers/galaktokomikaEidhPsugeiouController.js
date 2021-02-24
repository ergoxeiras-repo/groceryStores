const getProducts = require("./getProducts");

exports.galaktokomikaEidhPsugeiou = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γαλακτοκομικά Είδη Ψυγείου",
        mainTitles: ["Γάλα", "Γιαούρτι", "Φρέσκες Ζύμες Φύλλα", "Χυμοί Τσάι", "Φρέσκοι Ζωμοί", "Αυγά"],
        images: ["../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/γαλα.jpg",
                "../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/γιαουρτι.jpg",
                "../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/φρεσκες_ζυμες_φυλλα.jpg",
                "../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/χυμοι_τσαι.png",
                "../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/φρεσκοι_ζωμοι.png",
                "../images/τροφημα/γαλακτοκομικα_ειδη_ψυγειου/αυγα.png"],
        hrefs: ["/galaktokomika-kai-eidh-psugeiou/gala", "/galaktokomika-kai-eidh-psugeiou/giaourti",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla", "/galaktokomika-kai-eidh-psugeiou/xumoi-tsai",
                "/galaktokomika-kai-eidh-psugeiou/freskoi-zwmoi", "/galaktokomika-kai-eidh-psugeiou/auga"],
        subTitles: [
                    ["Φρέσκο Γάλα", "Υψηλής Παστερίωσης", "Σοκολατούχο", "Φυτικό", "Εβαπορέ"],
                    ["Αγελαδινό", "Κατσικίσιο", "Πρόβειο", "Στραγγιστό", "Επιδόρπιο", "Παιδικό",
                    "Ρόφημα"],
                    ["Ζύμη για Κρουασάν", "Ζύμη για Πίτσα", "Ζύμη για Σφολιάτα", "Φύλλο Κρούστας",
                    "Χωριάτικο Φύλλο"],
                    ["Χυμοί", "Τσάι"],
                    ["Φρέσκοι Ζωμοί"],
                    ["Αυγά"]
                    ],
        subHrefs: [
                ["/galaktokomika-kai-eidh-psugeiou/gala/fresko-gala",
                "/galaktokomika-kai-eidh-psugeiou/gala/upshlhs-pasteriwshs",
                "/galaktokomika-kai-eidh-psugeiou/gala/sokolatouxo",
                "/galaktokomika-kai-eidh-psugeiou/gala/futiko",
                "/galaktokomika-kai-eidh-psugeiou/gala/evapore",],
                ["/galaktokomika-kai-eidh-psugeiou/giaourti/ageladino",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/katsikisio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/proveio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/straggisto",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/epidorpio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/paidiko",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/rofhma",],
                ["/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-krouasan",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-pitsa",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-sfoliata",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/fyllo-kroustas",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/xwriatiko-fyllo"],
                ["/galaktokomika-kai-eidh-psugeiou/xumoi-tsai/xymoi",
                "/galaktokomika-kai-eidh-psugeiou/xumoi-tsai/tsai"],
                ["/galaktokomika-kai-eidh-psugeiou/freskoi-zwmoi"],
                ["/galaktokomika-kai-eidh-psugeiou/auga"]
                ]
    });
}

exports.gala = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γάλα",
        mainTitles: ["Φρέσκο Γάλα", "Υψηλής Παστερίωσης", "Σοκολατούχο", "Φυτικό", "Εβαπορέ"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/galaktokomika-kai-eidh-psugeiou/gala/fresko-gala",
                "/galaktokomika-kai-eidh-psugeiou/gala/upshlhs-pasteriwshs",
                "/galaktokomika-kai-eidh-psugeiou/gala/sokolatouxo",
                "/galaktokomika-kai-eidh-psugeiou/gala/futiko",
                "/galaktokomika-kai-eidh-psugeiou/gala/evapore",]
    });
}

exports.freskoGala = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φρέσκο Γάλα");

    res.status(200).render("displayProducts", {
        title: "Φρέσκο Γάλα",
        products
    });
}

exports.upshlhsPasteriwshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υψηλής Παστερίωσης");

    res.status(200).render("displayProducts", {
        title: "Υψηλής Παστερίωσης",
        products
    });
}

exports.sokolatouxo = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σοκολατούχο");

    res.status(200).render("displayProducts", {
        title: "Σοκολατούχο",
        products
    });
}

exports.futiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φυτικό");

    res.status(200).render("displayProducts", {
        title: "Φυτικό",
        products
    });
}

exports.evapore = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Εβαπορέ");

    res.status(200).render("displayProducts", {
        title: "Εβαπορέ",
        products
    });
}

exports.giaourti = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γιαούρτι",
        mainTitles: ["Αγελαδινό", "Κατσικίσιο", "Πρόβειο", "Στραγγιστό", "Επιδόρπιο", "Παιδικό",
                    "Ρόφημα"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/galaktokomika-kai-eidh-psugeiou/giaourti/ageladino",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/katsikisio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/proveio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/straggisto",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/epidorpio",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/paidiko",
                "/galaktokomika-kai-eidh-psugeiou/giaourti/rofhma",]
    });
}

exports.ageladino = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αγελάδινό");

    res.status(200).render("displayProducts", {
        title: "Αγελαδινό",
        products
    });
}

exports.katsikisio = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κατσικίσιο");

    res.status(200).render("displayProducts", {
        title: "Κατσικίσιο",
        products
    });
}

exports.proveio = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πρόβειο");

    res.status(200).render("displayProducts", {
        title: "Πρόβειο",
        products
    });
}

exports.straggisto = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Στραγγιστό");

    res.status(200).render("displayProducts", {
        title: "Στργγιστό",
        products
    });
}

exports.epidorpio = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Επιδόρπιο");

    res.status(200).render("displayProducts", {
        title: "Επιδόρπιο",
        products
    });
}

exports.paidiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παιδικό");

    res.status(200).render("displayProducts", {
        title: "Παιδικό",
        products
    });
}

exports.rofhma = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ρόφημα");

    res.status(200).render("displayProducts", {
        title: "Ρόφημα",
        products
    });
}

exports.freskesZymesFylla = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φρέσκες Ζύμες Φύλλα",
        mainTitles: ["Ζύμη για Κρουασάν", "Ζύμη για Πίτσα", "Ζύμη για Σφολιάτα", "Φύλλο Κρούστας",
                    "Χωριάτικο Φύλλο"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-krouasan",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-pitsa",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/gia-sfoliata",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/fyllo-kroustas",
                "/galaktokomika-kai-eidh-psugeiou/freskes-zymes-fylla/xwriatiko-fyllo"]
    });
}

exports.giaKrouasan = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Κρουασάν");

    res.status(200).render("displayProducts", {
        title: "Ζύμη για Κρουασάν",
        products
    });
}

exports.giaPitsa = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Πίτσα");

    res.status(200).render("displayProducts", {
        title: "Ζύμη για Πίτσα",
        products
    });
}

exports.giaSfoliata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Σφολιάτα");

    res.status(200).render("displayProducts", {
        title: "Ζύμη για Σφολιάτα",
        products
    });
}

exports.fylloKroustas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φύλλο Κρούστας");

    res.status(200).render("displayProducts", {
        title: "Φύλλο Κρούστας",
        products
    });
}

exports.xwriatikoFyllo = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χωριάτικο Φύλλο");

    res.status(200).render("displayProducts", {
        title: "Χωριάτικο Φύλλο",
        products
    });
}

exports.xumoiTsai = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Χυμοί Τσάι",
        mainTitles: ["Χυμοί", "Τσάι"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/galaktokomika-kai-eidh-psugeiou/xumoi-tsai/xymoi",
                "/galaktokomika-kai-eidh-psugeiou/xumoi-tsai/tsai"]
    });
}

exports.xumoi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χυμοί");

    res.status(200).render("displayProducts", {
        title: "Χυμοί",
        products
    });
}

exports.tsai = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσάι");

    res.status(200).render("displayProducts", {
        title: "Τσάι",
        products
    });
}

exports.freskoiZwmoi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φρέσκοι Ζωμοί");

    res.status(200).render("displayProducts", {
        title: "Φρέσκοι Ζωμοί",
        products
    });
}

exports.auga = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αυγά");

    res.status(200).render("displayProducts", {
        title: "Αυγά",
        products
    });
}