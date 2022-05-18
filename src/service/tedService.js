const tedData = require('../data/tedData');

exports.getTed = () => tedData.getTed();

exports.getTedById = (id) => tedData.getTedById(id);

exports.getTedDetailsById = (id) => tedData.getTedDetailsById(id);

exports.createTed = (ds_ted) => tedData.createTed(ds_ted)

exports.updateTed = (id, ds_ted) => tedData.updateTed(id, ds_ted)

exports.deleteTed = (id) => tedData.deleteTed(id)