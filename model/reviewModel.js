const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timeZone = require("mongoose-timezone");

const reviewSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    text: {
        type: String,
        required: [true, "text is required"],
        minlength: [10, "text must be at least 10 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userReview: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

reviewSchema.plugin(timeZone);
module.exports = mongoose.model("Review", reviewSchema);