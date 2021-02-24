const fs = require("fs");

let category = {
    mainCategory: "",
    category: "",
    subCategory
};

async function scrapeData(page, category, exclusion) {

    const pageLinks = await getPageLinks(page);  

    const imgLinks = await getImgLinks(page);

    const titles = await getTitles(page);

    const startPrices = await getStartPrices(page);

    const discountPrices = await getDiscountPrices(page);

    if(pageLinks.length !== 0) {
        let counter = 0;
        for(let i=0; i<pageLinks.length; i++) {
            counter++;
            if( exclusion.includes(i) ){
                continue;
            }
            console.log(titles[i]) ;   
            fs.appendFile('./data.json', JSON.stringify({
                imgLink: imgLinks[i],
                title: titles[i],
                startPrice: startPrices[i],
                discountPrice: discountPrices[i],
                pageLink: pageLinks[i],
                category: category
            }, null, 2), function (err) {
                if (err) throw err;
            });       
        }

        console.log(`counter = ${counter}`);

    }

    
}

async function getPageLinks(page) {
    return await page.evaluate( ()=> {
                    return Array.from(document.querySelectorAll(".catImgCont"))
                                .map( element => {
                                    return element.href;
                                });
                            });
};

async function getImgLinks(page) {
    return await page.evaluate( () => {
                    return Array.from(document.querySelectorAll(".productImage"))
                                .map( (element) => {
                                    return element.src
                                });
                            });
};

async function getTitles(page) {
    return await page.evaluate( () => {
                    return Array.from(document.querySelectorAll(".productImage"))
                                .map( (element) => {
                                    return element.getAttribute("title");
                                });
                            });
};

async function getStartPrices(page) {
    return await page.evaluate( () => {
                    return Array.from(document.querySelectorAll(".pStartPrice"))
                                .map( (element) => {
                                    return parseFloat(element.innerText);
                                })
                            });
};

async function getDiscountPrices(page) {
    return await page.evaluate( () => {
                    return Array.from(document.querySelectorAll(".pDscntPrice"))
                                .map( (element) => {
                                    return parseFloat(element.innerText);
                                })
                            });
};

module.exports = scrapeData;