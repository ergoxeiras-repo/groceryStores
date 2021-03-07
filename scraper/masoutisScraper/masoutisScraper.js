const Scraper = require("../masoutisScraper/scraper");

async function scrapeBabyCareURLs() {
    try {

        const scraper = await new Scraper({headless: false, defaultViewport: null});
        let url = "";   

        // VREFIKO GALA

        // 1hs hlikias
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=011410&subdescr=paidiko-gala-fresko"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 1ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [1]);
        
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022115&subdescr=brefika-galata"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 1ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [1]);

        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=brefikes---paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 1ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,7,8,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]);

        // 2hs hlikias
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=011410&subdescr=paidiko-gala-fresko"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 2ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [0]);

        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022115&subdescr=brefika-galata"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 2ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [0]);

        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=brefikes---paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 2ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [0,1,3,4,5,6,8,9,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]);

        // 3hs hlikias
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=brefikes---paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικό Γάλα", "Βρεφικό Γάλα 3ης ηλικίας");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5,6,7,9,10,11,13,15,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]);
        
        // VREFIKES TROFES
        
        // Vrefikes kremes
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Τροφές", "Βρεφικές Κρέμες");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,36])

        // Vrefika giaourtia
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Τροφές", "Βρεφικά Γιαούρτια");
        await scraper.scrapeDataFromURL(url, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38])

        // Etoima vrefika geumata Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=paidikes-trofes"
        // scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Τροφές", "Έτοιμα Βρεφικά Γεύματα");
        // await scraper.scrapeDataFromURL(url, [])

        // Vrefika snack 
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022134&subdescr=paidikes-trofes"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Τροφές", "Βρεφικά Σνάκ");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,37,38])
        
        // VREFIKES PANES & MWROMANTHLA

        // Vrefikes panes 
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022510&subdescr=brefikes---paidikes-panes-"
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Πάνες Μωρομάντηλα", "Βρεφικές Πάνες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mwromanthla
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022565&subdescr=mwromanthla---ugromanthla";
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικές Πάνες Μωρομάντηλα", "Μωρομάντηλα");
        await scraper.scrapeDataFromURL(url, [-1])

        // PERIPOIHSH SWMATOS

        // Sampouan & Afroloutra
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022740&subdescr=brefika---paidika-kalluntika";
        scraper.setCategory("Βρεφική Φροντίδα", "Περιποίηση Σώματος", "Σαμπουάν Αφρόλουτρα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8,24, 25, 26, 27, 28, 29, 30, 31, 32,43, 44, 45, 46, 47, 48, 49])

        // Kremes Poudres & Ladi
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022740&subdescr=brefika---paidika-kalluntika";
        scraper.setCategory("Βρεφική Φροντίδα", "Περιποίηση Σώματος", "Κρέμες Πούδρες Λάδι");
        await scraper.scrapeDataFromURL(url, [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,33, 34, 35, 36, 37, 38, 39, 40, 41, 42])

        // AKSESOUAR

        // Mpimpero Saliares & Pipiles Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022565&subdescr=mwromanthla---ugromanthla";
        // scraper.setCategory("Βρεφική Φροντίδα", "Αξεσουάρ", "Μπιμπερό Σαλιάρες Πιπίλες");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Piatakia Koutalakia & Pirounakia
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=044405&subdescr=eidh-brefanaptukshs";
        scraper.setCategory("Βρεφική Φροντίδα", "Αξεσουάρ", "Πιατάκια Κουταλάκια Πιρουνάκια");
        await scraper.scrapeDataFromURL(url, [0,1])

        // Vrefika psalidakia
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=044405&subdescr=eidh-brefanaptukshs";
        scraper.setCategory("Βρεφική Φροντίδα", "Αξεσουάρ", "Βρεφικά Ψαλιδάκια");
        await scraper.scrapeDataFromURL(url, [1,2])

        // VREFIKO FARMAKEIO

        // Rinika apofraktika Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022715&subdescr=brefikh---paidikh-ugieinh-dontiwn";
        // scraper.setCategory("vrefikh-frontida", "vrefiko-farmakeio", "rinika-apofraktika");
        // await scraper.scrapeDataFromURL(url, [0,1,2,3,16])

        // Paidika epithemata
        // url = "https://eshop.masoutis.gr/categories/index/search?text=hansaplast";
        // scraper.setCategory("Βρεφική Φροντίδα", "vrefiko-farmakeio", "paidika-epithemata");
        // await scraper.scrapeDataFromURL(url, [0,1,2,4])

        // VREFIKA APORRYPANTIKA

        // Ygra aporrypantika
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022610&subdescr=aporrupantika-plunthriou-gia-mwra";
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικά Απορρυπαντικά", "Υγρά Απορρυπαντικά");
        await scraper.scrapeDataFromURL(url, [9,10])

        // Aporrypantika se skonh Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022610&subdescr=aporrupantika-plunthriou-gia-mwra";
        // scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικά Απορρυπαντικά", "Απορρυπαντικά Σε Σκόνη");
        // await scraper.scrapeDataFromURL(url, [])

        // Malaktika
        url = "https://eshop.masoutis.gr/categories/index/brefikh-frontida?item=545&subitem=022616&subdescr=malaktika-rouxwn-gia-mwra";
        scraper.setCategory("Βρεφική Φροντίδα", "Βρεφικά Απορρυπαντικά", "Μαλακτικά");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022440&subdescr=krasia";
        scraper.setCategory("Κάβα", "Κρασιά", "Λευκά κρασιά");
        await scraper.scrapeDataFromURL(url, [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
             85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
              108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
               128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
                148, 149])

        // Kokkina krasia
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022440&subdescr=krasia";
        scraper.setCategory("Κάβα", "Κρασιά", "Κόκκινα Κρασιά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
             17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
              42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
               67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 91, 137, 138, 146, 147, 148, 149])

        // Roze krasia
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022440&subdescr=krasia";
        scraper.setCategory("Κάβα", "Κρασιά", "Ροζέ Κρασιά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 80,
               81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103,
                104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
                 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
                  142, 143, 144, 145, 146, 147, 148, 149])     
        
        // Gluka krasia
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022440&subdescr=krasia";
        scraper.setCategory("Κάβα", "Κρασιά", "Γλυκά Κρασιά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93,
                94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
                 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
                  133, 134, 135, 136, 139, 140, 141, 142, 143, 144, 145])

        // Afrwdeis oinoi
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022450&subdescr=sampanies---afrwdh-krasia";
        scraper.setCategory("Κάβα", "Κρασιά", "Αφρώδεις Οίνοι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Αναψυκτικά
        
        // Cola
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022410&subdescr=anapsuktika";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Cola");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 93, 94, 95, 96, 97, 98,
              99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
               119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
                138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
                 157, 158, 159, 160, 161])
        
        // Gkazoza
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022410&subdescr=anapsuktika";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Γκαζόζα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
                 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 135, 136, 137, 138, 139, 140, 141, 142, 143,
                  144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161])

        // Lemonada
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%B5%CE%BC%CE%BF%CE%BD%CE%B1%CE%B4%CE%B1";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Λεμονάδα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
                 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
                  161])

        // Portokalada
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%B1%CE%BB%CE%B1%CE%B4%CE%B1";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Πορτοκαλάδα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
             50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
              75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
               100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
                119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
                 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
                  157, 158, 159, 160, 161])

        // Soda-Tonik
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BF%CE%B4%CE%B1";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Soda-Tonic");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
               68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
                92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
                  131, 132, 133, 134])

        // Energeiaka Isotonika
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022415&subdescr=isotonika-pota";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Ενεργειακά Ισοτονικά");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022416&subdescr=energy-drinks";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Ενεργειακά Ισοτονικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Alles geuseis
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022415&subdescr=isotonika-pota";
        scraper.setCategory("Κάβα", "Αναψυκτικά", "Άλλες Γεύσεις");
        await scraper.scrapeDataFromURL(url, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
             23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
              47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
               71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133,
                  134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152,
                   153, 154, 155, 156, 157, 158, 159, 160, 161])

        // XYMOI & KRYA ROFHMATA

        // Xumoi makras diarkeias
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022417&subdescr=xumoi-makras-diarkeias";
        scraper.setCategory("Κάβα", "Χυμοί Κρύα Ροφήματα", "Χυμοί Μακράς Διάρκειας");
        await scraper.scrapeDataFromURL(url, [-1])
        
        // Ice-tea
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022418&subdescr=kruo-tsai";
        scraper.setCategory("Κάβα", "Χυμοί Κρύα Ροφήματα", "Ice-Tea");
        await scraper.scrapeDataFromURL(url, [-1])

        // Ice-coffee
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011425&subdescr=rofhmata---ready-to-drink";
        scraper.setCategory("Κάβα", "Χυμοί Κρύα Ροφήματα", "Ice-Coffee");
        await scraper.scrapeDataFromURL(url, [5])

        // MPYRES
        
        // Lager
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022420&subdescr=mpura";
        scraper.setCategory("Κάβα", "Μπύρες", "Lager");
        await scraper.scrapeDataFromURL(url, [7,8,9,20,21,24,26,42,54,60,62,63,64,65,68, 69, 70, 71, 72,77,81,83,84,85,
            86,87,89,90,92,97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
             115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125])
        
        // Pils
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022420&subdescr=mpura";
        scraper.setCategory("Κάβα", "Μπύρες", "Pils");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 24, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
             53, 54, 55, 56, 57, 58, 59,61,62,63,64,66,67,73,74,75,76,78,79,80,82,83,88,90,91,93,94, 95, 96, 97,
              98, 99,100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
               118, 119, 120, 121, 122, 123, 124, 125, 126, 127])
        
        // Weiss
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022420&subdescr=mpura";
        scraper.setCategory("Κάβα", "Μπύρες", "Weiss");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
               68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
                92, 93, 94, 95, 96, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
                 118, 119, 120, 121, 122, 123, 124, 125, 126, 127])
        
        // Ale
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022420&subdescr=mpures";
        scraper.setCategory("Κάβα", "Μπύρες", "Ale");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
              43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
               67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 91, 92,
                93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
                 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,126,127])
        
        // Radler
        url = "https://eshop.masoutis.gr/categories/index/search?text=radler";
        scraper.setCategory("Κάβα", "Μπύρες", "Radler");
        await scraper.scrapeDataFromURL(url, [-1])
        
        // Xwris alkool
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022420&subdescr=mpures";
        scraper.setCategory("Κάβα", "Μπύρες", "Χωρίς Αλκοόλ");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
             44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
              69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
               94, 95, 96, 97, 98, 99, 100, 101, 102,125,126,127])

        // EMFΙALWMENA NERA

        // Epitrapezio - Metalliko nero
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B5%CF%80%CE%B9%CF%84%CF%81%CE%B1%CF%80%CE%B5%CE%B6%CE%B9%CE%BF%20%CE%BD%CE%B5%CF%81%CE%BF";
        scraper.setCategory("Κάβα", "Εμφυαλωμένα Νερά", "Επιτραπέζιο Μεταλλικό Νερό");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B5%CF%84%CE%B1%CE%BB%CE%BB%CE%B9%CE%BA%CE%BF%20%CE%BD%CE%B5%CF%81%CE%BF";
        scraper.setCategory("Κάβα", "Εμφυαλωμένα Νερά", "Επιτραπέζιο Μεταλλικό Νερό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Anthrakouxo nero
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BD%CE%B8%CF%81%CE%B1%CE%BA%CE%BF%CF%85%CF%87%CE%BF%20%CE%BD%CE%B5%CF%81%CE%BF";
        scraper.setCategory("Κάβα", "Εμφυαλωμένα Νερά", "Ανθρακούχο Νερό");
        await scraper.scrapeDataFromURL(url, [-1])

        // POTA

        // Ouiski
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022470&subdescr=liker---mprantu---oinopneumatwdh-pota";
        scraper.setCategory("Κάβα", "Ποτά", "Ουίσκι");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // Vodka
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B2%CE%BF%CF%84%CE%BA%CE%B1";
        scraper.setCategory("Κάβα", "Ποτά", "Βότκα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
             54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // Tzin
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CE%B6%CE%B9%CE%BD%20";
        scraper.setCategory("Κάβα", "Ποτά", "Τζίν");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
             52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // Roumi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%BF%CF%85%CE%BC%CE%B9";
        scraper.setCategory("Κάβα", "Ποτά", "Ρούμι");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 46, 47, 48, 49, 50,
              51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // Tekila
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CE%B5%CE%BA%CE%B9%CE%BB%CE%B1";
        scraper.setCategory("Κάβα", "Ποτά", "Τεκίλα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 21, 22, 23, 24,
             25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
              50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74])

        // mhliths
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B7%CE%BB%CE%B9%CF%84%CE%B7%CF%82";
        scraper.setCategory("Κάβα", "Ποτά", "Μηλίτης");
        await scraper.scrapeDataFromURL(url, [-1])

        // Tsipouro
        url = "https://eshop.masoutis.gr/categories/index/kaba?item=574&subitem=022460&subdescr=aperitif";
        scraper.setCategory("Κάβα", "Ποτά", "Τσίπουρο");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 36,37,
                                                38, 39])

        // Ouzo
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BF%CF%85%CE%B6%CE%BF";
        scraper.setCategory("Κάβα", "Ποτά", "Ούζο");
        await scraper.scrapeDataFromURL(url, [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
             35, 36, 37, 38, 39])

        // Koniak
        url = "https://eshop.masoutis.gr/categories/index/search?text=metaxa";
        scraper.setCategory("Κάβα", "Ποτά", "Κονιάκ");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CE%BD%CE%B9%CE%B1%CE%BA";
        scraper.setCategory("Κάβα", "Ποτά","Κονιάκ");
        await scraper.scrapeDataFromURL(url, [-1])

        // liker
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%B9%CE%BA%CE%B5%CF%81";
        scraper.setCategory("Κάβα", "Ποτά", "Λικέρ");
        await scraper.scrapeDataFromURL(url, [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,
        36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,
        69,70])

        // Aperitif
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%B5%CF%81%CE%B9%CF%84%CE%B9%CF%86";
        scraper.setCategory("Κάβα", "Ποτά", "Απεριτίφ");
        await scraper.scrapeDataFromURL(url, [-1])  

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
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=022133&subdescr=zwotrofes";
         scraper.setCategory("Κατοικίδια", "Είδη Για Σκύλους", "Υγρή Τροφή");
         await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
              64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
               89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110])
        
         // Xhra trofh
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=022133&subdescr=zwotrofes";
         scraper.setCategory("Κατοικίδια", "Είδη Για Σκύλους", "Ξηρά Τροφή");
         await scraper.scrapeDataFromURL(url, [2,3,5,6,8,13,16,17,19,21,23,24,25,26, 27, 28, 29, 30, 31, 32, 33,
             34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
              59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
               84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                107, 108, 109, 110])

         // Snak gia skulous
         url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BD%CE%B1%CE%BA%20%CF%83%CE%BA%CF%85%CE%BB%CE%BF";
         scraper.setCategory("Κατοικίδια", "Είδη Για Σκύλους", "Σνάκ Για Σκύλους");
         await scraper.scrapeDataFromURL(url, [-1])

         // Aksesoyar gia skulous
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=044580&subdescr=aksesouar-katoikidiwn";
         scraper.setCategory("Κατοικίδια", "Είδη Για Σκύλους", "Αξεσουάρ Για Σκύλους");
         await scraper.scrapeDataFromURL(url, [32,33,34])
         
         // EIDH GIA GATES

         // Ygrh trofh
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=022133&subdescr=zwotrofes";
         scraper.setCategory("Κατοικίδια", "Είδη Για Γάτες", "Υγρή Τροφή");
         await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 109, 110])

        // Xhra trofh
        url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=022133&subdescr=zwotrofes";
        scraper.setCategory("Κατοικίδια", "Είδη Για Γάτες", "Ξηρά Τροφή");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
             44, 45, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
              88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
               110])

         // Snak gia gates
         url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BD%CE%B1%CE%BA%20%CE%B3%CE%B1%CF%84%CE%B1";
         scraper.setCategory("Κατοικίδια", "Είδη Για Γάτες", "Σνάκ Για Γάτες");
         await scraper.scrapeDataFromURL(url, [-1])

         // Ammos gia gates
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=044580&subdescr=aksesouar-katoikidiwn";
         scraper.setCategory("Κατοικίδια", "Είδη Για Γάτες", "Άμμος Για Γάτες");
         await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])

         // Aksesoyar gia gates
         url = "https://eshop.masoutis.gr/categories/index/katoikidia?item=567&subitem=044580&subdescr=aksesouar-katoikidiwn";
         scraper.setCategory("Κατοικίδια", "Είδη Για Γάτες", "Αξεσουάρ Για Γάτες");
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
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022730&subdescr=eidh-ksurismatos-andrwn---gunaikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Άνδρες", "Αφροί Ξυρίσματος");
        await scraper.scrapeDataFromURL(url, [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
             41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55])

        // Xuristika mias xrhshs
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022730&subdescr=eidh-ksurismatos-andrwn---gunaikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Άνδρες", "Ξυριστικά Μιας Χρήσης");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
              48, 49, 50, 51, 52, 53, 54, 55])

        // Xuristikes mhxanes - Antallaktika
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022730&subdescr=eidh-ksurismatos-andrwn---gunaikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Άνδρες", "Ξυριστικές Μηχανές Ανταλλακτικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 48, 49, 50, 51, 52, 53, 54, 55])

        // After shave
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022730&subdescr=eidh-ksurismatos-andrwn---gunaikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Άνδρες", "After-Shave");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
              49, 50, 51, 52, 53, 54, 55])

        // GIA GUNAIKES

        // Katharismos proswpou
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022560&subdescr=proionta-bambakos";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Καθαρισμός Προσώπου");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022750&subdescr=eidh-ntemakigiaz-frontida";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Καθαρισμός Προσώπου");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22,23,24,25,52,53,54,55,
            56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,
            89,90,91,92,93])

        // Enudatwsh proswpou
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022560&subdescr=proionta-bambakos";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Ενυδάτωση Προσώπου");
        await scraper.scrapeDataFromURL(url, [5,17,18,19,20,21,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,
            42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,
            75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93])

        // Xurafakia
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022730&subdescr=eidh-ksurismatos-andrwn-gunaikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Ξυραφάκια");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
            25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45])

        // Makigiaz
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=033770&subdescr=kalluntika";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Μακιγιάζ");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=liposan";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Μακιγιάζ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Apotrixwtika
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%BF%CF%84%CF%81%CE%B9%CF%87%CF%89%CF%83%CE%B7";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Αποτριχωτικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Servietes - Tampon
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%B5%CF%81%CE%B2%CE%B9%CE%B5%CF%84%CE%B5%CF%82";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Σερβιέτες Ταμπόν");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CE%B1%CE%BC%CF%80%CE%BF%CE%BD";
        scraper.setCategory("Προσωπική Φροντίδα", "Για Γυναίκες", "Σερβιέτες Ταμπόν");
        await scraper.scrapeDataFromURL(url, [-1])

        // PROSWPIKH YGIEINH

        // Panes enhlikwn
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022515&subdescr=panes-enhlikwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Προσωπική Υγιεινή", "Πάνες Ενηλίκων");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vamvakia
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022560&subdescr=proionta-bambakos";
        scraper.setCategory("Προσωπική Φροντίδα", "Προσωπική Υγιεινή", "Βαμβάκια");
        await scraper.scrapeDataFromURL(url, [4,5,6,7,8,9,10])

        // Mpatonetes
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022560&subdescr=proionta-bambakos";
        scraper.setCategory("Προσωπική Φροντίδα", "Προσωπική Υγιεινή", "Μπατονέτες");
        await scraper.scrapeDataFromURL(url, [0,1,2,3])

        // Antishptika
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022725&subdescr=parafarmakeutika-eidh";
        scraper.setCategory("Προσωπική Φροντίδα", "Προσωπική Υγιεινή", "Αντισηπτικά");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,20,21,22,23,24,25])

        // PROIONTA SWMATOS

        // Afroloutro - Afrontous
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022760&subdescr=eidh-atomikou-kallwpismou";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Αφρόλουτρα Αφροντούς");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                93, 94, 95])

        // Sfouggaria
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022710&subdescr=sfouggaria-triftes";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Σφουγγάρια");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aposmhtika
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022760&subdescr=eidh-atomikou-kallwpismou";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Αποσμητικά");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Sapounia
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022745&subdescr=sapounia";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Σαπούνια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kallwpismos
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022728&subdescr=proi%CF%8Cnta-peripo%CE%AFhshs-podi%CF%8En";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Καλλωπισμός");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=033780&subdescr=aksesouar-nuxiwn-frudiwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Προιόντα Σώματος", "Καλλωπισμός");
        await scraper.scrapeDataFromURL(url, [-1])

        // FRONTIDA MALLIWN

        // Sampouan - Kremes
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022770&subdescr=sampouan";
        scraper.setCategory("Προσωπική Φροντίδα", "Φροντίδα Μαλλιών", "Σαμπουάν Κρέμες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vafes
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022775&subdescr=bafes-malliwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Φροντίδα Μαλλιών", "Βαφές");
        await scraper.scrapeDataFromURL(url, [-1])

        // Spray - Gel
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022765&subdescr=lak-losion-malliwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Φροντίδα Μαλλιών", "Spary-Gel");
        await scraper.scrapeDataFromURL(url, [-1])

        // PARAFARMAKEYTIKA EIDH

        // Epithemata Epidesmoi
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022725&subdescr=parafarmakeutika-eidh";
        scraper.setCategory("Προσωπική Φροντίδα", "Παραφαρμακευτικά Είδη", "Επιθέματα Επίδεσμοι");
        await scraper.scrapeDataFromURL(url, [3,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
        
        // Alkoolouxoi losion
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%BA%CE%BF%CE%BF%CE%BB%CE%BF%CF%85%CF%87%CE%BF%CF%82%20%CE%BB%CE%BF%CF%83%CE%B9%CE%BF%CE%BD";
        scraper.setCategory("Προσωπική Φροντίδα", "Παραφαρμακευτικά Είδη", "Αλκοολούχοι Λοσιόν");
        await scraper.scrapeDataFromURL(url, [-1])

        // Gantia Maskes Surigges
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%BA%CE%BF%CE%BF%CE%BB%CE%BF%CF%85%CF%87%CE%BF%CF%82%20%CE%BB%CE%BF%CF%83%CE%B9%CE%BF%CE%BD";
        scraper.setCategory("Προσωπική Φροντίδα", "Παραφαρμακευτικά Είδη", "Γαντια Μάσκες Σύριγγες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Proionta profylaxhs
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022727&subdescr=proionta-profulakshs";
        scraper.setCategory("Προσωπική Φροντίδα", "Παραφαρμακευτικά Είδη", "Προιόντα Προφύλαξης");
        await scraper.scrapeDataFromURL(url, [-1])

        // Thermometra Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%BA%CE%BF%CE%BF%CE%BB%CE%BF%CF%85%CF%87%CE%BF%CF%82%20%CE%BB%CE%BF%CF%83%CE%B9%CE%BF%CE%BD";
        // scraper.setCategory("Προσωπική Φροντίδα", "Παραφαρμακευτικά Είδη", "Θερμόμετρα");
        // await scraper.scrapeDataFromURL(url, [-1])

        // STOMATIKH YGIEINH

        // Odontovoyrtses
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022715&subdescr=ugieinh-dontiwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Στοματική Υγιεινή", "Οδοντόβουρτσες");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,32,52,53,54,55,56, 57, 58, 59, 60, 61, 62, 63,
              64, 65,]);

        // Odontokremes
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022715&subdescr=ugieinh-dontiwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Στοματική Υγιεινή", "Οδοντόκρεμες");
        await scraper.scrapeDataFromURL(url, [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
             49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68])

        // Stomatika dialymata
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022715&subdescr=ugieinh-dontiwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Στοματική Υγιεινή", "Στοματικά Διαλύματα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 67, 68, 69, 70])
        
        // Odontika nhmata
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022715&subdescr=ugieinh-dontiwn";
        scraper.setCategory("Προσωπική Φροντίδα", "Στοματική Υγιεινή", "Οδοντικά Νήματα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 69, 70])

        // ANTIHLIAKA

        // Antihliaka swmatos
        url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022755&subdescr=eidh-hliaka-antihliaka";
        scraper.setCategory("Προσωπική Φροντίδα", "Αντιηλιακά", "Αντιηλιακά Σώματος");
        await scraper.scrapeDataFromURL(url, [-1])

        // Antihliaka proswpoy Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/proswpikh-peripoihsh?item=570&subitem=022755&subdescr=eidh-hliaka-antihliaka";
        // scraper.setCategory("Προσωπική Φροντίδα", "Αντιηλιακά", "Αντιηλιακά Προσώπου");
        // await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CF%89%CF%81%CE%B9%CF%82%20%CE%B3%CE%BB%CE%BF%CF%85%CF%84%CE%B5%CE%BD%CE%B7";
        scraper.setCategory("Διατροφή", "Υγιεινή Διατροφή", "Χωρίς Γλουτένη");
        await scraper.scrapeDataFromURL(url, [0,13,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,
        48])

        // Xwris zaxarh
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CF%89%CF%81%CE%B9%CF%82%20%CE%B6%CE%B1%CF%87%CE%B1%CF%81%CE%B7";
        scraper.setCategory("Διατροφή", "Υγιεινή Διατροφή", "Χωρίς Ζάχαρη");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xwris laktozh
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CF%89%CF%81%CE%B9%CF%82%20%CE%BB%CE%B1%CE%BA%CF%84%CE%BF%CE%B6%CE%B7";
        scraper.setCategory("Διατροφή", "Υγιεινή Διατροφή", "Χωρίς Λακτόζη");
        await scraper.scrapeDataFromURL(url, [-1])

        // Me stevia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B5%20%CF%83%CF%84%CE%B5%CE%B2%CE%B9%CE%B1";
        scraper.setCategory("Διατροφή", "Υγιεινή Διατροφή", "Με Στέβια");
        await scraper.scrapeDataFromURL(url, [-1])

        //  // Biologika
        url = "https://eshop.masoutis.gr/categories/index/search?text=bio";
        scraper.setCategory("Διατροφή", "Υγιεινή Διατροφή", "Βιολογικά");
        await scraper.scrapeDataFromURL(url, [29, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
            63, 64, 65, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
            110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
            125, 135, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
            151, 152, 153, 154, 155, 156, 157, 158])

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
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B7%CE%BB%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Μήλα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mpananes
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%B1%CE%BD%CE%B1%CE%BD%CE%B5%CF%82";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Μπανάνες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Portokalia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%B1%CE%BB%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Πορτοκάλια");
        await scraper.scrapeDataFromURL(url, [3,4,5])

        // // Mantarinia 
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%B1%CE%BB%CE%B9%CE%B1";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Μανταρίνια");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // GRAPEFRUIT
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%81%CF%84%CE%BF%CE%BA%CE%B1%CE%BB%CE%B9%CE%B1";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Grapefruit");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Axladia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%87%CE%BB%CE%B1%CE%B4%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Αχλάδια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Lemonia Laims
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%B5%CE%BC%CE%BF%CE%BD%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Λεμόνια Laims");
        await scraper.scrapeDataFromURL(url, [-1]);

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%B1%CE%B9%CE%BC%CF%83";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Λεμόνια Laims");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Aktinidia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BA%CF%84%CE%B9%CE%BD%CE%B9%CE%B4%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Ακτινίδια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Karpouzia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%81%CF%80%CE%BF%CF%85%CE%B6%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Καρπούζια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Peponia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B5%CF%80%CE%BF%CE%BD%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Πεπόνια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Rodakina
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%BF%CE%B4%CE%B1%CE%BA%CE%B9%CE%BD%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Ροδάκινα");
        await scraper.scrapeDataFromURL(url, [-1])

        // // Nektarinia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BD%CE%B5%CE%BA%CF%84%CE%B1%CF%81%CE%B9%CE%BD%CE%B9%CE%B1";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Νεκταρίνια");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Berikoka
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B2%CE%B5%CF%81%CE%B9%CE%BA%CE%BF%CE%BA%CE%B1";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Βερίκοκα");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Fraoules
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CF%81%CE%B1%CE%BF%CF%85%CE%BB%CE%B5%CF%82";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Φράουλες");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Batomoura
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B2%CE%B1%CF%84%CE%BF%CE%BC%CE%BF%CF%85%CF%81%CE%B1";
        // scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Βατόμουρα");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Suka
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%85%CE%BA%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Σύκα");
        await scraper.scrapeDataFromURL(url, [0])

        // // Damaskina
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B4%CE%B1%CE%BC%CE%B1%CF%83%CE%BA%CE%B7%CE%BD%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Δαμάσκηνα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Exwtika Frouta
        url = "https://eshop.masoutis.gr/categories/index/manabikh?item=566&subitem=011630&subdescr=ekswtika-frouta";
        scraper.setCategory("Οπωροπωλείο", "Φρούτα", "Εξωτικά Φρούτα");
        await scraper.scrapeDataFromURL(url, [-1])

        // LAXANIKA

        // Aggouria
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%B3%CE%B3%CE%BF%CF%85%CF%81%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Αγγούρια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Tomates
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CE%BF%CE%BC%CE%B1%CF%84%CE%B5%CF%82";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Τομάτες");
        await scraper.scrapeDataFromURL(url, [6,7])

        // Patates
        url = "https://eshop.masoutis.gr/categories/index/manabikh?item=566&subitem=011640&subdescr=patates";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Πατάτες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kremmudia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CF%81%CE%B5%CE%BC%CE%BC%CF%85%CE%B4%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Κρεμμύδια");
        await scraper.scrapeDataFromURL(url, [2])

        // Skorda
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BA%CE%BF%CF%81%CE%B4%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Σκόρδα");
        await scraper.scrapeDataFromURL(url, [1,2,3,4]);

        // Maroulia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BF%CF%85%CE%BB%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Μαρούλια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Roka
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%BF%CE%BA%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Ρόκα");
        await scraper.scrapeDataFromURL(url, [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
        
        // Etoimes salates
        url = "https://eshop.masoutis.gr/categories/index/manabikh?item=566&subitem=011615&subdescr=salates-freskies-suskeuasmenes";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Έτοιμες Σαλάτες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Laxano
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%B1%CF%87%CE%B1%CE%BD%CE%BF";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Λάχανο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mprokolo
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CF%81%CE%BF%CE%BA%CE%BF%CE%BB%CE%BF";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Μπρόκολα");
        await scraper.scrapeDataFromURL(url, [0,2,3])

        // Kounoupidi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%85%CE%BD%CE%BF%CF%85%CF%80%CE%B9%CE%B4%CE%B9";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Κουνουπίδι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Piperies
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B9%CF%80%CE%B5%CF%81%CE%B9%CE%B5%CF%82";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Πιπεριές");
        await scraper.scrapeDataFromURL(url, [7,8,9,10,11,12,13,14,15,16])

        // Melitzanes
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B5%CE%BB%CE%B9%CF%84%CE%B6%CE%B1%CE%BD%CE%B5%CF%82";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Μέλιτζάνες");
        await scraper.scrapeDataFromURL(url, [3,4,5,6])

        // Kolokuthakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CE%BB%CE%BF%CE%BA%CF%85%CE%B8%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Κολοκυθάκια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Fasolakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CE%B1%CF%83%CE%BF%CE%BB%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Φασολάκια");
        await scraper.scrapeDataFromURL(url, [0,2])

        // karota
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%81%CE%BF%CF%84%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Καρότα");
        await scraper.scrapeDataFromURL(url, [4,5,6,7])

        // Rapanakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%B1%CF%80%CE%B1%CE%BD%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Ραπανάκια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Manitaria
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%BD%CE%B9%CF%84%CE%B1%CF%81%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Μανιτάρια");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30])

        // Kalampoki
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CE%BA%CE%B9";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Καλαμπόκι");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
            27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42])

        // Sparaggia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%80%CE%B1%CF%81%CE%B1%CE%B3%CE%B3%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Σπαράγγια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Pantzaria
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CE%BD%CF%84%CE%B6%CE%B1%CF%81%CE%B9%CE%B1";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Παντζάρια");
        await scraper.scrapeDataFromURL(url, [4])

        // Murwdika
        url = "https://eshop.masoutis.gr/categories/index/manabikh?item=566&subitem=011660&subdescr=murwdika-diafora";
        scraper.setCategory("Οπωροπωλείο", "Λαχανικά", "Μυρωδικά");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011410&subdescr=gala-fresko&page=3";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γάλα", "Φρέσκο Γάλα");
        await scraper.scrapeDataFromURL(url, [28,29,30,31,32,33,34,35,36,37,41,42,46,47,48,50,51,52,53,57,58,62,
            63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,
            97,98,99,100,101,102,124,125,126,127])

        // Ypshlhs pasteriwshs
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011410&subdescr=gala-fresko";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γάλα", "Υψηλής Παστερίωσης");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
            27,38,39,40,43,44,45,49,54,55,56,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,
            82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,
            112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127]); 

        // Sokolatouxo
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011410&subdescr=gala-fresko";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γάλα", "Σοκολατούχο");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
            27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
            61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,103,104,105,106,107,108,109,110,111,112,113,
            114,115,116,117,118,119,120,121,122,123,124,125,126,127]); 

        // Futiko
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011410&subdescr=gala-fresko";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γάλα", "Φυτικό");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
            26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,
            59,60,61,62,63,64,65,66,67,68,69,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,
            102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,
            127]); 

        // Ebapore
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022115&subdescr=galata";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γάλα", "Εβαπορέ");
        await scraper.scrapeDataFromURL(url, [-1])

        // GIAOYRTI

        // Ageladino
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011430&subdescr=giaourtia";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Αγελάδινό");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 54, 55, 59, 60, 63, 64, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
               83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
                105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
                 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142])

        // Katsikisio
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%84%CF%83%CE%B9%CE%BA%CE%B9%CF%83%CE%B9%CE%BF%20%CE%B3%CE%B9%CE%B1%CE%BF%CF%85%CF%81%CF%84%CE%B9";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Κατσικίσιο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Proveio
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CE%B9%CE%B1%CE%BF%CF%85%CF%81%CF%84%CE%B9%20%CF%80%CF%81%CE%BF%CE%B2%CE%B5%CE%B9%CE%BF";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Πρόβειο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Straggisto
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011430&subdescr=giaourtia";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Στραγγιστό");
        await scraper.scrapeDataFromURL(url, [32,33,38,39,42,45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
             58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
              83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
               106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
                125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142])

        // Epidorpio
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011430&subdescr=giaourtia";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Επιδόρπιο");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,34,35,36,37,40,41,43, 44, 45, 46, 47, 48, 49, 50,
              51, 52, 53,56,57,58,61,62,64, 65, 66, 67, 68, 69, 70,74,75,112,119, 120, 121, 122, 123, 124, 125,
               126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142])

        // Paidiko
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011430&subdescr=giaourtia";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Παιδικό");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
                 113, 114, 115, 116, 117, 118])

        // Rofhma
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011430&subdescr=giaourtia";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Γιαούρτι", "Ρόφημα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
               68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
                92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
                  131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142])

        // FRESKES ZYMES FYLLA

        // Gia krouasan
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Για Κρουασάν");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4])

        // Gia pitsa
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Για Πίτσα");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5])

        // Gia sfoliata
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Για Σφολιάτα");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,5])

        // Fyllo kroustas
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Φύλλο Κρούστας");
        await scraper.scrapeDataFromURL(url, [0,1,3,4,5])

        // Xwriatiko fyllo
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Χωριάτικο Φύλλο");
        await scraper.scrapeDataFromURL(url, [0,1,2,4,5])

        // Rola kanelas Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011495&subdescr=freska-proionta-zumhs";
        // scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκες Ζύμες Φύλλα", "Ρολά Κανέλας");
        // await scraper.scrapeDataFromURL(url, [-1])

        // XYMOI TSAI

        // Xymoi
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011455&subdescr=xumoi-froutwn-freskioi-tsai";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Χυμοί Τσάι", "Χυμοί");
        await scraper.scrapeDataFromURL(url, [67,68,69,70,71])

        // Tsai
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011455&subdescr=xumoi-froutwn-freskioi-tsai";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Χυμοί Τσάι", "Τσάι");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66])

        // Freskoi Zwmoi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CF%81%CE%B5%CF%83%CE%BA%CE%BF%CF%82%20%CE%B6%CF%89%CE%BC%CE%BF%CF%82";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Φρέσκοι Ζωμοί", "Φρέσκοι Ζωμοί");
        await scraper.scrapeDataFromURL(url, [-1])

        // Auga
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=012110&subdescr=auga";
        scraper.setCategory("Γαλακτοκομικά Είδη Ψυγείου", "Αυγά", "Αυγά");
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
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011491&subdescr=fetes-susk";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Φέτα");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011540&subdescr=feta-kilo";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Φέτα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kremwdh - Aloifwmena
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011489&subdescr=turia-diafora-susk";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Κρεμώδη Αλοιφώμενα");
        await scraper.scrapeDataFromURL(url, [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
            39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,
            72,73,74,75,76,81])

        // Mozzarella
        url = "https://eshop.masoutis.gr/categories/index/search?text=mozzarella";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Mozzarella");
        await scraper.scrapeDataFromURL(url, [5,6,7])

        // Graviera
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CF%81%CE%B1%CE%B2%CE%B9%CE%B5%CF%81%CE%B1";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Γραβιέρα");
        await scraper.scrapeDataFromURL(url, [3,19,20,21,25,26,27,28,29]);

        // Kefaloturi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B5%CF%86%CE%B1%CE%BB%CE%BF%CF%84%CF%85%CF%81%CE%B9";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Κεφαλοτύρι");
        await scraper.scrapeDataFromURL(url, [8,9,10,11,12,13,14]);

        // // Parmezana
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CF%81%CE%BC%CE%B5%CE%B6%CE%B1%CE%BD%CE%B1";
        // scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Παρμεζάνα");
        // await scraper.scrapeDataFromURL(url, [-1])

        // regato
        url = "https://eshop.masoutis.gr/categories/index/search?text=regato";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Regato");
        await scraper.scrapeDataFromURL(url, [5])

        // Gouda - Edam - Emmental - Cheddar
        url = "https://eshop.masoutis.gr/categories/index/search?text=gouda";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Gouda Edam Emmental Cheddar");
        await scraper.scrapeDataFromURL(url, [11,12,18,19,20,21,22,23]);
        
        // url = "https://eshop.masoutis.gr/categories/index/search?text=edam";
        // scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Gouda Edam Emmental Cheddar");
        // await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=Emmental";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Gouda Edam Emmental Cheddar");
        await scraper.scrapeDataFromURL(url, [0,3,4]);

        // url = "https://eshop.masoutis.gr/categories/index/search?text=Cheddar";
        // scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Gouda Edam Emmental Cheddar");
        // await scraper.scrapeDataFromURL(url, [-1])

        // Xaloumi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CE%B1%CE%BB%CE%BF%CF%85%CE%BC%CE%B9";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Χαλούμι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Hmiskluro - Kaseri
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B7%CE%BC%CE%B9%CF%83%CE%BA%CE%BB%CE%B7%CF%81%CE%BF";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Ημίσκλυρο Κασέρι");
        await scraper.scrapeDataFromURL(url, [2,3,4,22,23,24,25,26,27,28,30]);

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%83%CE%B5%CF%81%CE%B9";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Ημίσκλυρο Κασέρι");
        await scraper.scrapeDataFromURL(url, [3,4,5,6,7,18,19,20,23,24,25,26,27,28,29]);

        // Mple
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%BB%CE%B5%20%CF%84%CF%85%CF%81%CE%B9";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Μπλέ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Trimmeno
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CF%81%CE%B9%CE%BC%CE%BC%CE%B5%CE%BD%CE%BF%20%CF%84%CF%85%CF%81%CE%B9";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Τριμμένο");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Se Fetes
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011489&subdescr=turia-suskeuasmena";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Τυριά", "Σε φέτες");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,53,54,55,56,57,58,59,60,
            61,62,63,64,65,66,67,68,68,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86]);

        ALLANTIKA

        // Zampon
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B6%CE%B1%CE%BC%CF%80%CE%BF%CE%BD";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Ζαμπόν");
        await scraper.scrapeDataFromURL(url, [7,9])

        // Galopoula - Kotopoulo
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011210&subdescr=allantika-kilo";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Γαλοπούλα Κοτόπουλο");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
            26,27,28,29,30,31,32,33,34,35,36,37,38,66,67])

        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011470&subdescr=allantika-suskeuasmena-psugeiou";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Γαλοπούλα Κοτόπουλο");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
            26,27,28,29,30,31,32,33,34,42,43,44,45,46,47,48,49,50,51,52,53,54,55,59])

        // Wmoplath
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%89%CE%BC%CE%BF%CF%80%CE%BB%CE%B1%CF%84%CE%B7";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Ωμοπλάτη");
        await scraper.scrapeDataFromURL(url, [-1])

        // Loukanika
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BB%CE%BF%CF%85%CE%BA%CE%B1%CE%BD%CE%B9%CE%BA%CE%B1";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Λουκάνικα");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7,25])

        // Salami aeros
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%B1%CE%BB%CE%B1%CE%BC%CE%B9%20%CE%B1%CE%B5%CF%81%CE%BF%CF%82";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Σαλάμι Αέρος");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mortadela
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%BF%CF%81%CF%84%CE%B1%CE%B4%CE%B5%CE%BB%CE%B1";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Μορταδέλα");
        await scraper.scrapeDataFromURL(url, [-1]) 

        // Mpeikon - Panseta - Mprizola
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%B5%CE%B9%CE%BA%CE%BF%CE%BD";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Μπέικον Πανσέτα Μπριζόλα");
        await scraper.scrapeDataFromURL(url, [7,8])

        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CE%BD%CF%83%CE%B5%CF%84%CE%B1";
        // await page.goto(url);

        // await scrollDown(page, url);

        // await scrapeData(page, "drinks", [-1]);

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CF%81%CE%B9%CE%B6%CE%BF%CE%BB%CE%B1";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Μπέικον Πανσέτα Μπριζόλα");
        await scraper.scrapeDataFromURL(url, [0,3,5])

        // Pariza - Parizaki
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CF%81%CE%B9%CE%B6%CE%B1";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "Αλλαντικά", "Πάριζα Παριζάκι");
        await scraper.scrapeDataFromURL(url, [-1])

        //  DELICATESSEN

        // Psaria Alipasta
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011486&subdescr=psaria-alipasta-psugeiou";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Ψάρια Αλίπαστα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Salates
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011481&subdescr=salates-psugeiou-susk";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Σαλάτες");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011220&subdescr=salates-kilou";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Σαλάτες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Elies
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B5%CE%BB%CE%B9%CE%B5%CF%82";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Ελιές");
        await scraper.scrapeDataFromURL(url, [-1])

        // Toursi
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011240&subdescr=toursia-kilo";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Τουρσί");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022137&subdescr=toursia";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Τουρσί");
        await scraper.scrapeDataFromURL(url, [-1])
        
        // Xalvas
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CE%B1%CE%BB%CE%B2%CE%B1%CF%82";
        scraper.setCategory("Τυριά Αλλαντικά Delicatessen", "delicatessen", "Χαλβάς");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/zumarika-ospria?item=577&subitem=022117&subdescr=zumarika";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζυμαρικά", "Μακαρόνια");
        await scraper.scrapeDataFromURL(url, [49,50,51,52,53,54,55,56,57,58,59,60, 61, 62, 63, 64, 65, 66, 67,
            68, 69, 70, 71, 72, 73, 74, 75, 76, 77,78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
            92, 93, 94, 95,96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,111, 112,
            113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,125, 126, 127, 128, 129, 130, 131,
            132, 133, 134, 135, 136, 137, 138,139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
            151, 152,153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165])

        // Diafora zumarika
        url = "https://eshop.masoutis.gr/categories/index/zumarika-ospria?item=577&subitem=022117&subdescr=zumarika";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζυμαρικά", "Διάφορα Ζυμαρικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43,
            44, 45, 46, 47, 48,117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,141])

        // Paradosiaka
        url = "https://eshop.masoutis.gr/categories/index/zumarika-ospria?item=577&subitem=022117&subdescr=zumarika";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζυμαρικά", "Παραδοσιακά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 
            46, 47, 48,49,50,51,52,53,54,55,56,57,58,59,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
            75, 76, 77,78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,96, 97, 98, 99, 100, 
            101, 102, 103, 104, 105, 106, 107, 108, 109, 110,111, 112, 113, 114, 115, 116,129, 130, 131, 132, 133, 
            134, 135, 136, 137, 138,139, 140, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152,153, 154, 155, 
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165])

        // Gemista
        url = "https://eshop.masoutis.gr/categories/index/zumarika-ospria?item=577&subitem=022117&subdescr=makaronia---zumarika";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζυμαρικά", "Γεμιστά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
            83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
            107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
            128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
            149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]);

        // RYZI

        // Karolina
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%81%CE%BF%CE%BB%CE%B9%CE%BD%CE%B1%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Καρολίνα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Glase
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CE%BB%CE%B1%CF%83%CE%B5%20";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Γλασέ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Nuxaki
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BD%CF%85%CF%87%CE%B1%CE%BA%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Νυχάκι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Parboiled
        url = "https://eshop.masoutis.gr/categories/index/search?text=parboiled";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Parboiled");
        await scraper.scrapeDataFromURL(url, [-1])

        // Basmati
        url = "https://eshop.masoutis.gr/categories/index/search?text=basmati";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Μπασμάτι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Jasmine
        url = "https://eshop.masoutis.gr/categories/index/search?text=jasmine%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Jasmine");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kastano
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%83%CF%84%CE%B1%CE%BD%CE%BF%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Καστανό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Agrio kai Exwtiko
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%B3%CF%81%CE%B9%CE%BF%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Άγριο Εξωτικό");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=exotic%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Άγριο Εξωτικό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Rizoto
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%81%CE%B9%CE%B6%CE%BF%CF%84%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ρύζι", "Ριζότο");
        await scraper.scrapeDataFromURL(url, [-1])

        // OSPRIA

        // Fasolia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%83%CF%84%CE%B1%CE%BD%CE%BF%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Φασόλια");
        await scraper.scrapeDataFromURL(url, [24,25,26,27,28,29,30])

        // Fakes
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CE%B1%CE%BA%CE%B5%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Φακές");
        await scraper.scrapeDataFromURL(url, [15])

        // Revuthia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%83%CF%84%CE%B1%CE%BD%CE%BF%20%CF%81%CF%85%CE%B6%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Ρεβύθια");
        await scraper.scrapeDataFromURL(url, [0,8])

        // Fava
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CE%B1%CE%B2%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Φάβα");
        await scraper.scrapeDataFromURL(url, [-1])

        // // Koukia
        // url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%85%CE%BA%CE%B9%CE%B1";
        // scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Κουκιά");
        // await scraper.scrapeDataFromURL(url, [-1])
        
        // Sitari
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%B9%CF%84%CE%B1%CF%81%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Όσπρια", "Σιτάρι");
        await scraper.scrapeDataFromURL(url, [0,2,3,4,6,7,8,9,10,11])

        // LADI

        // Elaiolado
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF%CE%BB%CE%B1%CE%B4%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Ελαιόλαδο");
        await scraper.scrapeDataFromURL(url, [0,53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83])

        // Purhnelaio
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CF%85%CF%81%CE%B7%CE%BD%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Πυρηνέλαιο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Sporelaio
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B7%CE%BB%CE%B9%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Σπορέλαιο");
        await scraper.scrapeDataFromURL(url, [10])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CE%BA%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Σπορέλαιο");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%81%CE%B1%CE%B2%CE%BF%CF%83%CE%B9%CF%84%CE%B5%CE%BB%CE%B1%CE%B9%CE%BF";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Σπορέλαιο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mageirika liph
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CF%85%CF%84%CE%B9%CE%BD%CE%B7";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Μαγειρικά Λίπη");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%B3%CE%B5%CE%B9%CF%81%CE%B9%CE%BA%CE%BF%20%CE%BB%CE%B9%CF%80%CE%BF%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Μαγειρικά Λίπη");
        await scraper.scrapeDataFromURL(url, [-1])
        
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B9%CE%BD%CE%B5%CF%81%CE%B2%CE%B9%CE%BD%CE%B7";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Λάδι", "Μαγειρικά Λίπη");
        await scraper.scrapeDataFromURL(url, [-1])

        // KONSERVES

        // Manitaria
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%BD%CE%B9%CF%84%CE%B1%CF%81%CE%B9%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Μανιτάρια");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,14,15,16,24,25,26,27])

        // Laxanika
        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022127&subdescr=laxanika-se-konserba-xartinh-suskeuasia";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Λαχανικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Psari
        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022128&subdescr=psaria-se-konserba-bazo";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Ψάρι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kreas
        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022129&subdescr=kreas-se-konserba";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Κρέας");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kompostes
        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022245&subdescr=kompostes";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Κομπόστες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Etoima faghta
        url = "https://eshop.masoutis.gr/categories/index/konserboeidh?item=578&subitem=022130&subdescr=faghta-etoima-se-konserba";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Κονσέρβες", "Έτοιμα Φαγητά");
        await scraper.scrapeDataFromURL(url, [-1])

        // ALEURI - SIMIGDALI

        // Gia oles tis xrhseis
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022116&subdescr=aleuri-simigdali";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Για Όλες Τις Χρήσεις");
        await scraper.scrapeDataFromURL(url, [0,3,4,8,9,11,13,14,15,17,19,20,21,22,23,26,28,29,30,32,33,34,35,36,
            37,38,39,40])

        // Sklhro
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BA%CE%BB%CE%B7%CF%81%CE%BF%20%CE%B1%CE%BB%CE%B5%CF%85%CF%81%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Σκληρό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Malako
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%BB%CE%B1%CE%BA%CE%BF%20%CE%B1%CE%BB%CE%B5%CF%85%CF%81%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Μαλακό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Farina
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CE%B1%CF%81%CE%B9%CE%BD%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Φαρίνα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Olikhs aleshs
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%B5%CF%85%CF%81%CE%B9%20%CE%BF%CE%BB%CE%B9%CE%BA%CE%B7%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Ολικής Άλεσης");
        await scraper.scrapeDataFromURL(url, [2,3])

        // Simigdali
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%B9%CE%BC%CE%B9%CE%B3%CE%B4%CE%B1%CE%BB%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Αλεύρι Σιμιγδάλη", "Σιμιγδάλη");
        await scraper.scrapeDataFromURL(url, [-1])

        // EIDH ZAXAROPLASTIKHS

        // Kouvertoura
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%85%CE%B2%CE%B5%CF%81%CF%84%CE%BF%CF%85%CF%81%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Κουβερτούρα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Zaxarh axnh
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B6%CE%B1%CF%87%CE%B1%CF%81%CE%B7%20%CE%B1%CF%87%CE%BD%CE%B7";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Ζάχαρη Άχνη");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vanilies
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022114&subdescr=eidh-zaxaroplastikhs";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Βανίλιες");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93])

        // korn flaour
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%81%CE%BD%20%CF%86%CE%BB%CE%B1%CE%BF%CF%85%CF%81";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Κόρν Φλάουρ");
        await scraper.scrapeDataFromURL(url, [-1])
        
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%81%CE%BD%20%CF%86%CE%BB%CE%B1%CE%BF%CF%85%CE%B5%CF%81";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Κόρν Φλάουρ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mpeikin paounter
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%B5%CE%B9%CE%BA%CE%B9%CE%BD%20%CF%80%CE%B1%CE%BF%CF%85%CE%BD%CF%84%CE%B5%CF%81";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Μπέικιν Πάουντερ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Vaseis - Pantespani
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022157&subdescr=%CE%ADtoimes-baseis-glukwn";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Βάσεις Παντεσπάνι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Zele
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022114&subdescr=eidh-zaxaroplastikhs";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Ζελέ");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 33, 
            34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 
            84, 85, 86, 87, 88, 89, 90, 91, 92, 93])

        // Kremes - Santigi
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022114&subdescr=eidh-zaxaroplastikhs";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Κρέμες Σαντιγί");
        await scraper.scrapeDataFromURL(url, [0,1,2,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
            41,42,43,45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 
            68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
            93])

        // Etoima meigmata
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022156&subdescr=etoima-migmata";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Έτοιμα Μείγματα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xrwma zaxaroplastikhs
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CF%81%CF%89%CE%BC%CE%B1%20%CE%B6%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B9%CE%BA%CE%B7%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Χρώμα Ζαχαροπλαστικής");
        await scraper.scrapeDataFromURL(url, [-1])

        // Magia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%B3%CE%B9%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Μαγιά");
        await scraper.scrapeDataFromURL(url, [0,3,4])

        // Diafora ulika
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022114&subdescr=eidh-zaxaroplastikhs";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Είδη Ζαχαροπλαστικής", "Διάφορα Υλικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,46,47,
            51,52,53,54,55,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,93])

        // ZAXARH

        // Leukh
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022125&subdescr=glukantikes-ousies";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζάχαρη", "Λευκή");
        await scraper.scrapeDataFromURL(url, [0,6,7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
             24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])

        // Akatergasth
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022125&subdescr=glukantikes-ousies";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζάχαρη", "Ακατέργαστη");
        await scraper.scrapeDataFromURL(url, [1,2,3,4,5,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
            25, 26, 27, 28, 29, 30,32,33,34,35,36])

        // Ypokatastata zaxarhs
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CF%81%CF%89%CE%BC%CE%B1%20%CE%B6%CE%B1%CF%87%CE%B1%CF%81%CE%BF%CF%80%CE%BB%CE%B1%CF%83%CF%84%CE%B9%CE%BA%CE%B7%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ζάχαρη", "Υποκατάστατα Ζάχαρης");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,31,32,33,34])

        // MPAXARIKA - ALATI

        // Alati
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022122&subdescr=alati";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Μπαχαρικά Αλάτι", "Αλάτι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Piperi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B9%CF%80%CE%B5%CF%81%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Μπαχαρικά Αλάτι", "Πιπέρι");
        await scraper.scrapeDataFromURL(url, [9, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%B1%CF%80%CF%81%CE%B9%CE%BA%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Μπαχαρικά Αλάτι", "Πιπέρι");
        await scraper.scrapeDataFromURL(url, [0,5,6,7,8,9])

        // Mpaxarika
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022121&subdescr=mpaxarika-thumiamata";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Μπαχαρικά Αλάτι", "Μπαχαρικά");
        await scraper.scrapeDataFromURL(url, [5,6,7,8,17,22,25,26,27,33,34,43,44,46,51,52,53,54,57,65,77,78])

        // SALTSES - DRESSING

        // Ketsap
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B5%CF%84%CF%83%CE%B1%CF%80";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Κέτσαπ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Moustarda
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%BF%CF%85%CF%83%CF%84%CE%B1%CF%81%CE%B4%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Μπουστάρδα");
        await scraper.scrapeDataFromURL(url, [19,32,33,36])

        // Magioneza
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CE%B3%CE%B9%CE%BF%CE%BD%CE%B5%CE%B6%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Μαγιονέζα");
        await scraper.scrapeDataFromURL(url, [-1])
        
        // Gia zymarika
        url = "https://eshop.masoutis.gr/categories/index/dressing?item=563&subitem=022120&subdescr=saltses-moustardes-ketsap-dressing";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Για Ζυμαρικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,78,79,80,81,82,86, 87, 88, 89, 90, 91, 92, 93, 94,95,
            96,97,98,99,100,101,105, 106, 107, 108, 109, 110, 111, 112, 113, 114])

        // Gia kreas
        url = "https://eshop.masoutis.gr/categories/index/dressing?item=563&subitem=022120&subdescr=saltses-moustardes-ketsap-dressing";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Για Κρέας");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75, 76, 77,83,84,85,87,93,97,102,103,104,106])

        // Gia psari
        url = "https://eshop.masoutis.gr/categories/index/dressing?item=563&subitem=022120&subdescr=saltses-moustardes-ketsap-dressing";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Για Ψάρι");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75,76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,89,90,91,92,94,98,99, 100, 101, 
            102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114])

        // Gia salates
        url = "https://eshop.masoutis.gr/categories/index/dressing?item=563&subitem=022120&subdescr=saltses-moustardes-ketsap-dressing";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σάλτσες dressing", "Για Σαλάτες");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75,76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87,91,92,99, 102, 103, 104, 108, 
            109])

        // XYDI - XYMOS LEMONIOY

        // Xudi
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022124&subdescr=ksudi-xumos-lemoniou";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ξύδι Χυμός Λεμονιού", "Ξύδι");
        await scraper.scrapeDataFromURL(url, [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 
            35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52])

        // Xudi Balsamico
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022124&subdescr=ksudi-xumos-lemoniou";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ξύδι Χυμός Λεμονιού", "Ξύδι Βαλσάμικο");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,28, 
            29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52])

        // Krema Balsamico
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022124&subdescr=ksudi-xumos-lemoniou";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ξύδι Χυμός Λεμονιού", "Κρεμα Βαλσάμικο");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27,31,47, 48, 49, 50, 51, 52])
        
        // Xymos lemonioy
        url = "https://eshop.masoutis.gr/categories/index/eidh-pantopwleiou?item=562&subitem=022124&subdescr=ksudi-xumos-lemoniou";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Ξύδι Χυμός Λεμονιού", "Χυμός Λεμονιού");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 
            45, 46])

        // SOUPES - KYBOI - POYRES

        // Kuboi - Zwmos
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CF%85%CE%B2%CE%BF%CE%B9";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σούπες Κύβοι Πουρές", "Κύβοι Ζωμός");
        await scraper.scrapeDataFromURL(url, [19, 20])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B6%CF%89%CE%BC%CE%BF%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σούπες Κύβοι Πουρές", "Κύβοι Ζωμός");
        await scraper.scrapeDataFromURL(url, [-1])

        // Poures   
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%85%CF%81%CE%B5%CF%82";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σούπες Κύβοι Πουρές", "Πουρές");
        await scraper.scrapeDataFromURL(url, [3,4,5,6,7])

        // Mpesamel   
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%B5%CF%83%CE%B1%CE%BC%CE%B5%CE%BB";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σούπες Κύβοι Πουρές", "Μπεσαμέλ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Soupes stigmhs   
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BF%CF%85%CF%80%CE%B1";
        scraper.setCategory("Τυπόποιόμένα Τρόφημα", "Σούπες Κύβοι Πουρές", "Σούπες Στιγμής");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011110&subdescr=boeio-nwpo";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Μοσχάρι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xoirino
        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011130&subdescr=xoirino-nwpo";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Χοιρινό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Arni - Katsiki
        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011140&subdescr=amnoerifia-aigoprobatoeidh";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Αρνί Κατσίκι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kotopoula & Diafora poulerika
        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011170&subdescr=kotopoula";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Κοτόπουλα Διάφορα Πουλερικά");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011180&subdescr=poulerika-diafora";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Κοτόπουλα Διάφορα Πουλερικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kunhgi
        url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011160&subdescr=thhramata";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Κυνήγι");
        await scraper.scrapeDataFromURL(url, [-1])

        // // Etoima geumata
        // url = "https://eshop.masoutis.gr/categories/index/kreopwleio?item=565&subitem=011160&subdescr=thhramata";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Νωπά Κρέατα", "Έτοιμα Γεύματα");
        await scraper.scrapeDataFromURL(url, [-1])

        // FRESKA PSARIA THALASSINA

        // Psaria
        url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011486&subdescr=psaria-alipasta-psugeiou";
        scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Φρέσκα Ψάρια Θαλασσινά", "Ψάρια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Thalassina Masoutis does not has this category
        // url = "https://eshop.masoutis.gr/categories/index/eidh-psugeiou?item=568&subitem=011486&subdescr=psaria-alipasta-psugeiou";
        // scraper.setCategory("Φρέσκο Κρέας Ψάρι", "Φρέσκα Ψάρια Θαλασσινά", "Θαλασσινά");
        // await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011310&subdescr=laxanika-katepsugmena-susk";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Λαχανικά", "Λαχανικά");
        await scraper.scrapeDataFromURL(url, [44,45,46,47,48,49,50,68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 
            80, 81,85,86,87,88])

        // Frouta
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011310&subdescr=laxanika-katepsugmena-susk";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Φρούτα", "Φρούτα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 50,51, 52, 
            53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
             80, 81, 82, 83, 84, 85, 86, 87,88])

        // Patates
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011310&subdescr=laxanika-katepsugmena-susk";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Πατάτες", "Πατάτες");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43,44,45,46,
            47,48,49,50,51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,81, 82, 83, 84, 85, 86, 
            87,88])

        // Fulla - Zumes
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011360&subdescr=sfoliates---fulla-kroustas";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Φύλλα Ζύμες", "Φύλλα Ζύμες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Pites - Pitakia
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011365&subdescr=turopites---spanakopites-%CE%ADtoimes";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Πίτες Πιτάκια", "Πίτες Πιτάκια");
        await scraper.scrapeDataFromURL(url, [0,80,81,82,83,84,85,86,87,88,89,90,91,92,93,
            94,95,96]);

        // Pitses - Peinirli
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011365&subdescr=turopites---spanakopites-%CE%ADtoimes";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Πίτσες Πεινιρλί", "Πίτσες Πεινιρλί");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
             19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
              44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
               69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]);

        // Krouasan
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011370&subdescr=krouasan---artoskeuasmata-katepsugmena";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Κρουασάν", "Κρουασάν");
        await scraper.scrapeDataFromURL(url, [-1])

        // Thalassina - Psaria
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011320&subdescr=psaria-thalassina-ostrakoeidh-suskeuasias";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Θαλασσινά Ψάρια", "Θαλασσινά Ψάρια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kreata
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011330&subdescr=kotopoula---poulerika";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Κρέατα", "Κρέατα");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011340&subdescr=kreata---katepsugmena-proionta";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Κρέατα", "Κρέατα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Pagwta
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011380&subdescr=pagwta";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Παγωτά", "Παγωτά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Etoima geumata
        url = "https://eshop.masoutis.gr/categories/index/eidh-katapsukshs?item=573&subitem=011350&subdescr=%CE%ADtoima-geumata-katepsugmena";
        scraper.setCategory("Κατεψυγμένα Τρόφημα", "Έτοιμα Γεύματα", "Έτοιμα Γεύματα");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/search?text=corn%20flakes";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Corn-Flakes");
        await scraper.scrapeDataFromURL(url, [-1])

        // Muesli
        url = "https://eshop.masoutis.gr/categories/index/search?text=muesli";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Μούσλι");
        await scraper.scrapeDataFromURL(url, [6,7,8,9,10])

        // Brwmh
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B2%CF%81%CF%89%CE%BC%CE%B7";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Βρώμη");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,30,31,
            32,33,34,35,39,40,41,42])

        // Enhlikwn
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022112&subdescr=prwina";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Ενηλίκων");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,37, 38, 
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 
            64, 65, 66, 67, 68, 69, 70, 71, 72, 73,74, 75, 76,88,97,98,99,100, 101, 102, 103, 104, 105, 106, 107, 
            108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120])

        // Paidika
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022112&subdescr=prwina";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Παιδικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75,76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 
            94, 95, 96, 97, 98, 99])

        // Mpares dhmhtriakwn 
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CF%80%CE%B1%CF%81%CE%B5%CF%82%20";
        scraper.setCategory("Πρωινό Ροφήματα", "Δημητριακά", "Μπάρες Δημητριακών");
        await scraper.scrapeDataFromURL(url, [39,40])

        // MELI

        // Thumarisia
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022250&subdescr=meli";
        scraper.setCategory("Πρωινό Ροφήματα", "Μέλι", "Θυμαρίσσια");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19,27, 28, 29, 30, 31, 32])

        // Anthewn - Kwnoforwn
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022250&subdescr=meli";
        scraper.setCategory("Πρωινό Ροφήματα", "Μέλι", "Ανθέων Κωνοφόρων");
        await scraper.scrapeDataFromURL(url, [20,21,22,23,24,25,26])

        // // Alles poikiles
        // url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022250&subdescr=meli";
        // scraper.setCategory("Πρωινό Ροφήματα", "Μέλι", "Άλλες Ποικιλίες");
        // await scraper.scrapeDataFromURL(url, [-1])

        // // Basilikos poltos
        // url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022250&subdescr=meli";
        // scraper.setCategory("Πρωινό Ροφήματα", "Μέλι", "Βασιλικός Πολτός");
        // await scraper.scrapeDataFromURL(url, [-1])

        // MARMELADES

        // Fraoula - Kerasi
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CF%86%CF%81%CE%B1%CE%BF%CF%85%CE%BB%CE%B1";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Φράουλα Κεράσι");
        await scraper.scrapeDataFromURL(url, [12,13])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CE%BA%CE%B5%CF%81%CE%B1%CF%83%CE%B9";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Φράουλα Κεράσι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Rodakino - Berikoko
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CF%81%CE%BF%CE%B4%CE%B1%CE%BA%CE%B9%CE%BD%CE%BF";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Ροδάκινο Βερίκοκο");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CE%B2%CE%B5%CF%81%CE%B9%CE%BA%CE%BF%CE%BA%CE%BF";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Ροδάκινο Βερίκοκο");
        await scraper.scrapeDataFromURL(url, [0])
        
        // Batomouro - Bussino
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CE%B2%CE%B1%CF%84%CE%BF%CE%BC%CE%BF%CF%85%CF%81%CE%BF";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Βατόμουρο Βύσσινο");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%81%CE%BC%CE%B5%CE%BB%CE%B1%CE%B4%CE%B1%20%CE%B2%CF%85%CF%83%CF%83%CE%B9%CE%BD%CE%BF";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Βατόμουρο Βύσσινο");
        await scraper.scrapeDataFromURL(url, [-1])

        // Alles geuseis
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022230&subdescr=marmelades";
        scraper.setCategory("Πρωινό Ροφήματα", "Μαρμελάδες", "Άλλες Γεύσεις");
        await scraper.scrapeDataFromURL(url, [0,1,2,4, 5, 6, 7, 8, 9, 10, 11,13,14,15,16,17,18,19,20,22,23,24,25,
            26,27,28,30,31,32,33,34])

        // ALEIMMATA KARPWN

        // Pralines
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022235&subdescr=aleimmata-karpwn";
        scraper.setCategory("Πρωινό Ροφήματα", "Αλείμματα Καρπών", "Πραλίνες");
        await scraper.scrapeDataFromURL(url, [15,16,17,18,19])

        // Taxini
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022330&subdescr=xalbades-pastelia-mantolata";
        scraper.setCategory("Πρωινό Ροφήματα", "Αλείμματα Καρπών", "Ταχίνι");
        await scraper.scrapeDataFromURL(url, [-1])

        // Fustikobouthro
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022235&subdescr=aleimmata-karpwn";
        scraper.setCategory("Πρωινό Ροφήματα", "Αλείμματα Καρπών", "Φυστικοβούτηρο");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
        
        // Alles geyseis
        // url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022235&subdescr=aleimmata-karpwn";
        // scraper.setCategory("Πρωινό Ροφήματα", "Αλείμματα Καρπών", "Άλλες Γεύσεις");
        // await scraper.scrapeDataFromURL(url, [])

        // KAFES ROFHMATA

        // Espresso
        url = "https://eshop.masoutis.gr/categories/index/search?text=espresso";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Espresso");
        await scraper.scrapeDataFromURL(url, [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 
            32, 33, 34, 35,37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])

        url = "https://eshop.masoutis.gr/categories/index/search?text=cappuccino";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Espresso");
        await scraper.scrapeDataFromURL(url, [0,6,7,8])

        // Stigmiaios
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%84%CE%B9%CE%B3%CE%BC%CE%B9%CE%B1%CE%B9%CE%BF%CF%82";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Στιγμιαίος");
        await scraper.scrapeDataFromURL(url, [-1])

        // Filtrou
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%86%CE%B9%CE%BB%CF%84%CF%81%CE%BF%CF%85";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Φίλτρου");
        await scraper.scrapeDataFromURL(url, [-1])

        // Ellhnikos
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%BF%CF%82";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Ελληνικός");
        await scraper.scrapeDataFromURL(url, [0,1,2,21,22,23,24,25,26])

        // Kapsoules
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%88%CE%BF%CF%85%CE%BB%CE%B5%CF%82";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Κάψουλες");
        await scraper.scrapeDataFromURL(url, [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,55,56])

        // Ypokatastata - Sunodeutika
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022111&subdescr=kafedes";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Υποκατάστατα Συνοδευτικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72, 73, 74, 75,76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 
            94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,110, 111, 112, 113, 114, 
            115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131])

        // Kakao - Rofhmata sokolatas
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022112&subdescr=prwina";
        scraper.setCategory("Πρωινό Ροφήματα", "Καφές Ροφήματα", "Κακάο Ροφήματα Σοκολάτας");
        await scraper.scrapeDataFromURL(url, [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,54, 55, 56, 57, 58, 59, 
            60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,85, 
            86, 87, 88, 89, 90,91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
            109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120])

        // TSAI - AFEPSIMATA

        // Tsai
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022113&subdescr=tsai-afepshmata";
        scraper.setCategory("Πρωινό Ροφήματα", "Τσάι Αφεψίματα", "Τσάι");
        await scraper.scrapeDataFromURL(url, [26,27,34])

        // Afepsima
        url = "https://eshop.masoutis.gr/categories/index/prwina?item=544&subitem=022113&subdescr=tsai-afepshmata";
        scraper.setCategory("Πρωινό Ροφήματα", "Τσάι Αφεψίματα", "Αφεψίματα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25,28, 29, 30, 31, 32, 33])

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
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022030&subdescr=diafora-artoskeuasmata";
        scraper.setCategory("Προιόντα Άρτου", "Ψωμί", "Φρέσκο Ψωμί");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8,12,13,14,28, 29, 30, 31, 32, 33, 34, 35, 
            36, 37, 38, 39, 40, 41, 42, 43, 44])

        // Pswmi tou tost
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022025&subdescr=pswmia-tost";
        scraper.setCategory("Προιόντα Άρτου", "Ψωμί", "Ψωμί Του Τόστ");
        await scraper.scrapeDataFromURL(url, [-1])

        // Pites - Pswmakia
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022030&subdescr=diafora-artoskeuasmata";
        scraper.setCategory("Προιόντα Άρτου", "Ψωμί", "Πίτες Ψωμάκια");
        await scraper.scrapeDataFromURL(url, [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
            26, 27])

        // FRYGANIES KROYTON

        // Fruganies
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022010&subdescr=fruganies";
        scraper.setCategory("Προιόντα Άρτου", "Φρυγανιές Κρουτόν", "Φρυγανιές");
        await scraper.scrapeDataFromURL(url, [-1])

        // Krouton    
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022020&subdescr=paksimadia";
        scraper.setCategory("Προιόντα Άρτου", "Φρυγανιές Κρουτόν", "Κρουτόν");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48, 
            49, 50, 51, 52, 53])

        // KRITSINIA PAXIMADIA

        // Kritsinia
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022020&subdescr=paksimadia";
        scraper.setCategory("Προιόντα Άρτου", "Κριτσίνια Παξιμάδια", "Κριτσίνια");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40])
        
        // Paximadia    
        url = "https://eshop.masoutis.gr/categories/index/artozaxaroplasteio?item=575&subitem=022020&subdescr=paksimadia";
        scraper.setCategory("Προιόντα Άρτου", "Κριτσίνια Παξιμάδια", "Παξιμάδια");
        await scraper.scrapeDataFromURL(url, [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 
            53])

        // Koulourakia - Bouthmata
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022040&subdescr=proionta-zumhs-gluka";
        scraper.setCategory("Προιόντα Άρτου", "Κουλουράκια Βουτήματα", "Κουλουράκια Βουτήματα");
        await scraper.scrapeDataFromURL(url, [20,21])

        // Tsoureki 
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022040&subdescr=proionta-zumhs-gluka";
        scraper.setCategory("Προιόντα Άρτου", "Τσουρέκι", "Τσουρέκι");
        await scraper.scrapeDataFromURL(url, [4,5,11])

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
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022310&subdescr=sokolates";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Γάλακτος");
        await scraper.scrapeDataFromURL(url, [0,1,2,5,6,7,8,9,10,12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            25,26,27,28,29,30,31,34,35,36,37,43,55,62,75,79,88,90,92,93,95,97,100,101,104,106,108,109,112,113,
            114,115,121,122,125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 
            141, 142])

        // Ygeias
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022310&subdescr=sokolates";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Υγείας");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42,44, 
            45, 46, 47, 48, 49, 50, 51, 52, 53, 54,56, 57, 58, 59, 60, 61,63, 64, 65, 66, 67, 68, 69, 70, 71, 
            72, 73, 74,76,77,78,80, 81, 82, 83, 84, 85, 86, 87,89,91,94,96,98,99,102,103,105,107,110,111,116,117,
            118,119,120,123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 
            140, 141, 142, 143, 144, 145, 146, 147, 148, 149])

        // Leukes
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022310&subdescr=sokolates";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Λευκές");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,69, 
            70, 71, 72, 73, 74, 75, 76, 77, 78, 79,81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 
            96, 97, 98, 99, 100, 101, 102, 103, 104,106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
            119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 
            139, 140, 141, 142, 143, 144, 145, 146, 147,148, 149])

        // Sokolatakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BF%CE%BA%CE%BF%CE%BB%CE%B1%CF%84%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Σοκολατάκια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Gkofretes
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022310&subdescr=sokolates";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Γκοφρέτες");
        await scraper.scrapeDataFromURL(url, [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,75, 76, 77, 78, 
            79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 
            103, 104, 105, 106, 107, 108,109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 
            123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,138, 139, 140, 141, 142, 
            143, 144, 145, 146, 147, 148, 149])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BF%CF%85%CF%81%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Σνάκς", "Σοκολάτες", "Γκοφρέτες");
        await scraper.scrapeDataFromURL(url, [7])

        // MPISKOTA

        // Klassika
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022035&subdescr=mpiskota";
        scraper.setCategory("Σνάκς", "Μπισκότα", "Κλασσικά");
        await scraper.scrapeDataFromURL(url, [11,25,27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 
            42, 43, 44, 45, 46, 47, 48,50,52,55,58,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
            75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,97, 98, 99, 
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,120,121,136])

        // Gemista
        url = "https://eshop.masoutis.gr/categories/index/zaxarwdh-mpiskota?item=571&subitem=022035&subdescr=mpiskota";
        scraper.setCategory("Σνάκς", "Μπισκότα", "Γεμιστά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 
            45, 46, 47,49, 50, 51, 52, 53, 54,56,57,59,87,98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
            109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,128, 
            129, 130, 131, 132, 133, 134, 135, 136, 137, 138])

        // Digestive
        url = "https://eshop.masoutis.gr/categories/index/search?text=digestive";
        scraper.setCategory("Σνάκς", "Μπισκότα", "Digestive");
        await scraper.scrapeDataFromURL(url, [5,6,7,8,15])

        // GLYKA PROIONTA ZYMHS

        // Krouasan
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CF%81%CE%BF%CF%85%CE%B1%CF%83%CE%B1%CE%BD";
        scraper.setCategory("Σνάκς", "Γλυκά Προιόντα Ζύμης", "Κρουασάν");
        await scraper.scrapeDataFromURL(url, [0,2,4,5,6,7,34])

        // Keik
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B5%CE%B9%CE%BA";
        scraper.setCategory("Σνάκς", "Γλυκά Προιόντα Ζύμης", "Κέικ");
        await scraper.scrapeDataFromURL(url, [16,17,18])

        // Tsourekia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CF%83%CE%BF%CF%85%CF%81%CE%B5%CE%BA%CE%B9";
        scraper.setCategory("Σνάκς", "Γλυκά Προιόντα Ζύμης", "Τσουρέκια");
        await scraper.scrapeDataFromURL(url, [4,5,11])

        // PATATAKIA GARIDAKIA & POP CORN

        // Patatakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=chips";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Πατατάκια");
        await scraper.scrapeDataFromURL(url, [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52])
        
        url = "https://eshop.masoutis.gr/categories/index/search?text=pringles";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Πατατάκια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Garidakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=chips";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Γαριδάκια");
        await scraper.scrapeDataFromURL(url, [5,6,7,8,9,14,17,18,19,32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 
            43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 
            68,69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
            93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,105, 106, 107, 108, 109, 110, 111, 112, 113, 114])

        // Nachos
        url = "https://eshop.masoutis.gr/categories/index/search?text=nacho";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Nachos");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=doritos";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Nachos");
        await scraper.scrapeDataFromURL(url, [0])
        
        // Pop corn
        url = "https://eshop.masoutis.gr/categories/index/search?text=pop%20corn";
        scraper.setCategory("Σνάκς", "Πατατάκια Γαριδάκια Πόπ Κόρν", "Πόπ Κόρν");
        await scraper.scrapeDataFromURL(url, [-1])

        // Crackers
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CF%81%CE%B1%CE%BA%CE%B5%CF%81";
        scraper.setCategory("Σνάκς", "Κράκερς", "Κράκερς");
        await scraper.scrapeDataFromURL(url, [6])
        
        // Ksiroi karpoi
        url = "https://eshop.masoutis.gr/categories/index/snack-kshroi-karpoi?item=579&subitem=022260&subdescr=kshroi-karpoi-susk-noi";
        scraper.setCategory("Σνάκς", "Ξηροί Καρποί", "Ξηροί Καρποί");
        await scraper.scrapeDataFromURL(url, [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80])

        // Apoksuramena frouta
        url = "https://eshop.masoutis.gr/categories/index/snack-kshroi-karpoi?item=579&subitem=022260&subdescr=kshroi-karpoi-susk-noi";
        scraper.setCategory("Σνάκς", "Αποξυραμένα Φρούτα", "Αποξυραμένα Φρούτα");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,39, 40, 41, 42, 43, 
            44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63])

        // Rizogkofretes
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CE%BA%CE%BF%CF%86%CF%81%CE%B5%CF%84%CE%B1";
        scraper.setCategory("Σνάκς", "Ριζογκοφρέτες", "Ριζογκοφρέτες");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            30,31,32,33,34,37,38,39])

        // TSIXLES - KARAMELES

        // Tsixles
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CF%83%CE%B9%CF%87%CE%BB%CE%B5%CF%82";
        scraper.setCategory("Σνάκς", "Τσίχλες Καραμέλες", "Τσίχλες");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BC%CE%B1%CF%83%CF%84%CE%B9%CF%87%CE%B1%20%CF%87%CE%B9%CE%BF%CF%85";
        scraper.setCategory("Σνάκς", "Τσίχλες Καραμέλες", "Τσίχλες");
        await scraper.scrapeDataFromURL(url, [8,9])

        // Karameles
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%B1%CF%81%CE%B1%CE%BC%CE%B5%CE%BB%CE%B5%CF%82";
        scraper.setCategory("Σνάκς", "Τσίχλες Καραμέλες", "Καραμέλες");
        await scraper.scrapeDataFromURL(url, [38,39])

        // Gleifitzouria
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B3%CE%BB%CE%B5%CE%B9%CF%86%CE%B9%CF%84%CE%B6%CE%BF%CF%85%CF%81%CE%B9";
        scraper.setCategory("Σνάκς", "Τσίχλες Καραμέλες", "Γλειφιτζούρια");
        await scraper.scrapeDataFromURL(url, [-1])

        // Zeledakia
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B6%CE%B5%CE%BB%CE%B5%CE%B4%CE%B1%CE%BA%CE%B9%CE%B1";
        scraper.setCategory("Σνάκς", "Τσίχλες Καραμέλες", "Ζελεδάκια");
        await scraper.scrapeDataFromURL(url, [-1])

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
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022620&subdescr=katharistika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Γενικού Καθαρισμού");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
            54,59,78,81,82,84,85,86,89,94,95,96,104,105,108,115, 116, 117, 118, 119, 120, 
            121, 122, 123, 124, 125, 126, 127, 128, 129,131, 132, 133, 134, 135, 136, 137, 
            138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 
            154, 155, 156, 157, 158, 159,160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 
            170])

        // Katharistika kouzinas
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022620&subdescr=katharistika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Κουζίνας");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 
            74, 75,76, 77, 78, 79, 80,83,84,85,86,87,88,90,91,92,93,94,97, 98, 99, 100, 101, 
            102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 
            118, 119, 120, 121, 122, 123, 124, 125, 126,127, 128, 129, 130,136, 137, 138, 
            139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 
            155, 156, 157, 158, 159, 160, 161, 162, 163, 164,165, 166, 167, 168, 169, 170])

        // Katharistika mpaniou kai toualetas
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022620&subdescr=katharistika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Μπάνιου Τουαλέτας");
        await scraper.scrapeDataFromURL(url, [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 
            55, 56, 57, 58,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 
            76, 77,79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,95, 96, 97, 
            98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 
            114,130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 
            145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,159, 160, 
            161, 162, 163, 164, 165, 166, 167, 168, 169, 170])

        // Katharistika tzamiwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%84%CE%B6%CE%B1%CE%BC%CE%B9%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Τζαμιών");
        await scraper.scrapeDataFromURL(url, [11])

        // Katharistika patwmatos
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022620&subdescr=katharistika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Πατώματος");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
            54, 55, 56, 57, 58, 59,61,63,64,65,66,69,70,71,73,76,78,79,81,82,83,89,90,94,95,
            96,99,106,107,108,109,110,112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 
            122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 
            137, 138, 139, 140,141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 
            152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 
            167, 168, 169,170])

        // Katharistika epiplwn kai xaliwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B5%CF%80%CE%B9%CF%80%CE%BB%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Επίπλων Χαλιών");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=carpet";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Καθαριστικά Επίπλων Χαλιών");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xlwrokatharistika
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%87%CE%BB%CF%89%CF%81%CE%B9%CE%BD%CE%B7";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Χλωροκαθαριστικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kata twn alatwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%B1%CF%84%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Κατά Των Αλάτων");
        await scraper.scrapeDataFromURL(url, [-1])

        // Apofraktika
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%BF%CF%86%CF%81%CE%B1%CE%BA%CF%84%CE%B9%CE%BA%CE%BF";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Αποφρακτικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Sfouggaria - Surmata
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022665&subdescr=sfouggaria-kouzinas";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Σφουγγάρια Σύρματα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xeskonopana - Sfouggaropana
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022670&subdescr=pania-gen-xrhshs";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Ξεσκονόπανα Σφουγγαρόπανα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Gantia oikiakhs xrhshs
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022680&subdescr=gantia-oikiakhs-xrhshs";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Γάντια Οικιακής Χρήσης");
        await scraper.scrapeDataFromURL(url, [-1])

        // Sakoules aporrimatwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%B1%CE%BA%CE%BF%CF%85%CE%BB%CE%B5%CF%82%20%CE%B1%CF%80%CE%BF%CF%81%CF%81%CE%B9%CE%BC%CE%B1%CF%84%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Σακούλες Απορριμάτων");
        await scraper.scrapeDataFromURL(url, [0])

        // Skoupes - Sfouggaristres - Koybades
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BA%CE%BF%CF%85%CF%80%CE%B1";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Σκούπες Σφουγγαρίστρες Κουβάδες");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%86%CE%BF%CF%85%CE%B3%CE%B3%CE%B1%CF%81%CE%B9%CF%83%CF%84%CF%81%CE%B1";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Σκούπες Σφουγγαρίστρες Κουβάδες");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CE%BF%CF%85%CE%B2%CE%B1%CF%82";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Καθαριότητα Σπιτιού", 
        "Σκούπες Σφουγγαρίστρες Κουβάδες");
        await scraper.scrapeDataFromURL(url, [-1])

        // APORRUPANTIKA PIATWN

        // Ygra piatwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%85%CE%B3%CF%81%CE%BF%20%CF%80%CE%B9%CE%B1%CF%84%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Υγρά Πιάτων");
        await scraper.scrapeDataFromURL(url, [38,39,40])

        // Aporrupantika plynthriou piatwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%80%CE%BB%CF%85%CE%BD%CF%84%CE%B7%CF%81%CE%B9%CE%BF%CF%85%20%CF%80%CE%B9%CE%B1%CF%84%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Απορρυπαντικά Πλυντηρίου Πιάτων");
        await scraper.scrapeDataFromURL(url, [0,19,20,21,22,23,24,25,26,27,28,29])

        // Alati - Symplhrwmatika plhshs
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CE%BB%CE%B1%CF%84%CE%B9%20%CF%80%CE%BB%CF%85%CE%BD%CF%84%CE%B7%CF%81%CE%B9%CE%BF%CF%85";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Αλάτι Συμπληρωματικά Πλήσης");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%84%CE%B9%CE%BB%CE%B2%CF%89%CF%84%CE%B9%CE%BA%CE%BF";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Αλάτι Συμπληρωματικά Πλήσης");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=machine";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Αλάτι Συμπληρωματικά Πλήσης");
        await scraper.scrapeDataFromURL(url, [-1])
        
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CF%85%CE%BD%CF%84%CE%B7%CF%81%CE%B7%CF%83%CE%B7%20%CF%80%CE%BB%CF%85%CE%BD%CF%84%CE%B7%CF%81%CE%B9%CE%BF%CF%85";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Απορρυπαντικά Πιάτων", 
        "Αλάτι Συμπληρωματικά Πλήσης");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,6,7])

        // PLUSIMO ROUXWN

        // Ygra plunthriou
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022610&subdescr=proionta-plusimatos";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Υγρά Πλυντηρίου");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38,111,114,124,125,126,127,128,129,130,131,133,134,135,136,137,
            138,139,141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 
            155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,170, 
            171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 
            187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198,199, 200, 201, 202, 
            203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 
            219, 220, 221, 222, 223, 224, 225, 226, 227,228, 229, 230, 231, 232, 233, 234, 
            235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 
            251, 252, 253, 254, 255, 256,257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 
            267, 268, 269, 270, 271, 272, 273, 274])

        // Skonh plunthriou
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CF%83%CE%BA%CE%BF%CE%BD%CE%B7%20%CF%81%CE%BF%CF%85%CF%87%CF%89%CE%BD";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Σκόνη Πλυντηρίου");
        await scraper.scrapeDataFromURL(url, [21,22,23,24,25,26])

        // Tampletes plunthriou
        url = "https://eshop.masoutis.gr/categories/index/search?text=pods";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Ταμπλέτες Πλυντηρίου");
        await scraper.scrapeDataFromURL(url, [-1])

        // Gia plushmo sto xeri
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022610&subdescr=proionta-plusimatos";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Για Πλύσιμο Στο Χέρι");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
            58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 
            78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 
            98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 
            114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 
            130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 
            146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 
            162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 
            178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 
            194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 
            210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 
            226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 
            242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 
            258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 
            274])

        // Malaktika rouxwn
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022616&subdescr=malaktika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Μαλακτικά Ρούχων");
        await scraper.scrapeDataFromURL(url, [-1])

        // Leukantika - Enisxutika
        url = "https://eshop.masoutis.gr/categories/index/eidh-katharismou?item=572&subitem=022616&subdescr=malaktika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Λευκαντικά Ενισχυντικά");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 
            74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 
            94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 
            111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 
            127, 128,163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 
            177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 
            193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 
            209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 
            225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 
            241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 
            257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 
            273, 274])

        // Aposklhruntiko
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%BF%CF%83%CE%BA%CE%BB%CE%B7%CF%81%CF%85%CE%BD%CF%84%CE%B9%CE%BA%CE%BF";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Πλύσιμο Ρούχων", 
        "Αποσκλυρηντικό");
        await scraper.scrapeDataFromURL(url, [-1])

        // Eidh siderwmatos - Aplwmatos
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044605&subdescr=aksesouar-aplwmatos";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Ειδή Σιδερώματος Απλώματος", "Ειδή Σιδερώματος Απλώματος");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044720&subdescr=taktopoihsh-ntoulapiwn";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Ειδή Σιδερώματος Απλώματος", "Ειδή Σιδερώματος Απλώματος");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=merito";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Ειδή Σιδερώματος Απλώματος", "Ειδή Σιδερώματος Απλώματος");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%80%CE%B9%CE%BF%CE%BD%CE%B9%CF%83%CE%BC%CE%B5%CE%BD%CE%BF";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Ειδή Σιδερώματος Απλώματος", "Ειδή Σιδερώματος Απλώματος");
        await scraper.scrapeDataFromURL(url, [-1])

        //  XARTI OIKIAKHS XRHSHS

        // Xarti ugeias
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022520&subdescr=xartia-ugeias";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Χαρτί Οικιακής Χρήσης", 
        "Χαρτί Υγείας");
        await scraper.scrapeDataFromURL(url, [0,1,2])

        // Xarti kouzinas
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022530&subdescr=xartia-kouzinas";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Χαρτί Οικιακής Χρήσης", 
        "Χαρτί Κουζίνας");
        await scraper.scrapeDataFromURL(url, [0,1,2])

        // Xartopetsetes
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022540&subdescr=xartopetsetes";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Χαρτί Οικιακής Χρήσης", 
        "Χαρτοπετσέτες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xartomanthla
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022545&subdescr=xartomanthla";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Χαρτί Οικιακής Χρήσης", 
        "Χαρτομάντηλα");
        await scraper.scrapeDataFromURL(url, [-1])

        // Ygromanthla
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022565&subdescr=ugromanthla";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Χαρτί Οικιακής Χρήσης", 
        "Υγρομάντηλα");
        await scraper.scrapeDataFromURL(url, [-1])

        // ENTOMOKTONA - ENTOMOAPOTHUTIKA

        // Entomoapothutika xwrou
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022640&subdescr=entomoktona-katsaridoktona";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Εντομοκτόνα Εντομοαποθυτικά", 
        "Εντομοαποθυτικά Χώρου");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24,25,51,52,53,54,55])

        // Entomoktwna
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022565&subdescr=ugromanthla";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Εντομοκτονα Εντομοαποθυτικα", 
        "Εντομοκτόνα");
        await scraper.scrapeDataFromURL(url, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 
            45, 46, 47, 48, 49, 50, 51])

        // Skoroapwthitika
        url = "https://eshop.masoutis.gr/categories/index/ugieinh-xartika?item=576&subitem=022565&subdescr=ugromanthla";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Εντομοκτονα Εντομοαποθυτικα", 
        "Σκοροαπωθητικά");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,18, 19, 20, 21, 22, 23, 24, 25, 
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 
            45, 46, 47, 48, 49, 50,52,53,54,55])

        // FULAXH ROUXWN

        // Aposmhtika rouxwn
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%B1%CF%81%CF%89%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%BF%20%CF%86%CE%B1%CE%BA%CE%B5%CE%BB%CE%B1%CE%BA%CE%B9";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Φύλαξη Ρούχων", 
        "Αποσμητικά Ρούχων");
        await scraper.scrapeDataFromURL(url, [-1])

        // Kremastres
        url = "https://eshop.masoutis.gr/categories/index/search?text=%CE%BA%CF%81%CE%B5%CE%BC%CE%B1%CF%83%CF%84%CF%81%CE%B5%CF%82";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Φύλαξη Ρούχων", 
        "Κρεμάστρες");
        await scraper.scrapeDataFromURL(url, [2])

        // Sakoules fulaxhs rouxwn
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044725&subdescr=apothhkeush";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Φύλαξη Ρούχων", 
        "Σακούλες Φύλαξης Ρούχων");
        await scraper.scrapeDataFromURL(url, [-1])

        // ARWMATIKA - KERIA

        // Arwmatika xwrou
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022620&subdescr=katharistika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Αρωματικά Κεριά", 
        "Αρωματικά Χώρου");
        await scraper.scrapeDataFromURL(url, [2,3,31,37,38,39,40,41,42,43,44,45])


        // Keria - Resw
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044780&subdescr=keria";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Αρωματικά Κεριά", 
        "Κεριά Ρεσώ");
        await scraper.scrapeDataFromURL(url, [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
            27, 28, 29, 30, 31, 32])

        // GRAFIKH YLH - ANALWSIMA

        // Grafikh ulh
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044120&subdescr=xartopwleio";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Γραφική Ύλη Αναλώσιμα", 
        "Γραφική Ύλη");
        await scraper.scrapeDataFromURL(url, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
            14, 15, 16, 17, 18, 19, 20, 21,23])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044140&subdescr=grafika-eidh";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Γραφική Ύλη Αναλώσιμα", 
        "Γραφική Ύλη");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044150&subdescr=sxolika-aksesouar";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Γραφική Ύλη Αναλώσιμα", 
        "Γραφική Ύλη");
        await scraper.scrapeDataFromURL(url, [-1])

        // Xartika
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044160&subdescr=tetradia---shmeiwmataria";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Γραφική Ύλη Αναλώσιμα", 
        "Χαρτικά");
        await scraper.scrapeDataFromURL(url, [-1])
        
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044120&subdescr=xartopwleio";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Γραφική Ύλη Αναλώσιμα", 
        "Χαρτικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Dwra - Paixnidia 
        url = "https://eshop.masoutis.gr/categories/index/paixnidia?item=1785";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Δώρα Παιχνίδια", "Δώρα Παιχνίδια");
        await scraper.scrapeDataFromURL(url, [-1]);

        // Eidh khpou 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044570&subdescr=eksoplismos-khpou";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κήπου", "Είδη Κήπου");
        await scraper.scrapeDataFromURL(url, [-1])

        // BBQ - Tzaki 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044365&subdescr=pshstaries";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "BBQ Τζάκι", "BBQ Τζάκι");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044375&subdescr=eidh-kampingk";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "BBQ Τζάκι", "BBQ Τζάκι");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=022630&subdescr=paragwga-kausimwn";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "BBQ Τζάκι", "BBQ Τζάκι");
        await scraper.scrapeDataFromURL(url, [-1])

        // EIDH KOYZINAS KAI MPANIOY

        // Mageirika skeyh kai kouzinika 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044625&subdescr=piatika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Μαγειρικά Σκεύη Κουζινικά");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044635&subdescr=skeuh-kouzinas-oxi-hlektrika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Μαγειρικά Σκεύη Κουζινικά");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044640&subdescr=aksesouar-kouzinas-ergaleia-kouzinas";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Μαγειρικά Σκεύη Κουζινικά");
        await scraper.scrapeDataFromURL(url, [-1])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044645&subdescr=eidh-kouzinas---plastika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Μαγειρικά Σκεύη Κουζινικά");
        await scraper.scrapeDataFromURL(url, [-1])

        // Alouminoxarta kai Memvranes 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044630&subdescr=eidh-mias-xrhsews";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Αλουμινόχαρτα Μεμβράνες");
        await scraper.scrapeDataFromURL(url, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
            18, 19, 20, 21,34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 
            70, 71, 72, 73, 74, 75, 76, 77])

        // Eidh mias xrhshs 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044625&subdescr=piatika";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Είδη Μιας Χρήσης");
        await scraper.scrapeDataFromURL(url, [0,1,2,3,4,5,22, 23, 24, 25, 26, 27, 28, 29, 
            30, 31, 32, 33,53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 
            69, 70, 71, 72])

        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044631&subdescr=eidh-trapeziou-mias-xrhshs";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Είδη Μιας Χρήσης");
        await scraper.scrapeDataFromURL(url, [-1])

        // Aksesouar mpaniou 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044710&subdescr=eidh-mpaniou";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Αξεσουάρ Μπάνιου");
        await scraper.scrapeDataFromURL(url, [-1])

        // Mpataries 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044560&subdescr=mpataries";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Μπαταρίες");
        await scraper.scrapeDataFromURL(url, [-1])

        // Lampes 
        url = "https://eshop.masoutis.gr/categories/index/eidh-oikiakhs?item=727&subitem=044550&subdescr=lampes";
        scraper.setCategory("Καθαριστικά Χαρτικά Είδη Οικιακής", "Είδη Κουζίνας Μπάνιου",
        "Λάμπες");
        await scraper.scrapeDataFromURL(url, [-1])

        await scraper.closeBrowser();

    } catch {
        console.log(`The scraper was failed, error = ${error}`);
    }
}

// exports.scrapeBabyCareURLs = scrapeBabyCareURLs;
// exports.scrapeDrinksURLs = scrapeDrinksURLs;
// exports.scrapePetsURLs = scrapePetsURLs;
// exports.scrapePersonalCareURLs = scrapePersonalCareURLs;
// exports.scrapeHealthyDietURLs = scrapeHealthyDietURLs;
// exports.scrapeFruitsURLs = scrapeFruitsURLs; 
// exports.scrapeDairyRefrigeratedItemsURLs = scrapeDairyRefrigeratedItemsURLs;
// exports.scrapeAllantikaTuriaDelicatessenURLs = scrapeAllantikaTuriaDelicatessenURLs;
// exports.scrapeTupopoihmenaTrofimaURLs = scrapeTupopoihmenaTrofimaURLs;
// exports.scrapeFreskoKreasKaiPsari = scrapeFreskoKreasKaiPsari;
// exports.scrapeKatepsugmenaTrofimaURLs = scrapeKatepsugmenaTrofimaURLs;
exports.scrapePrwinoKaiRofhmataURLs = scrapePrwinoKaiRofhmataURLs;
exports.scrapeProiontaArtouURLs = scrapeProiontaArtouURLs;
exports.scrapeSnacksURLs = scrapeSnacksURLs;
exports.scrapeKatharistikaXartikaEidhOikiakhsURLs = scrapeKatharistikaXartikaEidhOikiakhsURLs;