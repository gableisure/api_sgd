const express = require('express');
const router = express.Router();
const situacaoAtividadeService = require('../service/situacaoAtividadeService');

router.get('/situacaoatividade', async function(req, res) {
    const situacoesAtividades = await situacaoAtividadeService.getSituacaoAtividade();
    res.json(situacoesAtividades);
});

router.get('/situacaoatividade/:id', async function(req, res) {
    const { id } = req.params;
    const situacaoAtividade = await situacaoAtividadeService.getSituacaoAtividadeById(id);
    res.json(situacaoAtividade[0]);
});

module.exports = router;