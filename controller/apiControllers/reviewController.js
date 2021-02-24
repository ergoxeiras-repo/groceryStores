const Review = require("../../model/reviewModel");
const Product = require("../../model/productModel");
const StoreLocation = require("../../model/storeLocationModel");
const throwsAnError = require("../../utils/throwsAnError");

exports.createProductReview = async function(req, res, next) {
    const {title, text, userReview, productId} = req.body;
   
    if(!isTitleExist(title, next)) {
        return;
    }

    if(!isTextExist(text, next)) {
        return;
    }

    try {
        const review = await Review.create({
            title:title,
            text:text,
            userReview: userReview
        });
        await saveProductReview(productId, review);
        
        res.status(200).json({
            message: "success",
            review: review
        });
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.createStoreReview = async function(req, res, next) {
    const { title, text, userReview, storeId } = req.body;

    if(!isTitleExist(title, next)) {
        return;
    }

    if(!isTextExist(text, next)) {
        return;
    }

    try {
        const review = await Review.create({
            title:title,
            text:text,
            userReview: userReview
        });
        await saveStoreReview(storeId, review);
        
        res.status(200).json({
            message: "success",
            review: review
        });
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

function isTitleExist(title, next) {
    if(!title) {
        next(new throwsAnError("Συμπληρώστε τον τιτλο", 400));
        return false;
    } 
    return true;
}

function isTextExist(text, next) {
    if(!text) {
        next(new throwsAnError("Συμπληρώστε την αξιολόγηση σας", 400));
        return false;
    } 
    return true;
}

async function saveProductReview(productId, review) {
    try {
        const product = await Product.findById({_id: productId});
        await product.reviews.push(review);
        await product.save();
    } catch (error) {
        console.log(error);
    }
}

async function saveStoreReview(storeId, review) {
    try {
        const store = await StoreLocation.findById({_id: storeId});
        await store.reviews.push(review);
        await store.save();
    } catch (error) {
        console.log(error);
    }
}