const mongoose = require("mongoose");
const Products = require("./model/productModel");

mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection
.once('open', function() {
    console.log("Connected to test myGroceryTestDB");
})
.on('error', error => {
    console.warn('Warning', error);
});

async function remove() {
    await Products.deleteMany({});
    console.log("The products data was deleted");
};

remove();