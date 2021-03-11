const Scraper = require("./scraper");
const Offers = require("../../model/offersModel");
const mongoose = require("mongoose");
const fs = require("fs");

// mongoose.connect('mongodb+srv://christos:RWNgslzlcYCpAAZA@cluster0.rx7oj.mongodb.net/myGroceryTest?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://groceryDB:ED4FhZVdfP6VHzXV@cluster0-bjjsz.mongodb.net/groceryDB?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection
.once('open', function() {
    console.log("Connected to DB");
})
.on('error', error => {
    console.warn('Warning', error);
});

const urls = [
    "https://www.ab.gr/search/promotions?q=promotions:relevance:promotionDisplayTypes:MULTIPURCHASE",
]

class OffersScraper extends Scraper{
    constructor(launchOptions){
        super(launchOptions)
    }

    async scrapeDataFromURL(url, exclusion) {
        await this.page.goto(url, { timeout: 300000 });
        await this.scrollDown();
        await this.scrapeData(exclusion);
    }

    async scrapeData(exclusion) {

        const pageLinks = await this.getPageLinks();
        console.log(pageLinks.length)  
    
        const imgLinks = await this.getImgLinks();
        console.log(imgLinks.length)
    
        const titles = await this.getTitles();
        console.log(titles.length)
    
        const startPrices = await this.getStartPrices();
        console.log(startPrices.length)
    
        const discountPrices = await this.getDiscountPrices();
        console.log(discountPrices.length)

        const discountContent = await this.getDiscountContent();
        console.log(discountContent.length)
    
        if(pageLinks.length !== 0) {
            let counter = 0;
            for(let i=0; i<pageLinks.length; i++) {
                counter++;
                if( exclusion.includes(i) ){
                    continue;
                }

                try {
                    await Offers.create({
                        imgLink: imgLinks[i],
                        title: titles[i],
                        startPrice: startPrices[i],
                        discountPrice: discountPrices[i],
                        discountPercentage: discountContent[i],
                        pageLink: pageLinks[i],
                        stores: "Βασιλόπουλος",
                        offerType: "Συνδιασμένες Αγορές"
                    })
                } catch (error) {
                    console.log(`error saving the data, error: ${error}`);
                }

                // fs.appendFile('./data.json', JSON.stringify({
                //     imgLink: imgLinks[i],
                //     title: titles[i],
                //     startPrice: startPrices[i],
                //     discountPrice: discountPrices[i],
                //     pageLink: pageLinks[i],
                //     storeName: "Βασιλόπουλος",
                //     discountPercentage: discountContent,
                //     offerType: "Συνδιασμένες Αγορές"
                // }, null, 2), function (err) {
                //     if (err) throw err;
                // });       
            }
    
            // console.log(`${counter}`);
            console.log("done");
    
        }
    
        
    }

    async getDiscountContent() {
        return await this.page.evaluate( ()=> {
                        return Array.from(document.querySelectorAll("div[data-testid='product-block-attributes'] span")) //".catImgCont"
                                    .map( element => {
                                        return element.textContent;
                                    });
                                });
    };
}

async function runOffersScraper(){
    const scraper = await new OffersScraper({headless: false, defaultViewport: null});
    await scraper.scrapeDataFromURL(urls[0], [-1]);
}

runOffersScraper();

// async function offersScraper() {
//     await Offers.deleteMany();
//     const page = await scrapeOffers.createPage();
//     for(let i=0; i<urls.length; i++) {
//         await page.goto(urls[i]);
//         await scrapeOffers.scrollDown(page, "div[data-testid='product-block']");
//         const pageLinks = await Scraper.getPageLinks(page, "a[data-testid='product-block-image-link']")
//         const imgLinks = await Scraper.getImgLinks(page, "img[data-testid='product-block-image']");
//         const titles = await Scraper.getTitles(page, "h6[data-testid='product-block-product-name']");
//         const startPrices = await Scraper.getStartPrices(page, "div[data-testid='product-block-price']");
//         const discountPrices = await Scraper.getDiscountPrices(page, ".productList .pDscntPrice");
//         const discountPercentages = await scrapeOffers.getDiscountPercentage(page, ".productList .pDscntPercent");
//         const store = "Βασιλόπουλος";
//         const offerType = "Συνδιασμένες Προσφορές";
        
//         for(let i=0; i<titles.length; i++) {
//                         // imgLink: imgLinks[i],
//                         // title: titles[i],
//                         // startPrice: startPrices[i],
//                         // discountPrice: discountPrices[i],
//                         // pageLink: pageLinks[i],
//                         // storeName: "Βασιλόπουλος",
//                         // category: this.getCategory()
//             try {
//                 await Offers.create({
//                     pageLink: pageLinks[i],
//                     imgLink: imgLinks[i],
//                     title: titles[i],
//                     startPrice: startPrices[i],
//                     discountPrice: discountPrices[i],
//                     discountPercentage: discountPercentages[i],
//                     storeName: store,
//                     offerType: offerType
//                 })
//                 } catch (error) {
//                     console.log(`error saving the data, error: ${error}`);
//                 }
//         }
//     }
// }

// offersScraper();