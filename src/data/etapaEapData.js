const database = require('../db/database');

exports.getEtapaEap = () => {
    const query = `SELECT * FROM "SGD".tb_etapa_eap`;
    return database.query(query);
}

exports.getEtapaEapById = (idEtapaEap) => {
    const query = `SELECT * FROM "SGD".tb_etapa_eap WHERE id_etapa = $1`;
    return database.query(query, idEtapaEap);
}

exports.createEtapaEap = (ds_etapa) => {
    const query = `INSERT INTO "SGD".tb_etapa_eap (ds_etapa) VALUES ($1)`;
    const parameters = [...Object.values(ds_etapa)];
    database.query(query, parameters);
}

exports.updateEtapaEap = (idEtapaEap, etapaEap) => {
    const query = `UPDATE "SGD".tb_etapa_eap SET ` + Object.keys(etapaEap).map((key, i) => `${key} = $${i+1}`).join(", ") + ` WHERE id_etapa = $${Object.keys(etapaEap).length+1}`;
    const parameters = [...Object.values(etapaEap), idEtapaEap];
    database.query(query, parameters);
}