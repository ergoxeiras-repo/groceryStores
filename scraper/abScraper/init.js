const fs = require("fs");

const abScraper = require("./abScraper");

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

mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection
.once('open', function() {
    console.log("Connected to test myGroceryTestDB");
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

    await abScraper.scrapeBabyCareURLs();
    await abScraper.scrapeDrinksURLs();
    await abScraper.scrapePetsURLs();
    await abScraper.scrapePersonalCareURLs();
    await abScraper.scrapeHealthyDietURLs();
    await abScraper.scrapeFruitsURLs();
    await abScraper.scrapeDairyRefrigeratedItemsURLs();
    await abScraper.scrapeAllantikaTuriaDelicatessenURLs();
    await abScraper.scrapeTupopoihmenaTrofimaURLs();
    await abScraper.scrapeFreskoKreasKaiPsari();
    await abScraper.scrapeKatepsugmenaTrofimaURLs();
    await abScraper.scrapePrwinoKaiRofhmataURLs();
    await abScraper.scrapeProiontaArtouURLs();
    await abScraper.scrapeSnacksURLs();
    await abScraper.scrapeKatharistikaXartikaEidhOikiakhsURLs();
    console.log("Scraper was finished");

};

init();



 
                