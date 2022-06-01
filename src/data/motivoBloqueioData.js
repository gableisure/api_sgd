const database = require('../db/database');

exports.getMotivoBloqueio = () => {
    const query = `SELECT * FROM "SGD".tb_motivo_bloqueio`;
    return database.query(query);
}

exports.getMotivoBloqueioById = (idMotivoBloqueio) => {
    const query = `SELECT * FROM "SGD".tb_motivo_bloqueio WHERE id_motivo_bloqueio = $1`;
    return database.query(query, idMotivoBloqueio);
}

exports.createMotivoBloqueio = (tx_motivo_bloqueio) => {
    const query = `INSERT INTO "SGD".tb_motivo_bloqueio (tx_motivo_bloqueio) VALUES ($1)`;
    const parameters = [...Object.values(tx_motivo_bloqueio)];
    database.query(query, parameters);
}

exports.updateMotivoBloqueio = (idMotivoBloqueio, motivoBloqueio) => {
    const query = `UPDATE "SGD".tb_motivo_bloqueio SET ` + Object.keys(motivoBloqueio).map((key, i) => `${key} = $${i+1}`).join(", ") + ` WHERE id_motivo_bloqueio = $${Object.keys(motivoBloqueio).length+1}`;
    const parameters = [...Object.values(motivoBloqueio), idMotivoBloqueio];
    database.query(query, parameters);  
}
