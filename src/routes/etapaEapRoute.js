const express = require('express');
const router = express.Router();
const etapaEapService = require('../service/etapaEapService');

router.get('/etapas-eap', async function(req, res) {
    const etapasEap = await etapaEapService.getEtapaEap();
    res.json(etapasEap);
});

router.get('/etapas-eap/:id', async function(req, res) {
    const { id } = req.params;
    const etapaEap = await etapaEapService.getEtapaEapById(id);
    res.json(etapaEap[0]);
});

router.post('/etapas-eap', async function(req, res) {
    etapaEapService.createEtapaEap(req.body);
    res.json({
        "status": 200,
        "message": "Etapa eap criada com sucesso"
    });
});

router.put('/etapas-eap/:id', async function(req, res) {
    const { id } = req.params;
    etapaEapService.updateEtapaEap(id, req.body);
    res.json({
        "status": 200,
        "message": "Etapa eap atualizada com sucesso"
    });
});

module.exports = router;