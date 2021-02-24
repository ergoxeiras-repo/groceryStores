const getProductsByCategory = require("./getProductsByCategory");

exports.proiontaArtou = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou");
}

exports.pswmi = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "pswmi");
}

exports.freskoPswmi = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "pswmi", "fresko-pswmi");
}

exports.pswmiTouTost = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "pswmi", "pswmi-tou-tost");
}

exports.pitesPswmakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "pswmi", "pites-pswmakia");
}

exports.fryganiesKroyton = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "fryganies-kroyton", );
}

exports.fruganies = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "fryganies-kroyton", "fruganies");
}

exports.kroyton = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "fryganies-kroyton", "kroyton");
}

exports.kritsiniaPaximadia = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "kritsinia-paximadia", );
}

exports.kritsinia = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "kritsinia-paximadia", "kritsinia");
}

exports.paximadia = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "kritsinia-paximadia", "paximadia");
}

exports.koulourakiaVouthmata = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "koulourakia-vouthmata");
}

exports.tsoureki = async function(req, res, next) {
    await getProductsByCategory(req, res, "proionta-artou", "tsoureki");
}