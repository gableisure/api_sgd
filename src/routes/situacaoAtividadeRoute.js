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
    const situacaoAtividade = {
        ds_situacao_atividade: req.body.ds_situacao_atividade
    }
    situacaoAtividadeService.createSituacaoAtividade(situacaoAtividade);
    res.json({
        "status": 200,
        "message": "Situação de atividade criada com sucesso"
    });
});

router.put('/situacaoatividade/:id', async function(req, res) {
    const { id } = req.params;
    const situacaoAtividade = {
        ds_situacao_atividade: req.body.ds_situacao_atividade,
        dt_fim: req.body.dt_fim
    }
    situacaoAtividadeService.updateSituacaoAtividade(id, situacaoAtividade)
    res.json({
        "status": 200,
        "message": "Situação de atividade atualizada com sucesso"
    });
})

module.exports = router;