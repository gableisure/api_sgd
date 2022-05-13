const express = require('express');
const router = express.Router();
const etapaEapService = require('../service/etapaEapService');

router.get('/etapaeap', async function(req, res) {
    const etapasEap = await etapaEapService.getEtapaEap();
    res.json(etapasEap);
});

router.get('/etapaeap/:id', async function(req, res) {
    const { id } = req.params;
    const etapaEap = await etapaEapService.getEtapaEapById(id);
    res.json(etapaEap[0]);
});

module.exports = router;