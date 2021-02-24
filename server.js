const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const app = require("./app");

if(process.env.NODE_ENV !== "test") {
    mongoose.connect("mongodb+srv://groceryDB:ED4FhZVdfP6VHzXV@cluster0-bjjsz.mongodb.net/groceryDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to DB");
})
.catch(error => {
    console.log("MONGODB error: ", error);
});
}
// ED4FhZVdfP6VHzXV

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});