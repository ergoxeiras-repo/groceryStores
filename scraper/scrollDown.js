async function scrollDown(page, url) {
    let counter = 0;
    
    await waitForCssToload(page);
    let productsArray = await getProductsArray(page);
    
    if(productsArray.length !== 0) {
        while( productsArray !== counter ) {
            counter = productsArray;
            await page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
            await waitForCssToload(page);
            productsArray = await getProductsArray(page);
        }
    }
    
};

async function getProductsArray(page) {
    return await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".product")).length;
    });
}

async function waitForCssToload(page) {
    await page.waitForSelector(".productList");
    await page.waitFor(3000);
}

module.exports = scrollDown;




















// async function takeArrayProducts(page, url) {
    
//     try {
//         await page.waitForSelector(".productList");
//         await page.waitFor(3000);
//         let productsArray = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll(".product")).length;
//         });
//         scrollDown(productsArray, page);
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }

// };

// async function scrollDown(productsArray, page) {
//     let counter = 0;

//     if(productsArray.length !== 0) {
//         while( productsArray !== counter ) {
//             counter = productsArray;
//             console.log(`counter = ${counter}`);
            
//             try {
//                 await page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
//                 await page.waitForSelector(".addRemove_ctg");
//                 await page.waitFor(3000);
//                 productsArray = await page.evaluate(() => {
//                     return Array.from(document.querySelectorAll(".product")).length;
//                 });
//                 console.log(`productsArray = ${productsArray}`);
//                 // return page;
//             } catch (error) {
//                 console.log(`error: ${error}`);
//             }
    
//         }
//     }
// }

// exports.takeArrayProducts = takeArrayProducts;