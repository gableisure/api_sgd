const perfilUsuarioData = require('../data/perfilUsuarioData');

exports.getPerfilUsuario = () => {
    return perfilUsuarioData.getPerfilUsuario();
}

exports.getPerfilUsuarioById = (idPerfilUsuario) => {
    return perfilUsuarioData.getPerfilUsuarioById(idPerfilUsuario);
}

exports.createPerfilUsuario = (perfilUsuario) => {
    return perfilUsuarioData.createPerfilUsuario(perfilUsuario);
}

exports.updatePerfilUsuario = (idPerfilUsuario, perfilUsuario) => {
    return perfilUsuarioData.updatePerfilUsuario(idPerfilUsuario, perfilUsuario);
}