const etapaEapData = require('../data/etapaEapData');

exports.getEtapaEap = () => {
    return etapaEapData.getEtapaEap();
}

exports.getEtapaEapById = (idEtapaEap) => {
    return etapaEapData.getEtapaEapById(idEtapaEap);
}

exports.createEtapaEap = (etapaEap) => {
    return etapaEapData.createEtapaEap(etapaEap);
}

exports.updateEtapaEap = (idEtapaEap, etapaEap) => {
    return etapaEapData.updateEtapaEap(idEtapaEap, etapaEap);
}