const mongoose = require("mongoose");

const Product = require("./model/productModel");
const { product } = require("puppeteer");

mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  mongoose.connection
    .once('open', function() {
        console.log("Connected to test myGroceryTestDB");
    })
    .on('error', error => {
      console.warn('Warning', error);
    });

async function removeItAll() {

    try {
        // const products = await Product.find({"category.mainCategory":"tupopoihmena-trofhma"});
        await Product.deleteMany({"category.mainCategory":"snacks"});
        console.log(`The category was deleted`);
        // const products = await Product.find({"category.mainCategory":"ugieinh-diatrofh"});
        // console.log(`products: ${products}`)
    } catch (error) {
        console.log(error);
    }
}

removeItAll();