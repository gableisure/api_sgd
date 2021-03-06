const express = require('express');
const router = express.Router();
const prioridadeAtividadeService = require('../service/prioridadeAtividadeService');

router.get('/prioridadeatividade', async function(req, res) {
    const prioridadesAtividade = await prioridadeAtividadeService.getPrioridadeAtividade();
    res.json(prioridadesAtividade);
});

router.get('/prioridadeatividade/:id', async function(req, res) {
    const { id } = req.params;
    const prioridadeAtividade = await prioridadeAtividadeService.getPrioridadeAtividadeById(id);
    res.json(prioridadeAtividade[0]);
});

router.post('/prioridadeatividade', async function(req, res) {
    const prioridadeAtividade = {
        ds_prioridade_atividade: req.body.ds_prioridade_atividade
    }
    prioridadeAtividadeService.createPrioridadeAtividade(prioridadeAtividade);
    res.json({
        "status": 200,
        "message": "Prioridade da atividade criada com sucesso"
    });
});

router.put('/prioridadeatividade/:id', async function(req, res) {
    const { id } = req.params;
    const prioridadeAtividade = {
        ds_prioridade_atividade: req.body.ds_prioridade_atividade,
        dt_fim: req.body.dt_fim
    }
    prioridadeAtividadeService.updatePrioridadeAtividade(id, prioridadeAtividade);
    res.json({
        "status": 200,
        "message": "Prioridade da atividade atualizada com sucesso"
    });
});

module.exports = router;

