const tedData = require('../data/tedData');

exports.getTed = () => tedData.getTed();

exports.getTedById = (id) => tedData.getTedById(id);

exports.getTedDetailsById = (id) => tedData.getTedDetailsById(id);

exports.createTed = (ted) => tedData.createTed(ted);

exports.updateTed = (id, ted) => tedData.updateTed(id, ted);
