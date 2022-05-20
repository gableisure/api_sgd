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

exports.updateMotivoBloqueio = (idMotivoBloqueio, motivoBloqueio) => {
    return motivoBloqueioData.updateMotivoBloqueio(idMotivoBloqueio, motivoBloqueio);
}
