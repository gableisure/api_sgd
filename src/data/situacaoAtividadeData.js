const database = require('../db/database');

exports.getSituacaoAtividade = () => {
    const query = 'SELECT * FROM "SGD".tb_situacao_atividade';
    return database.query(query);
}

exports.getSituacaoAtividadeById = (idSituacaoAtividade) => {
    const query = `SELECT * FROM "SGD".tb_situacao_atividade WHERE id_situacao_atividade = $1`;
    return database.query(query, idSituacaoAtividade);
}

exports.createSituacaoAtividade = (situacaoAtividade) => {
    const query = `INSERT INTO "SGD".tb_situacao_atividade (ds_situacao_atividade) VALUES ($1)`;
    const parameters = [...Object.values(situacaoAtividade)];
    database.query(query, parameters);
}

exports.updatSituacaoAtividade = (idSituacaoAtividade, situacaoAtividade) => {
    if(situacaoAtividade.dt_fim == null){
        // query(`UPDATE "SGD".tb_situacao_atividade SET ds_situacao_atividade = '${situacaoAtividade.ds_situacao_atividade}', dt_fim = NULL WHERE id_situacao_atividade = ${idSituacaoAtividade}`);        
        const query = `UPDATE "SGD".tb_situacao_atividade SET ` + Object.keys(situacaoAtividade).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_situacao_atividade = $${Object.keys(situacaoAtividade).length+1}`;        
        const parameters = [...Object.values(situacaoAtividade), idSituacaoAtividade];
        database.query(query, parameters);
    }else{
        // database.query(`UPDATE "SGD".tb_situacao_atividade SET ds_situacao_atividade = '${situacaoAtividade.ds_situacao_atividade}', dt_fim = '${situacaoAtividade.dt_fim}' WHERE id_situacao_atividade = ${idSituacaoAtividade}`);
        const query = `UPDATE "SGD".tb_situacao_atividade SET ` + Object.keys(situacaoAtividade).map((key, i) => `${key} = $${i+1}`).join(", ")  + ` WHERE id_situacao_atividade = $${Object.keys(situacaoAtividade).length+1}`;
        const parameters = [...Object.values(situacaoAtividade), idSituacaoAtividade];
        database.query(query, parameters);
    }
    
}
