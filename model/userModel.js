const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        minlength: [3, "username must be at least 3 characters"],
        maxlength: [20, "Το όνομα χρήστη δεν μπορεί να είναι πάνω απο 20 χαρακτήρες"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: { // mongoose custom validation 
            validator: function(value) {
                return value === this.password;
            },
            message: "Passwords are not the same"
        }
    },
    passwordResetToken: String,
    passwordResetTokenExp: Date
});

userSchema.pre("save", async function(next) {
    // We check to see if the password has changed and if not we hash it.
    // With that check we do not hash it every time prehook runs
    if(!this.isModified("password")){
        return next();
    }

    // Hashing the password
    this.password = await bcrypt.hash(this.password, 12);

    // Deleting the duplicate confirmPassword value
    this.confirmPassword = undefined;

    next();
});

userSchema.methods.createResetToken = function() {
    //Using the Node's built-in library to generate a token
    const resetToken = crypto.randomBytes(32).toString("hex");
    //Hashing the token in order to store it in database
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    //Converting the 10 min into milliseconds
    this.passwordResetTokenExp = Date.now() + 10 * 60 * 1000; 
    return resetToken;
};

module.exports = mongoose.model("User", userSchema);