const Store = require("../../model/StoreModel");

exports.getAllStores = async function(req, res, next) {
    try {
        const stores = await Store.find();
        res.status(200).json({
            message: "success",
            stores: stores
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getStoresByName = async function(req, res, next) {
    const { name } = req.body;
    try {
        const stores = await StoreLocation.find({name: name});
        res.status(200).json({
            message: "success",
            stores: stores
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getStoresByCity = async function(req, res, next) {
    const { city } = req.body;
    try {
        const stores = await StoreLocation.find({city: city});
        res.status(200).json({
            message: "success",
            stores: stores
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getStoresByCityAndName = async function(req, res, next) {
    const { city, name } = req.body;
    try {
        const stores = await StoreLocation.find({city: city, name: name});
        res.status(200).json({
            message: "success",
            stores: stores
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleStore = async function(req, res, next) {
    const id = req.params.id;

    try {
        const store = await StoreLocation.findById({_id:id})
                                .populate({
                                    path: "reviews",
                                    populate: {
                                        path: "userReview"
                                    }
                                })
                                .then();                     

        if(!store) {
            next(new throwsAnError("Η σελίδα που ψάχνεται δεν υπάρχει", 404));
        }

        res.status(200).json({
            message: "success",
            store: store
        });

    } catch (error) {
        console.log(error);
    }
}