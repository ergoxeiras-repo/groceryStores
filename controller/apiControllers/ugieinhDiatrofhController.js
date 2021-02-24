const getProductsByCategory = require("./getProductsByCategory");

exports.diatrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh");
}

exports.ugieinhDiatrofh = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh");
}

exports.xwrisGloutenh = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh", "xwris-gloutenh");
}

exports.xwrisZaxarh = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh", "xwris-zaxarh");
}

exports.xwrisLaktozh = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh", "xwris-laktozh");
}

exports.meStevia = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh", "me-stevia");
}

exports.biologika = async function(req, res, next) {
    await getProductsByCategory(req, res, "diatrofh", "ugieinh-diatrofh", "biologika");
}