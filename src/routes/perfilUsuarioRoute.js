const express = require('express');
const router = express.Router();
const perfilUsuarioService = require('../service/perfilUsuarioService');

router.get('/perfis-usuarios', async function(req, res) {
    const perfisUsuario = await perfilUsuarioService.getPerfilUsuario();
    res.json(perfisUsuario);
});

router.get('/perfis-usuarios/:id', async function(req, res) {
    const { id } = req.params;
    const perfilUsuario = await perfilUsuarioService.getPerfilUsuarioById(id);
    res.json(perfilUsuario[0]);
});

router.post('/perfis-usuarios', async function(req, res) {
    perfilUsuarioService.createPerfilUsuario(req.body);
    res.json({
        "status": 200,
        "message": "Perfil usuário criado com sucesso"
    });
});

router.put('/perfis-usuarios/:id', async function(req, res) {
    const { id } = req.params;
    perfilUsuarioService.updatePerfilUsuario(id, req.body);
    res.json({
        "status": 200,
        "message": "Perfil usuário atualizado com sucesso"
    });
});

module.exports = router;