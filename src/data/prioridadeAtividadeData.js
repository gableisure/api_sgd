const database = require('../db/database');

exports.getPrioridadeAtividade = () => {
    const query = 'SELECT * FROM "SGD".tb_prioridade_atividade)';
    return database.query(query);
}

exports.getPrioridadeAtividadeById = (idPrioridadeAtividade) => {
    const query = `SELECT * FROM "SGD".tb_prioridade_atividade WHERE id_prioridade_atividade = $1`;
    return database.query(query, idPrioridadeAtividade)
}

exports.createPrioridadeAtividade = (prioridadeAtividade) => {
    const query = `INSERT INTO "SGD".tb_prioridade_atividade (ds_prioridade_atividade) VALUES ($1)`;
    const parameters = [...Object.values(prioridadeAtividade)];
    database.query(query, parameters);
}

exports.updatePrioridadeAtividade = (idPrioridadeAtividade, prioridadeAtividade) => {
    if(prioridadeAtividade.dt_fim == null){
        // database.query(`UPDATE "SGD".tb_prioridade_atividade SET ds_prioridade_atividade = '${prioridadeAtividade.ds_prioridade_atividade}', dt_fim = NULL WHERE id_prioridade_atividade = ${idPrioridadeAtividade}`);
        const query = `UPDATE "SGD".tb_prioridade_atividade SET ` + Object.keys(prioridadeAtividade).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_prioridade_atividade = $${Object.keys(prioridadeAtividade).length+1}`;        
        const parameters = [...Object.values(prioridadeAtividade), idPrioridadeAtividade];
        database.query(query, parameters);
    }else{
        // database.query(`UPDATE "SGD".tb_prioridade_atividade SET ds_prioridade_atividade = '${prioridadeAtividade.ds_prioridade_atividade}', dt_fim = '${prioridadeAtividade.dt_fim}' WHERE id_prioridade_atividade = ${idPrioridadeAtividade}`);
        const query = `UPDATE "SGD".tb_prioridade_atividade SET ` + Object.keys(prioridadeAtividade).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_prioridade_atividade = $${Object.keys(prioridadeAtividade).length+1}`;        
        const parameters = [...Object.values(prioridadeAtividade), idPrioridadeAtividade];
        database.query(query, parameters);
    }
}