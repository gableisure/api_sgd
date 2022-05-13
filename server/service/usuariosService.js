const usuariosData = require('../data/usuariosData');

exports.getUsuarios = () => {
    return usuariosData.getUsuarios();
}

exports.getUsuarioById = (id) => {
    return usuariosData.getUsuarioById(id);
}

exports.getUsuariosByTed = (id) => {
    return usuariosData.getUsuariosByTed(id);
}

