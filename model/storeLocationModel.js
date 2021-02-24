const mongoose = require("mongoose");

const storeLocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
        coordinates: {
            type: [Number],
            required: true
          }
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

module.exports = mongoose.model("StoreLocation", storeLocationSchema);