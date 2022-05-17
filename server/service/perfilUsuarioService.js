const perfilUsuarioData = require('../data/perfilUsuarioData');

exports.getPerfilUsuario = () => {
    return perfilUsuarioData.getPerfilUsuario();
}

exports.getPerfilUsuarioById = (id) => {
    return perfilUsuarioData.getPerfilUsuarioById(id);
}

exports.createPerfilUsuario = (perfilUsuario) => {
    return perfilUsuarioData.createPerfilUsuario(perfilUsuario);
}

exports.updatePerfilUsuario = (id_perfil_usuario, perfilUsuario) => {
    return perfilUsuarioData.updatePerfilUsuario(id_perfil_usuario, perfilUsuario);
}