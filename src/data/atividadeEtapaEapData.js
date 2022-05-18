const database = require('../db/database');

exports.getAtividadesEtapasEap = () => {
    return database.query(`
        SELECT
            ta.id_atividade_etapa,
            te.id_etapa,
            te.ds_etapa,
            ta.ds_atividade_etapa,
            ta.dt_inicio_vigencia,
            ta.dt_fim_vigencia
        FROM "SGD".tb_atividade_etapa_eap ta
        INNER JOIN "SGD".tb_etapa_eap te
            ON (te.id_etapa = ta.id_etapa)`
    );
}

exports.getAtividadesEtapaEapById = (id) => {
    return database.query(`
        SELECT
            ta.id_atividade_etapa,
            te.id_etapa,
            te.ds_etapa,
            ta.ds_atividade_etapa,
            ta.dt_inicio_vigencia,
            ta.dt_fim_vigencia
        FROM "SGD".tb_atividade_etapa_eap ta
        INNER JOIN "SGD".tb_etapa_eap te
            ON (te.id_etapa = ta.id_etapa)
        WHERE ta.id_atividade_etapa = ${id}`
    );
}