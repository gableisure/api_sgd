const database = require('../db/database');

exports.getPrioridadeAtividade = () => {
    return database.query('SELECT * FROM "SGD".tb_prioridade_atividade');
}

exports.getPrioridadeAtividadeById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_prioridade_atividade WHERE id_prioridade_atividade = ${id}`);
}