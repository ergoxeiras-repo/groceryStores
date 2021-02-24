const Product = require("../../model/productModel");
const throwsAnError = require("../../utils/throwsAnError");

exports.fetchSingleProduct = async function(req, res, next) {
    const id = req.params.id;

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
            next(new throwsAnError("Η σελίδα που ψάχνεται δεν υπάρχει", 404));
        }

        res.status(200).json({
            message: "success",
            product:product
        });

    } catch (error) {
        console.log(error);
    }
}