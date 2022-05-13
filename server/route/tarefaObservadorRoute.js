const express = require('express');
const router = express.Router();
const tarefaObservadorService = require('../service/tarefaObservadorService');

router.get('/tarefaobservador', async function(req, res) {
    const tarefasObservador = await tarefaObservadorService.getTarefasObservador();
    res.json(tarefasObservador);
});

router.get('/tarefaobservador/:id', async function(req, res) {
    const { id } = req.params;
    const tarefaObservador = await tarefaObservadorService.getTarefaObservadorById(id);
    res.json(tarefaObservador);
});

module.exports = router;