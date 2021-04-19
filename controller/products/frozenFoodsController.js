const getProductsByCategory = require("../getProductsByCategory");

exports.forzenFood = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma");
}

exports.laxanika = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "laxanika", "laxanika");
}

exports.frouta = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "frouta" ,"frouta");
}

exports.patates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "patates" ,"patates");
}

exports.fullaZumes = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "fulla zumes" ,"fulla zumes");
}

exports.pitesPitakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "pites pitakia" ,"pites pitakia");
}

exports.pitsesPeinirli = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "pitses peinirli", "pitses peinirli");
}

exports.krouasan = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "krouasan", "krouasan");
}

exports.thallasinaPsaria = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "thallasina psaria", "thallasina psaria");
}

exports.kreata = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "kreata", "kreata");
}

exports.pagwta = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "pagwta", "pagwta");
}

exports.etoimaGeumata = async function(req, res, next) {
    await getProductsByCategory(req, res, "katepsugmena trofhma", "etoima geumara", "etoima geumata");
}