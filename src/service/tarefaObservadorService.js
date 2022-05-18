const tarefaObservadorData = require('../data/tarefaObservadorData');

exports.getTarefasObservador = () => {
    return tarefaObservadorData.getTarefasObservador();
}

exports.getTarefaObservadorById = (id) => {
    return tarefaObservadorData.getTarefaObservadorById(id);
}