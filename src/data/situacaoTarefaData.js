const database = require('../db/database');

exports.getSituacaoTarefa = () => {
    return database.query('SELECT * FROM "SGD".tb_situacao_tarefa');
}

exports.getSituacaoTarefaById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_situacao_tarefa WHERE id_situacao_tarefa = ${id}`);
}

exports.createSituacaoAtividade = (situacaoTarefa) => {
    database.query(`INSERT INTO "SGD".tb_situacao_tarefa(ds_situacao_tarefa) VALUES ('${situacaoTarefa.ds_situacao_tarefa}');`);
}

exports.updateSituacaoTarefa = (idSituacaoTarefa, situacaoTarefa) => {
    if(situacaoTarefa.dt_fim == null){
        database.query(`UPDATE "SGD".tb_situacao_tarefa SET ds_situacao_tarefa = '${situacaoTarefa.ds_situacao_tarefa}', dt_fim = NULL WHERE id_situacao_tarefa = ${idSituacaoTarefa}`);
    }else{
        database.query(`UPDATE "SGD".tb_situacao_tarefa SET ds_situacao_tarefa = '${situacaoTarefa.ds_situacao_tarefa}', dt_fim = '${situacaoTarefa.dt_fim}' WHERE id_situacao_tarefa = ${idSituacaoTarefa}`);
    }
}