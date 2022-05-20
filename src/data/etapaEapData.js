const database = require('../db/database');

exports.getEtapaEap = () => {
    return database.query('SELECT * FROM "SGD".tb_etapa_eap');
}

exports.getEtapaEapById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_etapa_eap WHERE id_etapa = ${id}`);
}

exports.createEtapaEap = (etapaEap) => {
    return database.query(`INSERT INTO "SGD".tb_etapa_eap (ds_etapa) VALUES ('${etapaEap.ds_etapa}')`);
}

exports.updateEtapaEap = (idEtapaEap, etapaEap) => {
    if(etapaEap.dt_fim_vigencia == null){
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_fim_vigencia = NULL WHERE id_etapa = ${idEtapaEap}`);
    }else{
        database.query(`UPDATE "SGD".tb_etapa_eap SET ds_etapa = '${etapaEap.ds_etapa}', dt_fim_vigencia = '${etapaEap.dt_fim_vigencia}' WHERE id_etapa = ${idEtapaEap}`);
    }
}