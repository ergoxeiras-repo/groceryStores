const getProducts = require("./getProducts");

exports.vrefikhFrontida = function(req, res) {
    res.status(200).render("base" ,{
        title: "Βρεφική Φροντίδα",
        mainTitles: ["Βρεφικό γάλα", "Βρεφικές Τροφές", "Βρεφικές Πάνες Μωρομάντηλα",
                    "Περιποίηση Σώματος", "Αξεσουάρ", "Βρεφικό Φαρμακείο", "Βρεφικά Απορρυπαντικά"],
        images: ["../images/βρεφικη_φροντιδα/βρεφικο_γαλα.jpg",
                 "../images/βρεφικη_φροντιδα/βρεφικες_τροφες.jpg",
                 "../images/βρεφικη_φροντιδα/βρεφικες_πανες_μωρομαντηλα.jpg",
                "../images/βρεφικη_φροντιδα/περιποιηση_σωματος.jpg",
                "../images/βρεφικη_φροντιδα/αξεσουαρ.jpg",
                "../images/βρεφικη_φροντιδα/Baby_pharmacy.jpg",
                "../images/βρεφικη_φροντιδα/βρεφικα_απορρυπαντικα.jpg"],
        hrefs: ["/vrefikh-frontida/vrefiko-gala", "/vrefikh-frontida/vrefikes-trofes",
                "/vrefikh-frontida/vrefikes-panes-mwromanthla", "/vrefikh-frontida/peripoihsh-swmatos",
                "/vrefikh-frontida/aksesouar", "/vrefikh-frontida/vrefikh-ugieinh-dontiwn",
                "/vrefikh-frontida/vrefiko-farmakeio", "/vrefikh-frontida/vrefika-aporrypantika"]
    });
}

exports.vrefikoGala = function(req, res) {
    res.status(200).render("base", {
        title: "Βρεφικό Γάλα",
        mainTitles: ["1ης ηλικίας", "2ης ηλικίας", "3ης ηλικίας"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/vrefiko-gala/vrefiko-gala-1hs-hlikias", "/vrefikh-frontida/vrefiko-gala/vrefiko-gala-2hs-hlikias",
                "/vrefikh-frontida/vrefiko-gala/vrefiko-gala-3hs-hlikias"]
    });
}

exports.vrefikoGala1hsHlikias = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικό Γάλα 1ης ηλικίας");

    res.status(200).render("displayProducts", {
        title: "Βρεφικό Γάλα 1ης ηλικίας",
        products
    });
}

exports.vrefikoGala2hsHlikias = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικό Γάλα 2ης ηλικίας");

    res.status(200).render("displayProducts", {
        title: "Βρεφικό Γάλα 2ης Ηλικίας",
        products
    });
}

exports.vrefikoGala3hsHlikias = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικό Γάλα 3ης ηλικίας");

    res.status(200).render("displayProducts", {
        title: "Βρεφικό Γάλα 3ης Ηλικίας",
        products
    });
}

exports.vrefikesTrofes = function(req, res) {
    res.status(200).render("base" ,{
        title: "Βρεφικές Τροφές",
        mainTitles: ["Βρεφικές Κρέμες", "Βρεφικά Γιαούρτια", "Βρεφικά Σνάκ"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/vrefikes-trofes/vrefikes-kremes", "/vrefikh-frontida/vrefikes-trofes/vrefika-giaourtia", 
                "/vrefikh-frontida/vrefikes-trofes/vrefika-snack"]
    });
}

exports.vrefikesKremes = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικές Κρέμες");

    res.status(200).render("displayProducts", {
        title: "Βρεφικές Κρέμες",
        products
    });
}

exports.vrefikaGiaourtia = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικά Γιαούρτια");

    res.status(200).render("displayProducts", {
        title: "Βρεφικά Γιαούρτια",
        products
    });
}

exports.vrefikaSnack = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικά Σνάκ");

    res.status(200).render("displayProducts", {
        title: "Βρεφικά Σνάκ",
        products
    });
}

exports.etoimaVrefikaGeymata = async function(req, res) {
    const products = await getProducts.getProducts(req, "Έτοιμα Βρεφικά Γεύματα");

    res.status(200).render("displayProducts", {
        title: "Έτοιμα Βρεφικά Γεύματα",
        products
    });
}

exports.vrefikesPanesMwromanthla = function(req, res) {
    res.status(200).render("base" ,{
        title: "Βρεφικές Πάνες Μωρομάντηλα",
        mainTitles: ["Βρεφικές Πάνες", "Μωρομάντηλα"],
        images: ["../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/vrefikes-panes-mwromanthla/vrefikes-panes", "/vrefikh-frontida/vrefikes-panes-mwromanthla/mwromanthla"]
    });
}

exports.vrefikesPanes = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικές Πάνες");

    res.status(200).render("displayProducts", {
        title: "Βρεφικές Πάνες",
        products
    });
}

exports.mwromanthla = async function(req, res) {
    const products = await getProducts.getProducts(req, "Μωρομάντηλα");

    res.status(200).render("displayProducts", {
        title: "Μωρομάντηλα",
        products
    });
}

exports.peripoihshSwmatos = function(req, res) {
    res.status(200).render("base" ,{
        title: "Περιποίηση Σώματος",
        mainTitles: ["Σαμπουάν Αφρόλουτρα", "Κρέμες Πούδρες Λάδι"],
        images: ["../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/peripoihsh-swmatos/sampouan-afroloutra", "/vrefikh-frontida/peripoihsh-swmatos/kremes-poudres-ladi"]
    });
}

exports.sampouanΑfroloutra = async function(req, res) {
    const products = await getProducts.getProducts(req, "Σαμπουάν Αφρόλουτρα");

    res.status(200).render("displayProducts", {
        title: "Σαμπουάν Αφρόλουτρα",
        products
    });
}

exports.kremesPoudresLadi = async function(req, res) {
    const products = await getProducts.getProducts(req, "Κρέμες Πούδρες Λάδι");

    res.status(200).render("displayProducts", {
        title: "Κρέμες Πούδρες Λάδι",
        products
    });
}

exports.aksesouar = function(req, res) {
    res.status(200).render("base" ,{
        title: "Αξεσουάρ",
        mainTitles: ["Πιατάκια Κουταλάκια Πιρουνάκια", "Βρεφικά Ψαλιδάκια"],
        images: ["../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/aksesouar/piatakia-koutalakia-pirounakia", "/vrefikh-frontida/aksesouar/vrefika-psalidakia"]
    });
}

exports.piatakiaKoutalakiaPirounakia = async function(req, res) {
    const products = await getProducts.getProducts(req, "Πιατάκια Κουταλάκια Πιρουνάκια");

    res.status(200).render("displayProducts", {
        title: "Πιατάκια Κουταλάκια Πιρουνάκια",
        products
    });
}

exports.vrefikaPsalidakia = async function(req, res) {
    const products = await getProducts.getProducts(req, "Βρεφικά Ψαλιδάκια");

    res.status(200).render("displayProducts", {
        title: "Βρεφικά Ψαλιδάκια",
        products
    });
}

exports.mpimperoSaliaresPipiles = async function(req, res) {
    const products = await getProducts.getProducts(req, "Μπιμπερό Σαλιάρες Πιπίλες");

    res.status(200).render("displayProducts", {
        title: "Μπιμπερο Σαλιαρες Πιπιλες",
        products
    });
}

exports.vrefikoFarmakeio = function(req, res) {
    res.status(200).render("base" ,{
        title: "Βρεφικό Φαρμακείο",
        mainTitles: ["Παιδικά Επιθέματα"],
        images: ["../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/vrefiko-farmakeio/paidika-epithemata"]
    });
}

exports.rinikaΑpofraktika = async function(req, res) {
    const products = await getProducts.getProducts(req, "Ρινικά Αποφρακτικά");

    res.status(200).render("displayProducts", {
        title: "Ρινικα Αποφρακτικα",
        products
    });
}

exports.vrefikaΑporrypantika = function(req, res) {
    res.status(200).render("base" ,{
        title: "Βρεφικά Απορρυπαντικά",
        mainTitles: ["Υγρά Απορρυπαντικά", "Μαλακτικά"],
        images: ["../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/vrefikh-frontida/vrefika-aporrypantika/ygra-aporrypantika", "/vrefikh-frontida/vrefika-aporrypantika/malaktika"]
    });
}

exports.ygraAporrypantika = async function(req, res) {
    const products = await getProducts.getProducts(req, "Υγρά Απορρυπαντικά");

    res.status(200).render("displayProducts", {
        title: "Υγρά Απορρυπαντικά",
        products
    });
}

exports.malaktika = async function(req, res) {
    const products = await getProducts.getProducts(req, "Μαλακτικά");

    res.status(200).render("displayProducts", {
        title: "Μαλακτικά",
        products
    });
}

exports.aporrypantikaSeSkonh = async function(req, res) {
    const products = await getProducts.getProducts(req, "Απορρυπαντικά Σε Σκόνη");

    res.status(200).render("displayProducts", {
        title: "Απορρυπαντικα σε σκονη",
        products
    });
}