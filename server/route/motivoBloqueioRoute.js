const express = require('express');
const router = express.Router();
const motivoBloqueioService = require('../service/motivoBloqueioService');

router.get('/motivobloqueio', async function(req, res) {
    const motivosBloqueio = await motivoBloqueioService.getMotivoBloqueio()
    res.json(motivosBloqueio)
});

router.get('/motivobloqueio/:id', async function(req, res) {
    const { id } = req.params;
    const motivoBloqueio = await motivoBloqueioService.getMotivoBloqueioById(id)
    res.json(motivoBloqueio)
});

module.exports = router;