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

router.post('/usuario', async function(req, res) {
    const usuario = {
        nm_usuario: req.body.nm_usuario,
        nr_cpf: req.body.nr_cpf,
        id_perfil_usuario: req.body.id_perfil_usuario,
        id_ted: req.body.id_ted,
        tx_senha_acesso: req.body.tx_senha_acesso
    }
    usuarioService.createUsuario(usuario);
    res.json({
        "status": 200,
        "message": "Usuário criado com sucesso"
    });
});


router.put('/usuario/:id', async function(req, res) {
    const { id } = req.params
    const usuario = {
        nm_usuario: req.body.nm_usuario,
        nr_cpf: req.body.nr_cpf,
        id_perfil_usuario: req.body.id_perfil_usuario,
        id_motivo_bloqueio: req.body.id_motivo_bloqueio,
        id_ted: req.body.id_ted,
        tx_senha_acesso: req.body.tx_senha_acesso,
        dt_fim_cadastro: req.body.dt_fim_cadastro
    }
    usuarioService.updateUsuario(id, usuario);
    console.log(usuario);
    res.json({
        "status": 200,
        "message": "Usuário atualizado com sucesso"
    });
});

module.exports = router;

