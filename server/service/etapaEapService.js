const etapaEapData = require('../data/etapaEapData');

exports.getEtapaEap = () => {
    return etapaEapData.getEtapaEap();
}

exports.getEtapaEapById = (id) => {
    return etapaEapData.getEtapaEapById(id);
}