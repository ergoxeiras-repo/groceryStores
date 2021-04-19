const getProductsByCategory = require("../getProductsByCategory");

exports.freskoKreasPsari = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari");
}

exports.nwpaKreata = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata");
}

exports.mosxari = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "mosxari");
}

exports.xoirino = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "xoirino");
}

exports.arniKatsiki = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "arni katsiki");
}

exports.kotopoulaDiaforaPoulerika = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "kotopoula diafora poulerika");
}

exports.kunhgi = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "kunhgi");
}

exports.etoimaGeumata = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "nwpa kreata", "etoima geumata");
}

exports.freskaPsariaThalassina = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "freska psaria kai thalassina");
}

exports.psaria = async function(req, res, next) {
    await getProductsByCategory(req, res, "fresko kreas kai psari", "freska psaria kai thalassina", "psaria");
}