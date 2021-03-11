const mongoose = require("mongoose");

const offersSchema = new mongoose.Schema({
    imgLink: String,
    title: String,
    startPrice: Number,
    discountPrice: Number,
    pageLink: String,
    stores: String,
    offerType: String,
    discountPercentage: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Offers", offersSchema);