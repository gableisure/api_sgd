const sprintData = require('../data/sprintData');

exports.getSprints = () => {
    return sprintData.getSprints();
}

exports.getSprintById = (id) => {
    return sprintData.getSprintById(id);
}