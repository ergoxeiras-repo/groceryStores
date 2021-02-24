const getProductsByCategory = require("./getProductsByCategory");

exports.katoikidia = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia");
}

exports.eidhGiaSkyloys = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-skyloys");
}

exports.ygrhTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-skyloys" ,"ygrh-trofh");
}

exports.xhraTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-skyloys" ,"xhra-trofh");
}

exports.snakGiaSkulous = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-skyloys" ,"snak-gia-skulous");
}

exports.aksesoyarGiaSkulous = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-skyloys" ,"aksesoyar-gia-skulous");
}

exports.eidhGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates");
}

exports.ygrhTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates", "ygrh-trofh");
}

exports.xhraTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates", "xhra-trofh");
}

exports.snakGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates", "snak-gia-gates");
}

exports.ammosGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates", "ammos-gia-gates");
}

exports.aksesoyarGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh-gia-gates", "aksesoyar-gia-gates");
}

exports.aksesouarKatoikidiwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "aksesouar-katoikidiwn");
}