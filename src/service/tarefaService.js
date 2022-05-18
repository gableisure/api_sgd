const tarefaData = require('../data/tarefaData');

exports.getTarefas = () => {
    return tarefaData.getTarefas();
}

exports.getTarefaById = (id) => {
    return tarefaData.getTarefaById(id);
}

exports.updateSituacaoTarefa = (id_tarefa, id_situacao_tarefa) => {
    return tarefaData.updateSituacaoTarefa(id_tarefa, id_situacao_tarefa);
}



