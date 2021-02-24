// Custom error class wich extends the javascript's Error class
module.exports = class throwsAnError extends Error {
    constructor(message, statusCode, e=""){ // e has a value when validation fails, 
        //to print the validation errors whereas when pass e has a default value of empty
        //string 
        super(message); // message it is a property from Error class
        this.statusCode = statusCode;
        this.e = e;
    }
}