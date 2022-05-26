const database = require('../db/database');
const fs = require('fs');

/* const queryTedInfo = fs.readFileSync('../db/sql/tedInfo.sql').toString(); */

exports.createTed = (ted) => {
    database.query(`INSERT INTO "SGD".tb_ted_unb (ds_ted, sg_ted) VALUES ('${ted.ds_ted}', '${ted.sg_ted}')`);
}

exports.getTed = () => {
    return database.query('SELECT * FROM "SGD".tb_ted_unb');
}

exports.getTedById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_ted_unb WHERE id_ted = ${id}`);
}

exports.updateTed = (id, ted) => {
    if(ted.sg_ted == null && ted.dt_fim == null){
        database.query(`UPDATE "SGD".tb_ted_unb SET ds_ted = '${ted.ds_ted}', sg_ted = NULL, dt_fim = NULL WHERE id_ted = ${id}`);
    }else if(ted.sg_ted != null && ted.dt_fim == null){
        database.query(`UPDATE "SGD".tb_ted_unb SET ds_ted = '${ted.ds_ted}', sg_ted = '${ted.sg_ted}', dt_fim = NULL WHERE id_ted = ${id}`);
    }else if(ted.sg_ted == null && ted.dt_fim != null){
        database.query(`UPDATE "SGD".tb_ted_unb SET ds_ted = '${ted.ds_ted}', sg_ted = NULL, dt_fim = '${ted.dt_fim}' WHERE id_ted = ${id}`);
    }else{
        database.query(`UPDATE "SGD".tb_ted_unb SET ds_ted = '${ted.ds_ted}', sg_ted = '${ted.sg_ted}', dt_fim = '${ted.dt_fim}' WHERE id_ted = ${id}`);
    }
}

exports.getTedDetailsById = (id) => {
    return database.query(`
        SELECT
            tt.id_tarefa "id_tarefa",
            tu.id_ted "id_ted",
            tu.ds_ted "ds_ted",
            ti.ds_etapa "ds_etapa",
            te.ds_atividade_etapa "ds_atividade_etapa_eap",
            ta.ds_atividade_etapa "ds_atividade_backlog_etapa",
            tt.ds_tarefa "ds_tarefa",
            tt.id_tarefa_pai "id_tarefa_pai",
            tu1.nm_usuario "solicitante",
            tu2.nm_usuario "responsavel",
            ts.ds_situacao_tarefa "ds_situacao_tarefa",
            tt.nr_regra_negocio "nr_regra_negocio",
            tt.nr_historia_usuario "nr_historia_usuario",
            tt.tx_observacao "observacao",
            tt.dt_inicio_tarefa "dt_inicio_tarefa",
            tt.dt_fim_tarefa "dt_fim_tarefa",
            tt.dt_inclusao "dt_inclusao"
        FROM "SGD".tb_tarefa tt
        INNER JOIN "SGD".tb_atividade_backlog ta
            ON (ta.id_atividade = tt.id_atividade)
        INNER JOIN "SGD".tb_sprint tr
            ON (tr.id_sprint = ta.id_sprint)
        INNER JOIN "SGD".tb_ted_unb tu
            ON (tu.id_ted = tr.id_ted)
        INNER JOIN "SGD".tb_atividade_etapa_eap te
            ON (te.id_atividade_etapa = ta.id_atividade_etapa)
        INNER JOIN "SGD".tb_etapa_eap ti
            ON (ti.id_etapa = te.id_etapa)
        INNER JOIN "SGD".tb_situacao_tarefa ts
            ON (ts.id_situacao_tarefa = tt.id_situacao_tarefa)
        INNER JOIN "SGD".tb_usuario tu1
            ON (tu1.id_usuario = tt.id_solicitante)
        INNER JOIN "SGD".tb_usuario tu2
            ON (tu2.id_usuario = tt.id_usuario_responsavel)
        WHERE tu.id_ted = ${id}`
    );
}

