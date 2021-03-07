const mongoose = require("mongoose");

const Product = require("./model/productModel");

mongoose.connect("mongodb+srv://groceryDB:ED4FhZVdfP6VHzXV@cluster0-bjjsz.mongodb.net/groceryDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  mongoose.connection
    .once('open', function() {
        console.log("Connected to DB");
    })
    .on('error', error => {
      console.warn('Warning', error);
    });

async function removeItAll() {

    try {
        // const products = await Product.find({"category.mainCategory":"tupopoihmena-trofhma"});
        await Product.deleteMany({storeName: "Βασιλόπουλος"});
        console.log(`The category was deleted`);
        // const products = await Product.find({"category.mainCategory":"ugieinh-diatrofh"});
        // console.log(`products: ${products}`)
    } catch (error) {
        console.log(error);
    }
}

removeItAll();