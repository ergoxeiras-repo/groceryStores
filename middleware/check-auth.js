const jwt = require("jsonwebtoken");
const throwsAnError = require("../utils/throwsAnError");
const User = require("../model/userModel");

module.exports = async function (req, res, next) {
    let token;
    let decoded;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        return next(new throwsAnError("You must login in order to get access", 401));
    }

    try{
        decoded = jwt.verify(token, "thisismysecretpowerful@ndr@ndomp@ssaword");
        req.decoded = decoded;
    } catch(e) {
        next(new throwsAnError("You must login again", 401, e));
    }

    const currentUser = await User.findById(decoded.id);
    req.user = currentUser;

    next();
}