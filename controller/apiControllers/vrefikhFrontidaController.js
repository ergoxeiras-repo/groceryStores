const getProductsByCategory = require("./getProductsByCategory");

exports.vrefikhFrontida = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida");
}

exports.vrefikoGala = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-gala");
}

exports.prwthsHlikias = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-gala", "vrefiko-gala-1hs-hlikias");
}

exports.deyterhsHlikias = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-gala", "vrefiko-gala-2hs-hlikias");
}

exports.trithsHlikias = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-gala", "vrefiko-gala-3hs-hlikias");
}

exports.vrefikesTrofes = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-trofes");
}

exports.vrefikesKremes = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-trofes", "vrefikes-kremes");
}

exports.vrefikaGiaoyrtia = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-trofes", "vrefika-giaoyrtia");
}

exports.vrefikaSnack = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-trofes", "vrefika-snack");
}

exports.vrefikesPanesMwromanthla = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-panes-mwromanthla");
}

exports.vrefikesPanes = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-panes-mwromanthla", "vrefikes-panes");
}

exports.mwromanthla = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikes-panes-mwromanthla", "mwromanthla");
}

exports.aksesouar = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "aksesouar");
}

exports.piatakiaKoytalakiaPiroynakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "aksesouar", "piatakia-koutalakia-pirounakia");
}

exports.vrefikaPsalidakia = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "aksesouar", "piatakia-koytalakia-piroynakia", "vrefika-psalidakia");
}

exports.peripoihshSwmatos = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "peripoihsh-swmatos");
}

exports.sampoyanAfroloytra = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "peripoihsh-swmatos", "sampouan-afroloutra");
}

exports.kremesPoydresLadi = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "peripoihsh-swmatos", "kremes-poudres-ladi");
}

exports.vrefikhYgieinhDontiwn = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefikh-ugieinh-dontiwn");
}

exports.vrefikesOdontovoyrtses = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "ugieinh-dontiwn", "vrefikes-odontovourtses");
}

exports.vrefikesOdontokremes = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "ugieinh-dontiwn", "vrefikes-odontokremes");
}

exports.vrefikoFarmakeio = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-farmakeio");
}

exports.paidikaEpithemata = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefiko-farmakeio", "paidika-epithemata");
}

exports.vrefikaAporrypantika = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefika-aporrypantika");
}

exports.ygraAporrypantika = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefika-aporrypantika", "ygra-aporrypantika");
}

exports.malaktika = async function(req, res, next) {
    await getProductsByCategory(req, res, "vrefikh-frontida", "vrefika-aporrypantika", "malaktika");
}