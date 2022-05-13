const atividadeBacklogData = require('../data/atividadeBacklogData');

exports.getAtividadesBacklog = () => {
    return atividadeBacklogData.getAtividadesBacklog();
}

exports.getAtividadeBacklogById = (id) => {
    return atividadeBacklogData.getAtividadeBacklogById(id);
}