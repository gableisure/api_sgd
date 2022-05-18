const database = require('../db/database');

exports.getUsuario = () => {
    return database.query(`
        SELECT
            tu.id_usuario "id_usuario",
            tu.nm_usuario "nm_usuario",
            tu.nr_cpf "nr_cpf",
            tp.id_perfil_usuario "id_perfil_usuario",
            tp.ds_perfil_usuario "ds_perfil_usuario",
            tt.id_ted "id_ted",
            tu.dt_inicio_cadastro "dt_inicio_cadastro",
            tu.dt_fim_cadastro "dt_fim_cadastro",
            tm.id_motivo_bloqueio "id_motivo_bloqueio"
        FROM "SGD".tb_usuario tu
        LEFT JOIN "SGD".tb_perfil_usuario tp
            ON (tp.id_perfil_usuario = tu.id_perfil_usuario)
        LEFT JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = tu.id_ted)
        LEFT JOIN "SGD".tb_motivo_bloqueio tm
            ON (tm.id_motivo_bloqueio = tu.id_motivo_bloqueio)`
    );
}

exports.getUsuarioByTed = (id_ted) => {
    return database.query(`
        SELECT
            tu.id_usuario "id_usuario",
            tu.nm_usuario "nm_usuario",
            tu.nr_cpf "nr_cpf",
            tp.id_perfil_usuario "id_perfil_usuario",
            tp.ds_perfil_usuario "ds_perfil_usuario",
            tt.id_ted "id_ted",
            tu.dt_inicio_cadastro "dt_inicio_cadastro",
            tu.dt_fim_cadastro "dt_fim_cadastro",
            tm.id_motivo_bloqueio "id_motivo_bloqueio"
        FROM "SGD".tb_usuario tu
        LEFT JOIN "SGD".tb_perfil_usuario tp
            ON (tp.id_perfil_usuario = tu.id_perfil_usuario)
        LEFT JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = tu.id_ted)
        LEFT JOIN "SGD".tb_motivo_bloqueio tm
            ON (tm.id_motivo_bloqueio = tu.id_motivo_bloqueio)
        WHERE tt.id_ted = ${id_ted}`
    );
}

exports.getUsuarioById = (id) => {
    return database.query(`
        SELECT
            tu.id_usuario "id_usuario",
            tu.nm_usuario "nm_usuario",
            tu.nr_cpf "nr_cpf",
            tp.id_perfil_usuario "id_perfil_usuario",
            tp.ds_perfil_usuario "ds_perfil_usuario",
            tt.id_ted "id_ted",
            tu.dt_inicio_cadastro "dt_inicio_cadastro",
            tu.dt_fim_cadastro "dt_fim_cadastro",
            tm.id_motivo_bloqueio "id_motivo_bloqueio"
        FROM "SGD".tb_usuario tu
        LEFT JOIN "SGD".tb_perfil_usuario tp
            ON (tp.id_perfil_usuario = tu.id_perfil_usuario)
        LEFT JOIN "SGD".tb_ted_unb tt
            ON (tt.id_ted = tu.id_ted)
        LEFT JOIN "SGD".tb_motivo_bloqueio tm
            ON (tm.id_motivo_bloqueio = tu.id_motivo_bloqueio)
        WHERE tu.id_usuario = ${id}`
    );
}

/* exports.createUsuario = (user) => {
    return database.query('')
} */


