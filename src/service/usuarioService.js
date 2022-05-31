const usuarioData = require('../data/usuarioData');

exports.getUsuario = () => {
    return usuarioData.getUsuario();
}

exports.getUsuarioById = (id) => {
    return usuarioData.getUsuarioById(id);
}

exports.getUsuarioByTed = (id) => {
    return usuarioData.getUsuarioByTed(id);
}

exports.createUsuario = (user) => {
    usuarioData.createUsuario(user);
}

exports.updateUsuario = (idUser, user) => {
    usuarioData.updateUsuario(idUser, user);
}