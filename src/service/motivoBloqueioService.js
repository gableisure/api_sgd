const motivoBloqueioData = require('../data/motivoBloqueioData');

exports.getMotivoBloqueio = () => {
    return motivoBloqueioData.getMotivoBloqueio();
}

exports.getMotivoBloqueioById = (id) => {
    return motivoBloqueioData.getMotivoBloqueioById(id);
}

exports.createMotivoBloqueio = (motivoBloqueio) => {
    return motivoBloqueioData.createMotivoBloqueio(motivoBloqueio);
}

exports.updateMotivoBloqueio = (id_motivo_bloqueio, motivoBloqueio) => {
    return motivoBloqueioData.updateMotivoBloqueio(id_motivo_bloqueio, motivoBloqueio);
}
