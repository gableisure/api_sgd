const express = require('express');
const router = express.Router();
const motivoBloqueioService = require('../service/motivoBloqueioService');

router.get('/motivos-bloqueio', async function(req, res) {
    const motivosBloqueio = await motivoBloqueioService.getMotivoBloqueio();
    res.json(motivosBloqueio);
});

router.get('/motivos-bloqueio/:id', async function(req, res) {
    const { id } = req.params;
    const motivoBloqueio = await motivoBloqueioService.getMotivoBloqueioById(id);
    res.json(motivoBloqueio[0]);
});

router.post('/motivos-bloqueio', async function(req, res) {
    motivoBloqueioService.createMotivoBloqueio(req.body);
    res.json({
        "status": 200,
        "message": "Motivo bloqueio criado com sucesso"
    });
});

router.put('/motivos-bloqueio/:id', async function(req, res) {
    const { id } = req.params;
    motivoBloqueioService.updateMotivoBloqueio(id, req.body);
    res.json({
        "status": 200,
        "message": "Motivo bloqueio atualizado com sucesso"
    });
});

module.exports = router;