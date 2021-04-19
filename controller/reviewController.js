const Review = require("../model/reviewModel");
const Product = require("../model/productModel");
const ThrowsAnError = require("../utils/throwsAnError");

exports.createProductReview = async function(req, res, next) {
    const productId = req.params.id;
    
    const { title, text } = req.body;
   
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
            userReview: req.user._id
        });
        await saveProductReview(productId, review);
        
        res.status(200).json({
            message: "success",
            review: review
        });
    } catch (error) {
        next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
    }
}

function isTitleExist(title, next) {
    if(!title) {
        next(new ThrowsAnError("Συμπληρώστε τον τιτλο", 400));
        return false;
    } 
    return true;
}

function isTextExist(text, next) {
    if(!text) {
        next(new ThrowsAnError("Συμπληρώστε την αξιολόγηση σας", 400));
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
        next(new ThrowsAnError("Υπήρξε πρόβλημα με τον Σέρβερ," +
         "παρακαλώ δοκιμάστε ξανά", 500));
    }
}
