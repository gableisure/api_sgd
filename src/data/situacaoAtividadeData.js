const database = require('../db/database');

exports.getSituacaoAtividade = () => {
    return database.query('SELECT * FROM "SGD".tb_situacao_atividade');
}

exports.getSituacaoAtividadeById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_situacao_atividade WHERE id_situacao_atividade = ${id}`);
}

exports.createSituacaoAtividade = (situacaoAtividade) => {
    return database.query(`INSERT INTO "SGD".tb_situacao_atividade (ds_situacao_atividade) VALUES ('${situacaoAtividade.ds_situacao_atividade}')`);
}

exports.updatSituacaoAtividade = (idSituacaoAtividade, situacaoAtividade) => {
    return database.query(`UPDATE "SGD".tb_situacao_atividade
	SET ds_situacao_atividade = '${situacaoAtividade.ds_situacao_atividade}', dt_fim = '${situacaoAtividade.dt_fim}'
	WHERE id_situacao_atividade = ${idSituacaoAtividade}`);
}
