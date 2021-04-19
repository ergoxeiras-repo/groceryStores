const Scraper = require("../abScraper/scraper");

async function scrapeBabyCareURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";   

        // VREFIKO GALA

        // 1hs hlikias
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Gala-rofimata-1is-ilikias/c/011001001?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefiko gala", "vrefiko gala 1hs hlikias");
        await scraper.scrapeDataFromURL(url, [-1]);

        // 2hs hlikias
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Gala-rofimata-2is-ilikias-kai-ano/c/011001002?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefiko gala", "vrefiko gala 2hs hlikias");
        await scraper.scrapeDataFromURL(url, [1,2,5,6,7,8,9,10,11,15,16,17,18,19,20,21,22,23,25,27,30,31,32,33,37]);

        // 3hs hlikias
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Gala-rofimata-2is-ilikias-kai-ano/c/011001002?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefiko gala", "vrefiko gala 3hs hlikias");
        await scraper.scrapeDataFromURL(url, [0,3,4,12,13,14,24,26,28,29,34,35,36,38]);
        
        // VREFIKES TROFES
        
        // Vrefikes kremes
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Kremes/c/011001003?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes trofes", "vrefikes kremes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Vrefika giaourtia
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Vrefika-giaoyrtia/c/011001004?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes trofes", "vrefika giaourtia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Etoima vrefika geumata 
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Etoima-geymata/c/011001005?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes trofes", "etoima vrefika geumata");
        await scraper.scrapeDataFromURL(url, [0,2,5,6,7,8,9,10,11,17,18,19,20,31]);

        // Vrefika snack 
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Vrefikes-trofes/Etoima-geymata/c/011001005?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes trofes", "vrefika snack");
        await scraper.scrapeDataFromURL(url, [1, 3, 4, 12, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,32,33,34,35]);
        
        // VREFIKES PANES & MWROMANTHLA

        // Vrefikes panes 
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Panes/Anoichtes/c/011002001?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes panes mwromanthla", "vrefikes panes");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Panes/Panes-vrakaki/c/011002002?q=%3Arelevance"
        scraper.setCategory("vrefikh frontida", "vrefikes panes mwromanthla", "vrefikes panes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mwromanthla
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Moromantila/c/011003?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "vrefikes panes mwromanthla", "mwromanthla");
        await scraper.scrapeDataFromURL(url, [-1]);

        // PERIPOIHSH SWMATOS

        // Sampouan & Afroloutra
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Peripoiisi-somatos/Sampoyan-Afroloytro/c/011005001?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "peripoihsh swmatos", "sampouan afroloutra");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kremes Poudres & Ladi
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Peripoiisi-somatos/Kremes-Poydres/c/011005002?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "peripoihsh swmatos", "kremes poudres ladi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // AKSESOUAR

        // Mpimpero Saliares & Pipiles Masoutis does not has this category
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Axesoyar/Mpimpero-Saliares-ka/c/011004001?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("vrefikh frontida", "aksesouar", "mpimpero saliares pipiles");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5]);
        
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Axesoyar/Pipiles/c/011004002?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("vrefikh frontida", "aksesouar", "mpimpero saliares pipiles");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Piatakia Koutalakia & Pirounakia
        url = "https://www.ab.gr/click2shop/Ola-gia-to-moro/Axesoyar/Mpimpero-Saliares-ka/c/011004001?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "aksesouar", "piatakia koutalakia pirounakia");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,5,6,7]);

        // // Vrefika psalidakia
        // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=044405&subdescr=eidh-brefanaptukshs";
        // scraper.setCategory("Βρεφικη Φροντιδα", "aksesouar", "vrefika-psalidakia");
        // await scraper.scrapeDataFromURL(url, [1,2])

        // // VREFIKO FARMAKEIO

        // // Rinika apofraktika Masoutis does not has this category
        // // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022715&subdescr=brefikh---paidikh-ugieinh-dontiwn";
        // // scraper.setCategory("Βρεφικη Φροντιδα", "vrefiko-farmakeio", "rinika-apofraktika");
        // // await scraper.scrapeDataFromURL(url, [0,1,2,3,16])

        // VREFIKA APORRYPANTIKA

        // Ygra aporrypantika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Klassika-Ygra/c/013004002?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "vrefika aporrupantika", "ugra aporrupantika");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,5,7,8,10,11,12, 13, 14, 15, 16, 17, 18, 19,21, 22, 23, 24,
             25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
              50, 51, 52, 53, 54, 55, 56, 57]);

        // Aporrypantika se skonh Masoutis does not has this category
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Skoni/c/013004006?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "vrefika aporrupantika", "aporrupantika se skonh");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,14,15,17,18,20])

        // Malaktika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Malaktika-roychon/Ygro/c/013005001?q=%3Arelevance";
        scraper.setCategory("vrefikh frontida", "vrefika aporrupantika", "malaktika");
        await scraper.scrapeDataFromURL(url, [1,3,4,5,6,7,8,9,10,11,12,13,14]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed. Error: ${error}`);
    }
};

async function scrapeDrinksURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // KRASIA

        // Leuka krasia
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Leyka-krasia/c/DRIWINWHI?q=%3Arelevance";
        scraper.setCategory("kava", "krasia", "leuka krasia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kokkina krasia
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Erythra-krasia/c/DRIWINRED?q=%3Arelevance";
        scraper.setCategory("kava", "krasia", "kokkina krasia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Roze krasia
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Krasia-roze/c/DRIWINROS?q=%3Arelevance";
        scraper.setCategory("kava", "krasia", "roze krasia");
        await scraper.scrapeDataFromURL(url, [-1]);   
        
        // Gluka krasia
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Glyka-krasia/c/DRIWINSWE?q=%3Arelevance";
        scraper.setCategory("kava", "krasia", "gluka krasia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Afrwdeis oinoi
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Afrodeis-oinoi/c/DRIWINSPA?q=%3Arelevance";
        scraper.setCategory("kava", "krasia", "afrwdeis oinoi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Krasia/Sampanies/c/DRIWINCHA?q=%3Arelevance";
        // scraper.setCategory("kava", "Κρασιά", "Αφρώδεις Οίνοι");
        // await scraper.scrapeDataFromURL(url, [-1]);

        // Αναψυκτικά
        
        // Cola
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Cola/c/008007001?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "cola");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Gkazoza
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Gkazoza/c/008007002?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "gkazoza");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Lemonada
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Lemonada/c/008007003?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "lemonada");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Portokalada
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Portokalada/c/008007004?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "portokalada");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Soda-Tonik
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Soda-Tonik-Mixers/c/008007005?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "soda tonic");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Energeiaka Isotonika
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Energeiaka-Isotonika/c/008007006?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "energeiaka isotonika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Alles geuseis
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Vyssinada-kai-alles-geyseis/c/008007008?q=%3Arelevance";
        scraper.setCategory("kava", "anapsuktika", "alles geuseis");
        await scraper.scrapeDataFromURL(url, [-1]);

        // XYMOI & KRYA ROFHMATA

        // Xumoi makras diarkeias
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Chymoi-ektos-psygeioy/Fysikoi/c/008011001?q=%3Arelevance";
        scraper.setCategory("kava", "xumoi krua rofhmata", "xumoi makras diarkeias");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Ice-tea
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Ice-tea-Ice-coffee/c/008007007?q=%3Arelevance";
        scraper.setCategory("kava", "xumoi krua rofhmata", "ice tea");
        await scraper.scrapeDataFromURL(url, [33]);

        // Ice-coffee
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Anapsyktika/Ice-tea-Ice-coffee/c/008007007?q=%3Arelevance";
        scraper.setCategory("kava", "xumoi krua rofhmata", "ice coffee");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,34, 35, 36, 37, 38, 39, 40, 41, 42, 43]);

        // MPYRES
        
        // Lager
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Lager/c/008008001?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "lager");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Pils
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Pils/c/008008002?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "pils");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Weiss
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Weiss/c/008008003?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "weiss");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Ale
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Ale-Stout/c/008008004?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "ale");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Radler
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Lager/c/008008001?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "radler");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
             18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,36, 37, 38, 39, 40, 41, 42,
             43, 44, 45, 46, 47, 48, 49, 50, 51,53,54,56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
             69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,90, 91, 92, 93,
             94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]);
        
        // Xwris alkool
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Mpyres/Lager/c/008008001?q=%3Arelevance";
        scraper.setCategory("kava", "mpures", "xwris alkool");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6,11, 12, 13, 14, 15, 16, 17,18, 19, 20, 21,
             22,24, 25, 26, 27,29, 30, 31, 32, 33, 34,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
              50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
               74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
                98, 99, 100, 101, 102, 103, 104, 105, 106, 107]);

        // EMFΙALWMENA NERA

        // Epitrapezio - Metalliko nero
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Nera/Epitrapezio-Metalliko/c/008009001?q=%3Arelevance";
        scraper.setCategory("kava", "emfualwmena nera", "epitrapezio metalliko nero");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Anthrakouxo nero
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Nera/Anthrakoycho/c/008009002?q=%3Arelevance";
        scraper.setCategory("kava", "emfualwmena nera", "anthrakouxo nero");
        await scraper.scrapeDataFromURL(url, [-1]);

        // POTA

        // Ouiski
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Oyisky/c/008010001?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "ouiski");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vodka
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Botka-Tzin-Roymi/c/008010002?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "votka");
        await scraper.scrapeDataFromURL(url, [0,1,2,6,7,8,9,12,14,18,19,20,22,24,25,26,27]);

        // Tzin
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Botka-Tzin-Roymi/c/008010002?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "tzin");
        await scraper.scrapeDataFromURL(url, [3,4,5,6,9,10,11,12,13,14,15,16,17,19,21,23]);

        // Roumi
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Botka-Tzin-Roymi/c/008010002?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "roumi");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,7,8,10,11,13,15,16,17,18,20,21,22,23,24,25,26,27]);

        // Tekila
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Tekila/c/008010003?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "tekila");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 21, 22, 23, 24,
             25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
              50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // mhliths
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Militis/c/008010004?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "mhliths");
        await scraper.scrapeDataFromURL(url, [-1])

        // Tsipouro
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Tsipoyro-Tsikoydia/c/008010006?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "tsipouro");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ouzo
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Oyzo/c/008010007?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "ouzo");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Koniak
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Koniak-Mpranty/c/008010008?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "koniak");
        await scraper.scrapeDataFromURL(url, [-1]);

        // liker
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Liker/c/008010009?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "liker");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aperitif
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Pota/Aperitif-Choneytika/c/008010010?q=%3Arelevance";
        scraper.setCategory("kava", "pota", "aperitif");
        await scraper.scrapeDataFromURL(url, [-1]);  

        await scraper.closeBrowser();

    } catch (error) {
        console.log(`The scraper was failed. Error: ${error}`);
    }
};

async function scrapePetsURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";
        
        // EIDH GIA SKYLOUS

        // Ygrh trofh
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-skyloys/Ygri-trofi/c/014002001?q=%3Arelevance";
         scraper.setCategory("katoikidia", "eidh gia skulous", "ugrh trofh");
         await scraper.scrapeDataFromURL(url, [-1]);
        
         // Xhra trofh
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-skyloys/Xira-trofi/c/014002002?q=%3Arelevance";
         scraper.setCategory("katoikidia", "eidh gia skulous", "xhra trofh");
         await scraper.scrapeDataFromURL(url, [-1]);

         // Snak gia skulous
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-skyloys/Snack/c/014002003?q=%3Arelevance";
         scraper.setCategory("katoikidia", "eidh gia skulous", "snack gia skulous");
         await scraper.scrapeDataFromURL(url, [-1]);

         // Aksesoyar gia skulous Ab does not has this category
        //  url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=044580&subdescr=aksesouar-katoikidiwn";
        //  scraper.setCategory("Κατοικίδια", "eidh gia skulous", "Αξεσουάρ gia Σκύλους");
        //  await scraper.scrapeDataFromURL(url, [32,33,34])
         
         // EIDH GIA GATES

         // Ygrh trofh
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-gates/Ygri-trofi/c/014001001?q=%3Arelevance";
         scraper.setCategory("katoikidia", "eidh gia gates", "ugrh trofh");
         await scraper.scrapeDataFromURL(url, [-1]);

        // Xhra trofh
        url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-gates/Xira-trofi/c/014001002?q=%3Arelevance";
        scraper.setCategory("katoikidia", "eidh gia gates", "xhra trofh");
        await scraper.scrapeDataFromURL(url, [-1]);

         // Snak gia gates
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-gates/Snack/c/014001003?q=%3Arelevance";
         scraper.setCategory("katoikidia", "eidh gia gates", "snak gia gates");
         await scraper.scrapeDataFromURL(url, [-1]);

         // Ammos gia gates Ab does not has this category
        //  url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=044580&subdescr=aksesouar-katoikidiwn";
        //  scraper.setCategory("Κατοικίδια", "eidh gia gates", "Άμμος gia Γάτες");
        //  await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        //      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])

         // Aksesoyar gia gates
         url = "https://www.ab.gr/click2shop/Gia-katoikidia/Gia-gates/Axesoyar/c/014001005?q=%3Arelevance&pageNumber=0";
         scraper.setCategory("katoikidia", "eidh gia gates", "axesouar gia gates");
         await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 11,12,13,15,16,17,21, 22, 23, 24, 25,
             26, 27, 28, 29, 30, 31,33,34])

         await scraper.closeBrowser();

    } catch (error) {
        console.log(`The scraper was failed. Error: ${error}`);
    }
};

async function scrapePersonalCareURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // GIA ANDRES
            
        // Afroi xurismatos
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Andriki-peripoiisi/Afroi-Gel-Kremes-xyrismatos/c/012001001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia andres", "afroi xurismatos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xuristika mias xrhshs
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Andriki-peripoiisi/Xyristika-mias-chrisis/c/012001002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia andres", "xuristika mias xrhshs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xuristikes mhxanes - Antallaktika
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Andriki-peripoiisi/Xyristikes-michanes-and-Antallaktika/c/012001003?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia andres", "xuristikes mhxanes antallaktika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // After shave
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Andriki-peripoiisi/After-shave/c/012001004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia andres", "after shave");
        await scraper.scrapeDataFromURL(url, [-1]);

        // GIA GUNAIKES

        // Katharismos proswpou
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Gynaikeia-peripoiisi/Katharismos-prosopoy/c/012002001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "katharismos proswpou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Enudatwsh proswpou
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Gynaikeia-peripoiisi/Enydatosi-prosopoy/c/012002002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "enudatwsh proswpou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xurafakia
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Gynaikeia-peripoiisi/Xyrafakia/c/012002004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "xurafakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Makigiaz
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Gynaikeia-peripoiisi/Makigiaz/c/012002003?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "makigiaz");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Apotrixwtika
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Gynaikeia-peripoiisi/Apotrichotika/c/012002007?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "apotrixwtika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Servietes - Tampon
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Prosopiki-ygieini/Servietes/c/012003001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "servietes tampon");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Prosopiki-ygieini/Tampon/c/012003003?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "gia gunaikes", "servietes tampon");
        await scraper.scrapeDataFromURL(url, [-1]);

        // PROSWPIKH YGIEINH

        // Panes enhlikwn
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Prosopiki-ygieini/Panes-enilikon/c/012003004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proswpikh ugieinh", "panes enhlikwn");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vamvakia
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Vamvakia-Mpatonetes/c/012008002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proswpikh ugieinh", "vamvakia");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,10]);

        // Mpatonetes
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Vamvakia-Mpatonetes/c/012008002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proswpikh ugieinh", "mpatonetes");
        await scraper.scrapeDataFromURL(url, [4,5,6,7,8,9,11,12]);

        // Antishptika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Ygromantila/c/013009005?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proswpikh ugieinh", "antishptika");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,10,12,14,15,17,18,20,22,23,24,26,28,29,30,31,33,34,
            35,36,38]);
        
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Sapoynia/c/012004006?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proswpikh ugieinh", "antishptika");
        await scraper.scrapeDataFromURL(url, [1,2,23,24,25,26]);

        // PROIONTA SWMATOS

        // Afroloutro - Afrontous
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Afroloytra-Afrontoys/c/012004001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proionta swmatos", "afroloutra afrontous");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Sfouggaria
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Sfoyggaria-mpanioy/c/012004002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proionta swmatos", "sfouggaria");
        await scraper.scrapeDataFromURL(url, [-1]);

       // Aposmhtika
       url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Aposmitika/c/012004004?q=%3Arelevance";
       scraper.setCategory("proswpikh frontida", "proionta swmatos", "aposmhtika");
       await scraper.scrapeDataFromURL(url, []);
       
        // Sapounia
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Sapoynia/c/012004006?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proionta swmatos", "sapounia");
        await scraper.scrapeDataFromURL(url, [0,3,18,19,20,21,22]);

        // Kallwpismos
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-somatos/Limes-Nychokoptes/c/012004007?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "proionta swmatos", "kallwpismos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // FRONTIDA MALLIWN

        // Sampouan - Kremes
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-mallion/Sampoyan/c/012005001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "frontida malliwn", "sampouan kremes");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-mallion/Kremes-mallion/c/012005002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "frontida malliwn", "sampouan kremes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Vafes
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-mallion/Vafes-mallion/c/012005004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "frontida malliwn", "vafes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Spray - Gel
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-mallion/Gel-Kremes/c/012005005?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "frontida malliwn", "spray gel");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Frontida-mallion/Lak-Spray/c/012005007?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "frontida malliwn", "spray gel");
        await scraper.scrapeDataFromURL(url, [-1]);

        // PARAFARMAKEYTIKA EIDH

        // Epithemata Epidesmoi
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Proton-voitheion/c/012008001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "epithemata epidesmoi");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7,12,15,16,18,19,31,33,37,41]);
        
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Epithemata/c/012008003?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "epithemata epidesmoi");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Alkoolouxoi losion
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Proton-voitheion/c/012008001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "alkoolouxoi losion");
        await scraper.scrapeDataFromURL(url, [0,2,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
              46]);

        // Gantia Maskes Surigges
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Proton-voitheion/c/012008001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "gantia maskes surigges");
        await scraper.scrapeDataFromURL(url, [1,3,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,20, 21, 22, 23, 24,
             25, 26, 27, 28, 29, 30, 31, 32, 33,35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]);
        
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Gantia-koyzinas/c/013002001?pageNumber=0";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "gantia maskes surigges");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,8,10]);

        // Proionta profylaxhs
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Profylaktika-and-Axesoyar/c/012008004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "proionta profulaxhs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Thermometra Masoutis does not has this category
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Parafarmakeytika/Proton-voitheion/c/012008001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "parafarmakeutika eidh", "thermometra");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
             18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,34,35,36,38, 39, 40, 41, 42, 43, 44, 
             45, 46]);

        // STOMATIKH YGIEINH

        // Odontovoyrtses
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Stomatiki-ygieini/Odontovoyrtses/c/012006001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "stomatikh ugieinh", "odontovourtses");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Odontokremes
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Stomatiki-ygieini/Odontokremes/c/012006002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "stomatikh ugieinh", "odontokremes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Stomatika dialymata
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Stomatiki-ygieini/Stomatika-dialymmata/c/012006003?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "stomatikh ugieinh", "stomatika dialumata");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Odontika nhmata
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Stomatiki-ygieini/Odontika-nimata/c/012006004?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "stomatikh ugieinh", "odontika numata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // ANTIHLIAKA

        // Antihliaka swmatos
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Antiiliaka/Somatos/c/012007002?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "antihliaka", "antihliaka swmatos");
        await scraper.scrapeDataFromURL(url, [-1])

        // Antihliaka proswpoy Masoutis does not has this category
        url = "https://www.ab.gr/click2shop/Eidi-prosopikis-peripoiisis/Antiiliaka/Prosopoy/c/012007001?q=%3Arelevance";
        scraper.setCategory("proswpikh frontida", "antihliaka", "antihliaka proswpou");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed. Error: ${error}`);
    }
};

async function scrapeHealthyDietURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // DIATROFH

        // Xwris gloutenh
        url = "https://www.ab.gr/click2shop/Eidiki-Diatrofi/Xoris-Gloyteni/c/019001?q=%3Arelevance";
        scraper.setCategory("diatrofh", "ugieinh diatrofh", "xwris gloutenh");
        await scraper.scrapeDataFromURL(url, [-1]); 

        // Xwris zaxarh
        url = "https://www.ab.gr/click2shop/Eidiki-Diatrofi/Choris-Prosthiki-Zacharis/c/019004?q=%3Arelevance";
        scraper.setCategory("diatrofh", "ugieinh diatrofh", "Χωρίς zaxarh");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xwris laktozh
        url = "https://www.ab.gr/click2shop/Eidiki-Diatrofi/Choris-Laktozi/c/019002?q=%3Arelevance";
        scraper.setCategory("diatrofh", "ugieinh diatrofh", "Χωρίς laktozh");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Me stevia
        url = "https://www.ab.gr/click2shop/Eidiki-Diatrofi/Me-glykantikes-yles/c/019003?q=%3Arelevance";
        scraper.setCategory("diatrofh", "ugieinh diatrofh", "me stevia");
        await scraper.scrapeDataFromURL(url, [-1]);

        //  // Biologika
        url = "https://www.ab.gr/click2shop/search?q=%CE%B2%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%B1:relevance:isBio:true&sort=relevance&text=%CE%B2%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%B1&pageNumber=0";
        scraper.setCategory("diatrofh", "ugieinh diatrofh", "viologika");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed. Error: ${error}`);
    }
}

async function scrapeFruitsURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // FROUTA

        // Mhla
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Mila/c/001001001?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "mhla");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpananes
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Mpananes/c/001001002?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "mpananes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Portokalia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Portokalia-Mantarinia-Gkreip-Froyt/c/001001003?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "portokalia");
        await scraper.scrapeDataFromURL(url, [0,2,6,8]);

        // Mantarinia 
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Portokalia-Mantarinia-Gkreip-Froyt/c/001001003?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "mantarinia");
        await scraper.scrapeDataFromURL(url, [1,3,4,5,6,7,9,10]);

        // GRAPEFRUIT
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Portokalia-Mantarinia-Gkreip-Froyt/c/001001003?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "grapefruit");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,7,8,9,10]);

        // Axladia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Achladia/c/001001004?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "axladia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Lemonia Laims
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Lemonia-Laims/c/001001006?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "lemonia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aktinidia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Aktinidia/c/001001005?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "aktinidia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Karpouzia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%81%CF%80%CE%BF%CF%85%CE%B6%CE%B9%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "karpouzia");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Peponia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B5%CF%80%CE%BF%CE%BD%CE%B9%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "peponia");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Rodakina
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%BF%CE%B4%CE%B1%CE%BA%CE%B9%CE%BD%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "rodakina");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Nektarinia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BD%CE%B5%CE%BA%CF%84%CE%B1%CF%81%CE%B9%CE%BD%CE%B9%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "nektarinia");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Berikoka
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B2%CE%B5%CF%81%CE%B9%CE%BA%CE%BF%CE%BA%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "verikoka");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Fraoules
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Fraoyles-Vatomoyra/c/001001012?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "fraoules");
        await scraper.scrapeDataFromURL(url, [1,2]);

        // Batomoura
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Fraoyles-Vatomoyra/c/001001012?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "vatomoura");
        await scraper.scrapeDataFromURL(url, [0]);

        // Suka
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%85%CE%BA%CE%B1";
        // scraper.setCategory("opwropwleio", "frouta", "suka");
        // await scraper.scrapeDataFromURL(url, [0])

        // Damaskina
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Syka-Damaskina/c/001001013?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "damaskhna");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Exwtika Frouta
        url = "https://www.ab.gr/click2shop/Oporopoleio/Froyta/Ananas-Mangko-Exotika-froyta/c/001001014?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "frouta", "exwtika frouta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // LAXANIKA

        // Aggouria
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Aggoyria-Tomates/c/001002001?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "aggouria");
        await scraper.scrapeDataFromURL(url, [0,3,5,6,7,9,10,12,13,14,15,16,17,18,19]);

        // Tomates
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Aggoyria-Tomates/c/001002001?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "tomates");
        await scraper.scrapeDataFromURL(url, [1,2,4,8,11]);

        // Patates
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Patates-Kremmydia-Skorda/c/001002002?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "patates");
        await scraper.scrapeDataFromURL(url, [0,1,3,8,10,12,15,16,17]);

        // Kremmudia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Patates-Kremmydia-Skorda/c/001002002?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "kremmudia");
        await scraper.scrapeDataFromURL(url, [2,3,4,5,6,7,9,11,12,13,14,18])

        // Skorda
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Patates-Kremmydia-Skorda/c/001002002?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "skorda");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5,6,7,8,9,10,11,13,14,15,16,17,18]);

        // Maroulia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Maroylia-Salates-Roka/c/001002003?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "maroulia");
        await scraper.scrapeDataFromURL(url, [3,4,8]);

        // Roka
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Maroylia-Salates-Roka/c/001002003?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "roka");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,9,10,11,12,13,14,15]);
        
        // Etoimes salates
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Etoimes-salates-lachanikon/c/001002004?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "etoimes salates");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Laxano
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Lachano-Mprokolo-Koynoypidi/c/001002006?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "laxano");
        await scraper.scrapeDataFromURL(url, [0,2,4,5]);

        // Mprokolo
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Lachano-Mprokolo-Koynoypidi/c/001002006?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "mprokolo");
        await scraper.scrapeDataFromURL(url, [1,3,4,5,6,7]);

        // Kounoupidi
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Lachano-Mprokolo-Koynoypidi/c/001002006?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "kounoupidi");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,6,7]);

        // Piperies
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Piperies-Melitzanes-Kolokythakia/c/001002007?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "piperies");
        await scraper.scrapeDataFromURL(url, [1,5,7,11,12]);

        // Melitzanes
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Piperies-Melitzanes-Kolokythakia/c/001002007?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "melitzanes");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,5,6,8,9,10,12]);

        // Kolokuthakia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Piperies-Melitzanes-Kolokythakia/c/001002007?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "kolokuthakia");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,8,9,10,11]);

        // Fasolakia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Arakas-Fasolakia-Mpamies-Koykia/c/001002008?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "fasolakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // karota
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Karota-Reves-Rapanakia/c/001002009?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("opwropwleio", "laxanika", "karota");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Rapanakia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%B1%CF%80%CE%B1%CE%BD%CE%B1%CE%BA%CE%B9%CE%B1";
        // scraper.setCategory("opwropwleio", "laxanika", "rapanakia");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Manitaria
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Manitaria/c/001002010?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "manitaria");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kalampoki
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Kalampoki-Agginares-Sparaggia/c/001002011?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("opwropwleio", "laxanika", "kalampoki");
        await scraper.scrapeDataFromURL(url, [1,2]);

        // Sparaggia
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Kalampoki-Agginares-Sparaggia/c/001002011?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("opwropwleio", "laxanika", "sparaggia");
        await scraper.scrapeDataFromURL(url, [0,2]);

        // Pantzaria
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CE%BD%CF%84%CE%B6%CE%B1%CF%81%CE%B9%CE%B1";
        // scraper.setCategory("opwropwleio", "laxanika", "pantzaria");
        // await scraper.scrapeDataFromURL(url, [4])

        // Murwdika
        url = "https://www.ab.gr/click2shop/Oporopoleio/Lachanika/Aromatika-Myrodika/c/001002012?q=%3Arelevance";
        scraper.setCategory("opwropwleio", "laxanika", "murwdika");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
    
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeDairyRefrigeratedItemsURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null
                                            // args: ['--start-maximized',
                                            // '--proxy-server=socks4://82.142.87.2:4145']
                                        });
        let url = "";

        // GALA

        // Fresko gala
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Gala/Fresko-gala/c/003001001?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "gala", "fresko gala");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ypshlhs pasteriwshs
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Gala/Ypsilis-pasteriosis/c/003001002?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "gala", "upshlhs pasteriwshs");
        await scraper.scrapeDataFromURL(url, [-1]); 

        // Sokolatouxo
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Gala/Sokolatoycho/c/003001004?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "gala", "sokolatouxa");
        await scraper.scrapeDataFromURL(url, [-1]); 

        // Futiko
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Gala/Fytika-Rofimata/c/003001006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "gala", "futiko");
        await scraper.scrapeDataFromURL(url, [-1]); 

        // Ebapore
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Gala/Evapore/c/003001005?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "gala", "evapore");
        await scraper.scrapeDataFromURL(url, [-1]);

        // GIAOYRTI

        // Ageladino
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Leyka-giaoyrtia/c/003002002?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "ageladino");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,11,12,14,15,16,17,19,21,22,23,24,26,
        27,28,29,30,33,36,37,39,40,41,43,45,46,47,48,49,51,55,58,59,62,66,68,69]);

        // Katsikisio
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Paradosiaka-giaoyrtia/c/003002001?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "katsikisio");
        await scraper.scrapeDataFromURL(url, [1,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28]);

        // Proveio
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Paradosiaka-giaoyrtia/c/003002001?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "proveio");
        await scraper.scrapeDataFromURL(url, [0,2,3,10,11,16,19,20,22,23,24,26,27]);

        // Straggisto
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Leyka-giaoyrtia/c/003002002?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "straggisto");
        await scraper.scrapeDataFromURL(url, [10,13,18,20,25,31,32,34,35,38,42,44,50,52,53,54,56,57,60,61,63,64,
        65,67]);

        // Epidorpio
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Epidorpia-giaoyrtioy/c/003002003?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "epidorpio");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Paidiko
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Paidika/c/003002005?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "paidiko");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Rofhma
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Giaoyrtia/Rofima/c/003002004?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "giaourti", "rofhma");
        await scraper.scrapeDataFromURL(url, [-1]);

        // FRESKES ZYMES FYLLA

        // Gia krouasan
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskes-zymes-Fylla-Magia/c/003006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "gia krouasan");
        await scraper.scrapeDataFromURL(url, [0,2,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22]);

        // Gia pitsa
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskes-zymes-Fylla-Magia/c/003006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "gia pitsa");
        await scraper.scrapeDataFromURL(url, [0,2,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22]);

        // Gia sfoliata
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskes-zymes-Fylla-Magia/c/003006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "gia sfoliata");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,17,18,19,21,22]);

        // Fyllo kroustas
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskes-zymes-Fylla-Magia/c/003006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "fullo kroustas");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,8,10,11,12,13,15,16,17,18,19,20,21,22]);

        // Xwriatiko fyllo
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskes-zymes-Fylla-Magia/c/003006?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "xwriatiko fullo");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,16,18,,20,21,22]);

        // Rola kanelas Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        // scraper.setCategory("galaktokomika eidh psugeiou", "freskes zumes fulla", "rola kanelas");
        // await scraper.scrapeDataFromURL(url, [-1])

        // XYMOI TSAI

        // Xymoi
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Chymoi-psygeioy/c/003008?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "xumoi tsai", "xumoi");
        await scraper.scrapeDataFromURL(url, [-1])

        // Tsai
        // url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011455&subdescr=xumoi-froutwn-freskioi-tsai";
        // scraper.setCategory("galaktokomika eidh psugeiou", "xumoi tsai", "tsai");
        // await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        //      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
        //       44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66])

        // Freskoi Zwmoi
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Freskoi-Zomoi/c/003007?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "freskoi zwmoi", "freskoi zwmoi");
        await scraper.scrapeDataFromURL(url, [-1])

        // Auga
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Ayga/c/003009?q=%3Arelevance";
        scraper.setCategory("galaktokomika eidh psugeiou", "auga", "auga");
        await scraper.scrapeDataFromURL(url, [-1])

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeAllantikaTuriaDelicatessenURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

         // TYRIA

        // Feta
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Feta/c/004001001?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "feta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kremwdh - Aloifwmena
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Kremodi-aloifomena-tyria/c/004001003?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "kremwdh aloifwmena");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mozzarella
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Mozzarella/c/004001004?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "mozzarella");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Graviera
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Gravieres/c/004001005?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "graviera");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kefaloturi
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Kefalotyria-Pekorino/c/004001007?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "kefaloturi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Parmezana
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Parmezana/c/004001008?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "parmezana");
        await scraper.scrapeDataFromURL(url, [-1]);

        // regato
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Regato/c/004001009?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "regato");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gouda - Edam - Emmental - Cheddar
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Gouda-Edam-Emmental-Cheddar/c/004001011?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "gouda edam emmental cheddar");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xaloumi
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Challoymi/c/004001012?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "xaloumi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Hmiskluro - Kaseri
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Imisklira-tyria-Kaseria/c/004001014?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "hmiskluro kaseri");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mple
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Mple-tyria/c/004001015?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "mple");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Trimmeno
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Trimmena-tyria/c/004001017?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "trimmeno");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Se Fetes
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Tyria/Tyria-gia-tost/c/004001016?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "turia", "se fetes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // ALLANTIKA

        // Zampon
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Zampon/c/004002001?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "zampon");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Galopoula - Kotopoulo
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Galopoyla-Kotopoylo/c/004002002?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "galopoula kotopoulo");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Wmoplath
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Omoplati/c/004002003?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "wmoplath");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Loukanika
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Loykanika/c/004002004?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "loukanika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Salami aeros
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Salami-aeros/c/004002005?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "salami aeros");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mortadela
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Mortadela/c/004002006?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "mortadela");
        await scraper.scrapeDataFromURL(url, [-1]); 

        // Mpeikon - Panseta - Mprizola
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Mpeikon-Panseta-Mprizola/c/004002007?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "mpeikon panseta mprizola");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pariza - Parizaki
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Allantika/Pariza-Parizaki/c/004002008?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "allantika", "pariza parizaki");
        await scraper.scrapeDataFromURL(url, [-1]);

        //  DELICATESSEN

        // Psaria Alipasta
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Delicatessen/Psaria-pasta-kai-se-ladi/c/004003001?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "delicatessen", "psaria alipasta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Salates
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Delicatessen/Salates-Alloifes/c/004003004?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "delicatessen", "salates");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Elies
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Delicatessen/Elies/c/004003006?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "delicatessen", "elies");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Toursi
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Delicatessen/Toyrsi/c/004003007?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "delicatessen", "toursi");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Xalvas
        url = "https://www.ab.gr/click2shop/Tyria-Allantika-and-Delicatessen/Delicatessen/Chalvas/c/004003008?q=%3Arelevance";
        scraper.setCategory("turia allantika delicatessen", "delicatessen", "xalvas");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeTupopoihmenaTrofimaURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // ZYMARIKA

        // Makaronia
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zymarika/Makaronia/c/010001001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zumarika", "makaronia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Diafora zumarika
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zymarika/Alles-pastes/c/010001002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zumarika", "diafora zumarika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Paradosiaka
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zymarika/Paradosiaka/c/010001004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zumarika", "paradosiaka");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gemista
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zymarika/Gemista/c/010001003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zumarika", "gemista");
        await scraper.scrapeDataFromURL(url, [-1]);

        // RYZI

        // Karolina
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-leyko/c/010002005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "karolina");
        await scraper.scrapeDataFromURL(url, [2,3,4,6,8,10,11,12,13,14,15,17,18,19,20,22,23,25,26]);

        // Glase
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-leyko/c/010002005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "glase");
        await scraper.scrapeDataFromURL(url, [0,1,4, 5, 6, 7, 8, 9, 10, 11, 12, 13,15,16,17,19,20,21,22,24,26]);

        // Nuxaki
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-leyko/c/010002005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "nuxaki");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,12,13,14,16,18,19,20,21,23,24,25,26]);

        // Parboiled
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-parboiled/c/010002006?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "parboiled");
        await scraper.scrapeDataFromURL(url, [-1])

        // Basmati
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-aromatiko/c/010002007?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "mpasmati");
        await scraper.scrapeDataFromURL(url, [6,10,12]);

        // Jasmine
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Ryzi-aromatiko/c/010002007?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "jasmine");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,7,8,9,10,11,13]);

        // Kastano
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Alla-ryzia/c/010002008?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "kastano");
        await scraper.scrapeDataFromURL(url, [1,2,4,5,9,12,16,17,18,20]);

        // Agrio kai Exwtiko
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Alla-ryzia/c/010002008?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ruzi", "agrio exwtiko");
        await scraper.scrapeDataFromURL(url, [0,2,3,6,7,8,10,11,13,14,15,16,17,18,19,20,21,22]);

        // Rizoto
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%B9%CE%B6%CE%BF%CF%84%CE%BF";
        // scraper.setCategory("tupopoihmena trofhma", "ruzi", "rizoto");
        // await scraper.scrapeDataFromURL(url, [-1])

        // OSPRIA

        // Fasolia
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Fasolia/c/010002001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "fasolia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Fakes
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Fakes/c/010002002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "fakes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Revuthia
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Revithia/c/010002003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "revuthia");
        await scraper.scrapeDataFromURL(url, [0-1]);

        // Fava
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Alla-ospria/c/010002004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "fava");
        await scraper.scrapeDataFromURL(url, [3,4]);

        // Koukia
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Alla-ospria/c/010002004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "koukia");
        await scraper.scrapeDataFromURL(url, [0,1,2,3])
        
        // Sitari
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Ryzi-Ospria/Alla-ospria/c/010002004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ospria", "sitari");
        await scraper.scrapeDataFromURL(url, [0,1,2,4])

        // LADI

        // Elaiolado
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Elaiolado/c/010003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ladi", "elaiolado");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Purhnelaio Ab does not has this product
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CF%85%CF%81%CE%B7%CE%BD%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF";
        // scraper.setCategory("tupopoihmena trofhma", "ladi", "purhnelaio");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Sporelaio
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Sporelaio/c/010004?q=%3Arelevance&sort=relevance";
        scraper.setCategory("tupopoihmena trofhma", "ladi", "sporelaio");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mageirika liph
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Mageirika-lipi/c/010005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "ladi", "mageirika liph");
        await scraper.scrapeDataFromURL(url, [-1]);

        // KONSERVES

        // Manitaria
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Manitaria/c/010006006?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "manitaria");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Laxanika
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Psilokommenes-tomates/c/010006001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Passata/c/010006002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Oloklires-tomates/c/010006003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Peltes-tomatas/c/010006004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Diafora-lachanika/c/010006007?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Psari
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Tonos-Tonosalata/c/010006008?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "psari");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Sardeles/c/010006009?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "psari");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Malakia/c/010006010?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "psari");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Diafora-Psarika/c/010006011?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "psari");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kreas
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Kreatika-Loykanika/c/010006012?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "kreas");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kompostes
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Kompostes/c/010006014?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "kompostes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Etoima faghta
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Konserves/Etoima-fagita/c/010006013?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "konserves", "etoima faghta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // ALEURI - SIMIGDALI

        // Gia oles tis xrhseis
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Aleyri-olon-ton-chriseon/c/010007001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "gia Όλες Τις Χρήσεις");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Skliro-Malako-aleyri/c/010007002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "gia oles tis xrhseis");
        await scraper.scrapeDataFromURL(url, [0,4,5,8,11]);

        // Sklhro
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Skliro-Malako-aleyri/c/010007002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "sklhro");
        await scraper.scrapeDataFromURL(url, [1,2,3,5,6,7,9,10,11,12,13]);

        // Malako
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Skliro-Malako-aleyri/c/010007002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "malako");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,8,9,10,12,13]);

        // Farina
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Farina/c/010007003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "farina");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Olikhs aleshs
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Eidika-aleyra/c/010007004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "olikhs aleshs");
        await scraper.scrapeDataFromURL(url, [2,3]);

        // Simigdali
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Aleyri-Simigdali/Simigdali/c/010007005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "aleuri simigdali", "simigdali");
        await scraper.scrapeDataFromURL(url, [-1]);

        // EIDH ZAXAROPLASTIKHS

        // Kouvertoura
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "kouvertoura");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,5,9,13,14,16,17,20,23,24,25,26,31,32,35,36,38,39,41,42,43,
        44,46,47,48,49,50,51,52,53,54]);

        // Zaxarh axnh
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zachari/Leyki/c/010010001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "zaxarh axnh");
        await scraper.scrapeDataFromURL(url, [0,2]);

        // Vanilies
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "vanilies");
        await scraper.scrapeDataFromURL(url, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19,
             20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
              45, 46, 47, 48, 49, 50, 53, 54]);

        // korn flaour
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Korn-flaoyr-Nisestes/c/010008001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "korn flaour");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpeikin paounter
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "mpeikin paounter");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6, 7, 8, 9, 10, 11, 12, 13, 14, 15,17,18,19,21,22,23,24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
             50, 51, 52, 53, 54]);

        // Vaseis - Pantespani
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Vaseis-Pantespani/c/010008004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "vaseis pantespani");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Zele
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Meigmata-gia-glyka/Zele-Kremes/c/010009001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "zele");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5,6,10,14,20,21,22,25,26,29,30,31]);

        // Kremes - Santigi
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Meigmata-gia-glyka/Zele-Kremes/c/010009001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "kremes santigi");
        await scraper.scrapeDataFromURL(url, [4,6,7,9,10,11,12,13,14,15,16,17,18,20,24,25,26,29]);
        
        url = "https://www.ab.gr/click2shop/Galaktokomika-and-Eidi-Psygeioy/Kremes-galaktos-and-santigy/Santigy/c/003005002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "kremes santigi");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Garnirismata/c/010008002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "kremes santigi");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,8,9,10,11,12,13,14,15,16,17,18,19,20]);

        // Etoima meigmata
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Meigmata-gia-glyka/Meigma-gia-toyrtes/c/010009002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "etoima meigmata");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Meigmata-gia-glyka/Meigma-gia-alla-glyka/c/010009003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "etoima meigmata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xrwma zaxaroplastikhs 
        url = "https://www.ab.gr/click2shop/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=:relevance&sort=relevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "xrwma zaxaroplastikhs");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
             18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
              42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54]);

        // Magia
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "magia");
        await scraper.scrapeDataFromURL(url, [0,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
              46, 47, 48, 49, 50, 51, 52, 53, 54]);

        // Diafora ulika
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Eidi-zacharoplastikis/Ylika-zacharoplastikis/c/010008003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "eidh zaxaroplastikhs", "diafora ulika");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5,6,7,9,10,11,12,13,15,16,18,19,20,21,22,23,25,,27,28,29,
        30,33,34,37,40,45,47,48,50,51,52]);

        // ZAXARH

        // Leukh
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zachari/Leyki/c/010010001?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("tupopoihmena trofhma", "zaxarh", "leukh");
        await scraper.scrapeDataFromURL(url, [1]);

        // Akatergasth
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zachari/Akatergasti/c/010010002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zaxarh", "akatergasth");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ypokatastata zaxarhs
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Zachari/Ypokatastata/c/010010003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "zaxarh", "upokatastata zaxarhs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // MPAXARIKA - ALATI

        // Alati
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Mpacharika-Alati/Alati/c/010011001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "mpaxarika alati", "alati");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Piperi
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Mpacharika-Alati/Piperi/c/010011002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "mpaxarika alati", "piperi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpaxarika
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Mpacharika-Alati/Mpacharika/c/010011003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "mpaxarika alati", "mpaxarika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Mpacharika-Alati/Meigmata-mpacharikon/c/010011005?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "mpaxarika alati", "mpaxarika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // SALTSES - DRESSING

        // Ketsap
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Ketsap/c/010012006?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "ketsap");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Moustarda
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Moystarda/c/010012008?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "moustarda");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Magioneza
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Magioneza/c/010012007?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "magioneza");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Gia zymarika
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Gia-zymarika/c/010012004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "gia zumarika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gia kreas
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Gia-kreas/c/010012001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "gia kreas");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gia psari Ab does not has this product
        // url = "https://eshop.masoutis.gr/categories/index/dressing?item=563&subitem=022120&subdescr=saltses-moustardes-ketsap-dressing";
        // scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "gia psari");
        // await scraper.scrapeDataFromURL(url, [-1]);

        // Gia salates
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Saltses-Dressings/Gia-salates/c/010012003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "saltses dressing", "gia salates");
        await scraper.scrapeDataFromURL(url, [-1]);

        // XYDI - XYMOS LEMONIOY

        // Xudi
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Xydi-Lemoni/Xydi/c/010013001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "xudi xumos lemoniou", "xudi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xudi Balsamico
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Xydi-Lemoni/Xydi-Balsamico/c/010013002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "xudi xumos lemoniou", "xudi valsamiko");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Krema Balsamico
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Xydi-Lemoni/Krema-Balsamico/c/010013003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "xudi xumos lemoniou", "krema valsamiko");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Xymos lemonioy
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Xydi-Lemoni/Lemoni/c/010013004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "xudi xumos lemoniou", "xumos lemoniou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // SOUPES - KYBOI - POYRES

        // Kuboi - Zwmos
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Soypes-Kyvoi-Poyres/Kyvoi-Zomos/c/010014001?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "soupes kuvoi poures", "kuvoi zwmos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Poures   
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Soypes-Kyvoi-Poyres/Poyres/c/010014002?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "soupes kuvoi poures", "poures");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpesamel   
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Soypes-Kyvoi-Poyres/Mpesamel/c/010014003?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "soupes kuvoi poures", "mpesamel");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Soupes stigmhs   
        url = "https://www.ab.gr/click2shop/Vasika-typopoiimena-trofima/Soypes-Kyvoi-Poyres/Soypes-stigmis/c/010014004?q=%3Arelevance";
        scraper.setCategory("tupopoihmena trofhma", "soupes kuvoi poures", "soupes stigmhs");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeFreskoKreasKaiPsari() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // NWPA KREATA

        // Mosxari
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Moschari-gia-tin-katsarola-i-to-foyrno/c/002001?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "mosxari");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Moschari-gia-tin-schara-i-to-tigani/c/002002?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "mosxari");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xoirino
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Choirino-gia-tin-schara-i-to-tigani/c/002003?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "xoirino");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Choirino-gia-ti-gastra-tin-katsarola-i-to-foyrno/c/002004?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "xoirino");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Arni - Katsiki Ab does not has this product
        // url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011140&subdescr=amnoerifia-aigoprobatoeidh";
        // scraper.setCategory("fresko kreas psari", "nwpa kreata", "arni katsiki");
        // await scraper.scrapeDataFromURL(url, [-1]);

        // Kotopoula & Diafora poulerika
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Kotopoylo-gia-psito-i-vrasto/c/002006?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "kotopoula diafora poulerika");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Kotopoylo-gia-to-tigani/c/002007?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "kotopoula diafora poulerika");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Galopoyla/c/002008?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "kotopoula diafora poulerika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kunhgi Ab does not has this product
        // url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011160&subdescr=thhramata";
        // scraper.setCategory("fresko kreas psari", "nwpa kreata", "kunhgi");
        // await scraper.scrapeDataFromURL(url, [-1]);

        // Etoima geumata
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Etoimes-Lyseis/c/002011?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "nwpa kreata", "etoima geumata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // FRESKA PSARIA THALASSINA

        // Psaria
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Freska-psaria-and-thalassina/c/002013?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "freska psaria thallasina", "psaria");
        await scraper.scrapeDataFromURL(url, [6,8,9,10]);

        // Thalassina 
        url = "https://www.ab.gr/click2shop/Fresko-Kreas-and-Psaria/Freska-psaria-and-thalassina/c/002013?q=%3Arelevance";
        scraper.setCategory("fresko kreas psari", "freska psaria thallasina", "thallasina");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,7]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeKatepsugmenaTrofimaURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null
                                            // args: ['--start-maximized',
                                            // '--proxy-server=socks4://82.142.87.2:4145']
                                        });
        let url = "";

        // Laxanika
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Lachanika-and-Froyta/Lachanika/c/005001002?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "laxanika", "laxanika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Frouta
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Lachanika-and-Froyta/Froyta/c/005001001?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "frouta", "frouta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Patates
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Lachanika-and-Froyta/Patates/c/005001003?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "patates", "patates");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Fulla - Zumes
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Pitses-Fylla-Pites/Fylla-Zymes/c/005005003?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "fulla zumes", "fulla zumes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pites - Pitakia
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Pitses-Fylla-Pites/Pites-Pitakia/c/005005001?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "pites pitakia", "pites pitakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pitses - Peinirli
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Pitses-Fylla-Pites/Pitses-Peinirli/c/005005002?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "pitses peinirli", "pitses peinirli");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Krouasan Ab does not has this product
        // url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011370&subdescr=krouasan---artoskeuasmata-katepsugmena";
        // scraper.setCategory("katepsugmena trofhma", "krouasan", "krouasan");
        // await scraper.scrapeDataFromURL(url, [-1]);

        // Thalassina - Psaria
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Psaria-and-thalassina/c/005003?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "thallasina psaria", "thallasina psaria");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kreata
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Kreas/c/005002?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "kreata", "kreata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pagwta
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Pagota/c/005006?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "pagwta", "pagwta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Etoima geumata
        url = "https://www.ab.gr/click2shop/Katepsygmena-trofima/Etoima-Fagita/c/005004?q=%3Arelevance";
        scraper.setCategory("katepsugmena trofhma", "etoima geumata", "etoima geumata");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();
        
    } catch (error) {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapePrwinoKaiRofhmataURLs() {
    try {
        
        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // DHMHTRIAKA

        // Corn flakes
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Corn-flakes/c/009001001?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "corn flakes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Muesli
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Muesli/c/009001002?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "mousli");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Brwmh
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Enilikon/c/009001003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "vrwmh");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,6,8,9,10,12,13,14,15,16,17,18,19,20,23, 24, 25, 26,
             27, 28, 29, 30, 31, 32, 33, 34, 35, 36,38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
              53, 54, 55, 56, 57, 58, 59, 60, 61, 62]);

        // Enhlikwn
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Enilikon/c/009001003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "enhlikwn");
        await scraper.scrapeDataFromURL(url, [0,7,11,21,22,37]);

        // Paidika
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Paidika/c/009001004?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "paidika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpares dhmhtriakwn 
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Dimitriaka/Mpares-dimitriakon/c/009001005?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "dhmhtriaka", "mpares dhmhtriakwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // MELI

        // Thumarisia
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Meli/Thymarisia/c/009008001?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "meli", "thumarissia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Anthewn - Kwnoforwn
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Meli/Antheon-Konoforon/c/009008002?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "meli", "anthewn kwnoforwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Alles poikiles
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Meli/Alles-poikilies-portokalias-ereikis-k-a-/c/009008003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "meli", "alles poikilies");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Basilikos poltos
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Meli/Gyri-Vasilikos-poltos/c/009008004?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "meli", "vasilikos poltos");
        await scraper.scrapeDataFromURL(url, [-1])

        // MARMELADES

        // Fraoula - Kerasi
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Marmelades/Fraoyla-Kerasi/c/009009002?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "marmelades", "fraoula kerasi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Rodakino - Berikoko
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Marmelades/Rodakino-Verikoko/c/009009001?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "marmelades", "rodakino verikoko");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Batomouro - Bussino
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Marmelades/Alles-geyseis/c/009009003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "marmelades", "vatomouro vussino");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,5,6,7,9,10,11,13,14,15,16,17,18,19,20,22]);

        // Alles geuseis
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Marmelades/Alles-geyseis/c/009009003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "marmelades", "alles geuseis");
        await scraper.scrapeDataFromURL(url, [4,8,12,21]);

        // ALEIMMATA KARPWN

        // Pralines
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Eidi-epaleipsis/c/009010?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "aleimmata karpwn", "pralines");
        await scraper.scrapeDataFromURL(url, [2,4,5,7,8,9,10,11,13,14,15,16,17,18,22,24,25,26,27,31,32,33,36,
        37,38,39,42,46,47,48,49,50,52,53]);

        // Taxini
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Eidi-epaleipsis/c/009010?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "aleimmata karpwn", "taxini");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,12,16,19,20,21,23,28,29,30,31,32,34,35,40,41,42,
        43,44,45,46,47,48,49,50,51]);

        // Fustikobouthro
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Eidi-epaleipsis/c/009010?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "aleimmata karpwn", "fustikovouthro");
        await scraper.scrapeDataFromURL(url, [0,1,3,4,5,6,8, 9, 10, 11, 12, 13, 14, 15,17, 18, 19, 20, 21, 22,
             23, 24, 25, 26, 27, 28, 29, 30,32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,47, 48, 49,
              50, 51, 52, 53]);
        
        // Alles geyseis
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Eidi-epaleipsis/c/009010?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "aleimmata karpwn", "alles geuseis");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
         18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43,
          44, 45, 46, 50, 51, 52, 53]);

        // KAFES ROFHMATA

        // Espresso
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Espresso-Cappuccino/c/009011004?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "espresso");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Stigmiaios
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Stigmiaios/c/009011002?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "stigmiaios");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Filtrou
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Filtroy/c/009011003?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "filtrou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ellhnikos
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Ellinikos/c/009011001?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "ellhnikos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kapsoules
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Kapsoyles/c/009011005?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "kapsoules");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ypokatastata - Sunodeutika
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kafes/Ypokatastata-Synodeytika/c/009011006?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "upokatastata sunodeutika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kakao - Rofhmata sokolatas
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Kakao-Sokolata-rofima/c/009013?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "kafes rofhmata", "kakao rofhmata sokolatas");
        await scraper.scrapeDataFromURL(url, [-1]);

        // TSAI - AFEPSIMATA

        // Tsai
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Tsai-Afepsimata/Tsai/c/009012001?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "tsai afepsimata", "tsai");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Afepsima
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Tsai-Afepsimata/Afepsimata/c/009012002?q=%3Arelevance";
        scraper.setCategory("prwino rofhmata", "tsai afepsimata", "afepsimata");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();

    } catch {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeProiontaArtouURLs() {
    try {
        
        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // PSWMI

        // Fresko Pswmi
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Fresko-psomi/c/006001?q=%3Arelevance";
        scraper.setCategory("proionta artou", "pswmi", "fresko pswmi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pswmi tou tost
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Psomi-gia-tost/Sitoy/c/006002001?q=%3Arelevance";
        scraper.setCategory("proionta artou", "pswmi", "pswmi tou tost");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Psomi-gia-tost/Sikalis-Olikis-alesis/c/006002002?q=%3Arelevance";
        scraper.setCategory("proionta artou", "pswmi", "pswmi tou tost");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Pites - Pswmakia
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Psomi-gia-tost/Pittes-Psomakia/c/006002003?q=%3Arelevance";
        scraper.setCategory("proionta artou", "pswmi", "pites pswmakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // FRYGANIES KROYTON

        // Fruganies
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Fryganies/c/006003?q=%3Arelevance";
        scraper.setCategory("proionta artou", "fruganies krouton", "fruganies");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Krouton    
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Croutons/c/006009?q=%3Arelevance";
        scraper.setCategory("proionta artou", "fruganies krouton", "krouton");
        await scraper.scrapeDataFromURL(url, [-1]);

        // KRITSINIA PAXIMADIA

        // Kritsinia
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Kritsinia/c/006004?q=%3Arelevance";
        scraper.setCategory("proionta artou", "kritsinia paximadia", "kritsinia");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Paximadia    
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Paximadia/c/006005?q=%3Arelevance";
        scraper.setCategory("proionta artou", "kritsinia paximadia", "paximadia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Koulourakia - Bouthmata
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Koyloyria-glyka/c/006007?q=%3Arelevance";
        scraper.setCategory("proionta artou", "koulourakia vouthmata", "koulourakia vouthmata");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Koyloyria-almyra/c/006008?q=%3Arelevance";
        scraper.setCategory("proionta artou", "koulourakia vouthmata", "koulourakia vouthmata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Tsoureki 
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Tsoyrekia/c/006012?q=%3Arelevance";
        scraper.setCategory("proionta artou", "tsoureki", "tsoureki");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();

    } catch {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

async function scrapeSnacksURLs() {
    try {
        
        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // SOKOLATES

        // Galaktos
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Galaktos/c/009002002?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "galaktos");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Gemistes-Me-xiroys-karpoys/c/009002004?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "galaktos");
        await scraper.scrapeDataFromURL(url, [5,8,9,12,13,14,16,19,20,24,26,27,45,47,51,53]);
        
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Paidikes/c/009002005?q=%3Arelevance&pageNumber=0";
        scraper.setCategory("snaks", "sokolates", "galaktos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ygeias
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Ygeias/c/009002001?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "ugeias");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Gemistes-Me-xiroys-karpoys/c/009002004?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "ugeias");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,6,7,10,11,15,17,18,21,22,23,25,28, 29, 30, 31, 32, 33,
             34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,46,48,49,50,52,54, 55, 56, 57, 58, 59, 60, 61, 62]);

        // Leukes
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Leykes/c/009002003?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "leukes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Sokolatakia
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Sokolatakia/c/009002006?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "sokolatakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gkofretes
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Sokolates/Gkofretes/c/009002008?q=%3Arelevance";
        scraper.setCategory("snaks", "sokolates", "gkofretes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // MPISKOTA

        // Klassika
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Mpiskota/Apla/c/009003001?q=%3Arelevance";
        scraper.setCategory("snaks", "mpiskota", "klassika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Mpiskota/Sokolatas/c/009003003?q=%3Arelevance";
        scraper.setCategory("snaks", "mpiskota", "klassika");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Mpiskota/Polydimitriaka/c/009003004?q=%3Arelevance";
        scraper.setCategory("snaks", "mpiskota", "klassika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gemista
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Mpiskota/Gemista/c/009003002?q=%3Arelevance";
        scraper.setCategory("snaks", "mpiskota", "gemista");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Digestive
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Mpiskota/Digestive/c/009003005?q=%3Arelevance";
        scraper.setCategory("snaks", "mpiskota", "digestive");
        await scraper.scrapeDataFromURL(url, [-1]);

        // GLYKA PROIONTA ZYMHS

        // Krouasan
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Kroyasan/c/006006?q=%3Arelevance";
        scraper.setCategory("snaks", "gluka proionta zumhs", "krouasan");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Keik
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Mini-Cakes-Danish-Donuts/c/006011?q=%3Arelevance";
        scraper.setCategory("snaks", "gluka proionta zumhs", "keik");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Glyka/c/006010?q=%3Arelevance";
        scraper.setCategory("snaks", "gluka proionta zumhs", "keik");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Tsourekia
        url = "https://www.ab.gr/click2shop/Artos-Zacharoplasteio/Tsoyrekia/c/006012?q=%3Arelevance";
        scraper.setCategory("snaks", "gluka proionta zumhs", "tsourekia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // PATATAKIA GARIDAKIA & POP CORN

        // Patatakia
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Snaks/Tsips/c/009007001?q=%3Arelevance";
        scraper.setCategory("snaks", "patatakia garidakia pop korn", "patatakia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Garidakia
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Snaks/Loipa-snaks/c/009007004";
        scraper.setCategory("snaks", "patatakia garidakia pop korn", "garidakia");
        await scraper.scrapeDataFromURL(url, [3,4,8,9,11,13,14,15,16,17,18,21,25,26,27,32,34,35,37,39]);

        // Nachos
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Snaks/Me-vasi-to-kalampokaleyro/c/009007003?q=%3Arelevance";
        scraper.setCategory("snaks", "patatakia garidakia pop korn", "nachos");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Pop corn
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Snaks/Pop-corn/c/009007002?q=%3Arelevance";
        scraper.setCategory("snaks", "patatakia garidakia pop korn", "pop korn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Crackers
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Krakers/c/009006?q=%3Arelevance";
        scraper.setCategory("snaks", "krakers", "krakers");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        // Ksiroi karpoi
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Xiroi-karpoi/c/008012";
        scraper.setCategory("snaks", "xhroi karpoi", "xhroi karpoi");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Apoksuramena frouta
        url = "https://www.ab.gr/click2shop/Krasia-pota-anapsyktika-nera/Apoxiramena-froyta/c/008013?q=%3Arelevance";
        scraper.setCategory("snaks", "apoxuramena frouta", "apoxuramena frouta");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Rizogkofretes
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Snaks/Loipa-snaks/c/009007004";
        scraper.setCategory("snaks", "rizogkofretes", "rizogkofretes");
        await scraper.scrapeDataFromURL(url, [0,1,2,5,6,7,10,12,19,20,22,23,24,28,29,30,31,33,36,38,40]);

        // TSIXLES - KARAMELES

        // Tsixles
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Tsichles/c/009005?q=%3Arelevance";
        scraper.setCategory("snaks", "tsixles karameles", "tsixles");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Karameles
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Karameles/c/009004?q=%3Arelevance";
        scraper.setCategory("snaks", "tsixles karameles", "karameles");
        await scraper.scrapeDataFromURL(url, [1,8,11,13,15,19,20,21,24,25,26,32,35,37,38,39]);

        // Gleifitzouria
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CE%BB%CE%B5%CE%B9%CF%86%CE%B9%CF%84%CE%B6%CE%BF%CF%85%CF%81%CE%B9";
        // scraper.setCategory("snaks", "tsixles karameles", "gleifitzouria");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Zeledakia
        url = "https://www.ab.gr/click2shop/Proino-snacking-and-rofimata/Karameles/c/009004?q=%3Arelevance";
        scraper.setCategory("snaks", "tsixles karameles", "zeledakia");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,5,6,7,9,10,12,14,16,17,18,22,23,27,28,29,30,31,33,
        34,36]);

        await scraper.closeBrowser();

    } catch {
        console.log(`The scraper was failed, error = ${error}`);
    } 
}

async function scrapeKatharistikaXartikaEidhOikiakhsURLs() {
    try {
        
        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";

        // KATHARIOTHTA SPITIOY

        // Genikou katharismou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Genikoy-katharismoy/c/013001006?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "genikou katharismou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Katharistika kouzinas
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Epiplon-kai-loipon-antikeimenon/c/013001007?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika kouzinas");
        await scraper.scrapeDataFromURL(url, [0,1,3,5,7,8,9,10,15,19,20]);

        // Katharistika mpaniou kai toualetas
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Mpanioy/c/013001001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika mpaniou toualetas");
        await scraper.scrapeDataFromURL(url, [2,4,23,31,35,50,59]);

        // Katharistika tzamiwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Tzamion-and-epifaneion/c/013001003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika tzamiwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Katharistika patwmatos
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Patomatos/c/013001005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika patwmatos");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Katharistika epiplwn kai xaliwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Epiplon-kai-loipon-antikeimenon/c/013001007?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika epiplwn xaliwn");
        await scraper.scrapeDataFromURL(url, [2,3,4,6,11,12,13,14,16,17,18,21]);

        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Chalion/c/013001008?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "katharistika epiplwn xaliwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xlwrokatharistika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Chlorokatharistika/c/013001004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "xlwrokatharistika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kata twn alatwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Kata-ton-alaton/c/013001002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "kata twn alatwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Apofraktika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Katharistika/Mpanioy/c/013001001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "apofraktika");
        await scraper.scrapeDataFromURL(url, [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
             20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]);

        // Sfouggaria - Surmata
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Sfoyggarakia-Syrmatakia/c/013002005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "sfouggaria surmata");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xeskonopana - Sfouggaropana
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Xeskonopana-Sfoyggaropana/c/013002002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "xeskonopana sfouggaropana");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gantia oikiakhs xrhshs
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Gantia-koyzinas/c/013002001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "gantia oikiakhs xrhshs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Sakoules aporrimatwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Sakoyles-aporrimaton/c/013002003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "sakoules aporrumatwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Skoupes - Sfouggaristres - Koybades
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Axesoyar-katharismoy/Skoypes-Sfoyggaristres-Koyvades/c/013002004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "kathariothta spitiou", 
        "skoupes sfouggaristres kouvades");
        await scraper.scrapeDataFromURL(url, [-1]);

        // APORRUPANTIKA PIATWN

        // Ygra piatwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-piaton/Cherioy/c/013003001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "aporrupantika piatwn", 
        "ugra piatwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aporrupantika plynthriou piatwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-piaton/Plyntirioy-piaton/c/013003002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "aporrupantika piatwn", 
        "aporrupantika plunthriou piatwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Alati - Symplhrwmatika plhshs
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-piaton/Alati-Sympliromatika-plysis/c/013003003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "aporrupantika piatwn", 
        "alati sumplhrwmatika plhshs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // PLUSIMO ROUXWN

        // Ygra plunthriou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Ygra-gia-Skoyra/c/013004001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "ugra plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Klassika-Ygra/c/013004002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "ugra plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Ygra-gia-Mallina-and-Eyaisthita/c/013004003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "ugra plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);
        
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Ygra-Massalias/c/013004005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "ugra plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Skonh plunthriou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Skoni/c/013004006?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "skonh plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Tampletes plunthriou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-plyntirioy-roychon/Kapsoyles-and-Tampletes/c/013004008?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "tampletes plunthriou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Gia plushmo sto xeri
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aporrypantika-cherioy/c/013008?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "gia plusimo sto xeri");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Malaktika rouxwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Malaktika-roychon/c/013005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "malaktika rouxwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Leukantika - Enisxutika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Leykantika-Enischytika/c/013006?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "leukantika enisxuntika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aposklhruntiko
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aposkliryntika-plyntirioy/c/013007?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "plusimo rouxwn", 
        "aposklurhntiko");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Eidh siderwmatos - Aplwmatos
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-sideromatos-aplomatos/c/013013?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh siderwmatos aplwmatos", "eidh siderwmatos aplwmatos");
        await scraper.scrapeDataFromURL(url, [-1]);

        //  XARTI OIKIAKHS XRHSHS

        // Xarti ugeias
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Charti-ygeias/c/013009001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "xarti oikiakhs xrhshs", 
        "xarti ugeias");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xarti kouzinas
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Charti-koyzinas/c/013009002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "xarti oikiakhs xrhshs", 
        "xarti kouzinas");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xartopetsetes
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Chartopetsetes/c/013009003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "xarti oikiakhs xrhshs", 
        "xartopetsetes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xartomanthla
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Chartomantila/c/013009004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "xarti oikiakhs xrhshs", 
        "xartomanthla");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Ygromanthla
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Charti-oikiakis-chrisis/Ygromantila/c/013009005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "xarti oikiakhs xrhshs", 
        "ugromanthla");
        await scraper.scrapeDataFromURL(url, [-1]);

        // ENTOMOKTONA - ENTOMOAPOTHUTIKA

        // Entomoapothutika xwrou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Entomoktona-Entomoapothitika/Entomoapothitika-choroy/c/013011001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "entomoktona entomoapothhtika", 
        "entomoapothutika xwrou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Entomoktwna
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Entomoktona-Entomoapothitika/Entomoktona/c/013011003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "entomoktona entomoapothhtika", 
        "entomoktona");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Skoroapwthitika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Entomoktona-Entomoapothitika/Skoroapothitika/c/013011004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "entomoktona entomoapothhtika", 
        "skoroapwthitika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // FULAXH ROUXWN

        // Aposmhtika rouxwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Fylaxi-roychon/Aposmitika-roychon/c/013012001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "fulaxh rouxwn", 
        "aposmhtika rouxwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Kremastres
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Fylaxi-roychon/Kremastres/c/013012003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "fulaxh rouxwn", 
        "kremastres");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Sakoules fulaxhs rouxwn
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Fylaxi-roychon/Sakoyles-fylaxis-roychon/c/013012004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "fulaxh rouxwn", 
        "sakoules fulaxhs rouxwn");
        await scraper.scrapeDataFromURL(url, [-1]);

        // ARWMATIKA - KERIA

        // Arwmatika xwrou
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aromatika-Keria/Aromatika-choroy/c/013014002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "arwmatika keria", 
        "arwmatika xwrou");
        await scraper.scrapeDataFromURL(url, [-1]);


        // Keria - Resw
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Aromatika-Keria/Keria-Reso/c/013014001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "arwmatika keria", 
        "keria resw");
        await scraper.scrapeDataFromURL(url, [-1]);

        // GRAFIKH YLH - ANALWSIMA

        // Grafikh ulh
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Grafiki-yli-Analosima/Grafiki-yli/c/013015001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "grafikh ulh analwsima", 
        "grafikh ulh");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Xartika
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Grafiki-yli-Analosima/Chartika/c/013015002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "grafikh ulh analwsima", 
        "xartika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Dwra - Paixnidia 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Dora-Paichnidia/c/013016?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "dwra paixnidia", "dwra paixnidia");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Eidh khpou 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Epochiaka/Eidi-kipoy/c/013018002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh khpou", "eidh khpou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // BBQ - Tzaki 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Epochiaka/BBQ-Tzaki/c/013018001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "BBQ tzaki", "BBQ tzaki");
        await scraper.scrapeDataFromURL(url, [-1]);

        // EIDH KOYZINAS KAI MPANIOY

        // Mageirika skeyh kai kouzinika 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Eidi-koyzinas/c/013010001?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "mageirika skeuh kouzinika");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Skeyi-mageirikis/c/013010002?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "mageirika skeuh kouzinika");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Epitrapezia-eidi/c/013010003?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "mageirika skeuh kouzinika");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Fagitodocheia/c/013010005?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "mageirika skeuh kouzinika");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Alouminoxarta kai Memvranes 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Memvranes-aloyminocharta-ka/c/013010004?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "alouminoxarta memvranes");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Eidh mias xrhshs 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Aloyminoskeyi/c/013010006?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "eidh mias xrhshs");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Eidi-party/c/013010007?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "eidh mias xrhshs");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aksesouar mpaniou 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Eidi-mpanioy/c/013010008?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "aksesouar mpaniou");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Mpataries 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Mpataries/c/013010009?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "mpataries");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Lampes 
        url = "https://www.ab.gr/click2shop/Katharistika-Chartika-and-eidi-spitioy/Eidi-oikiakis-chrisis/Lampes/c/013010010?q=%3Arelevance";
        scraper.setCategory("katharistika xartika eidh oikiakhs", "eidh kouzinas mpaniou",
        "lampes");
        await scraper.scrapeDataFromURL(url, [-1]);

        await scraper.closeBrowser();

    } catch {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

exports.scrapeBabyCareURLs = scrapeBabyCareURLs;
exports.scrapeDrinksURLs = scrapeDrinksURLs;
exports.scrapePetsURLs = scrapePetsURLs;
exports.scrapePersonalCareURLs = scrapePersonalCareURLs;
exports.scrapeHealthyDietURLs = scrapeHealthyDietURLs;
exports.scrapeFruitsURLs = scrapeFruitsURLs; 
exports.scrapeDairyRefrigeratedItemsURLs = scrapeDairyRefrigeratedItemsURLs;
exports.scrapeAllantikaTuriaDelicatessenURLs = scrapeAllantikaTuriaDelicatessenURLs;
exports.scrapeTupopoihmenaTrofimaURLs = scrapeTupopoihmenaTrofimaURLs;
exports.scrapeFreskoKreasKaiPsari = scrapeFreskoKreasKaiPsari;
exports.scrapeKatepsugmenaTrofimaURLs = scrapeKatepsugmenaTrofimaURLs;
exports.scrapePrwinoKaiRofhmataURLs = scrapePrwinoKaiRofhmataURLs;
exports.scrapeProiontaArtouURLs = scrapeProiontaArtouURLs;
exports.scrapeSnacksURLs = scrapeSnacksURLs;
exports.scrapeKatharistikaXartikaEidhOikiakhsURLs = scrapeKatharistikaXartikaEidhOikiakhsURLs;