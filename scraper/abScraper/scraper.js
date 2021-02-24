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
        await this.page.goto(url, { timeout: 300000 });
        try {
            await this.page.waitForSelector(".js-cookies-accept-all", { timeout: 5000 });
            await this.page.click(".js-cookies-accept-all");
        } catch (error) {
            
        }
        // const selectorResult = await this.page.waitForSelector(".js-cookies-accept-all");
        // console.log(selectorResult);
        // await this.page.click(".js-cookies-accept-all");
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

        console.log(`page links length = ${pageLinks.length}`);
    
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
                        storeName: "Βασιλόπουλος",
                        category: this.getCategory()
                    })
                    console.log(this.getCategory());
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
        await this.page.waitForSelector(".quantity-price"); 
        await this.page.waitFor(3000);
    }
    
    async getProductsArray() {
        return await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll(".data-item")).length;//.productList
        });
    }
    
    async getPageLinks() {
        return await this.page.evaluate( ()=> {
                        return Array.from(document.querySelectorAll(".component-image")) //".catImgCont"
                                    .map( element => {
                                        return element.href;
                                    });
                                });
    };
    
    async getImgLinks() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".image")) //".productImage"
                                    .map( (element) => {
                                        return element.src
                                    });
                                });
    };
    
    async getTitles() {
        const temp = await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".ellipsis")) //".productImage"
                                    .map( (element) => {
                                        return element.innerText;
                                    });
                                });
        
        const data = [];
        let j = 0;
        
        for(let i=0; i<temp.length; i = i + 2){
            
            if(i === 0) {
                data[j] = temp[i] + " " + temp[i+1];
            } else {
                j = j + 1;
                data[j] = temp[i] + " " + temp[i+1];
            }
        }

        return data;
    };
    
    async getStartPrices() {
        return await this.page.evaluate( () => {
                        return Array.from(document.querySelectorAll(".quantity-price")) //".pStartPrice"
                                    .map( (element) => {
                                        return parseFloat(element.innerText.replace(",", ".").slice(1, element.length));
                                    })
                                });
    };
    
    async getDiscountPrices() {
        return await this.page.evaluate( () => {
                                            return Array
                                                    .from(document.querySelectorAll(".ProductProperties"))
                                                    .map(function(element) {
                                                        let discount = element.querySelector(".promotion-price");
                                                        let start = element.querySelector(".quantity-price");
                                                    
                                                        if(discount !== null) {
                                                            return parseFloat(discount.innerText.replace(",", ".").slice(1, discount.length));
                                                        } else {
                                                            return parseFloat(start.innerText.replace(",", ".").slice(1, start.length));
                                                        }
                                                    });
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