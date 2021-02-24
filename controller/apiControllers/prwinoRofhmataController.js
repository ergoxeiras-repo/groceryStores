const getProductsByCategory = require("./getProductsByCategory");

exports.prwinoRofhmata = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata");
}

exports.dhmhtriaka = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka");
}

exports.cornFlakes = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "corn-flakes");
}

exports.muesli = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "muesli");
}

exports.vrwmh = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "vrwmh");
}

exports.enhlikwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "enhlikwn");
}

exports.paidika = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "paidika");
}

exports.mparesDhmhtriakwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "dhmhtriaka", "mpares-dhmhtriakwn");
}

exports.meli = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "meli");
}

exports.thumarisia = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "meli", "thumarisia");
}

exports.anthewnKwnoforwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "meli", "anthewn-kwnoforwn");
}

exports.allesPoikilies = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "meli", "alles-poikilies");
}

exports.basilikosPoltos = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "meli", "basilikos-poltos");
}

exports.marmelades = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "marmelades");
}

exports.fraoulaKerasi = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "marmelades", "fraoula-kerasi");
}

exports.rodakinoVerikoko = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "marmelades", "rodakino-verikoko");
}

exports.vatomouroVussino = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "marmelades", "vatomouro-vussino");
}

exports.allesGeuseis = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "marmelades", "alles-geuseis");
}

exports.aleimmataKarpwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "aleimmata-karpwn");
}

exports.pralines = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "aleimmata-karpwn", "pralines");
}

exports.taxini = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "aleimmata-karpwn", "taxini");
}

exports.fystikovoythro = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "aleimmata-karpwn", "fystikovoythro");
}

exports.kafesRofhmata = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata");
}

exports.espresso = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "espresso");
}

exports.stigmiaios = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "stigmiaios");
}

exports.filtrou = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "filtrou");
}

exports.ellhnikos = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "ellhnikos");
}

exports.kapsoules = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "kapsoules");
}

exports.upokatastataSunodeuthka = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "upokatastata-sunodeuthka");
}

exports.kakaoRofhmataSokolatas = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "kafes-rofhmata", "kakao-rofhmata-sokolatas");
}

exports.tsaiAfepsimata = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "tsai-afepsimata");
}

exports.tsai = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "tsai-afepsimata", "tsai");
}

exports.afepsimata = async function(req, res, next) {
    await getProductsByCategory(req, res, "prwino-kai-rofhmata", "tsai-afepsimata", "afepsimata");
}