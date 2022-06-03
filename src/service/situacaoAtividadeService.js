const situacaoAtividadeData = require('../data/situacaoAtividadeData');

exports.getSituacaoAtividade = () => {
    return situacaoAtividadeData.getSituacaoAtividade();
}

exports.getSituacaoAtividadeById = (idSituacaoAtividade) => {
    return situacaoAtividadeData.getSituacaoAtividadeById(idSituacaoAtividade);
}

exports.createSituacaoAtividade = (situacaoAtividade) => {
    return situacaoAtividadeData.createSituacaoAtividade(situacaoAtividade);
}

exports.updateSituacaoAtividade = (idSituacaoAtividade, situacaoAtividade) => {
    return situacaoAtividadeData.updatSituacaoAtividade(idSituacaoAtividade, situacaoAtividade);
}