const getProductsByCategory = require("./getProductsByCategory");

exports.kava = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava");
}

exports.krasia = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia");
}

exports.leukoKrasi = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia", "leuka-krasia");
}

exports.kokkinoKrasi = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia", "kokkina-krasia");
}

exports.rozeKrasi = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia", "roze-krasia");
}

exports.glykaKrasia = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia", "gluka-krasia");
}

exports.afrwdeisOinoi = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "krasia", "afrwdeis-oinoi");
}

exports.anapsyktika = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika");
}

exports.cola = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "cola");
}

exports.gkazoza = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "gkazoza");
}

exports.lemonada = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "lemonada");
}

exports.portokalada = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "portokalada");
}

exports.sodaTonic = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "soda-tonic");
}

exports.energeiakaIsotonika = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "energeiaka-isotonika");
}

exports.allesGeyseis = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "anapsyktika", "alles-geyseis");
}

exports.xymoiKryaRofhmata = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "xymoi-krya-rofhmata");
}

exports.xumoiMakrasDiarkeias = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "xymoi-krya-rofhmata", "xumoi-makras-diarkeias");
}

exports.iceTea = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "xymoi-krya-rofhmata", "ice-tea");
}

exports.iceCoffee = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "xymoi-krya-rofhmata", "ice-coffee");
}

exports.mpures = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures");
}

exports.lager = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "lager");
}

exports.pils = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "pils");
}

exports.weiss = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "weiss");
}

exports.ale = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "ale");
}

exports.radler = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "radler");
}

exports.xwrisAlkool = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "mpures", "xwris-alkool");
}

exports.emfyalwmenaNera = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "emfyalwmena-nera");
}

exports.epitrapezioMetallikoNero = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "emfyalwmena-nera", "epitrapezio-metalliko-nero");
}

exports.anthrakouxoNero = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "emfyalwmena-nera", "anthrakouxo-nero");
}

exports.pota = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota");
}

exports.ouiski = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "ouiski");
}

exports.vodka = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "vodka");
}

exports.tzin = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "tzin");
}

exports.roumi = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "roumi");
}

exports.tekila = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "tekila");
}

exports.mhliths = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "mhliths");
}

exports.tsipouro = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "tsipouro");
}

exports.ouzo = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "ouzo");
}

exports.koniak = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "koniak");
}

exports.liker = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "liker");
}

exports.aperitif = async function(req, res, next) {
    await getProductsByCategory(req, res, "kava", "pota", "aperitif");
}