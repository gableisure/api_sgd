const situacaoTarefaData = require('../data/situacaoTarefaData');

exports.getSituacaoTarefa = () => {
    return situacaoTarefaData.getSituacaoTarefa();
}

exports.getSituacaoTarefaById = (id) => {
    return situacaoTarefaData.getSituacaoTarefaById(id);
}