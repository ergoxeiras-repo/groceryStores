const getProducts = require("./getProducts");

exports.prwinoRofhmata = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Πρωινό Ροφήματα",
        mainTitles: ["Δημητριακά", "Μέλι", "Μαρμελάδες", "Αλείμματα Καρπών", "Καφές Ροφήματα",
                    "Τσάι Αφεψίματα"],
        images: ["../images/τροφημα/πρωινο_ροφηματα/δημητριακα.jpg",
                "../images/τροφημα/πρωινο_ροφηματα/μελι.jpg",
                "../images/τροφημα/πρωινο_ροφηματα/μαρμελαδες.jpg",
                "../images/τροφημα/πρωινο_ροφηματα/αλειμματα_καρπων.png",
                "../images/τροφημα/πρωινο_ροφηματα/καφες_ροφηματα.jpg",
                "../images/τροφημα/πρωινο_ροφηματα/τσαι_αφεψηματα.png"],
        hrefs: ["/prwino-kai-rofhmata/dhmhtriaka",
                "/prwino-kai-rofhmata/meli",
                "/prwino-kai-rofhmata/marmelades",
                "/prwino-kai-rofhmata/aleimmata-karpwn",
                "/prwino-kai-rofhmata/kafes-rofhmata",
                "/prwino-kai-rofhmata/tsai-afepsimata"],
        subTitles: [
                ["Corn Flakes", "Μούσλι", "Βρώμη", "Ενηλίκων", "Παιδικά",
                    "Μπάρες Δημητριακών"],
                ["Θυμαρίσια", "Ανθέων Κωνοφόρων", "Άλλες Ποικιλίες", "Βασιλικός Πολτός"],
                ["Φράουλα Κεράσι", "Ροδάκινο Βερίκοκο", "Βατόμουρο Βύσσινο",
                    "Άλλες Γεύσεις"],
                ["Πραλίνες", "Ταχίνι", "Φυστικοβούτηρο"],
                ["Espresso", "Στιγμιαίος", "Φίλτρου", "Ελληνικός", "Κάψουλες", "Υποκατάστατα Συνοδευτικά",
                    "Κακάο Ροφήματα Σοκολάτας"],
                ["Τσάι", "Αφεψήματα"]
        ],
        subHrefs: [
                ["/prwino-kai-rofhmata/dhmhtriaka/corn-flakes",
                "/prwino-kai-rofhmata/dhmhtriaka/muesli",
                "/prwino-kai-rofhmata/dhmhtriaka/vrwmh",
                "/prwino-kai-rofhmata/dhmhtriaka/enhlikwn",
                "/prwino-kai-rofhmata/dhmhtriaka/paidika",
                "/prwino-kai-rofhmata/dhmhtriaka/mpares-dhmhtriakwn"],
                ["/prwino-kai-rofhmata/meli/thumarisia",
                "/prwino-kai-rofhmata/meli/anthewn-kwnoforwn",
                "/prwino-kai-rofhmata/meli/alles-poikilies",
                "/prwino-kai-rofhmata/meli/basilikos-poltos"],
                ["/prwino-kai-rofhmata/marmelades/fraoula-kerasi",
                "/prwino-kai-rofhmata/marmelades/rodakino-verikoko",
                "/prwino-kai-rofhmata/marmelades/vatomouro-vussino",
                "/prwino-kai-rofhmata/marmelades/alles-geuseis"],
                ["/prwino-kai-rofhmata/aleimmata-karpwn/pralines",
                "/prwino-kai-rofhmata/aleimmata-karpwn/taxini",
                "/prwino-kai-rofhmata/aleimmata-karpwn/fystikovoythro"],
                ["/prwino-kai-rofhmata/kafes-rofhmata/espresso",
                "/prwino-kai-rofhmata/kafes-rofhmata/stigmiaios",
                "/prwino-kai-rofhmata/kafes-rofhmata/filtrou",
                "/prwino-kai-rofhmata/kafes-rofhmata/ellhnikos",
                "/prwino-kai-rofhmata/kafes-rofhmata/kapsoules",
                "/prwino-kai-rofhmata/kafes-rofhmata/upokatastata-sunodeuthka",
                "/prwino-kai-rofhmata/kafes-rofhmata/kakao-rofhmata-sokolatas"],
                ["/prwino-kai-rofhmata/tsai-afepsimata/tsai",
                "/prwino-kai-rofhmata/tsai-afepsimata/afepsimata"]
        ]
    });
}

exports.dhmhtriaka = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Δημητριακά",
        mainTitles: ["Corn Flakes", "Μούσλι", "Βρώμη", "Ενηλίκων", "Παιδικά",
                    "Μπάρες Δημητριακών"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/dhmhtriaka/corn-flakes",
                "/prwino-kai-rofhmata/dhmhtriaka/muesli",
                "/prwino-kai-rofhmata/dhmhtriaka/vrwmh",
                "/prwino-kai-rofhmata/dhmhtriaka/enhlikwn",
                "/prwino-kai-rofhmata/dhmhtriaka/paidika",
                "/prwino-kai-rofhmata/dhmhtriaka/mpares-dhmhtriakwn"]
    });
}

exports.cornFlakes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Corn-Flakes");

    res.status(200).render("displayProducts", {
        title: "Δημητριακά",
        products
    });
}

exports.muesli = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μούσλι");

    res.status(200).render("displayProducts", {
        title: "Μέλι",
        products
    });
}

exports.vrwmh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βρώμη");

    res.status(200).render("displayProducts", {
        title: "Μαρμελάδες",
        products
    });
}

exports.enhlikwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ενηλίκων");

    res.status(200).render("displayProducts", {
        title: "Αλείμματα Καρπών",
        products
    });
}

exports.paidika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παιδικά");

    res.status(200).render("displayProducts", {
        title: "Καφές Ροφήματα",
        products
    });
}

exports.mparesDhmhtriakwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπάρες Δημητριακών");

    res.status(200).render("displayProducts", {
        title: "Τσάι Αφεψίματα",
        products
    });
}

exports.meli = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Μέλι",
        mainTitles: ["Θυμαρίσια", "Ανθέων Κωνοφόρων", "Άλλες Ποικιλίες", "Βασιλικός Πολτός"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/meli/thumarisia",
                "/prwino-kai-rofhmata/meli/anthewn-kwnoforwn",
                "/prwino-kai-rofhmata/meli/alles-poikilies",
                "/prwino-kai-rofhmata/meli/basilikos-poltos"]
    });
}

exports.thumarisia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Θυμαρίσσια");

    res.status(200).render("displayProducts", {
        title: "Θυμαρίσια",
        products
    });
}

exports.anthewnKwnoforwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ανθέων Κωνοφόρων");

    res.status(200).render("displayProducts", {
        title: "Ανθέων Κωνοφόρων",
        products
    });
}

exports.allesPoikilies = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Άλλες Ποικιλίες");

    res.status(200).render("displayProducts", {
        title: "Άλλες Ποικιλίες",
        products
    });
}

exports.basilikosPoltos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βασιλικός Πολτός");

    res.status(200).render("displayProducts", {
        title: "Βασιλικός Πολτός",
        products
    });
}

exports.marmelades = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Μαρμελάδες",
        mainTitles: ["Φράουλα Κεράσι", "Ροδάκινο Βερίκοκο", "Βατόμουρο Βύσσινο",
                    "Άλλες Γεύσεις"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/marmelades/fraoula-kerasi",
                "/prwino-kai-rofhmata/marmelades/rodakino-verikoko",
                "/prwino-kai-rofhmata/marmelades/vatomouro-vussino",
                "/prwino-kai-rofhmata/marmelades/alles-geuseis"]
    });
}

exports.fraoulaKerasi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φράουλα Κεράσι");

    res.status(200).render("displayProducts", {
        title: "Φράουλα Κεράσι",
        products
    });
}

exports.rodakinoVerikoko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ροδάκινο Βερίκοκο");

    res.status(200).render("displayProducts", {
        title: "Ροδάκινο Βερίκοκο",
        products
    });
}

exports.vatomouroVussino = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βατόμουρο Βύσσινο");

    res.status(200).render("displayProducts", {
        title: "Βατόμουρο Βύσσινο",
        products
    });
}

exports.allesGeuseis = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Άλλες Γεύσεις");

    res.status(200).render("displayProducts", {
        title: "Άλλες Γεύσεις",
        products
    });
}

exports.aleimmataKarpwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αλείμματα Καρπών",
        mainTitles: ["Πραλίνες", "Ταχίνι", "Φυστικοβούτηρο"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/aleimmata-karpwn/pralines",
                "/prwino-kai-rofhmata/aleimmata-karpwn/taxini",
                "/prwino-kai-rofhmata/aleimmata-karpwn/fystikovoythro"]
    });
}

exports.pralines = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πραλίνες");

    res.status(200).render("displayProducts", {
        title: "Πραλίνες",
        products
    });
}

exports.taxini = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ταχίνι");

    res.status(200).render("displayProducts", {
        title: "Ταχίνι",
        products
    });
}

exports.fystikovoythro = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φυστικοβούτηρο");

    res.status(200).render("displayProducts", {
        title: "Φυστικοβούτηρο",
        products
    });
}

exports.kafesRofhmata = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Καφές Ροφήματα",
        mainTitles: ["Espresso", "Στιγμιαίος", "Φίλτρου", "Ελληνικός", "Κάψουλες", "Υποκατάστατα Συνοδευτικά",
                    "Κακάο Ροφήματα Σοκολάτας"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/kafes-rofhmata/espresso",
                "/prwino-kai-rofhmata/kafes-rofhmata/stigmiaios",
                "/prwino-kai-rofhmata/kafes-rofhmata/filtrou",
                "/prwino-kai-rofhmata/kafes-rofhmata/ellhnikos",
                "/prwino-kai-rofhmata/kafes-rofhmata/kapsoules",
                "/prwino-kai-rofhmata/kafes-rofhmata/upokatastata-sunodeuthka",
                "/prwino-kai-rofhmata/kafes-rofhmata/kakao-rofhmata-sokolatas"]
    });
}

exports.espresso = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Espresso");

    res.status(200).render("displayProducts", {
        title: "Espresso",
        products
    });
}

exports.stigmiaios = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Στιγμιαίος");

    res.status(200).render("displayProducts", {
        title: "Στιγμιαίος",
        products
    });
}

exports.filtrou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φίλτρου");

    res.status(200).render("displayProducts", {
        title: "Φίλτρου",
        products
    });
}

exports.ellhnikos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ελληνικός");

    res.status(200).render("displayProducts", {
        title: "Ελληνικός",
        products
    });
}

exports.kapsoules = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κάψουλες");

    res.status(200).render("displayProducts", {
        title: "Κάψουλες",
        products
    });
}

exports.upokatastataSunodeuthka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υποκατάστατα Συνοδευτικά");

    res.status(200).render("displayProducts", {
        title: "Υποκατάστατα Συνοδευτικά",
        products
    });
}

exports.kakaoRofhmataSokolatas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κακάο Ροφήματα Σοκολάτας");

    res.status(200).render("displayProducts", {
        title: "Κακάο Ροφήματα Σοκολάτας",
        products
    });
}

exports.tsaiAfepsimata = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Τσάι Αφεψήματα",
        mainTitles: ["Τσάι", "Αφεψήματα"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/prwino-kai-rofhmata/tsai-afepsimata/tsai",
                "/prwino-kai-rofhmata/tsai-afepsimata/afepsimata"]
    });
}

exports.tsai = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τσάι");

    res.status(200).render("displayProducts", {
        title: "Τσάι",
        products
    });
}

exports.afepsimata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αφεψίματα");

    res.status(200).render("displayProducts", {
        title: "Αφεψήματα",
        products
    });
}