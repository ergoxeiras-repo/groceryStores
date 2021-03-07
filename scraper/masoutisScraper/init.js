const fs = require("fs");

const masoutisScraper = require("./masoutisScraper");

const mongoose = require("mongoose");
// const dotenv = require('dotenv');

// dotenv.config({ path: './.env' });

// if(process.env.NODE_ENV !== "test") {
//     mongoose.connect("mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
// .then(() => {
//     console.log("Connected to DB");
// })
// .catch(error => {
//     console.log("MONGODB error: ", error);
// });
// }


// mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://groceryDB:ED4FhZVdfP6VHzXV@cluster0-bjjsz.mongodb.net/groceryDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection
.once('open', function() {
    console.log("Connected to DB");
})
.on('error', error => {
    console.warn('Warning', error);
});


async function init() {
    fs.writeFile('data.json', "", function (err) {
        if (err) throw err;
      });

    // const browser = await puppeteer.launch({
    //   headless: true,
    //   userDataDir: "./cache"
    // });//{headless: false}
    // let page = await browser.newPage();
    // await page.setViewport({ width: 1366, height: 768});

    // await masoutisScraper.scrapeBabyCareURLs();
    // await masoutisScraper.scrapeDrinksURLs();
    // await masoutisScraper.scrapePetsURLs();
    // await masoutisScraper.scrapePersonalCareURLs();
    // await masoutisScraper.scrapeHealthyDietURLs();
    // await masoutisScraper.scrapeFruitsURLs();
    // await masoutisScraper.scrapeDairyRefrigeratedItemsURLs();
    // await masoutisScraper.scrapeAllantikaTuriaDelicatessenURLs();
    // await masoutisScraper.scrapeTupopoihmenaTrofimaURLs();
    // await masoutisScraper.scrapeFreskoKreasKaiPsari();
    // await masoutisScraper.scrapeKatepsugmenaTrofimaURLs();
    // await masoutisScraper.scrapePrwinoKaiRofhmataURLs();
    await masoutisScraper.scrapeProiontaArtouURLs();
    await masoutisScraper.scrapeSnacksURLs();
    await masoutisScraper.scrapeKatharistikaXartikaEidhOikiakhsURLs();
    console.log("Scraper was finished");

};

init();



 
                