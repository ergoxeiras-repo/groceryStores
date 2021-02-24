const Product = require("../../model/productModel");

async function getProductsByCategory(req, res, mainCategory, category="", subCategory="") {
    let products = [];
    const page = parseInt(req.query.page || 1); 
    const sort = req.query.sort || "discountPrice";
    const itemsPerPage = 10;
    if(category === "") {//{"category.mainCategory":mainCategory}
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
            console.log(error);
        }
    } else if(subCategory === "") {//{"category.category":category}
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
            console.log(error);
        }
    } else {
        try {
            // if(req.query.sort) {
            //     products = await Product.find({"category.subCategory":subCategory})
            //     .skip((page - 1) * itemsPerPage)
            //     .limit(itemsPerPage) 
            //     .sort(req.query.sort);
            // } else {
            //     products = await Product.find({"category.subCategory":subCategory})
            //     .skip((page - 1) * itemsPerPage)
            //     .limit(itemsPerPage)
            //     .sort("discountPrice");
            // }
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
            console.log(error);
        }
    }
}

module.exports = getProductsByCategory;