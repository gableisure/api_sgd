const express = require('express');
const router = express.Router();
const tarefaService = require('../service/tarefaService');

router.get('/tarefa', async function(req, res) {
    const tarefas = await tarefaService.getTarefas()
    res.json(tarefas)
});

router.get('/tarefa/:id', async function(req, res) {
    const { id } = req.params;
    const tarefa = await tarefaService.getTarefaById(id)
    res.json(tarefa[0])
});

router.put('/tarefa/situacao/:id', function(req, res) {
    const { id } = req.params;
    tarefaService.updateSituacaoTarefa(id, req.body.id_situacao_tarefa);
    res.json(req.body);
});

module.exports = router;

