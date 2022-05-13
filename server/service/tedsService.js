const tedsData = require('../data/tedsData');

exports.getTeds = () => tedsData.getTeds();

exports.getTedById = (id) => tedsData.getTedById(id);

exports.getTedDetailsById = (id) => tedsData.getTedDetailsById(id);

exports.createTed = (ds_ted) => tedsData.createTed(ds_ted)

exports.updateTed = (id, ds_ted) => tedsData.updateTed(id, ds_ted)

exports.deleteTed = (id) => tedsData.deleteTed(id)


