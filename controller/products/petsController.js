const getProductsByCategory = require("../getProductsByCategory");

exports.katoikidia = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia");
}

exports.eidhGiaSkyloys = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia skulous");
}

exports.ygrhTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia skulous" ,"ugrh trofh");
}

exports.xhraTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia skulous" ,"xhra trofh");
}

exports.snakGiaSkulous = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia skulous" ,"snak gia skulous");
}

exports.aksesoyarGiaSkulous = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia skulous" ,"aksesouar gia skulous");
}

exports.eidhGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates");
}

exports.ygrhTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates", "ugrh trofh");
}

exports.xhraTrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates", "xhra trofh");
}

exports.snakGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates", "snak gia gates");
}

exports.ammosGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates", "ammos gia gates");
}

exports.aksesoyarGiaGates = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "eidh gia gates", "axesouar gia gates");
}

exports.aksesouarKatoikidiwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "katoikidia", "axesouar gia gates");
}