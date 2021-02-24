const mongoose = require("mongoose");
const geocoder = require("geocoder");

const storeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point']        
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"        
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

storeSchema.pre("save", async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: "Point",
        coordinates: [loc[0].longitude, loc[0].latitude]
    }
    this.city = loc[0].city
    next(); 
});

module.exports = mongoose.model("Store", storeSchema);