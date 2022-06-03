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

router.post('/situacaoatividade', async function(req, res) {
    situacaoAtividadeService.createSituacaoAtividade(req.body);
    res.json({
        "status": 200,
        "message": "Situação de atividade criada com sucesso"
    });
});

router.put('/situacaoatividade/:id', async function(req, res) {
    const { id } = req.params;
    situacaoAtividadeService.updateSituacaoAtividade(id, req.body)
    res.json({
        "status": 200,
        "message": "Situação de atividade atualizada com sucesso"
    });
})

module.exports = router;