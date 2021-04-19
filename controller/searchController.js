const Products = require("../model/productModel");

exports.search = async function(req, res, next) {
    const query = req.query.query;

    try{
        const products = await Products.find(
            {
                $text: {
                    $search: query
                }
            },
            {
                score: {
                    $meta: "textScore"
                }
            }
        )
        .sort(
            {
                score: {
                    $meta: "textScore"
                }
            }
        )

        res.status(200).json({
            message: "success",
            length: products.length,    
            products: products
        });
    } catch(error) {
        next(new ThrowsAnError("Η σελίδα που αναζητήσατε δεν υπάρχει", 404));
    }
}