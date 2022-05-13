const express = require('express');
const router = express.Router();
const perfilUsuarioService = require('../service/perfilUsuarioService');



router.get('/perfilusuario', async function(req, res) {
    const perfisUsuario = await perfilUsuarioService.getPerfilUsuario()
    res.json(perfisUsuario)
});

router.get('/perfilusuario/:id', async function(req, res) {
    const { id } = req.params;
    const perfilUsuario = await perfilUsuarioService.getPerfilUsuarioById(id)
    res.json(perfilUsuario)
});

module.exports = router;