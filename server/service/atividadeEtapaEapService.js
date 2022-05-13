const atividadeEtapaEapData = require('../data/atividadeEtapaEapData');

exports.getAtividadesEtapasEap = () => {
    return atividadeEtapaEapData.getAtividadesEtapasEap();
}

exports.getAtividadesEtapaEapById = (id) => {
    return atividadeEtapaEapData.getAtividadesEtapaEapById(id);
}