const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    imgLink: String,
    title: String,
    startPrice: Number,
    discountPrice: Number,
    pageLink: String,
    storeName: String,
    category: {
        mainCategory: String,
        category: String,
        subCategory: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    averageRating: {
        type: Number,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model("Products", productSchema);