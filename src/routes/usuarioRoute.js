const express = require('express');
const router = express.Router();
const usuarioService = require('../service/usuarioService');

router.get('/usuarios', async function(req, res) {
    const usuarios = await usuarioService.getUsuario();
    res.json(usuarios);
});

router.get('/usuarios/:id', async function(req, res) {
    const { id } = req.params;
    const usuario = await usuarioService.getUsuarioById(id);
    res.json(usuario);
});

router.post('/usuarios', async function(req, res) {
    usuarioService.createUsuario(req.body);
    res.json({
        "status": 200,
        "message": "Usuário criado com sucesso"
    });
});


router.put('/usuarios/:id', async function(req, res) {
    const { id } = req.params;
    usuarioService.updateUsuario(id, req.body);
    res.json({
        "status": 200,
        "message": "Usuário atualizado com sucesso"
    });
});

module.exports = router;

