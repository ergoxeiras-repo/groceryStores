const getProducts = require("./getProducts");

exports.katharistikaXartikaEidhOikiakhs = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Καθαριστικά Χαρτικά Είδη Οικιακής",
        mainTitles: ["Καθαριότητα Σπιτιού", "Απορρυπαντικά Πιάτων", "Πλύσιμο Ρούχων", "Είδη Σιδερώματος Απλώματος",
                    "Χαρτί Οικιακής Χρήσης", "Εντομοκτόνα Εντομοαποθυτικά", "Φύλαξη Ρούχων", "Αρωματικά Κεριά",
                    "Γραφική Ύλη Αναλώσιμα", "Δώρα Παιχνίδια", "Είδη Κήπου", "BBQ Τζάκι",
                    "Είδη κουζίνας Μπάνιου"],
        images: ["../images/καθαριστικα_χαρτικα_ειδη_οικιακης/καθαριστικα_σπιτιου.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/απορρυπαντικα_πιατων.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/πλυσιμο_ρουχων.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/ειδη_σιδερωματος_απλωματος.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/χαρτι_οικιακης_χρησης.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/εντομοκτονα_εντομοαποθυτικα.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/φυλαξη_ρουχων.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/αρωματικα_κερια.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/αναλωσιμα_γραφικη_υλη.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/δωρα_παιχνιδια.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/ειδη_κηπου.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/bbq_τζακι.jpg",
                "../images/καθαριστικα_χαρτικα_ειδη_οικιακης/ειδη_κουζινας_μπανιου.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou", "/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn", "/katharistika-xartika-eidh-oikiakhs/eidh-siderwmatos-aplwmatos",
                "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs", "/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika",
                "/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn", "/katharistika-xartika-eidh-oikiakhs/arwmatika-keria",
                "/katharistika-xartika-eidh-oikiakhs/grafikh-ulh-analwsima", "/katharistika-xartika-eidh-oikiakhs/dwra-paixnidia",
                "/katharistika-xartika-eidh-oikiakhs/eidh-khpou",
                "/katharistika-xartika-eidh-oikiakhs/BBQ-tzaki", "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou"],
        subTitles: [
            ["Γενικού Καθαρισμού", "Καθαριστικά Κουζίνας", "Καθαριστικά Μπάνιου Τουαλέτας", "Καθαριστικά Τζαμιών",
            "Καθαριστικά Πατώματος", "Καθαριστικά Επίπλων Χαλιών", "Χλωροκαθαριστικά", "Κατά των Αλάτων",
            "Αποφρακτικά", "Σφουγγάρια Σύρματα", "Ξεσκονόπανα Σφουγγαρόπανα", "Γάντια Οικιακής Χρήσης",
            "Σακούλες Απορρυμάτων", "Σκούπες Σφουγγαρίστρες Κουβάδες"],
            ["Υγρά Πιάτων", "Απορρυπαντικά Πλυντηρίου Πιάτων", "Αλάτι Συμπληρωματικά Πλύσης"],
            ["Υγρά Πλυντηρίου", "Σκόνη Πλυντηρίου", "Ταμπλέτες Πλυντηρίου", "Για Πλύσιμο στο Χέρι",
            "Μαλακτικά Ρούχων", "Λευκαντικά Ενισχυτικά", "Φύλαξη Ρούχων"],
            ["Χαρτί Υγείας", "Χαρτί Κουζίνας", "Χαρτοπετσέτες", "Χαρτομάντηλα", "Υγρομάντηλα"],
            ["Εντομοαποθυτικά Χώρου", "Εντομοκτώνα", "Σκοροαπωθητικά"],
            ["Αποσμητικά Ρούχων", "Κρεμάστρες", "Σακούλες Φύλαξης Ρούχων"],
            ["Αρωματικά Κεριά Χώρου", "Αρωματικά Κεριά Ρεσώ"],
            ["Χαρτικά", "Γραφική Ύλη"],
            ["Μαγειρικά Σκεύη Κουζινικά", "Αλουμινόχαρτα Μεμβράνες", "Είδη μιας Χρήσης",
            "Αξεσουάρ Μπάνιου", "Μπαταρίες", "Λάμπες"],
            [],
            [],
            [],
            []
        ],
        subHrefs: [
            ["/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/genikou-katharismou","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-kouzinas",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-mpaniou-toualetas","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-tzamiwn",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-patwmatos","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-epiplwn-xaliwn",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/xlwrokatharistika","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/kata-twn-alatwn",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/apofraktika","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/sfouggaria-surmata",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/xeskonopana-sfouggaropana","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/gantia-oikiakhs-xrhshs",
            "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/sakoules-aporrimatwn","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/skoupes-sfouggaristres-kouvades"],
            ["/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/ugra-piatwn",
            "/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/aporrupantika-plunthriou-piatwn",
            "/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/alati-sumplhrwmatika-plhshs"],
            ["/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/ugra-plunthriou",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/skonh-plunthriou",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/tampletes-plunthriou",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/gia-plushmo-sto-xeri",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/malaktika-rouxwn",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/leukantika-enisxutika",
            "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/aposklurhntiko"],
            ["/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xarti-ugeias",
            "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xarti-kouzinas",
            "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xartopetsetes",
            "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xartomanthla",
            "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/ugromanthla"],
            ["/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/entomoapothutika-xwrou",
            "/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/entomoktwna",
            "/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/skoroapwthitika"],
            ["/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/aposmhtika-rouxwn",
            "/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/kremastres",
            "/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/sakoules-fulaxhs-rouxwn"],
            ["/katharistika-xartika-eidh-oikiakhs/arwmatika-keria/arwmatika-xwrou",
            "/katharistika-xartika-eidh-oikiakhs/arwmatika-keria/keria-resw"],
            ["/katharistika-xartika-eidh-oikiakhs/grafikh-ulh-analwsima/xartika",
            "/katharistika-xartika-eidh-oikiakhs/grafikh-ulh-analwsima/grafikh-ulh"],
            ["/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/mageirika-skeuh-kouzinika",
            "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/alouminoxarta-memvranes",
            "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/eidh-mias-xrhshs",
            "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/aksesouar-mpaniou",
            "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/mpataries",
            "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/lampes"],
            [],
            [],
            [],
            []
        ]
    });
}

exports.kathariothtaSpitiou = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Καθαριότητα Σπιτιού",
        mainTitles: ["Γενικού Καθαρισμού", "Καθαριστικά Κουζίνας", "Καθαριστικά Μπάνιου Τουαλέτας", "Καθαριστικά Τζαμιών",
                    "Καθαριστικά Πατώματος", "Καθαριστικά Επίπλων Χαλιών", "Χλωροκαθαριστικά", "Κατά των Αλάτων",
                    "Αποφρακτικά", "Σφουγγάρια Σύρματα", "Ξεσκονόπανα Σφουγγαρόπανα", "Γάντια Οικιακής Χρήσης",
                    "Σακούλες Απορρυμάτων", "Σκούπες Σφουγγαρίστρες Κουβάδες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/genikou-katharismou","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-kouzinas",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-mpaniou-toualetas","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-tzamiwn",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-patwmatos","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/katharistika-epiplwn-xaliwn",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/xlwrokatharistika","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/kata-twn-alatwn",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/apofraktika","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/sfouggaria-surmata",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/xeskonopana-sfouggaropana","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/gantia-oikiakhs-xrhshs",
                "/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/sakoules-aporrimatwn","/katharistika-xartika-eidh-oikiakhs/kathariothta-spitiou/skoupes-sfouggaristres-kouvades"]
    });
}

exports.genikouKatharismou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γενικού Καθαρισμού");

    res.status(200).render("displayProducts", {
        title: "Γενικού Καθαρισμού",
        products
    });
}

exports.katharistikaKouzinas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαριστικά Κουζίνας");

    res.status(200).render("displayProducts", {
        title: "Καθαριστικά Κουζίνας",
        products
    });
}

exports.katharistikaMpaniouToualetas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαριστικά Μπάνιου Τουαλέτας");

    res.status(200).render("displayProducts", {
        title: "Καθαριστικά Μπάνιου Τουαλέτας",
        products
    });
}

exports.katharistikaTzamiwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαριστικά Τζαμιών");

    res.status(200).render("displayProducts", {
        title: "Καθαριστικά Τζαμιών",
        products
    });
}

exports.katharistikaPatwmatos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαριστικά Πατώματος");

    res.status(200).render("displayProducts", {
        title: "Καθαριστικά Πατώματος",
        products
    });
}

exports.katharistikaEpiplwnXaliwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καθαριστικά Επίπλων Χαλιών");

    res.status(200).render("displayProducts", {
        title: "Καθαριστικά Επίπλων Χαλιών",
        products
    });
}

exports.xlwrokatharistika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χλωροκαθαριστικά");

    res.status(200).render("displayProducts", {
        title: "Χλωροκαθαριστικά",
        products
    });
}

exports.kataTwnAlatwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κατά Των Αλάτων");

    res.status(200).render("displayProducts", {
        title: "Κατά των Αλάτων",
        products
    });
}

exports.apofraktika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποφρακτικά");

    res.status(200).render("displayProducts", {
        title: "Αποφρακτικά",
        products
    });
}

exports.sfouggariaSurmata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σφουγγάρια Σύρματα");

    res.status(200).render("displayProducts", {
        title: "Σφουγγάρια Σύρματα",
        products
    });
}

exports.xeskonopanaSfouggaropana = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξεσκονόπανα Σφουγγαρόπανα");

    res.status(200).render("displayProducts", {
        title: "Ξεσκονόπανα Σφουγγαρόπανα",
        products
    });
}

exports.gantiaOikiakhsXrhshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γάντια Οικιακής Χρήσης");

    res.status(200).render("displayProducts", {
        title: "Γάντια Οικιακής Χρήσης",
        products
    });
}

exports.sakoulesAporrimatwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σακούλες Απορριμάτων");

    res.status(200).render("displayProducts", {
        title: "Σακούλες Απορρυμάτων",
        products
    });
}

exports.skoupesSfouggaristresKouvades = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σκούπες Σφουγγαρίστρες Κουβάδες");

    res.status(200).render("displayProducts", {
        title: "Σκούπες Σφουγγαρίστρες Κουβάδες",
        products
    });
}

exports.aporrupantikaPiatwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Απορρυπαντικά Πιάτων",
        mainTitles: ["Υγρά Πιάτων", "Απορρυπαντικά Πλυντηρίου Πιάτων", "Αλάτι Συμπληρωματικά Πλύσης"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/ugra-piatwn",
                "/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/aporrupantika-plunthriou-piatwn",
                "/katharistika-xartika-eidh-oikiakhs/aporrupantika-piatwn/alati-sumplhrwmatika-plhshs"]
    });
}

exports.ugraPiatwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγρά Πιάτων");

    res.status(200).render("displayProducts", {
        title: "Υγρά Πιάτων",
        products
    });
}

exports.aporrupantikaPlunthriouPiatwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Απορρυπαντικά Πλυντηρίου Πιάτων");

    res.status(200).render("displayProducts", {
        title: "Απορρυπαντικά Πλυντηρίου Πιάτων",
        products
    });
}

exports.alatiSumplhrwmatikaPlhshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αλάτι Συμπληρωματικά Πλήσης");

    res.status(200).render("displayProducts", {
        title: "Αλάτι Συμπληρωματικά Πλύσης",
        products
    });
}

exports.plusimoRouxwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Πλύσιμο Ρούχων",
        mainTitles: ["Υγρά Πλυντηρίου", "Σκόνη Πλυντηρίου", "Ταμπλέτες Πλυντηρίου", "Για Πλύσιμο στο Χέρι",
                    "Μαλακτικά Ρούχων", "Λευκαντικά Ενισχυτικά", "Φύλαξη Ρούχων"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/ugra-plunthriou",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/skonh-plunthriou",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/tampletes-plunthriou",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/gia-plushmo-sto-xeri",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/malaktika-rouxwn",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/leukantika-enisxutika",
                "/katharistika-xartika-eidh-oikiakhs/plusimo-rouxwn/aposklurhntiko"]
    });
}

exports.ugraPlunthriou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγρά Πλυντηρίου");

    res.status(200).render("displayProducts", {
        title: "Υγρά Πλυντηρίου",
        products
    });
}

exports.skonhPlunthriou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σκόνη Πλυντηρίου");

    res.status(200).render("displayProducts", {
        title: "Σκόνη Πλυντηρίου",
        products
    });
}

exports.tampletesPlunthriou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ταμπλέτες Πλυντηρίου");

    res.status(200).render("displayProducts", {
        title: "Ταμπλέτες Πλυντηρίου",
        products
    });
}

exports.giaPlushmoStoXeri = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Πλύσιμο Στο Χέρι");

    res.status(200).render("displayProducts", {
        title: "Για Πλύσιμο στο Χέρι",
        products
    });
}

exports.malaktikaRouxwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαλακτικά Ρούχων");

    res.status(200).render("displayProducts", {
        title: "Μαλακτικά Ρούχων",
        products
    });
}

exports.leukantikaEnisxutika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λευκαντικά Ενισχυντικά");

    res.status(200).render("displayProducts", {
        title: "Λευκαντικά Ενισχυτικά",
        products
    });
}

exports.aposklurhntiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποσκλυρηντικό");

    res.status(200).render("displayProducts", {
        title: "Αποσκλυρηντικό",
        products
    });
}

exports.eidhSiderwmatosAplwmatos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ειδή Σιδερώματος Απλώματος");

    res.status(200).render("displayProducts", {
        title: "Είδη Σιδερώματος Απλώματος",
        products
    });
}

exports.xartiOikiakhsXrhshs = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Χαρτί Οικιακής Χρήσης",
        mainTitles: ["Χαρτί Υγείας", "Χαρτί Κουζίνας", "Χαρτοπετσέτες", "Χαρτομάντηλα", "Υγρομάντηλα"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xarti-ugeias",
                "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xarti-kouzinas",
                "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xartopetsetes",
                "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/xartomanthla",
                "/katharistika-xartika-eidh-oikiakhs/xarti-oikiakhs-xrhshs/ugromanthla"]
    });
}

exports.xartiYgeias = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαρτί Υγείας");

    res.status(200).render("displayProducts", {
        title: "Χαρτί Υγείας",
        products
    });
}

exports.xartiKouzinas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαρτί Κουζίνας");

    res.status(200).render("displayProducts", {
        title: "Χαρτί Κουζίνας",
        products
    });
}

exports.xartopetsetes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαρτοπετσέτες");

    res.status(200).render("displayProducts", {
        title: "Χαρτοπετσέτες",
        products
    });
}

exports.xartomanthla = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαρτομάντηλα");

    res.status(200).render("displayProducts", {
        title: "Χαρτομάντηλα",
        products
    });
}

exports.ugromanthla = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υγρομάντηλα");

    res.status(200).render("displayProducts", {
        title: "Υγρομάντηλα",
        products
    });
}

exports.entomoktonaEntomoapothutika = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Εντομοκτόνα Εντομοαπωθητικά",
        mainTitles: ["Εντομοαποθυτικά Χώρου", "Εντομοκτώνα", "Σκοροαπωθητικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/entomoapothutika-xwrou",
                "/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/entomoktwna",
                "/katharistika-xartika-eidh-oikiakhs/entomoktona-entomoapothutika/skoroapwthitika"]
    });
}

exports.entomoapothutikaXwrou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Εντομοαποθυτικά Χώρου");

    res.status(200).render("displayProducts", {
        title: "Εντομοαποθυτικά Χώρου",
        products
    });
}

exports.entomoktwna = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Εντομοκτόνα");

    res.status(200).render("displayProducts", {
        title: "Εντομοκτώνα",
        products
    });
}

exports.skoroapwthitika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σκοροαπωθητικά");

    res.status(200).render("displayProducts", {
        title: "Σκοροαπωθητικά",
        products
    });
}

exports.fulaxhRouxwn = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Φύλαξη Ρούχων",
        mainTitles: ["Αποσμητικά Ρούχων", "Κρεμάστρες", "Σακούλες Φύλαξης Ρούχων"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/aposmhtika-rouxwn",
                "/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/kremastres",
                "/katharistika-xartika-eidh-oikiakhs/fulaxh-rouxwn/sakoules-fulaxhs-rouxwn"]
    });
}

exports.aposmhtikaRouxwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αποσμητικά Ρούχων");

    res.status(200).render("displayProducts", {
        title: "Αποσμητικά Ρούχων",
        products
    });
}

exports.kremastres = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρεμάστρες");

    res.status(200).render("displayProducts", {
        title: "Κρεμάστρες",
        products
    });
}

exports.sakoulesFulaxhsRouxwn = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σακούλες Φύλαξης Ρούχων");

    res.status(200).render("displayProducts", {
        title: "Σακούλες Φύλαξης Ρούχων",
        products
    });
}

exports.arwmatikaKeria = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αρωματικά Κεριά",
        mainTitles: ["Αρωματικά Κεριά Χώρου", "Αρωματικά Κεριά Ρεσώ"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/arwmatika-keria/arwmatika-xwrou",
                "/katharistika-xartika-eidh-oikiakhs/arwmatika-keria/keria-resw"]
    });
}

exports.arwmatikaXwrou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αρωματικά Χώρου");

    res.status(200).render("displayProducts", {
        title: "Αρωματικά Κεριά Χώρου",
        products
    });
}

exports.keriaResw = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κεριά Ρεσώ");

    res.status(200).render("displayProducts", {
        title: "Αρωματικά Κεριά Ρεσώ",
        products
    });
}

exports.grafikhYlhAnalwsima = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Γραφική Ύλη Αναλώσιμα",
        mainTitles: ["Χαρτικά", "Γραφική Ύλη"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/grafikh-ulh-analwsima/xartika",
                "/katharistika-xartika-eidh-oikiakhs/grafikh-ulh-analwsima/grafikh-ulh"]
    });
}

exports.xartika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γραφική Ύλη");

    res.status(200).render("displayProducts", {
        title: "Χαρτικά",
        products
    });
}

exports.grafikhYlh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χαρτικά");

    res.status(200).render("displayProducts", {
        title: "Γραφική Ύλη",
        products
    });
}

exports.dwraPaixnidia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Δώρα Παιχνίδια");

    res.status(200).render("displayProducts", {
        title: "Δώρα Παιχνίδια",
        products
    });
}

exports.eidhAutokinhtou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "eidh-autokinhtou");

    res.status(200).render("displayProducts", {
        title: "Είδη Αυτοκινήτου",
        products
    });
}

exports.eidhKhpou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Είδη Κήπου");

    res.status(200).render("displayProducts", {
        title: "Είδη Κήπου",
        products
    });
}

exports.BBQTzaki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "BBQ Τζάκι");

    res.status(200).render("displayProducts", {
        title: "BBQ-tzaki",
        products
    });
}

exports.eidhKouzinasMpaniou = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Είδη Κουζίνας Μπάνιου",
        mainTitles: ["Μαγειρικά Σκεύη Κουζινικά", "Αλουμινόχαρτα Μεμβράνες", "Είδη μιας Χρήσης",
                    "Αξεσουάρ Μπάνιου", "Μπαταρίες", "Λάμπες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/mageirika-skeuh-kouzinika",
                "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/alouminoxarta-memvranes",
                "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/eidh-mias-xrhshs",
                "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/aksesouar-mpaniou",
                "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/mpataries",
                "/katharistika-xartika-eidh-oikiakhs/eidh-kouzinas-mpaniou/lampes"]
    });
}

exports.mageirikaSkeuhKouzinika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαγειρικά Σκεύη Κουζινικά");

    res.status(200).render("displayProducts", {
        title: "Μαγειρικά Σκεύη Κουζινικά",
        products
    });
}

exports.alouminoxartaMemvranes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αλουμινόχαρτα Μεμβράνες");

    res.status(200).render("displayProducts", {
        title: "Αλουμινόχαρτα Μεμβράνες",
        products
    });
}

exports.eidhMiasXrhshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Είδη Μιας Χρήσης");

    res.status(200).render("displayProducts", {
        title: "Είδη μιας Χρήσης",
        products
    });
}

exports.aksesouarMpaniou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αξεσουάρ Μπάνιου");

    res.status(200).render("displayProducts", {
        title: "Αξεσουάρ Μπάνιου",
        products
    });
}

exports.mpataries = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπαταρίες");

    res.status(200).render("displayProducts", {
        title: "Μπαταρίες",
        products
    });
}

exports.lampes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λάμπες");

    res.status(200).render("displayProducts", {
        title: "Λάμπες",
        products
    });
}