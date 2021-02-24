const Products = require("../../model/productModel");

exports.search = async function(req, res, next) {
    const query = req.query.query;

    const products = await Products.aggregate([
        {
            $match: {
                $text: {
                    $search: query
                }
            }
        }
    ]);
    
    
    // ,
    //     {
    //         $group: {
    //             _id: {
    //                 category: "$category.category"
    //             },
    //             firstImgLink: { $first: "$imgLink" },
    //             totalProducts: {
    //                 $sum: 1
    //             } 
    //         }
    //     },
    //     {
    //         $sort: {
    //             totalProducts: -1
    //         }
    //     }
    // find({ $text: { $search: query } }
    //                                         , { score: { $meta : "textScore"} })
    //                                 .sort({ score: { $meta: "textScore" } });

    res.status(200).json({
        message: "success",
        length: products.length,    
        products: products
    });
}