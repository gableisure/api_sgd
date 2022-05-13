const database = require('../db/database');

exports.getPerfilUsuario = () => {
    return database.query('SELECT * FROM "SGD".tb_perfil_usuario');
}

exports.getPerfilUsuarioById = (id) => {
    return database.query(`SELECT * FROM "SGD".tb_perfil_usuario WHERE id_perfil_usuario = ${id}`);
}