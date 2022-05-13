const situacaoAtividadeData = require('../data/situacaoAtividadeData');

exports.getSituacaoAtividade = () => {
    return situacaoAtividadeData.getSituacaoAtividade();
}

exports.getSituacaoAtividadeById = (id) => {
    return situacaoAtividadeData.getSituacaoAtividadeById(id);
}