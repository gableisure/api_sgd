const express = require('express');
const router = express.Router();
const usuarioService = require('../service/usuarioService');

router.get('/usuario', async function(req, res) {
    const usuarios = await usuarioService.getUsuario()
    res.json(usuarios)
});

router.get('/usuario/:id', async function(req, res) {
    const { id } = req.params;
    const usuario = await usuarioService.getUsuarioById(id)
    res.json(usuario)
});

router.get('/usuario/ted/:id', async function(req, res) {
    const { id } = req.params;
    const usuario = await usuarioService.getUsuariosByTed(id)
    res.json(usuario)
});


module.exports = router;

