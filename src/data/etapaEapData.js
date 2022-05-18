const database = require('../db/database');

exports.getEtapaEap = () => {
    return database.query('SELECT * FROM "SGD".tb_etapa_eap');
}

exports.getEtapaEapById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_etapa_eap WHERE id_etapa = ${id}`);
}

exports.createEtapaEap = (etapaEap) => {
    return database.query(`INSERT INTO "SGD".tb_etapa_eap (ds_etapa, dt_inicio_vigencia) VALUES ('${etapaEap.ds_etapa}', '${etapaEap.dt_inicio_vigencia}')`);
}

exports.updateEtapaEap = (idEtapaEap, etapaEap) => {

    if(etapaEap.dt_inicio_vigencia == null && etapaEap.dt_fim_vigencia == null) { 
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_inicio_vigencia = NULL, dt_fim_vigencia = NULL WHERE id_etapa = ${idEtapaEap}`);
    }else if(etapaEap.dt_inicio_vigencia == null && etapaEap.dt_fim_vigencia != null) {
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_inicio_vigencia = NULL, dt_fim_vigencia = '${etapaEap.dt_fim_vigencia}' WHERE id_etapa = ${idEtapaEap}`);
    }else if(etapaEap.dt_inicio_vigencia != null && etapaEap.dt_fim_vigencia == null) {
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_inicio_vigencia = '${etapaEap.dt_inicio_vigencia}', dt_fim_vigencia = NULL WHERE id_etapa = ${idEtapaEap}`);
    }else{
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_inicio_vigencia = '${etapaEap.dt_inicio_vigencia}', dt_fim_vigencia = '${etapaEap.dt_fim_vigencia}' WHERE id_etapa = ${idEtapaEap}`);
    }
}