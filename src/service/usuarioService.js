const usuarioData = require('../data/usuarioData');

exports.getUsuario = () => {
    return usuarioData.getUsuario();
}

exports.getUsuarioById = (idUsuario) => {
    return usuarioData.getUsuarioById(idUsuario);
}

exports.createUsuario = (usuario) => {
    usuarioData.createUsuario(usuario);
}

exports.updateUsuario = (idUsuario, usuario) => {
    usuarioData.updateUsuario(idUsuario, usuario);
}
