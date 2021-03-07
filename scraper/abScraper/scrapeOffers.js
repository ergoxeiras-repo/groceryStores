const puppeteer = require("puppeteer");

async function createBrowser() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        devtools: false
    });

    return browser;
}

async function createPage() {
    const page = await (await createBrowser()).newPage();
    return page;
}

async function scrollDown(page, productsArraySelector) {
    let counter = 0;
    
    await page.waitForSelector("*", { visible: true });
    await page.waitForTimeout(3000);

    let productsArray = await getProductsArray(page, productsArraySelector);

    if(productsArray !== 0) {
        while( productsArray !== counter ) {
            counter = productsArray;
            await page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
            await page.waitForTimeout(3000);
            productsArray = await getProductsArray(page, productsArraySelector);
        }
    }
    
};

async function getProductsArray(page, productsArraySelector) {
    return await page.evaluate((productsArraySelector) => {
        return Array.from(document.querySelectorAll(productsArraySelector)).length;//.productList
    }, productsArraySelector);
}

async function getPageLinks(page, pageLinksSelector) {
    return await page.evaluate( (pageLinksSelector)=> {
                    return Array.from(document.querySelectorAll(pageLinksSelector)) //".catImgCont"
                                .map( element => {
                                    return element.href;
                                });
                            }, pageLinksSelector);
};

async function getImgLinks(page, imgLinksSelector) {
    return await page.evaluate( (imgLinksSelector) => {
                    return Array.from(document.querySelectorAll(imgLinksSelector)) //".productImage"
                                .map( (element) => {
                                    return element.src
                                });
                            }, imgLinksSelector);
};

async function getTitles(page, titlesImgSelector) {
    return await page.evaluate( (titlesImgSelector) => {
                    return Array.from(document.querySelectorAll(titlesImgSelector)) //".productImage"
                                .map( (element) => {
                                    return element.getAttribute("title");
                                });
                            }, titlesImgSelector);
};

async function getStartPrices(page, startPriceSelector) {
    return await page.evaluate( (startPriceSelector) => {
                    return Array.from(document.querySelectorAll(startPriceSelector)) //".pStartPrice"
                                .map( (element) => {
                                    return parseFloat(element.innerText);
                                })
                            }, startPriceSelector);
};

async function getDiscountPrices(page, discountPriceSelector) {
    return await page.evaluate( (discountPriceSelector) => {
                    return Array.from(document.querySelectorAll(discountPriceSelector)) //".pDscntPrice"
                                .map( (element) => {
                                    return parseFloat(element.innerText);
                                })
                            }, discountPriceSelector);
};

async function getDiscountPercentage(page, discountPercentageSelector) {
    return await page.evaluate( (discountPercentageSelector) => {
                    return Array.from(document.querySelectorAll(discountPercentageSelector)) //".pStartPrice"
                                .map( (element) => {
                                    return element.innerText;
                                })
                            }, discountPercentageSelector);
};

exports.createPage = createPage;
exports.scrollDown = scrollDown;
exports.getProductsArray = getProductsArray;
exports.getPageLinks = getPageLinks;
exports.getImgLinks = getImgLinks;
exports.getTitles = getTitles;
exports.getStartPrices = getStartPrices;
exports.getDiscountPrices = getDiscountPrices;
exports.getDiscountPercentage = getDiscountPercentage;