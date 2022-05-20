const database = require('../db/database');

exports.getPerfilUsuario = () => {
    return database.query('SELECT * FROM "SGD".tb_perfil_usuario');
}

exports.getPerfilUsuarioById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_perfil_usuario WHERE id_perfil_usuario = ${id}`);
}

exports.createPerfilUsuario = (perfilUsuario) => {
    database.query(`INSERT INTO "SGD".tb_perfil_usuario(ds_perfil_usuario) VALUES ('${perfilUsuario.ds_perfil_usuario}')`);
}

exports.updatePerfilUsuario = (id_perfil_usuario, perfilUsuario) => {
    if(perfilUsuario.dt_fim_vigencia == null){
        database.query(`UPDATE "SGD".tb_perfil_usuario SET ds_perfil_usuario = '${perfilUsuario.ds_perfil_usuario}', dt_fim_vigencia = NULL WHERE id_perfil_usuario = ${id_perfil_usuario}`);
    }else{
        database.query(`UPDATE "SGD".tb_perfil_usuario SET ds_perfil_usuario = '${perfilUsuario.ds_perfil_usuario}', dt_fim_vigencia = '${perfilUsuario.dt_fim_vigencia}' WHERE id_perfil_usuario = ${id_perfil_usuario}`);
    }
    
}
