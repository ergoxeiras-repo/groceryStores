const Product = require("../model/productModel");
const ThrowsAnError = require("../utils/throwsAnError");

exports.fetchSingleProduct = async function(req, res, next) {
    const id = req.params.id;
    console.log(id);

    try {
        const product = await Product.findById({_id:id})
                                .populate({
                                    path: "reviews",
                                    populate: {
                                        path: "userReview"
                                    }
                                })
                                .then();                     


        if(!product) {
            next(new ThrowsAnError("Το προιόν που αναχητήσατε δεν υπάρχει", 404));
        }

        res.status(200).json({
            message: "success",
            product:product
        });

    } catch (error) {
        next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
    }
}