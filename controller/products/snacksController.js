const getProductsByCategory = require("../getProductsByCategory");

exports.snacks = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks");
}

exports.sokolates = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates");
}

exports.galaktos = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates", "galaktos");
}

exports.ugeias = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates", "ugeias");
}

exports.leukes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates", "leukes");
}

exports.sokolatakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates", "sokolatakia");
}

exports.gkofretes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "sokolates", "gkofretes");
}

exports.mpiskota = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "mpiskota");
}

exports.klassika = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "mpiskota", "klassika");
}

exports.gemista = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "mpiskota", "gemista");
}

exports.digestive = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "mpiskota", "digestive");
}

exports.glykaProiontaZymhs = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "gluka-proionta-zumhs");
}

exports.krouasan = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "gluka-proionta-zumhs", "krouasan");
}

exports.keik = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "gluka-proionta-zumhs", "keik");
}

exports.tsourekia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "gluka-proionta-zumhs", "tsourekia");
}

exports.patatakiaGaridakiaPopCorn = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "patatakia garidakia pop corn");
}

exports.patatakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "patatakia garidakia pop corn", "patatakia");
}

exports.garidakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "patatakia garidakia pop corn", "garidakia");
}

exports.nachos = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "patatakia garidakia pop corn", "nachos");
}

exports.popCorn = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "patatakia garidakia pop corn", "pop corn");
}

exports.crackers = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "krakers", "krakers");
}

exports.ksiroiKarpoi = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "xhroi karpoi", "xhroi karpoi");
}

exports.apoksuramenaFrouta = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "apoxuramena frouta", "apoxuramena frouta");
}

exports.rizogkrofretes = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "rizogkrofretes", "rizogkrofretes");
}

exports.tsixlesKarameles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "tsixles karameles");
}

exports.tsixles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "tsixles karameles", "tsixles");
}

exports.karameles = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "tsixles karameles", "karameles");
}

exports.gleifitzouria = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "tsixles karameles", "gleifitzouria");
}

exports.zeledakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "snaks", "tsixles karameles", "zeledakia");
}