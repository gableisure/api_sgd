const database = require('../db/database');

exports.getSituacaoAtividade = () => {
    return database.query('SELECT * FROM "SGD".tb_situacao_atividade');
}

exports.getSituacaoAtividadeById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_situacao_atividade WHERE id_situacao_atividade = ${id}`);
}