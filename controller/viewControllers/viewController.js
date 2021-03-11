const callAPI = require("./callAPI");
const Offers = require("../../model/offersModel");
const Products = require("../../model/productModel");

exports.index = async function(req, res) {
    
    const masoutisOffers = await Offers.find({stores: "Μασούτης", offerType: { $ne: "Web Only"}})
    .limit(5);

    const abOffers = await Offers.find({stores: "Βασιλόπουλος"})
    .limit(5);

    console.log(masoutisOffers.concat(abOffers));

    
    res.status(200).render("index", {
        selectedForYou: masoutisOffers.concat(abOffers)
    });
}

exports.search = async function(req, res) {
    const query = encodeURIComponent(req.query.query);

    const products = await Products.aggregate([ 
        { $match: { $text: { $search: decodeURIComponent(query) } } },
        { $group: { _id: { category: "$category.subCategory" }, totalProducts: { $sum: 1 }, image: { $first: "$imgLink" } } },
        { $sort: { totalProducts: -1 } },
        { $project: { "category": "$_id", "image": "$image", "totalProducts": "$totalProducts" , "_id":0 } } 
    ]);
    
    res.status(200).render("displayProductsCategories", {
        title: req.query.query,
        products,
        query
    });
}

exports.searchProducts = async function(req, res) {
    const products = await displaySearchResults(req);
    
    res.status(200).render("displayProducts", {
        title: req.query.query,
        products
    });
}

exports.login = function(req, res) {
    res.status(200).render("login");
}

exports.signup = function(req, res) {
    res.status(200).render("signup");
}

exports.trofhma = function(req, res) {
    res.status(200).render("base" ,{
        title: "Τρόφημα",
        mainTitles: ["Φρέσκο Κρέας Ψάρι",
                    "Οπωροπωλείο",
                    "Γαλακτοκομικά Είδη Ψυγείου",
                    "Τυριά Αλλαντικά Delicatessen",
                    "Τυποποιημένα Τρόφημα",
                    "Πρωινό Ροφήματα",
                    "Προιόντα Άρτου",
                    "Σνακς", "Διατροφή"],
        images: ["../images/τροφημα/φρεσκο_κρεας_ψαρι.jpg",
                "../images/τροφημα/οπωροπωλειο.png",
                "../images/τροφημα/γαλακτοκομεικα_ειδη_ψυγειου.jpg",
                "../images/τροφημα/τυρια_αλλαντικα_delicatessen.jpg",
                "../images/τροφημα/τυποποιημενα_τροφημα.jpg",
                "../images/τροφημα/πρωινο_ροφηματα.jpg",
                "../images/τροφημα/προιοντα_αρτου.jpg",
                "../images/τροφημα/σνακς.jpg",
                "../images/τροφημα/διατροφη/διατροφη.jpg"],
        hrefs: ["/fresko-kreas-kai-psari",
                "/opwropwleio",
                "/galaktokomika-kai-eidh-psugeiou",
                "/turia-allantika-delicatessen",
                "/tupopoihmena-trofhma",
                "/prwino-kai-rofhmata",
                "/proionta-artou",
                "/snacks",
                "/diatrofh"]
    });
}

exports.kava = function(req, res) {
    res.status(200).render("base" ,{
        title: "Κάβα",
        mainHeader: "Κάβα"
    });
}

exports.proswpikhFrontida = function(req, res) {
    res.status(200).render("base" ,{
        title: "Προσωπική Φροντίδα",
        mainHeader: "Προσωπική Φροντίδα"
    });
}

exports.katoikidia = function(req, res) {
    res.status(200).render("base" ,{
        title: "Κατοικίδια",
        mainHeader: "Κατοικίδια"
    });
}

exports.katharistikaΧartikaΕidhΟikiakhs = function(req, res) {
    res.status(200).render("base" ,{
        title: "Καθαριστικά Χαρτικά Είδη Οικιακής",
        mainHeader: "Καθαριστικά Χαρτικά Είδη Οικιακής"
    });
}

exports.offers = async function(req, res) {
    const products = await getOffers(req);

    res.status(200).render("displayProducts", {
        title: "Επιλεγμένες Προσφορές",
        products
    });
}

exports.masoutisOffers = async function(req, res) {
    const products = await getOffers(req);

    res.status(200).render("displayProducts", {
        title: "Επιλεγμένες Προσφορές",
        products
    });
}

exports.brochures = function(req, res) {
    res.status(200).render("brochures");
}

exports.masoutisBrochures = function(req, res) {
    src = "https://onedrive.live.com/embed?cid=664EF9AA428600E7&resid=664EF9AA428600E7%215090&authkey=AFzqPjVXQZOiUQs&em=2";
    res.status(200).render("displayBrochures", {
        src
    });
}

exports.abBrochures = function(req, res) {
    src = "https://onedrive.live.com/embed?cid=664EF9AA428600E7&resid=664EF9AA428600E7%215091&authkey=ABuCTTrdZC1BOik&em=2";
    res.status(200).render("displayBrochures", {
        src
    });
}

exports.stores = function(req, res) {
    res.status(200).render("stores");
}

exports.communication = function(req, res) {
    res.status(200).render("communication");
}

exports.jobSearch = function(req, res) {
    res.status(200).render("jobSearch");
}

async function getOffers(req) {
    // const cookiesArray = Object.values(req.cookies);
    const cookies = req.cookies || {};
    // console.log("cookies");
    // console.log(cookies);

    const offerType = [];
    const stores = [];

    for(key in req.cookies){
        if(key.startsWith("offer")){
            offerType.push(cookies[key]);
        } else if(key.startsWith("stores")){
            stores.push(cookies[key]);
        }
    }
    // console.log("offerType");
    // console.log(offerType);
    // console.log("storeName");
    // console.log(storeName);
    
    const query = {};
    
    if(offerType.length > 0){
        query.offerType = offerType;
    }
    
    if(stores.length > 0){
        query.stores = stores;
    }
    console.log("query");
    console.log(query);
        
    // In order not to delete parameters from req.query, we make a new object and not a copy
    // const queryCopy = {...req.query};
    // const excludedFields = ["page", "sort"];
    // excludedFields.forEach(el => delete queryCopy[el])
    const page = parseInt(req.query.page || 1); 
    const sort = req.query.sort || "discountPrice";
    const itemsPerPage = 10;
    const offerTypes = await Offers.aggregate([
        { $group: { _id: "$offerType" } },
        { $sort: { "_id": 1 } }
    ]);
    const storeNames = await Offers.aggregate([
        { $group: { _id: "$stores" } },
        { $sort: { "_id": 1 } }
    ]); 

    let totalProducts = await Offers.find(query).countDocuments();
    // console.log(`totalProducts= ${totalProducts}`);
    // console.log(`queryCopy`);
    // console.log(queryCopy);
    // console.log(`page= ${page}`);
    // console.log(`itemsPerPage= ${itemsPerPage}`);
    
    let products = await Offers.find(query)
            .skip((page - 1) * itemsPerPage)
            .limit(itemsPerPage) 
            .sort(sort);

    // if(cookiesArray.length !== 0) {
    //     totalProducts = await Offers.countDocuments({ offerType: { $in: cookiesArray}, storeName: { $in: cookiesArray } });
    //     if(totalProducts !== 0) {
    //         products = await Offers.find({ offerType: { $in: cookiesArray}, storeName: { $in: cookiesArray } })
    //         .skip((page - 1) * itemsPerPage)
    //         .limit(itemsPerPage) 
    //         .sort(sort);
    //     } else {
    //         totalProducts = await Offers.countDocuments({$or: [
    //             {offerType: { $in: cookiesArray}},
    //             {storeName: { $in: cookiesArray }}
    //         ]});
    //         products = await Offers.find({$or: [
    //             {offerType: { $in: cookiesArray}},
    //             {storeName: { $in: cookiesArray }}
    //         ]})
    //         .skip((page - 1) * itemsPerPage)
    //         .limit(itemsPerPage) 
    //         .sort(sort);
    //     }
        
    // } else {
    //     totalProducts = await Offers.countDocuments();
    //     products = await Offers.find()
    //     .skip((page - 1) * itemsPerPage)
    //     .limit(itemsPerPage) 
    //     .sort(sort);
    // }
    
    return {
        category: "offers",
        offerTypes,
        storeNames,
        products,
        sort,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalProducts,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalProducts / itemsPerPage)
    }
}

async function displaySearchResults(req) {
    const query = decodeURIComponent(req.query.query);
    const category = req.query.category;
    const page = parseInt(req.query.page || 1); 
    const sort = req.query.sort || "discountPrice";
    const itemsPerPage = 10;
    const storeNames = await Products.aggregate([
        { $match: { "category.subCategory": category } },
        { $group: { _id: "$storeName" } }
    ]);

    const totalProducts = await Products.countDocuments({ $text: { $search: query }, "category.subCategory": category });
    const products = await Products.find({ $text: { $search: query }, "category.subCategory": category })
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage) 
        .sort(sort);
    console.log(products);    
    return {
        category,
        storeNames,
        title: query,
        products,
        sort,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalProducts,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalProducts / itemsPerPage)
    }
}