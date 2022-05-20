const prioridadeAtividadeData = require('../data/prioridadeAtividadeData');

exports.getPrioridadeAtividade = () => {
    return prioridadeAtividadeData.getPrioridadeAtividade();
}

exports.getPrioridadeAtividadeById = (id) => {
    return prioridadeAtividadeData.getPrioridadeAtividadeById(id);
}

exports.createPrioridadeAtividade = (prioridadeAtividade) => {
    return prioridadeAtividadeData.createPrioridadeAtividade(prioridadeAtividade);
}

exports.updatePrioridadeAtividade = (id, prioridadeAtividade) => {
    return prioridadeAtividadeData.updatePrioridadeAtividade(id, prioridadeAtividade);
}


