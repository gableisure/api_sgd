const database = require('../db/database');

exports.getSituacaoTarefa = () => {
    const query = 'SELECT * FROM "SGD".tb_situacao_tarefa';
    return database.query(query);
}

exports.getSituacaoTarefaById = (idSituacaoTarefa) => {
    const query = `SELECT * FROM "SGD".tb_situacao_tarefa WHERE id_situacao_tarefa = $1`;
    return database.query(query, idSituacaoTarefa);
}

exports.createSituacaoAtividade = (situacaoTarefa) => {
    const query = `INSERT INTO "SGD".tb_situacao_tarefa(ds_situacao_tarefa) VALUES ($1);`;
    const parameters = [...Object.values(situacaoTarefa)];
    database.query(query, parameters);
}

exports.updateSituacaoTarefa = (idSituacaoTarefa, situacaoTarefa) => {
    if(situacaoTarefa.dt_fim == null){
        // database.query(`UPDATE "SGD".tb_situacao_tarefa SET ds_situacao_tarefa = '${situacaoTarefa.ds_situacao_tarefa}', dt_fim = NULL WHERE id_situacao_tarefa = ${idSituacaoTarefa}`);
        const query = `UPDATE "SGD".ds_situacao_tarefa SET ` + Object.keys(situacaoTarefa).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_situacao_tarefa = $${Object.keys(situacaoTarefa).length+1}`;        
        const parameters = [...Object.values(situacaoTarefa), idSituacaoTarefa];
        database.query(query, parameters);
    }else{
        // database.query(`UPDATE "SGD".tb_situacao_tarefa SET ds_situacao_tarefa = '${situacaoTarefa.ds_situacao_tarefa}', dt_fim = '${situacaoTarefa.dt_fim}' WHERE id_situacao_tarefa = ${idSituacaoTarefa}`);
        const query = `UPDATE "SGD".ds_situacao_tarefa SET ` + Object.keys(situacaoTarefa).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_situacao_tarefa = $${Object.keys(situacaoTarefa).length+1}`;        
        const parameters = [...Object.values(situacaoTarefa), idSituacaoTarefa];
        database.query(query, parameters);
    }
}