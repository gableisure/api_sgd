const database = require('../db/database');

exports.getPrioridadeAtividade = () => {
    return database.query('SELECT * FROM "SGD".tb_prioridade_atividade');
}

exports.getPrioridadeAtividadeById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_prioridade_atividade WHERE id_prioridade_atividade = ${id}`);
}

exports.createPrioridadeAtividade = (prioridadeAtividade) => {
    database.query(`INSERT INTO "SGD".tb_prioridade_atividade (ds_prioridade_atividade) VALUES ('${prioridadeAtividade.ds_prioridade_atividade}')`);
}

exports.updatePrioridadeAtividade = (idPrioridadeAtividade, prioridadeAtividade) => {
    database.query(`UPDATE "SGD".tb_prioridade_atividade SET ds_prioridade_atividade = '${prioridadeAtividade.ds_prioridade_atividade}', dt_fim = '${prioridadeAtividade.dt_fim}' WHERE id_prioridade_atividade = ${idPrioridadeAtividade}`);
}