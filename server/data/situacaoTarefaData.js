const database = require('../db/database');

exports.getSituacaoTarefa = () => {
    return database.query('SELECT * FROM "SGD".tb_situacao_tarefa');
}

exports.getSituacaoTarefaById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_situacao_tarefa WHERE id_situacao_tarefa = ${id}`);
}