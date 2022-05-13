const express = require('express');
const router = express.Router();
const situacaoTarefaService = require('../service/situacaoTarefaService');

router.get('/situacaotarefa', async function(req, res) {
    const situacoesTarefas = await situacaoTarefaService.getSituacaoTarefa();
    res.json(situacoesTarefas);
});

router.get('/situacaotarefa/:id', async function(req, res) {
    const { id } = req.params;
    const situacaoTarefa = await situacaoTarefaService.getSituacaoTarefaById(id);
    res.json(situacaoTarefa);
});

module.exports = router;