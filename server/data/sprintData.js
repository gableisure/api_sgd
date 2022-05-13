const database = require('../db/database');

exports.getSprints = () => {
    return database.query(`
        SELECT
            ts.id_sprint "id_sprint",
            tt.id_ted "id_ted",
            --tt.sg_ted "sg_ted",
            tt.ds_ted "ds_ted",
            ts.dt_inicio "dt_inicio",
            ts.dt_fim "dt_fim"
        FROM "SGD".tb_sprint ts
        LEFT JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = ts.id_ted)`
    );
}

exports.getSprintById = (id) => {
    return database.query(`
        SELECT
            ts.id_sprint "id_sprint",
            tt.id_ted "id_ted",
            --tt.sg_ted "sg_ted",
            tt.ds_ted "ds_ted",
            ts.dt_inicio "dt_inicio",
            ts.dt_fim "dt_fim"
        FROM "SGD".tb_sprint ts
        LEFT JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = ts.id_ted)
        WHERE ts.id_sprint = ${id}`
    );
}