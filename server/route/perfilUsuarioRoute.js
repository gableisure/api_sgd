const express = require('express');
const router = express.Router();
const perfilUsuarioService = require('../service/perfilUsuarioService');

router.get('/perfilusuario', async function(req, res) {
    const perfisUsuario = await perfilUsuarioService.getPerfilUsuario();
    res.json(perfisUsuario);
});

router.get('/perfilusuario/:id', async function(req, res) {
    const { id } = req.params;
    const perfilUsuario = await perfilUsuarioService.getPerfilUsuarioById(id);
    res.json(perfilUsuario[0]);
});

router.post('/perfilusuario', async function(req, res) {
    const perfilUsuario = {
        ds_perfil_usuario: req.body.ds_perfil_usuario,
        dt_inicio_vigencia: req.body.dt_inicio_vigencia
    }
    perfilUsuarioService.createPerfilUsuario(perfilUsuario);
    res.json(perfilUsuario);
});

router.put('/perfilusuario/:id', async function(req, res) {
    const { id } = req.params;
    const perfilUsuario = {
        ds_perfil_usuario: req.body.ds_perfil_usuario,
        dt_inicio_vigencia: req.body.dt_inicio_vigencia,
        dt_fim_vigencia: req.body.dt_fim_vigencia
    }
    perfilUsuarioService.updatePerfilUsuario(id, perfilUsuario);
    res.json({
        "status": 200,
        "message": "Perfil do usuário atualizado com sucesso"
    });
});

module.exports = router;