const getProducts = require("./getProducts");

exports.proswpikhFrontida = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Προσωπική Φροντίδα",
        mainTitles: ["Για Άνδρες", "Για Γυναίκες", "Προσωπική Υγιεινή", "Προιόντα Σώματος", "Φροντίδα Μαλλιών",
                    "Παραφαρμακευτικά Είδη", "Στοματική Υγιεινή", "Αντιηλιακά"],
        images: ["../images/προσωπικη_φροντιδα/για_αντρες.png",
                "../images/προσωπικη_φροντιδα/για_γυναικες.png",
                "../images/προσωπικη_φροντιδα/προσωπικη_υγιεινη.jpg",
                "../images/προσωπικη_φροντιδα/προιοντα_σωματος.jpg",
                "../images/προσωπικη_φροντιδα/φροντιδα_μαλλιων.jpg",
                "../images/προσωπικη_φροντιδα/παραφαρμακευτικα_προιοντα.jpg",
                "../images/προσωπικη_φροντιδα/στοματικη_υγιεινη.jpg",
                "../images/προσωπικη_φροντιδα/αντιηλιακα.jpg"],
        hrefs: ["/proswpikh-frontida/gia-andres", "/proswpikh-frontida/gia-gunaikes",
                "/proswpikh-frontida/proswpikh-ygieinh", "/proswpikh-frontida/proionta-swmatos",
                "/proswpikh-frontida/frontida-malliwn", "/proswpikh-frontida/parafarmakeutika-eidh",
                "/proswpikh-frontida/stomatikh-ugieinh", "/proswpikh-frontida/antihliaka"],
        subTitles: [
            ["Αφροί Ξυρίσματος", "Ξυριστικά μιας Χρήσης", "Ξυριστικές Μηχανές Ανταλλακτικά"],
            ["Καθαρισμός Προσώπου", "Ενυδάτωση Προσώπου", "Ξυραφάκια", "Μακιγιάζ", "Αποτριχωτικά",
            "Σερβιέτες Ταμπόν"],
            ["Πάνες Ενηλίκων", "Βαμβάκια", "Μπατονέτες", "Αντισηπτικά"],
            ["Αφρόλουτρα Αφροντούς", "Σφουγγάρια", "Αποσμητικά", "Σαπούνια", "Καλλωπισμός"],
            ["Σαμπουάν Κρέμες", "Βαφές", "Spray Gel"],
            ["Επιθέματα Επίδεσμοι", "Αλκοολούχοι Λοσιόν", "Γάντια Μάσκες Σύριγγες", "Προιόντα Προφύλαξης"],
            ["Οδοντόβουρτσες", "Οδοντόκρεμες", "Στοματικά Διαλύματα", "Στοματικά Νήματα"],
            ["Αντιηλιακά Σώματος"]
        ],
        subHrefs: [
            ["/proswpikh-frontida/gia-andres/afroi-xurismatos", "/proswpikh-frontida/gia-andres/xuristika-mias-xrhshs",
            "/proswpikh-frontida/gia-andres/xuristikes-mhxanes-antallaktika",
            "/proswpikh-frontida/gia-andres/after-shave"],
            ["/proswpikh-frontida/gia-gunaikes/katharismos-proswpou", "/proswpikh-frontida/gia-gunaikes/enudatwsh-proswpou",
            "/proswpikh-frontida/gia-gunaikes/xurafakia", "/proswpikh-frontida/gia-gunaikes/makigiaz",
            "/proswpikh-frontida/gia-gunaikes/apotrixwtika", "/proswpikh-frontida/gia-gunaikes/servietes-tampon"],
            ["/proswpikh-frontida/proswpikh-ygieinh/panes-enhlikwn", "/proswpikh-frontida/proswpikh-ygieinh/vamvakia",
            "/proswpikh-frontida/proswpikh-ygieinh/mpatonetes", "/proswpikh-frontida/proswpikh-ygieinh/antishptika"],
            ["/proswpikh-frontida/proionta-swmatos/afroloutra-afrontous", "/proswpikh-frontida/proionta-swmatos/sfouggaria",
            "/proswpikh-frontida/proionta-swmatos/aposmhtika", "/proswpikh-frontida/proionta-swmatos/sapounia",
            "/proswpikh-frontida/proionta-swmatos/kallwpismos"],
            ["/proswpikh-frontida/frontida-malliwn/sampouan-kremes", "/proswpikh-frontida/frontida-malliwn/vafes",
            "/proswpikh-frontida/frontida-malliwn/spary-gel"],
            ["/proswpikh-frontida/parafarmakeutika-eidh/epithemata-epidesmoi", "/proswpikh-frontida/parafarmakeutika-eidh/alkoolouxoi-losion",
            "/proswpikh-frontida/parafarmakeutika-eidh/gantia-maskes-surigges", "/proswpikh-frontida/parafarmakeutika-eidh/proionta-profylaxhs"],
            ["/proswpikh-frontida/stomatikh-ugieinh/odontovoyrtses", "/proswpikh-frontida/stomatikh-ugieinh/odontokremes",
            "/proswpikh-frontida/stomatikh-ugieinh/stomatika-dialymata", "/proswpikh-frontida/stomatikh-ugieinh/stomatika-nhmata"],
            ["/proswpikh-frontida/antihliaka/antihliaka-swmatos"]
        ]
    });
}

exports.giaAndres = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Για Άνδρες",
        mainTitles: ["Αφροί Ξυρίσματος", "Ξυριστικά μιας Χρήσης", "Ξυριστικές Μηχανές Ανταλλακτικά",
                    "After Shave"],
        images: ["../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/gia-andres/afroi-xurismatos", "/proswpikh-frontida/gia-andres/xuristika-mias-xrhshs",
                "/proswpikh-frontida/gia-andres/xuristikes-mhxanes-antallaktika",
                "/proswpikh-frontida/gia-andres/after-shave"]
    });
}

exports.afroiXurismatos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αφροί Ξυρίσματος");

    res.status(200).render("displayProducts", {
        title: "Αφροί Ξυρίσματος",
        products
    });
}

exports.xuristikaMiasXrhshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξυριστικά Μιας Χρήσης");

    res.status(200).render("displayProducts", {
        title: "Ξυριστικά μιας Χρήσης",
        products
    });
}

exports.xuristikesMhxanesAntallaktika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξυριστικές Μηχανές Ανταλλακτικά");

    res.status(200).render("displayProducts", {
        title: "Ξυριστικές Μηχανές Ανταλλακτικά",
        products
    });
}

exports.afterShave = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "After-Shave");

    res.status(200).render("displayProducts", {
        title: "After Shave",
        products
    });
}

exports.giaGunaikes = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Για Γυναίκες",
        mainTitles: ["Καθαρισμός Προσώπου", "Ενυδάτωση Προσώπου", "Ξυραφάκια", "Μακιγιάζ", "Αποτριχωτικά",
                    "Σερβιέτες Ταμπόν"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/gia-gunaikes/katharismos-proswpou", "/proswpikh-frontida/gia-gunaikes/enudatwsh-proswpou",
                "/proswpikh-frontida/gia-gunaikes/xurafakia", "/proswpikh-frontida/gia-gunaikes/makigiaz",
                "/proswpikh-frontida/gia-gunaikes/apotrixwtika", "/proswpikh-frontida/gia-gunaikes/servietes-tampon"]
    });
}

exports.katharismosProswpou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαρισμός Προσώπου");

    res.status(200).render("displayProducts", {
        title: "Καθαρισμός Προσώπου",
        products
    });
}

exports.enudatwshProswpou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ενυδάτωση Προσώπου");

    res.status(200).render("displayProducts", {
        title: "Ενυδάτωση Προσώπου",
        products
    });
}

exports.xurafakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξυραφάκια");

    res.status(200).render("displayProducts", {
        title: "Ξυραφάκια",
        products
    });
}

exports.makigiaz = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μακιγιάζ");

    res.status(200).render("displayProducts", {
        title: "Μακιγιάζ",
        products
    });
}

exports.apotrixwtika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποτριχωτικά");

    res.status(200).render("displayProducts", {
        title: "Αποτριχωτικά",
        products
    });
}

exports.servietesTampon = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σερβιέτες Ταμπόν");

    res.status(200).render("displayProducts", {
        title: "Σερβιέτες Ταμπόν",
        products
    });
}

exports.proswpikhYgieinh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Προσωπική Υγιεινή",
        mainTitles: ["Πάνες Ενηλίκων", "Βαμβάκια", "Μπατονέτες", "Αντισηπτικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/proswpikh-ygieinh/panes-enhlikwn", "/proswpikh-frontida/proswpikh-ygieinh/vamvakia",
                "/proswpikh-frontida/proswpikh-ygieinh/mpatonetes", "/proswpikh-frontida/proswpikh-ygieinh/antishptika"]
    });
}

exports.panesEnhlikwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πάνες Ενηλίκων");

    res.status(200).render("displayProducts", {
        title: "Πάνες Ενηλίκων",
        products
    });
}

exports.vamvakia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βαμβάκια");

    res.status(200).render("displayProducts", {
        title: "Βαμβάκια",
        products
    });
}

exports.mpatonetes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπατονέτες");

    res.status(200).render("displayProducts", {
        title: "Μπατονέτες",
        products
    });
}

exports.antishptika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αντισηπτικά");

    res.status(200).render("displayProducts", {
        title: "Αντισηπτικά",
        products
    });
}

exports.proiontaSwmatos = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Προιόντα Σώματος",
        mainTitles: ["Αφρόλουτρα Αφροντούς", "Σφουγγάρια", "Αποσμητικά", "Σαπούνια", "Καλλωπισμός"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/proionta-swmatos/afroloutra-afrontous", "/proswpikh-frontida/proionta-swmatos/sfouggaria",
                "/proswpikh-frontida/proionta-swmatos/aposmhtika", "/proswpikh-frontida/proionta-swmatos/sapounia",
                "/proswpikh-frontida/proionta-swmatos/kallwpismos"]
    });
}

exports.afroloutraAfrontous = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αφρόλουτρα Αφροντούς");

    res.status(200).render("displayProducts", {
        title: "Αφρόλουτρα Αφροντούς",
        products
    });
}

exports.sfouggaria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σφουγγάρια");

    res.status(200).render("displayProducts", {
        title: "Σφουγγάρια",
        products
    });
}

exports.aposmhtika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποσμητικά");

    res.status(200).render("displayProducts", {
        title: "Αποσμητικά",
        products
    });
}

exports.sapounia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σαπούνια");

    res.status(200).render("displayProducts", {
        title: "Σαπούνια",
        products
    });
}

exports.kallwpismos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καλλωπισμός");

    res.status(200).render("displayProducts", {
        title: "Καλλωπισμός",
        products
    });
}

exports.frontidaMalliwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φροντίδα Μαλλιών",
        mainTitles: ["Σαμπουάν Κρέμες", "Βαφές", "Spray Gel"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/frontida-malliwn/sampouan-kremes", "/proswpikh-frontida/frontida-malliwn/vafes",
                "/proswpikh-frontida/frontida-malliwn/spary-gel"]
    });
}

exports.sampouanKremes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σαμπουάν Κρέμες");

    res.status(200).render("displayProducts", {
        title: "Σαμπουάν Κρέμες",
        products
    });
}

exports.vafes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βαφές");

    res.status(200).render("displayProducts", {
        title: "Βαφές",
        products
    });
}

exports.sparyGel = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Spary-Gel");

    res.status(200).render("displayProducts", {
        title: "Spray Gel",
        products
    });
}

exports.parafarmakeutikaEidh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Παραφαρμακευτικά Είδη",
        mainTitles: ["Επιθέματα Επίδεσμοι", "Αλκοολούχοι Λοσιόν", "Γάντια Μάσκες Σύριγγες", "Προιόντα Προφύλαξης"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/parafarmakeutika-eidh/epithemata-epidesmoi", "/proswpikh-frontida/parafarmakeutika-eidh/alkoolouxoi-losion",
                "/proswpikh-frontida/parafarmakeutika-eidh/gantia-maskes-surigges", "/proswpikh-frontida/parafarmakeutika-eidh/proionta-profylaxhs"]
    });
}

exports.epithemataEpidesmoi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Επιθέματα Επίδεσμοι");

    res.status(200).render("displayProducts", {
        title: "Επιθέματα Επίδεσμοι",
        products
    });
}

exports.alkoolouxoiLosion = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αλκοολούχοι Λοσιόν");

    res.status(200).render("displayProducts", {
        title: "Αλκοολούχοι Λοσιόν",
        products
    });
}

exports.gantiaMaskesSurigges = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γαντια Μάσκες Σύριγγες");

    res.status(200).render("displayProducts", {
        title: "Γάντια Μάσκες Σύριγγες",
        products
    });
}

exports.proiontaProfylaxhs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Προιόντα Προφύλαξης");

    res.status(200).render("displayProducts", {
        title: "Προιόντα Προφύλαξης",
        products
    });
}

exports.stomatikhUgieinh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Στοματική Υγιεινή",
        mainTitles: ["Οδοντόβουρτσες", "Οδοντόκρεμες", "Στοματικά Διαλύματα", "Στοματικά Νήματα"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/stomatikh-ugieinh/odontovoyrtses", "/proswpikh-frontida/stomatikh-ugieinh/odontokremes",
                "/proswpikh-frontida/stomatikh-ugieinh/stomatika-dialymata", "/proswpikh-frontida/stomatikh-ugieinh/stomatika-nhmata"]
    });
}

exports.odontovoyrtses = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Οδοντόβουρτσες");

    res.status(200).render("displayProducts", {
        title: "Οδοντόβουρτσες",
        products
    });
}

exports.odontokremes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Οδοντόκρεμες");

    res.status(200).render("displayProducts", {
        title: "Οδοντόκρεμες",
        products
    });
}

exports.stomatikaDialymata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Στοματικά Διαλύματα");

    res.status(200).render("displayProducts", {
        title: "Στοματικά Διαλύματα",
        products
    });
}

exports.stomatikaNhmata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Στοματικά Νήματα");

    res.status(200).render("displayProducts", {
        title: "Στοματικά Νήματα",
        products
    });
}

exports.antihliaka = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αντιηλιακά",
        mainTitles: ["Αντιηλιακά Σώματος"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/proswpikh-frontida/antihliaka/antihliaka-swmatos"]
    });
}

exports.antihliakaSwmatos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αντιηλιακά Σώματος");

    res.status(200).render("displayProducts", {
        title: "Αντιηλιακά Σώματος",
        products
    });
}