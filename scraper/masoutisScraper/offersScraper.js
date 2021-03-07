const scrapeOffers = require("./scrapeOffers");
const Offers = require("../../model/offersModel");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// mongoose.connect("mongodb+srv://groceryDB:ED4FhZVdfP6VHzXV@cluster0-bjjsz.mongodb.net/groceryDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection
.once('open', function() {
    console.log("Connected to DB");
})
.on('error', error => {
    console.warn('Warning', error);
});

const urls = [
    "https://eshop.masoutis.gr/categories/index/prosfores?item=0&subitem=2001&subdescr=web-only",
    "https://eshop.masoutis.gr/categories/index/prosfores?item=0&subitem=2166&subdescr=sunduastikes-prosfores-fulladiou-17-2-8-3"
]

async function offersScraper() {
    await Offers.deleteMany();
    const page = await scrapeOffers.createPage();
    for(let i=0; i<urls.length; i++) {
        await page.goto(urls[i]);
        await scrapeOffers.scrollDown(page, ".productList .product");
        const pageLinks = await scrapeOffers.getPageLinks(page, ".productList .catImgCont")
        const imgLinks = await scrapeOffers.getImgLinks(page, ".productList .productImage");
        const titles = await scrapeOffers.getTitles(page, ".productList .productImage");
        const startPrices = await scrapeOffers.getStartPrices(page, ".productList .pStartPrice");
        const discountPrices = await scrapeOffers.getDiscountPrices(page, ".productList .pDscntPrice");
        const discountPercentages = await scrapeOffers.getDiscountPercentage(page, ".productList .pDscntPercent");
        const store = "Μασούτης";
        const offerType = i === 0 ? "Web Only" : "Προσφορές Τριημέρου";
        
        for(let i=0; i<titles.length; i++) {
            try {
                await Offers.create({
                    pageLink: pageLinks[i],
                    imgLink: imgLinks[i],
                    title: titles[i],
                    startPrice: startPrices[i],
                    discountPrice: discountPrices[i],
                    discountPercentage: discountPercentages[i],
                    storeName: store,
                    offerType: offerType
                })
                } catch (error) {
                    console.log(`error saving the data, error: ${error}`);
                }
        }
    }
}

offersScraper();