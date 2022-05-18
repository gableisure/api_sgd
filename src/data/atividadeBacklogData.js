const database = require('../db/database');

exports.getAtividadesBacklog = () => {
    return database.query(`
        SELECT 
            ta.id_atividade "id_atividade",
            te.id_atividade_etapa "id_atividade_etapa_eap",
            te.ds_atividade_etapa "ds_atividade_etapa_eap",
            ta.ds_atividade_etapa "ds_atividade_etapa",
            ta.ds_detalhe_atividade "ds_detalhe_atividade",
            ts.id_situacao_atividade "id_situacao_atividade",
            ts.ds_situacao_atividade "ds_situacao_atividade",
            tp.id_prioridade_atividade "id_prioridade_atividade",
            tp.ds_prioridade_atividade "ds_prioridade_atividade",
            tr.id_sprint "id_sprint",
            tt.id_ted "id_ted",
            tt.ds_ted "ds_ted",
            ta.dt_inicio_atividade "dt_inicio_atividade",
            ta.dt_fim_atividade "dt_fim_atividade"
        FROM "SGD".tb_atividade_backlog ta
        INNER JOIN "SGD".tb_situacao_atividade ts
            ON (ts.id_situacao_atividade = ta.id_situacao_atividade)
        INNER JOIN "SGD".tb_prioridade_atividade tp
            ON (tp.id_prioridade_atividade = ta.id_prioridade_atividade)
        INNER JOIN "SGD".tb_sprint tr
            ON (tr.id_sprint = ta.id_sprint)
        INNER JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = tr.id_ted)
        INNER JOIN "SGD".tb_atividade_etapa_eap te
            ON (te.id_atividade_etapa = ta.id_atividade_etapa)`
    );
}

exports.getAtividadeBacklogById = (id) => {
    return database.query(`
        SELECT 
            ta.id_atividade "id_atividade",
            te.id_atividade_etapa "id_atividade_etapa_eap",
            te.ds_atividade_etapa "ds_atividade_etapa_eap",
            ta.ds_atividade_etapa "ds_atividade_etapa",
            ta.ds_detalhe_atividade "ds_detalhe_atividade",
            ts.id_situacao_atividade "id_situacao_atividade",
            ts.ds_situacao_atividade "ds_situacao_atividade",
            tp.id_prioridade_atividade "id_prioridade_atividade",
            tp.ds_prioridade_atividade "ds_prioridade_atividade",
            tr.id_sprint "id_sprint",
            tt.id_ted "id_ted",
            tt.ds_ted "ds_ted",
            ta.dt_inicio_atividade "dt_inicio_atividade",
            ta.dt_fim_atividade "dt_fim_atividade"
        FROM "SGD".tb_atividade_backlog ta
        INNER JOIN "SGD".tb_situacao_atividade ts
            ON (ts.id_situacao_atividade = ta.id_situacao_atividade)
        INNER JOIN "SGD".tb_prioridade_atividade tp
            ON (tp.id_prioridade_atividade = ta.id_prioridade_atividade)
        INNER JOIN "SGD".tb_sprint tr
            ON (tr.id_sprint = ta.id_sprint)
        INNER JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = tr.id_ted)
        INNER JOIN "SGD".tb_atividade_etapa_eap te
            ON (te.id_atividade_etapa = ta.id_atividade_etapa)
        WHERE ta.id_atividade = ${id}`
    );
}