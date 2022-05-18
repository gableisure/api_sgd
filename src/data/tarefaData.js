const database = require('../db/database');

/* const queryTedInfo = fs.readFileSync('../db/sql/tedInfo.sql').toString(); */

exports.getTarefas = () => {
    return database.query(`
        SELECT
            tt.id_tarefa "id_tarefa",
            tu.id_ted "id_ted",
            tu.ds_ted "ds_ted",
            ti.id_etapa "id_etapa",
            ti.ds_etapa "ds_etapa",
            te.id_atividade_etapa "id_atividade_etapa",
            te.ds_atividade_etapa "ds_atividade_etapa",
            ta.id_atividade "id_atividade_backlog",
            ta.ds_atividade_etapa "ds_atividade_backlog",
            tt.ds_tarefa "ds_tarefa",
            tt.id_tarefa_pai "id_tarefa_pai",
            tu1.id_usuario "id_solicitante",
            tu1.nm_usuario "solicitante",
            tu2.id_usuario "id_responsavel",
            tu2.nm_usuario "responsavel",
            ts.id_situacao_tarefa "id_situacao_tarefa",
            ts.ds_situacao_tarefa "ds_situacao_tarefa",
            tt.nr_regra_negocio "nr_regra_negocio",
            tt.nr_historia_usuario "nr_historia_usuario",
            tt.tx_observacao "tx_observacao",
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
            ON (tu2.id_usuario = tt.id_usuario_responsavel)`
    );
}

exports.getTarefaById = (id) => {
    return database.query(`
        SELECT
            tt.id_tarefa "id_tarefa",
            tu.id_ted "id_ted",
            tu.ds_ted "ds_ted",
            ti.id_etapa "id_etapa",
            ti.ds_etapa "ds_etapa",
            te.id_atividade_etapa "id_atividade_etapa",
            te.ds_atividade_etapa "ds_atividade_etapa",
            ta.id_atividade "id_atividade_backlog",
            ta.ds_atividade_etapa "ds_atividade_backlog",
            tt.ds_tarefa "ds_tarefa",
            tt.id_tarefa_pai "id_tarefa_pai",
            tu1.id_usuario "id_solicitante",
            tu1.nm_usuario "solicitante",
            tu2.id_usuario "id_responsavel",
            tu2.nm_usuario "responsavel",
            ts.id_situacao_tarefa "id_situacao_tarefa",
            ts.ds_situacao_tarefa "ds_situacao_tarefa",
            tt.nr_regra_negocio "nr_regra_negocio",
            tt.nr_historia_usuario "nr_historia_usuario",
            tt.tx_observacao "tx_observacao",
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
        WHERE tt.id_tarefa = ${id}`
    );
}

exports.updateSituacaoTarefa = (id_tarefa, id_situacao_tarefa) => {
    return database.query(`UPDATE "SGD".tb_tarefa SET id_situacao_tarefa = ${id_situacao_tarefa} WHERE id_tarefa = ${id_tarefa}`);
}
