const motivoBloqueioData = require('../data/motivoBloqueioData');

exports.getMotivoBloqueio = () => {
    return motivoBloqueioData.getMotivoBloqueio();
}

exports.getMotivoBloqueioById = (id) => {
    return motivoBloqueioData.getMotivoBloqueioById(id);
}