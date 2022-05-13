const express = require('express');
const router = express.Router();
const atividadeEtapaEapService = require('../service/atividadeEtapaEapService');

router.get('/atividadeetapaeap', async function(req, res) {
    const atividadesEtapaEap = await atividadeEtapaEapService.getAtividadesEtapasEap();
    res.json(atividadesEtapaEap);
});

router.get('/atividadeetapaeap/:id', async function(req, res) {
    const { id } = req.params;
    const atividadeEtapaEap = await atividadeEtapaEapService.getAtividadesEtapaEapById(id);
    res.json(atividadeEtapaEap);
});

module.exports = router;