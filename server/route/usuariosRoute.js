const express = require('express');
const router = express.Router();
const usuariosService = require('../service/usuariosService');

router.get('/usuarios', async function(req, res) {
    const usuarios = await usuariosService.getUsuarios()
    res.json(usuarios)
});

router.get('/usuarios/:id', async function(req, res) {
    const { id } = req.params;
    const usuario = await usuariosService.getUsuarioById(id)
    res.json(usuario)
});

router.get('/usuarios/ted/:id', async function(req, res) {
    const { id } = req.params;
    const usuario = await usuariosService.getUsuariosByTed(id)
    res.json(usuario)
});


module.exports = router;

