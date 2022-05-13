const prioridadeAtividadeData = require('../data/prioridadeAtividadeData');

exports.getPrioridadeAtividade = () => {
    return prioridadeAtividadeData.getPrioridadeAtividade();
}

exports.getPrioridadeAtividadeById = (id) => {
    return prioridadeAtividadeData.getPrioridadeAtividadeById(id);
}