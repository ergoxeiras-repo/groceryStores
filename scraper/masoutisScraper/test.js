const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
    let launchOptions = { headless: false, 
        args: ['--start-maximized',
               '--proxy-server=socks4://82.142.87.2:4145'] // this is where we set the proxy
      };

    fs.writeFile('data.json', "", function (err) {
        if (err) throw err;
      });

      const browser = await puppeteer.launch(launchOptions);
      const page = await browser.newPage();

      url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=011410&subdescr=gala-fresko"
      await page.goto(url);
      browser.close();


    // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%86%CF%81%CE%BF%CF%82%20%CE%BE%CF%85%CF%81%CE%B9%CF%83%CE%BC%CE%B1%CF%84%CE%BF%CF%82";
    // await scraper.scrapeDataFromURL(url,"drinks", [-1])

    // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BE%CF%85%CF%81%CE%B1%CF%86%CE%B1%CE%BA%CE%B9%CE%B1";
    // await scraper.scrapeDataFromURL(url,"drinks", [5, 7, 8, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23]);

    // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%BF%CF%83%CE%BC%CE%B7%CF%84%CE%B9%CE%BA%CE%BF";
    // await scraper.scrapeDataFromURL(url,"drinks", [0,1,6,8,9,11,13,16,17,18,19,24,32,36,38,40,43,45,46,49,50,52,54,55,56,59,60,61,62,63,64,65,66,69,74]);

    // Brefiko gala
    
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022115&subdescr=galata"
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Paidikes trofes 
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=paidikes-trofes"
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Panes 
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022510&subdescr=panes"
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Mwromanthla
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022565&subdescr=ugromanthla";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Peripoihsh swmatos
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022560&subdescr=proionta-bambakos";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022710&subdescr=sfouggaria-triftes";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])   
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022610&subdescr=proionta-plusimatos";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022616&subdescr=malaktika";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])    
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022740&subdescr=paidika-kalluntika";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Ygieinh dontiwn
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022715&subdescr=ugieinh-dontiwn";
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

    // // Aksesouar
    // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=044405&subdescr=eidh-brefanaptukshs"
    // scraper.scrapeDataFromURL(url, "brefikhFrontida", [-1])

})();

// 193.59.26.248:4153
// 81.17.20.50:39464
// 64.225.64.126:40001
// 82.177.87.98:33823






