const motivoBloqueioData = require('../data/motivoBloqueioData');

exports.getMotivoBloqueio = () => {
    return motivoBloqueioData.getMotivoBloqueio();
}

exports.getMotivoBloqueioById = (idMotivoBloqueio) => {
    return motivoBloqueioData.getMotivoBloqueioById(idMotivoBloqueio);
}

exports.createMotivoBloqueio = (motivoBloqueio) => {
    return motivoBloqueioData.createMotivoBloqueio(motivoBloqueio);
}

exports.updateMotivoBloqueio = (idMotivoBloqueio, motivoBloqueio) => {
    return motivoBloqueioData.updateMotivoBloqueio(idMotivoBloqueio, motivoBloqueio);
}
