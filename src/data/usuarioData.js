const database = require('../db/database');

exports.getUsuario = () => {
    const query = `SELECT * FROM "SGD".tb_usuario`;
    return database.query(query);
}

exports.getUsuarioById = (idUsuario) => {
    const query = `SELECT * FROM "SGD".tb_usuario WHERE id_usuario = $1`;
    return database.query(query, idUsuario);
}

exports.createUsuario = (usuario) => {
    const query = `INSERT INTO "SGD".tb_usuario (` + Object.keys(usuario).map(key => `${key}`).join(", ") + `) VALUES (` + Object.keys(usuario).map((key, i) => `$${i+1}`).join(", ") + ")";
    const parameters = [...Object.values(usuario)];
    database.query(query, parameters);
}

exports.updateUsuario = (idUsuario, usuario) => {
    const query = `UPDATE "SGD".tb_usuario SET ` + Object.keys(usuario).map((key, i) => `${key} = $${i+1}`).join(", ") + ` WHERE id_usuario = $${Object.keys(usuario).length+1}`;
    const parameters = [...Object.values(usuario), idUsuario];
    database.query(query, parameters);
}