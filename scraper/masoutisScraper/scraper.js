const fs = require("fs");

const Product = require("../../model/productModel");

const puppeteer = require('puppeteer');

const category = {
    mainCategory: "",
    category: "",
    subCategory: ""
};

let store = "";

class Scraper {
    // As the constructor returns object can not be used with async/await. In order to surpass
    // this we construct a function and we wait the values we want and after that we return
    // the this value where are stored our values
    constructor(launchOptions) {
        return (async () => {

            // All async code here
            this.browser = await this.createBrowser(launchOptions);
            this.page = await this.createPage();

            return this; // when done
        })();
    }  

    async closeBrowser() {
        this.browser.close();
    }

    async createBrowser(launchOptions) {
        const browser = await puppeteer.launch(launchOptions);
        return browser;
    }

    async createPage() {
        const page = await this.browser.newPage();
        return page;
    }

    async scrapeDataFromURL(url, exclusion) {
        await this.page.goto(url, { timeout: 30000 });
        await this.scrollDown();
        await this.scrapeData(exclusion);
    }

    async scrollDown() {
        let counter = 0;
        
        await this.waitForCssToload();
        await this.page.waitForSelector("*", { visible: true });
        let productsArray = await this.getProductsArray();

        if(productsArray.length !== 0) {
            while( productsArray !== counter ) {
                counter = productsArray;
                await this.page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
                await this.waitForCssToload();
                productsArray = await this.getProductsArray();
            }
        }
        
    };
    
    async scrapeData(exclusion) {

        const pageLinks = await this.getPageLinks();  
    
        const imgLinks = await this.getImgLinks();
    
        const titles = await this.getTitles();
    
        const startPrices = await this.getStartPrices();
    
        const discountPrices = await this.getDiscountPrices();
    
        if(pageLinks.length !== 0) {
            let counter = 0;
            for(let i=0; i<pageLinks.length; i++) {
                counter++;
                if( exclusion.includes(i) ){
                    continue;
                }

                try {
                    await Product.create({
                        imgLink: imgLinks[i],
                        title: titles[i],
                        startPrice: startPrices[i],
                        discountPrice: discountPrices[i],
                        pageLink: pageLinks[i],
                        storeName: "Μασούτης",
                        category: this.getCategory()
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
                //     storeName: "Μασούτης",
                //     category: this.getCategory()
                // }, null, 2), function (err) {
                //     if (err) throw err;
                // });       
            }
    
            // console.log(`${counter}`);
            console.log("done");
    
        }
    
        
    }

    async waitForCssToload() {
        await this.page.waitForSelector(".productList"); //.productList
        await this.page.waitFor(3000);
    }
    
    async getProductsArray() {
        return await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll(".productList")).length;//.productList
        });
    }
    
    async getPageLinks() {
        return await this.page.evaluate( ()=> {
                        return Array.from(document.querySelectorAll(".productList .catImgCont")) //".catImgCont"
                                    .map( element => {
                                        return element.href;
                                    });
                                });
    };
    
    async getImgLinks() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".productList .productImage")) //".productImage"
                                    .map( (element) => {
                                        return element.src
                                    });
                                });
    };
    
    async getTitles() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".productList .productImage")) //".productImage"
                                    .map( (element) => {
                                        return element.getAttribute("title");
                                    });
                                });
    };
    
    async getStartPrices() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".productList .pStartPrice")) //".pStartPrice"
                                    .map( (element) => {
                                        return parseFloat(element.innerText);
                                    })
                                });
    };
    
    async getDiscountPrices() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".productList .pDscntPrice")) //".pDscntPrice"
                                    .map( (element) => {
                                        return parseFloat(element.innerText);
                                    })
                                });
    };

    // In order not to be a conflict with the object's name category, the second
    // argument was named categori
    setCategory(mainCategory, categori, subCategory = "") {
        category.mainCategory = mainCategory;
        category.category = categori;
        category.subCategory = subCategory;
        // console.log(`category = ${category.category} subCategory = ${category.subCategory}`);
    };

    getCategory() {
        return category;
    }

    setStoreName(storeName) {
        store = storeName;
    }

    getStoreName() {
        return store;
    }
}

module.exports = Scraper;


























// async function scrollDown(page, url) {
//     let counter = 0;
    
//     await waitForCssToload(page);
//     let productsArray = await getProductsArray(page);
    
//     if(productsArray.length !== 0) {
//         while( productsArray !== counter ) {
//             counter = productsArray;
//             await page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
//             await waitForCssToload(page);
//             productsArray = await getProductsArray(page);
//         }
//     }
    
// };

// async function scrapeData(page, category, exclusion) {

//     const pageLinks = await getPageLinks(page);  

//     const imgLinks = await getImgLinks(page);

//     const titles = await getTitles(page);

//     const startPrices = await getStartPrices(page);

//     const discountPrices = await getDiscountPrices(page);

//     if(pageLinks.length !== 0) {
//         let counter = 0;
//         for(let i=0; i<pageLinks.length; i++) {
//             counter++;
//             if( exclusion.includes(i) ){
//                 continue;
//             }
//             console.log(titles[i]) ;   
//             fs.appendFile('./data.json', JSON.stringify({
//                 imgLink: imgLinks[i],
//                 title: titles[i],
//                 startPrice: startPrices[i],
//                 discountPrice: discountPrices[i],
//                 pageLink: pageLinks[i],
//                 category: category
//             }, null, 2), function (err) {
//                 if (err) throw err;
//             });       
//         }

//         console.log(`counter = ${counter}`);

//     }

    
// }

// async function getProductsArray(page) {
//     return await page.evaluate(() => {
//         return Array.from(document.querySelectorAll(".product")).length;
//     });
// }

// async function waitForCssToload(page) {
//     await page.waitForSelector(".productList");
//     await page.waitFor(3000);
// }

// async function getPageLinks(page) {
//     return await page.evaluate( ()=> {
//                     return Array.from(document.querySelectorAll(".catImgCont"))
//                                 .map( element => {
//                                     return element.href;
//                                 });
//                             });
// };

// async function getImgLinks(page) {
//     return await page.evaluate( () => {
//                     return Array.from(document.querySelectorAll(".productImage"))
//                                 .map( (element) => {
//                                     return element.src
//                                 });
//                             });
// };

// async function getTitles(page) {
//     return await page.evaluate( () => {
//                     return Array.from(document.querySelectorAll(".productImage"))
//                                 .map( (element) => {
//                                     return element.getAttribute("title");
//                                 });
//                             });
// };

// async function getStartPrices(page) {
//     return await page.evaluate( () => {
//                     return Array.from(document.querySelectorAll(".pStartPrice"))
//                                 .map( (element) => {
//                                     return parseFloat(element.innerText);
//                                 })
//                             });
// };

// async function getDiscountPrices(page) {
//     return await page.evaluate( () => {
//                     return Array.from(document.querySelectorAll(".pDscntPrice"))
//                                 .map( (element) => {
//                                     return parseFloat(element.innerText);
//                                 })
//                             });
// };

// exports.scrollDown = scrollDown;
// exports.scrapeData = scrapeData;