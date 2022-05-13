const database = require('../db/database');

exports.getMotivoBloqueio = () => {
    return database.query('SELECT * FROM "SGD".tb_motivo_bloqueio');
}

exports.getMotivoBloqueioById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_motivo_bloqueio WHERE id_motivo_bloqueio = ${id}`);
}