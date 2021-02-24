const getProducts = require("./getProducts");

exports.tupopoihmenaTrofhma = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Τυποποιημένα Τρόφημα",
        mainTitles: ["Ζυμαρικά", "Ρύζι", "Όσπρια", "Λάδι", "Κονσέρβες", "Αλεύρι Σιμιγδάλι",
                    "Είδη Ζαχαροπλαστικής", "Ζάχαρη", "Μπαχαρικά Αλάτι", "Σάλτσες Dressing",
                    "Ξύδι Χυμός Λενομιού", "Σούπες Κύβοι Πουρές"],
        images: ["../images/τροφημα/τυποποιημενα_τροφημα/ζυμαρικα.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/ρυζι.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/οσπρια.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/λαδι.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/κονσερβες.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/αλευρι_σιμιγδαλι.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/ειδη_ζαχαροπλαστικης.png", 
                "../images/τροφημα/τυποποιημενα_τροφημα/ζαχαρη.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/αλατι_μπαχαρικα.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/σαλτσες_dressing.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/ξυδι_χυμος_λεμονιου.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα/φρεσκοι_ζωμοι.png"],
        hrefs: ["/tupopoihmena-trofhma/zymarika",
                "/tupopoihmena-trofhma/ruzi",
                "/tupopoihmena-trofhma/ospria",
                "/tupopoihmena-trofhma/ladi",
                "/tupopoihmena-trofhma/konserves",
                "/tupopoihmena-trofhma/aleuri-simigdali",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs",
                "/tupopoihmena-trofhma/zaxarh",
                "/tupopoihmena-trofhma/mpaxarika-alati",
                "/tupopoihmena-trofhma/saltses-dressing",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures",],
        subTitles: [
                ["Μακαρόνια", "Διάφορα Ζυμαρικά", "Παραδοσιακά"],
                ["Καρολίνα", "Γλασέ", "Νυχάκι", "Parboiled", "Μπασμάτι", "Jasmine", "Καστανό",
                    "Άγριο Εξωτικό", "Ριζότο"],
                ["Φασόλια", "Φακές", "Ρεβύθια", "Φάβα", "Κουκιά", "Σιτάρι"],
                ["Ελαιόλαδο", "Πυρηνέλαιο", "Σπορέλαιο", "Μαγειρικά Λύπη"],
                ["Μανητάρια", "Λαχανικά", "Ψάρι", "Κρέας", "Κομπόστες", "Έτοιμα Φαγητά"],
                ["Για όλες τις χρήσεις", "Σκληρό Αλεύρι", "Μαλακό Αλεύρι", "Farina", "Ολικής Άλεσης", "Σιμιγδάλι"],
                ["Κουβερτούρα", "Ζάχαρη Άχνη", "Βανίλιες", "Κόρν Φλάουρ", "Μπέικιν Πάουντερ",
                    "Βάσεις Παντεσπάνι", "Ζελέ", "Κρέμες Σαντιγί", "Έτοιμα Μείγματα", "Χρώμα Ζαχαροπλαστικής", "Μαγιά",
                    "διάφορα-υλικά"],
                ["Λευκή", "Ακατέργαστη", "Υποκατάστατα Ζάχαρης"],
                ["Αλάτι", "Πιπέρι", "Μπαχαρικά"],
                ["Κέτσαπ", "Μουστάρδα", "Μαγιονέζα", "Για ζυμαρικά", "Για κρέας", "Για Ψάρι",
                    "Για Σαλάτες"],
                ["Ξύδι", "Ξύδι Βαλσάμικο", "Κρέμα Βαλσάμικο", "Χυμός Λεμονιού"],
                ["Κύβοι Ζωμός", "Πουρές", "Μπεσαμέλ", "Σούπες Στιγμής"]
        ],
        subHrefs: [
                ["/tupopoihmena-trofhma/zymarika/makaronia",
                "/tupopoihmena-trofhma/zymarika/diafora-zumarika",
                "/tupopoihmena-trofhma/zymarika/paradosiaka",],
                ["/tupopoihmena-trofhma/ruzi/karolina",
                "/tupopoihmena-trofhma/ruzi/glase",
                "/tupopoihmena-trofhma/ruzi/nuxaki",
                "/tupopoihmena-trofhma/ruzi/parboiled",
                "/tupopoihmena-trofhma/ruzi/basmati",
                "/tupopoihmena-trofhma/ruzi/jasmine",
                "/tupopoihmena-trofhma/ruzi/kastano",
                "/tupopoihmena-trofhma/ruzi/agrio-kai-exwtiko",
                "/tupopoihmena-trofhma/ruzi/rizoto",],
                ["/tupopoihmena-trofhma/ospria/fasolia",
                "/tupopoihmena-trofhma/ospria/fakes",
                "/tupopoihmena-trofhma/ospria/revuthia",
                "/tupopoihmena-trofhma/ospria/fava",
                "/tupopoihmena-trofhma/ospria/koukia",
                "/tupopoihmena-trofhma/ospria/sitari"],
                ["/tupopoihmena-trofhma/ladi/elaiolado",
                "/tupopoihmena-trofhma/ladi/purhnelaio",
                "/tupopoihmena-trofhma/ladi/sporelaio",
                "/tupopoihmena-trofhma/ladi/mageirika-luph"],
                ["/tupopoihmena-trofhma/konserves/manitaria",
                "/tupopoihmena-trofhma/konserves/laxanika",
                "/tupopoihmena-trofhma/konserves/psari",
                "/tupopoihmena-trofhma/konserves/kreas",
                "/tupopoihmena-trofhma/konserves/kompostes",
                "/tupopoihmena-trofhma/konserves/etoima-faghta"],
                ["/tupopoihmena-trofhma/aleuri-simigdali/gia-oles-tis-xrhseis",
                "/tupopoihmena-trofhma/aleuri-simigdali/sklhro",
                "/tupopoihmena-trofhma/aleuri-simigdali/malako",
                "/tupopoihmena-trofhma/aleuri-simigdali/farina",
                "/tupopoihmena-trofhma/aleuri-simigdali/olikhs-aleshs",
                "/tupopoihmena-trofhma/aleuri-simigdali/simigdali"],
                ["/tupopoihmena-trofhma/eidh-zaxaroplastikhs/kouvertoura",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/zaxarh-axnh",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/vanilies",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/korn-flaour",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/mpeikin-paounter",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/vaseis-pantespani",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/zele",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/kremes-santigi",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/etoima-meigmata",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/xrwma-zaxaroplastikhs",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/magia",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/diafora-ulika"],
                ["/tupopoihmena-trofhma/zaxarh/leukh",
                "/tupopoihmena-trofhma/zaxarh/akatergasth",
                "/tupopoihmena-trofhma/zaxarh/upokatastata-zaxarhs"],
                ["/tupopoihmena-trofhma/mpaxarika-alati/alati",
                "/tupopoihmena-trofhma/mpaxarika-alati/piperi",
                "/tupopoihmena-trofhma/mpaxarika-alati/mpaxarika"],
                ["/tupopoihmena-trofhma/saltses-dressing/ketsap",
                "/tupopoihmena-trofhma/saltses-dressing/moustarda",
                "/tupopoihmena-trofhma/saltses-dressing/magioneza",
                "/tupopoihmena-trofhma/saltses-dressing/gia-zumarika",
                "/tupopoihmena-trofhma/saltses-dressing/gia-kreas",
                "/tupopoihmena-trofhma/saltses-dressing/gia-psari",
                "/tupopoihmena-trofhma/saltses-dressing/gia-salates"],
                ["/tupopoihmena-trofhma/xudi-xumos-lemoniou/xudi",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/xudi-valsamiko",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/krema-valsamiko",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/xymos-lemoniou"],
                ["/tupopoihmena-trofhma/soupes-kuvoi-poures/kuvoi-zwmos",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/poures",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/mpesamel",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/soupes-stigmhs"]
        ]
    });
}

exports.zymarika = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Ζυμαρικά",
        mainTitles: ["Μακαρόνια", "Διάφορα Ζυμαρικά", "Παραδοσιακά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/zymarika/makaronia",
                "/tupopoihmena-trofhma/zymarika/diafora-zumarika",
                "/tupopoihmena-trofhma/zymarika/paradosiaka",]
    });
}

exports.makaronia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μακαρόνια");

    res.status(200).render("displayProducts", {
        title: "Μακαρόνια",
        products
    });
}

exports.diaforaZumarika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Διάφορα Ζυμαρικά");

    res.status(200).render("displayProducts", {
        title: "Διάφορα Ζυμαρικά",
        products
    });
}

exports.paradosiaka = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Παραδοσιακά");

    res.status(200).render("displayProducts", {
        title: "Παραδοσιακά",
        products
    });
}

exports.ruzi = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Ρύζι",
        mainTitles: ["Καρολίνα", "Γλασέ", "Νυχάκι", "Parboiled", "Μπασμάτι", "Jasmine", "Καστανό",
                    "Άγριο Εξωτικό", "Ριζότο"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/ruzi/karolina",
                "/tupopoihmena-trofhma/ruzi/glase",
                "/tupopoihmena-trofhma/ruzi/nuxaki",
                "/tupopoihmena-trofhma/ruzi/parboiled",
                "/tupopoihmena-trofhma/ruzi/basmati",
                "/tupopoihmena-trofhma/ruzi/jasmine",
                "/tupopoihmena-trofhma/ruzi/kastano",
                "/tupopoihmena-trofhma/ruzi/agrio-kai-exwtiko",
                "/tupopoihmena-trofhma/ruzi/rizoto",]
    });
}

exports.karolina = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καρολίνα");

    res.status(200).render("displayProducts", {
        title: "Καρολίνα",
        products
    });
}

exports.glase = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Γλασέ");

    res.status(200).render("displayProducts", {
        title: "Γλασέ",
        products
    });
}

exports.nuxaki = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Νυχάκι");

    res.status(200).render("displayProducts", {
        title: "Νυχάκι",
        products
    });
}

exports.parboiled = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Parboiled");

    res.status(200).render("displayProducts", {
        title: "Parboiled",
        products
    });
}

exports.basmati = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπασμάτι");

    res.status(200).render("displayProducts", {
        title: "Μπασμάτι",
        products
    });
}

exports.jasmine = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Jasmine");

    res.status(200).render("displayProducts", {
        title: "Jasmine",
        products
    });
}

exports.kastano = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Καστανό");

    res.status(200).render("displayProducts", {
        title: "Καστανό",
        products
    });
}

exports.agrioKaiExwtiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Άγριο Εξωτικό");

    res.status(200).render("displayProducts", {
        title: "Άγριο Εξωτικό",
        products
    });
}

exports.rizoto = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ριζότο");

    res.status(200).render("displayProducts", {
        title: "Ριζότο",
        products
    });
}

exports.ospria = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Όσπρια",
        mainTitles: ["Φασόλια", "Φακές", "Ρεβύθια", "Φάβα", "Κουκιά", "Σιτάρι"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/ospria/fasolia",
                "/tupopoihmena-trofhma/ospria/fakes",
                "/tupopoihmena-trofhma/ospria/revuthia",
                "/tupopoihmena-trofhma/ospria/fava",
                "/tupopoihmena-trofhma/ospria/koukia",
                "/tupopoihmena-trofhma/ospria/sitari"]
    });
}

exports.fasolia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φασόλια");

    res.status(200).render("displayProducts", {
        title: "Φασόλια",
        products
    });
}

exports.fakes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φακές");

    res.status(200).render("displayProducts", {
        title: "Φακές",
        products
    });
}

exports.revuthia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ρεβύθια");

    res.status(200).render("displayProducts", {
        title: "Ρεβύθια",
        products
    });
}

exports.fava = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φάβα");

    res.status(200).render("displayProducts", {
        title: "Φάβα",
        products
    });
}

exports.koukia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κουκιά");

    res.status(200).render("displayProducts", {
        title: "Κουκιά",
        products
    });
}

exports.sitari = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σιτάρι");

    res.status(200).render("displayProducts", {
        title: "Σιτάρι",
        products
    });
}

exports.ladi = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Λάδι",
        mainTitles: ["Ελαιόλαδο", "Πυρηνέλαιο", "Σπορέλαιο", "Μαγειρικά Λύπη"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/ladi/elaiolado",
                "/tupopoihmena-trofhma/ladi/purhnelaio",
                "/tupopoihmena-trofhma/ladi/sporelaio",
                "/tupopoihmena-trofhma/ladi/mageirika-luph"]
    });
}

exports.elaiolado = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ελαιόλαδο");

    res.status(200).render("displayProducts", {
        title: "Ελαιόλαδο",
        products
    });
}

exports.purhnelaio = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πυρηνέλαιο");

    res.status(200).render("displayProducts", {
        title: "Πυρηνέλαιο",
        products
    });
}

exports.sporelaio = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σπορέλαιο");

    res.status(200).render("displayProducts", {
        title: "Σπορέλαιο",
        products
    });
}

exports.mageirikaLuph = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαγειρικά Λίπη");

    res.status(200).render("displayProducts", {
        title: "Μαγειρικά Λύπη",
        products
    });
}

exports.konserves = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Κονσέρβες",
        mainTitles: ["Μανητάρια", "Λαχανικά", "Ψάρι", "Κρέας", "Κομπόστες", "Έτοιμα Φαγητά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/konserves/manitaria",
                "/tupopoihmena-trofhma/konserves/laxanika",
                "/tupopoihmena-trofhma/konserves/psari",
                "/tupopoihmena-trofhma/konserves/kreas",
                "/tupopoihmena-trofhma/konserves/kompostes",
                "/tupopoihmena-trofhma/konserves/etoima-faghta"]
    });
}

exports.manitaria = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μανιτάρια");

    res.status(200).render("displayProducts", {
        title: "Μανητάρια",
        products
    });
}

exports.laxanika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λαχανικά");

    res.status(200).render("displayProducts", {
        title: "Λαχανικά",
        products
    });
}

exports.psari = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ψάρι");

    res.status(200).render("displayProducts", {
        title: "Ψάρι",
        products
    });
}

exports.kreas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρέας");

    res.status(200).render("displayProducts", {
        title: "Κρέας",
        products
    });
}

exports.kompostes = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κομπόστες");

    res.status(200).render("displayProducts", {
        title: "Κομπόστες",
        products
    });
}

exports.etoimaFaghta = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Έτοιμα Φαγητά");

    res.status(200).render("displayProducts", {
        title: "Έτοιμα Φαγητά",
        products
    });
}

exports.aleuriSimigdali = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Αλεύρι Σιμιγδάλι",
        mainTitles: ["Για όλες τις χρήσεις", "Σκληρό Αλεύρι", "Μαλακό Αλεύρι", "Farina", "Ολικής Άλεσης", "Σιμιγδάλι"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/aleuri-simigdali/gia-oles-tis-xrhseis",
                "/tupopoihmena-trofhma/aleuri-simigdali/sklhro",
                "/tupopoihmena-trofhma/aleuri-simigdali/malako",
                "/tupopoihmena-trofhma/aleuri-simigdali/farina",
                "/tupopoihmena-trofhma/aleuri-simigdali/olikhs-aleshs",
                "/tupopoihmena-trofhma/aleuri-simigdali/simigdali"]
    });
}

exports.giaOlesTisXrhseis = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Όλες Τις Χρήσεις");

    res.status(200).render("displayProducts", {
        title: "Για Όλες Τις Χρήσεις",
        products
    });
}

exports.sklhro = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σκληρό");

    res.status(200).render("displayProducts", {
        title: "Σκληρό Αλεύρι",
        products
    });
}

exports.malako = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαλακό");

    res.status(200).render("displayProducts", {
        title: "Μαλακό Αλεύρι",
        products
    });
}

exports.farina = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Φαρίνα");

    res.status(200).render("displayProducts", {
        title: "Farina",
        products
    });
}

exports.olikhsAleshs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ολικής Άλεσης");

    res.status(200).render("displayProducts", {
        title: "Ολικής Άλεσης",
        products
    });
}

exports.simigdali = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σιμιγδάλη");

    res.status(200).render("displayProducts", {
        title: "Σιμιγδάλι",
        products
    });
}

exports.eidhZaxaroplastikhs = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Είδη Ζαχαροπλαστικής",
        mainTitles: ["Κουβερτούρα", "Ζάχαρη Άχνη", "Βανίλιες", "Κόρν Φλάουρ", "Μπέικιν Πάουντερ",
                    "Βάσεις Παντεσπάνι", "Ζελέ", "Κρέμες Σαντιγί", "Έτοιμα Μείγματα", "Χρώμα Ζαχαροπλαστικής", "Μαγιά",
                    "διάφορα-υλικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/eidh-zaxaroplastikhs/kouvertoura",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/zaxarh-axnh",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/vanilies",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/korn-flaour",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/mpeikin-paounter",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/vaseis-pantespani",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/zele",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/kremes-santigi",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/etoima-meigmata",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/xrwma-zaxaroplastikhs",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/magia",
                "/tupopoihmena-trofhma/eidh-zaxaroplastikhs/diafora-ulika"]
    });
}

exports.kouvertoura = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κουβερτούρα");

    res.status(200).render("displayProducts", {
        title: "Κουβερτούρα",
        products
    });
}

exports.zaxarhAxnh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ζάχαρη Άχνη");

    res.status(200).render("displayProducts", {
        title: "Ζάχαρη Άχνη",
        products
    });
}

exports.vanilies = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βανίλιες");

    res.status(200).render("displayProducts", {
        title: "Βανίλιες",
        products
    });
}

exports.kornFlaour = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κόρν Φλάουρ");

    res.status(200).render("displayProducts", {
        title: "Κόρν Φλάουρ",
        products
    });
}

exports.mpeikinPaounter = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπέικιν Πάουντερ");

    res.status(200).render("displayProducts", {
        title: "Μπέικιν Πάουντερ",
        products
    });
}

exports.vaseisPantespani = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Βάσεις Παντεσπάνι");

    res.status(200).render("displayProducts", {
        title: "Βάσεις Παντεσπάνι",
        products
    });
}

exports.zele = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ζελέ");

    res.status(200).render("displayProducts", {
        title: "Ζελέ",
        products
    });
}

exports.kremesSantigi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρέμες Σαντιγί");

    res.status(200).render("displayProducts", {
        title: "Κρέμες Σαντιγί",
        products
    });
}

exports.etoimaMeigmata = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Έτοιμα Μείγματα");

    res.status(200).render("displayProducts", {
        title: "Έτοιμα Μείγματα",
        products
    });
}

exports.xrwmaZaxaroplastikhs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χρώμα Ζαχαροπλαστικής");

    res.status(200).render("displayProducts", {
        title: "Χρώμα Ζαχαροπλαστικής",
        products
    });
}

exports.magia = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαγιά");

    res.status(200).render("displayProducts", {
        title: "Μαγιά",
        products
    });
}

exports.diaforaYlika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Διάφορα Υλικά");

    res.status(200).render("displayProducts", {
        title: "Διάφορα Υλικά",
        products
    });
}

exports.zaxarh = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Ζάχαρη",
        mainTitles: ["Λευκή", "Ακατέργαστη", "Υποκατάστατα Ζάχαρης"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/zaxarh/leukh",
                "/tupopoihmena-trofhma/zaxarh/akatergasth",
                "/tupopoihmena-trofhma/zaxarh/upokatastata-zaxarhs"]
    });
}

exports.leukh = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Λευκή");

    res.status(200).render("displayProducts", {
        title: "Λευκή",
        products
    });
}

exports.akatergasth = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ακατέργαστη");

    res.status(200).render("displayProducts", {
        title: "Ακατέργαστη",
        products
    });
}

exports.upokatastataZaxarhs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Υποκατάστατα Ζάχαρης");

    res.status(200).render("displayProducts", {
        title: "Υποκατάστατα Ζάχαρης",
        products
    });
}

exports.mpaxarikaAlati = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Μπαχαρικά Αλάτι",
        mainTitles: ["Αλάτι", "Πιπέρι", "Μπαχαρικά"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/mpaxarika-alati/alati",
                "/tupopoihmena-trofhma/mpaxarika-alati/piperi",
                "/tupopoihmena-trofhma/mpaxarika-alati/mpaxarika"]
    });
}

exports.alati = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Αλάτι");

    res.status(200).render("displayProducts", {
        title: "Αλάτι",
        products
    });
}

exports.piperi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πιπέρι");

    res.status(200).render("displayProducts", {
        title: "Πιπέρι",
        products
    });
}

exports.mpaxarika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπαχαρικά");

    res.status(200).render("displayProducts", {
        title: "Μπαχαρικά",
        products
    });
}

exports.saltsesDressing = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Σάλτσες Dressing",
        mainTitles: ["Κέτσαπ", "Μουστάρδα", "Μαγιονέζα", "Για ζυμαρικά", "Για κρέας", "Για Ψάρι",
                    "Για Σαλάτες"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/saltses-dressing/ketsap",
                "/tupopoihmena-trofhma/saltses-dressing/moustarda",
                "/tupopoihmena-trofhma/saltses-dressing/magioneza",
                "/tupopoihmena-trofhma/saltses-dressing/gia-zumarika",
                "/tupopoihmena-trofhma/saltses-dressing/gia-kreas",
                "/tupopoihmena-trofhma/saltses-dressing/gia-psari",
                "/tupopoihmena-trofhma/saltses-dressing/gia-salates"]
    });
}

exports.ketsap = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κέτσαπ");

    res.status(200).render("displayProducts", {
        title: "Κέτσαπ",
        products
    });
}

exports.moustarda = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπουστάρδα");

    res.status(200).render("displayProducts", {
        title: "Μουστάρδα",
        products
    });
}

exports.magioneza = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μαγιονέζα");

    res.status(200).render("displayProducts", {
        title: "Μαγιονέζα",
        products
    });
}

exports.giaZumarika = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Ζυμαρικά");

    res.status(200).render("displayProducts", {
        title: "Για ζυμαρικά",
        products
    });
}

exports.giaKreas = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Κρέας");

    res.status(200).render("displayProducts", {
        title: "Για κρέας",
        products
    });
}

exports.giaPsari = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Ψάρι");

    res.status(200).render("displayProducts", {
        title: "Για Ψάρι",
        products
    });
}

exports.giaSalates = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Για Σαλάτες");

    res.status(200).render("displayProducts", {
        title: "Για Σαλάτες",
        products
    });
}

exports.xudiXumosLemoniou = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Σάλτσες Dressing",
        mainTitles: ["Ξύδι", "Ξύδι Βαλσάμικο", "Κρέμα Βαλσάμικο", "Χυμός Λεμονιού"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/xudi-xumos-lemoniou/xudi",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/xudi-valsamiko",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/krema-valsamiko",
                "/tupopoihmena-trofhma/xudi-xumos-lemoniou/xymos-lemoniou"]
    });
}

exports.xudi = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξύδι");

    res.status(200).render("displayProducts", {
        title: "Ξύδι",
        products
    });
}

exports.xudiValsamiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Ξύδι Βαλσάμικο");

    res.status(200).render("displayProducts", {
        title: "Ξύδι Βαλσάμικο",
        products
    });
}

exports.kremaValsamiko = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κρεμα Βαλσάμικο");

    res.status(200).render("displayProducts", {
        title: "Κρέμα Βαλσάμικο",
        products
    });
}

exports.xymosLemoniou = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Χυμός Λεμονιού");

    res.status(200).render("displayProducts", {
        title: "Χυμός Λεμονιού",
        products
    });
}

exports.soupesKuvoiPoures = async function(req, res, next) {
    res.status(200).render("base" ,{
        title: "Σάλτσες Dressing",
        mainTitles: ["Κύβοι Ζωμός", "Πουρές", "Μπεσαμέλ", "Σούπες Στιγμής"],
        images: ["../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg", "../images/food.jpg",
                "../images/food.jpg", "../images/food.jpg"],
        hrefs: ["/tupopoihmena-trofhma/soupes-kuvoi-poures/kuvoi-zwmos",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/poures",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/mpesamel",
                "/tupopoihmena-trofhma/soupes-kuvoi-poures/soupes-stigmhs"]
    });
}

exports.kuvoiZwmos = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Κύβοι Ζωμός");

    res.status(200).render("displayProducts", {
        title: "Κύβοι Ζωμός",
        products
    });
}

exports.poures = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Πουρές");

    res.status(200).render("displayProducts", {
        title: "Πουρές",
        products
    });
}

exports.mpesamel = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Μπεσαμέλ");

    res.status(200).render("displayProducts", {
        title: "Μπεσαμέλ",
        products
    });
}

exports.soupesStigmhs = async function(req, res, next) {
    const products = await getProducts.getProducts(req, "Σούπες Στιγμής");

    res.status(200).render("displayProducts", {
        title: "Σούπες Στιγμής",
        products
    });
}