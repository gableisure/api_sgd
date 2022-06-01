const database = require('../db/database');

exports.getPerfilUsuario = () => {
    const query = `SELECT * FROM "SGD".tb_perfil_usuario`;
    return database.query(query);
}

exports.getPerfilUsuarioById = (idPerfilUsuario) => {
    const query = `SELECT * FROM "SGD".tb_perfil_usuario WHERE id_perfil_usuario = $1`;
    return database.query(query, idPerfilUsuario);
}

exports.createPerfilUsuario = (ds_perfil_usuario) => {
    const query = `INSERT INTO "SGD".tb_perfil_usuario(ds_perfil_usuario) VALUES ($1)`;
    const parameters = [...Object.values(ds_perfil_usuario)];
    database.query(query, parameters);
}

exports.updatePerfilUsuario = (idPerfilUsuario, perfilUsuario) => {
    const query = `UPDATE "SGD".tb_perfil_usuario SET ` + Object.keys(perfilUsuario).map((key, i) => `${key} = $${i+1}`).join(", ") + ` WHERE id_perfil_usuario = $${Object.keys(perfilUsuario).length+1}`;
    const parameters = [...Object.values(perfilUsuario), idPerfilUsuario];
    database.query(query, parameters);  
}
