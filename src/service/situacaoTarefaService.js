const situacaoTarefaData = require('../data/situacaoTarefaData');

exports.getSituacaoTarefa = () => {
    return situacaoTarefaData.getSituacaoTarefa();
}

exports.getSituacaoTarefaById = (idSituacaoTarefa) => {
    return situacaoTarefaData.getSituacaoTarefaById(idSituacaoTarefa);
}

exports.createSituacaoTarefa = (situacaoTarefa) => {
    return situacaoTarefaData.createSituacaoAtividade(situacaoTarefa);
}

exports.updateSituacaoTarefa = (idSituacaoTarefa, situacaoTarefa) => {
    return situacaoTarefaData.updateSituacaoTarefa(idSituacaoTarefa, situacaoTarefa);
}