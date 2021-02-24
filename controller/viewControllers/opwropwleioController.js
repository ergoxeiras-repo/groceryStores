const getProducts = require("./getProducts");

exports.opwropwleio = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Οπωροπωλείο",
        mainTitles: ["Φρούτα", "Λαχανικά"],
        images: ["../images/τροφημα/οπωροπωλειο/φρουτα.jpg",
                "../images/τροφημα/οπωροπωλειο/λαχανικα.jpg"],
        hrefs: ["/opwropwleio/frouta", "/opwropwleio/laxanika"],
        subTitles: [
                ["Μήλα", "Μπανάνες", "Πορτοκάλια", "Μανταρίνια", "Grapefruit", "Αχλάδια", "Λεμόνια", "Laims",
                "Ακτινίδια", "Καρπούζια", "Πεπόνια", "Ροδάκινα", "Νεκταρίνια", "Βερίκοκα", "Φράουλες",
                "Βατόμουρα", "Σύκα", "Δαμάσκηνα", "Εξωτικά Φρούτα"],
                ["Αγγούρια", "Τομάτες", "Πατάτες", "Κρεμμύδια", "Σκόρδα", "Μαρούλια", "Ρόκα", "Έτοιμες Σαλάτες",
                    "Λάχανο", "Μπρόκολο", "Κουνουπίδι", "Πιπεριές", "Μελιτζάνες", "Κολοκυθάκια", "Φασολάκια",
                "Καρότα", "Ραπανάκια", "Μανιτάρια", "Καλαμπόκι", "Σπαράγγια", "Παντζάρια", "Μυρωδικά"]
        ],
        subHrefs: [
                ["/opwropwleio/frouta/mhla", "/opwropwleio/frouta/mpananes",
                "/opwropwleio/frouta/portokalia", "/opwropwleio/frouta/mantarinia",
                "/opwropwleio/frouta/greip-frut", "/opwropwleio/frouta/axladia",
                "/opwropwleio/frouta/lemonia", "/opwropwleio/frouta/laims",
                "/opwropwleio/frouta/aktinidia", "/opwropwleio/frouta/karpouzia",
                "/opwropwleio/frouta/peponia", "/opwropwleio/frouta/nektarinia",
                "/opwropwleio/frouta/rodakina","/opwropwleio/frouta/verikoka",
                "/opwropwleio/frouta/fraoules", "/opwropwleio/frouta/vatomoura",
                "/opwropwleio/frouta/suka","/opwropwleio/frouta/damaskhna",
                "/opwropwleio/frouta/exwtika-frouta"],
                ["/opwropwleio/laxanika/aggouria", "/opwropwleio/laxanika/tomates",
                "/opwropwleio/laxanika/patates", "/opwropwleio/laxanika/kremmudia",
                "/opwropwleio/laxanika/skorda", "/opwropwleio/laxanika/maroulia",
                "/opwropwleio/laxanika/roka", "/opwropwleio/laxanika/etoimes-salates",
                "/opwropwleio/laxanika/laxano", "/opwropwleio/laxanika/mprokolo",
                "/opwropwleio/laxanika/kounoupidi", "/opwropwleio/laxanika/piperies",
                 "/opwropwleio/laxanika/melitzanes","/opwropwleio/laxanika/kolokuthakia",
                 "/opwropwleio/laxanika/fasolakia", "/opwropwleio/laxanika/karota",
                 "/opwropwleio/laxanika/rapanakia","/opwropwleio/laxanika/manitaria",
                 "/opwropwleio/laxanika/kalampoki", "/opwropwleio/laxanika/sparaggia",
                 "/opwropwleio/laxanika/pantzaria", "/opwropwleio/laxanika/murwdika"]
        ]
    });
}

exports.frouta = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φρούτα",
        mainTitles: ["Μήλα", "Μπανάνες", "Πορτοκάλια", "Μανταρίνια", "Grapefruit", "Αχλάδια", "Λεμόνια", "Laims",
                    "Ακτινίδια", "Καρπούζια", "Πεπόνια", "Ροδάκινα", "Νεκταρίνια", "Βερίκοκα", "Φράουλες",
                    "Βατόμουρα", "Σύκα", "Δαμάσκηνα", "Εξωτικά Φρούτα"],
        images: ["../images/τροφημα/οπωροπωλειο/φρουτα.jpg",
                "../images/τροφημα/οπωροπωλειο/λαχανικα.jpg"],
        hrefs: ["/opwropwleio/frouta/mhla", "/opwropwleio/frouta/mpananes",
                "/opwropwleio/frouta/portokalia", "/opwropwleio/frouta/mantarinia",
                "/opwropwleio/frouta/greip-frut", "/opwropwleio/frouta/axladia",
                "/opwropwleio/frouta/lemonia", "/opwropwleio/frouta/laims",
                "/opwropwleio/frouta/aktinidia", "/opwropwleio/frouta/karpouzia",
                "/opwropwleio/frouta/peponia", "/opwropwleio/frouta/nektarinia",
                 "/opwropwleio/frouta/rodakina","/opwropwleio/frouta/verikoka",
                 "/opwropwleio/frouta/fraoules", "/opwropwleio/frouta/vatomoura",
                 "/opwropwleio/frouta/suka","/opwropwleio/frouta/damaskhna",
                 "/opwropwleio/frouta/exwtika-frouta"]
    });
}

exports.mhla = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μήλα");

    res.status(200).render("displayProducts", {
        title: "Μήλα",
        products
    });
}

exports.mpananes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπανάνες");

    res.status(200).render("displayProducts", {
        title: "Μπανάνες",
        products
    });
}

exports.portokalia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πορτοκάλια");

    res.status(200).render("displayProducts", {
        title: "Πορτοκάλια",
        products
    });
}

exports.mantarinia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μανταρίνια");

    res.status(200).render("displayProducts", {
        title: "Μανταρίνια",
        products
    });
}

exports.greipFrut = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Grapefruit");

    res.status(200).render("displayProducts", {
        title: "Grapefruit",
        products
    });
}

exports.axladia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αχλάδια");

    res.status(200).render("displayProducts", {
        title: "Αχλάδια",
        products
    });
}

exports.lemonia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λεμόνια");

    res.status(200).render("displayProducts", {
        title: "Λεμόνια",
        products
    });
}

exports.laims = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Laims");

    res.status(200).render("displayProducts", {
        title: "Laims",
        products
    });
}

exports.aktinidia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ακτινίδια");

    res.status(200).render("displayProducts", {
        title: "Ακτινίδια",
        products
    });
}

exports.karpouzia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καρπούζια");

    res.status(200).render("displayProducts", {
        title: "Καρπούζια",
        products
    });
}

exports.peponia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πεπόνια");

    res.status(200).render("displayProducts", {
        title: "Πεπόνια",
        products
    });
}

exports.rodakina = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ροδάκινα");

    res.status(200).render("displayProducts", {
        title: "Ροδάκινα",
        products
    });
}

exports.nektarinia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Νεκταρίνια");

    res.status(200).render("displayProducts", {
        title: "Νεκταρίνια",
        products
    });
}

exports.verikoka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βερίκοκα");

    res.status(200).render("displayProducts", {
        title: "Βερίκοκα",
        products
    });
}

exports.fraoules = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φράουλες");

    res.status(200).render("displayProducts", {
        title: "Φράουλες",
        products
    });
}

exports.vatomoura = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βατόμουρα");

    res.status(200).render("displayProducts", {
        title: "Βατόμουρα",
        products
    });
}

exports.suka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σύκα");

    res.status(200).render("displayProducts", {
        title: "Σύκα",
        products
    });
}

exports.damaskhna = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Δαμάσκηνα");

    res.status(200).render("displayProducts", {
        title: "Δαμάσκηνα",
        products
    });
}

exports.exwtikaFrouta = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Εξωτικά Φρούτα");

    res.status(200).render("displayProducts", {
        title: "Εξωτικά Φρούτα",
        products
    });
}

exports.laxanika = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Λαχανικά",
        mainTitles: ["Αγγούρια", "Τομάτες", "Πατάτες", "Κρεμμύδια", "Σκόρδα", "Μαρούλια", "Ρόκα", "Έτοιμες Σαλάτες",
                    "Λάχανο", "Μπρόκολο", "Κουνουπίδι", "Πιπεριές", "Μελιτζάνες", "Κολοκυθάκια", "Φασολάκια",
                    "Καρότα", "Ραπανάκια", "Μανιτάρια", "Καλαμπόκι", "Σπαράγγια", "Παντζάρια", "Μυρωδικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/opwropwleio/laxanika/aggouria", "/opwropwleio/laxanika/tomates",
                "/opwropwleio/laxanika/patates", "/opwropwleio/laxanika/kremmudia",
                "/opwropwleio/laxanika/skorda", "/opwropwleio/laxanika/maroulia",
                "/opwropwleio/laxanika/roka", "/opwropwleio/laxanika/etoimes-salates",
                "/opwropwleio/laxanika/laxano", "/opwropwleio/laxanika/mprokolo",
                "/opwropwleio/laxanika/kounoupidi", "/opwropwleio/laxanika/piperies",
                 "/opwropwleio/laxanika/melitzanes","/opwropwleio/laxanika/kolokuthakia",
                 "/opwropwleio/laxanika/fasolakia", "/opwropwleio/laxanika/karota",
                 "/opwropwleio/laxanika/rapanakia","/opwropwleio/laxanika/manitaria",
                 "/opwropwleio/laxanika/kalampoki", "/opwropwleio/laxanika/sparaggia",
                 "/opwropwleio/laxanika/pantzaria", "/opwropwleio/laxanika/murwdika"]
    });
}

exports.aggouria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αγγούρια");

    res.status(200).render("displayProducts", {
        title: "Αγγούρια",
        products
    });
}

exports.tomates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Τομάτες");

    res.status(200).render("displayProducts", {
        title: "Τομάτες",
        products
    });
}

exports.patates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πατάτες");

    res.status(200).render("displayProducts", {
        title: "Πατάτες",
        products
    });
}

exports.kremmudia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρεμμύδια");

    res.status(200).render("displayProducts", {
        title: "Κρεμμύδια",
        products
    });
}

exports.skorda = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σκόρδα");

    res.status(200).render("displayProducts", {
        title: "Σκόρδα",
        products
    });
}

exports.maroulia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαρούλια");

    res.status(200).render("displayProducts", {
        title: "Μαρούλια",
        products
    });
}

exports.roka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ρόκα");

    res.status(200).render("displayProducts", {
        title: "Ρόκα",
        products
    });
}

exports.etoimesSalates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Έτοιμες Σαλάτες");

    res.status(200).render("displayProducts", {
        title: "Έτοιμες Σαλάτες",
        products
    });
}

exports.laxano = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λάχανο");

    res.status(200).render("displayProducts", {
        title: "Λάχανο",
        products
    });
}

exports.mprokolo = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπρόκολο");

    res.status(200).render("displayProducts", {
        title: "Μπρόκολο",
        products
    });
}

exports.kounoupidi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κουνουπίδι");

    res.status(200).render("displayProducts", {
        title: "Κουνουπίδι",
        products
    });
}

exports.piperies = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πιπεριές");

    res.status(200).render("displayProducts", {
        title: "Πιπεριές",
        products
    });
}

exports.melitzanes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μελιτζάνες");

    res.status(200).render("displayProducts", {
        title: "Μελιτζάνες",
        products
    });
}

exports.kolokuthakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κολοκυθάκια");

    res.status(200).render("displayProducts", {
        title: "Κολοκυθάκια",
        products
    });
}

exports.fasolakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φασολάκια");

    res.status(200).render("displayProducts", {
        title: "Φασολάκια",
        products
    });
}

exports.karota = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καρότα");

    res.status(200).render("displayProducts", {
        title: "Καρότα",
        products
    });
}

exports.rapanakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ραπανάκια");

    res.status(200).render("displayProducts", {
        title: "Ραπανάκια",
        products
    });
}

exports.manitaria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μανιτάρια");

    res.status(200).render("displayProducts", {
        title: "Μανιτάρια",
        products
    });
}

exports.kalampoki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καλμπόκι");

    res.status(200).render("displayProducts", {
        title: "Καλμπόκι",
        products
    });
}

exports.sparaggia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σπαράγγια");

    res.status(200).render("displayProducts", {
        title: "Σπαράγγια",
        products
    });
}

exports.pantzaria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παντζάρια");

    res.status(200).render("displayProducts", {
        title: "Παντζάρια",
        products
    });
}

exports.murwdika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μυρωδικά");

    res.status(200).render("displayProducts", {
        title: "Μυρωδικά",
        products
    });
}

