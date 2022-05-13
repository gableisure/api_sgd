const database = require('../db/database');

exports.getEtapaEap = () => {
    return database.query('SELECT * FROM "SGD".tb_etapa_eap');
}

exports.getEtapaEapById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_etapa_eap WHERE id_etapa = ${id}`);
}

