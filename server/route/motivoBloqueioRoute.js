const express = require('express');
const router = express.Router();
const motivoBloqueioService = require('../service/motivoBloqueioService');

router.get('/motivobloqueio', async function(req, res) {
    const motivosBloqueio = await motivoBloqueioService.getMotivoBloqueio();
    res.json(motivosBloqueio);
});

router.get('/motivobloqueio/:id', async function(req, res) {
    const { id } = req.params;
    const motivoBloqueio = await motivoBloqueioService.getMotivoBloqueioById(id);
    res.json(motivoBloqueio[0]);
});

router.post('/motivobloqueio', async function(req, res) {
    const motivoBloqueio = {
        tx_motivo_bloqueio: req.body.tx_motivo_bloqueio,
        dt_inicio: req.body.dt_inicio
    }
    motivoBloqueioService.createMotivoBloqueio(motivoBloqueio);
    res.json(motivoBloqueio);
});

router.put('/motivobloqueio/:id', async function(req, res) {
    const { id } = req.params;
    const motivoBloqueio = {
        tx_motivo_bloqueio: req.body.tx_motivo_bloqueio,
        dt_inicio: req.body.dt_inicio,
        dt_fim: req.body.dt_fim
    }
    motivoBloqueioService.updateMotivoBloqueio(id, motivoBloqueio);
    res.json({
        "status": 200,
        "message": "Motivo bloqueio atualizado com sucesso"
    });
});

module.exports = router;