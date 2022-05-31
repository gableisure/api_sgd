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

exports.createUsuario = (user) => {
    database.query(`INSERT INTO "SGD".tb_usuario (nm_usuario, nr_cpf, id_perfil_usuario, id_ted, tx_senha_acesso) VALUES ('${user.nm_usuario}', '${user.nr_cpf}', ${user.id_perfil_usuario}, ${user.id_ted}, '${user.tx_senha_acesso}')`);
}

exports.updateUsuario = (idUser, user) => {
    if(user.id_motivo_bloqueio == null && user.dt_fim_cadastro == null){
        database.query(`UPDATE "SGD".tb_usuario SET nm_usuario='${user.nm_usuario}', nr_cpf='${user.nr_cpf}', id_perfil_usuario=${user.id_perfil_usuario}, id_ted=${user.id_ted}, tx_senha_acesso='${user.tx_senha_acesso}', id_motivo_bloqueio=NULL, dt_fim_cadastro=NULL WHERE id_usuario = ${idUser}`);
    }else if(user.id_motivo_bloqueio != null && user.dt_fim_cadastro == null){
        database.query(`UPDATE "SGD".tb_usuario SET nm_usuario='${user.nm_usuario}', nr_cpf='${user.nr_cpf}', id_perfil_usuario=${user.id_perfil_usuario}, id_ted=${user.id_ted}, tx_senha_acesso='${user.tx_senha_acesso}', id_motivo_bloqueio=${user.id_motivo_bloqueio}, dt_fim_cadastro=NULL WHERE id_usuario = ${idUser}`);
    }else if(user.id_motivo_bloqueio == null && user.dt_fim_cadastro != null){
        database.query(`UPDATE "SGD".tb_usuario SET nm_usuario='${user.nm_usuario}', nr_cpf='${user.nr_cpf}', id_perfil_usuario=${user.id_perfil_usuario}, id_ted=${user.id_ted}, tx_senha_acesso='${user.tx_senha_acesso}', id_motivo_bloqueio=NULL, dt_fim_cadastro='${user.dt_fim_cadastro}' WHERE id_usuario = ${idUser}`);
    }else{
        database.query(`UPDATE "SGD".tb_usuario SET nm_usuario='${user.nm_usuario}', nr_cpf='${user.nr_cpf}', id_perfil_usuario=${user.id_perfil_usuario}, id_ted=${user.id_ted}, tx_senha_acesso='${user.tx_senha_acesso}', id_motivo_bloqueio=${user.id_motivo_bloqueio}, dt_fim_cadastro='${user.dt_fim_cadastro}' WHERE id_usuario = ${idUser}`);
    }
}



