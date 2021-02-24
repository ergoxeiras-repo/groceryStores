const Products = require("../../model/productModel");

exports.getProducts = async function(req, category) {
    const cookiesArray = Object.values(req.cookies);
    const page = parseInt(req.query.page || 1); 
    const sort = req.query.sort || "discountPrice";
    const itemsPerPage = 10;
    const storeNames = await Products.aggregate([
        { $match: { "category.subCategory": category } },
        { $group: { _id: "$storeName" } }
    ]);

    let totalProducts;
    let products;
    if(cookiesArray.length !== 0) {
        totalProducts = await Products.countDocuments({ "category.subCategory": category, storeName: { $in: cookiesArray } });
        products = await Products.find({ "category.subCategory": category, storeName: { $in: cookiesArray } }); 
    } else {
        totalProducts = await Products.countDocuments({"category.subCategory": category});
        products = await Products.find({"category.subCategory": category})
            .skip((page - 1) * itemsPerPage)
            .limit(itemsPerPage) 
            .sort(sort);
    }
    
    return {
        category: "products",
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