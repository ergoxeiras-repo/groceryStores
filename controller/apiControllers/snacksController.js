const getProductsByCategory = require("./getProductsByCategory");

exports.snacks = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks");
}

exports.sokolates = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates");
}

exports.galaktos = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates", "galaktos");
}

exports.ugeias = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates", "ugeias");
}

exports.leukes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates", "leukes");
}

exports.sokolatakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates", "sokolatakia");
}

exports.gkofretes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "sokolates", "gkofretes");
}

exports.mpiskota = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "mpiskota");
}

exports.klassika = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "mpiskota", "klassika");
}

exports.gemista = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "mpiskota", "gemista");
}

exports.digestive = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "mpiskota", "digestive");
}

exports.glykaProiontaZymhs = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "glyka-proionta-zymhs");
}

exports.krouasan = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "glyka-proionta-zymhs", "krouasan");
}

exports.keik = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "glyka-proionta-zymhs", "keik");
}

exports.tsourekia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "glyka-proionta-zymhs", "tsourekia");
}

exports.patatakiaGaridakiaPopCorn = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "patatakia-garidakia-pop-corn");
}

exports.patatakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "patatakia-garidakia-pop-corn", "patatakia");
}

exports.garidakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "patatakia-garidakia-pop-corn", "garidakia");
}

exports.nachos = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "patatakia-garidakia-pop-corn", "nachos");
}

exports.popCorn = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "patatakia-garidakia-pop-corn", "pop-corn");
}

exports.crackers = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "crackers");
}

exports.ksiroiKarpoi = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "ksiroi-karpoi");
}

exports.apoksuramenaFrouta = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "apoksuramena-frouta");
}

exports.rizogkrofretes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "rizogkrofretes");
}

exports.tsixlesKarameles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "tsixles-karameles");
}

exports.tsixles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "tsixles-karameles", "tsixles");
}

exports.karameles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "tsixles-karameles", "karameles");
}

exports.gleifitzouria = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "tsixles-karameles", "gleifitzouria");
}

exports.zeledakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snacks", "tsixles-karameles", "zeledakia");
}