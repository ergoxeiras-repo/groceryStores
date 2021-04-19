const Product = require("../model/productModel");
const ThrowsAnError = require("../utils/throwsAnError");

async function getProductsByCategory(req, res, mainCategory, category="", subCategory="") {
    let products = [];
    const page = parseInt(req.query.page || 1); 
    const sort = req.query.sort || "discountPrice";
    const itemsPerPage = 10;
    
    if(category === "") {
        try {
            if(req.query.sort) {
                products = await Product.find({"category.mainCategory":mainCategory})
                .sort(req.query.sort);
            } else {
                products = await Product.find({"category.mainCategory":mainCategory})
                .sort("discountPrice");
            }
            
            res.status(200).json({
                message: "success",
                products: products
            });
        } catch (error) {
            next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
        }
    } else if(subCategory === "") {
        try {
            if(req.query.sort) {
                products = await Product.find({"category.category":category})
                .sort(req.query.sort);
            } else {
                products = await Product.find({"category.category":category})
                .sort("discountPrice");
            }
            
            res.status(200).json({
                message: "success",
                products: products
            });
        } catch (error) {
            next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
        }
    } else {
        try {
            const totalProducts = await Product.countDocuments({"category.subCategory":subCategory});
            products = await Product.find({"category.subCategory":subCategory})
                .skip((page - 1) * itemsPerPage)
                .limit(itemsPerPage) 
                .sort(sort);
            
            res.status(200).json({
                message: "success",
                products,
                sort,
                currentPage: page,
                hasNextPage: itemsPerPage * page < totalProducts,
                hasPreviousPage: page > 1,
                nextPage: page + 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalProducts / itemsPerPage)
            });
        } catch (error) {
            next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
        }
    }
}

module.exports = getProductsByCategory;