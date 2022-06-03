const prioridadeAtividadeData = require('../data/prioridadeAtividadeData');

exports.getPrioridadeAtividade = () => {
    return prioridadeAtividadeData.getPrioridadeAtividade();
}

exports.getPrioridadeAtividadeById = (idPrioridadeAtividade) => {
    return prioridadeAtividadeData.getPrioridadeAtividadeById(id);
}

exports.createPrioridadeAtividade = (prioridadeAtividade) => {
    return prioridadeAtividadeData.createPrioridadeAtividade(prioridadeAtividade);
}

exports.updatePrioridadeAtividade = (idPrioridadeAtividade, prioridadeAtividade) => {
    return prioridadeAtividadeData.updatePrioridadeAtividade(id, prioridadeAtividade);
}


