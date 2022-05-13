const perfilUsuarioData = require('../data/perfilUsuarioData');

exports.getPerfilUsuario = () => {
    return perfilUsuarioData.getPerfilUsuario();
}

exports.getPerfilUsuarioById = (id) => {
    return perfilUsuarioData.getPerfilUsuarioById(id);
}