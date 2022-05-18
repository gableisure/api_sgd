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

module.exports = router;

