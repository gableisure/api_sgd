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

router.post('/etapaeap', async function(req, res) {
    const etapaEap = {
        ds_etapa: req.body.ds_etapa,
        dt_inicio_vigencia: req.body.dt_inicio_vigencia
    }
    etapaEapService.createEtapaEap(etapaEap);
    res.json(etapaEap);
});

router.put('/etapaeap/:id', async function(req, res) {
    const { id } = req.params;
    const etapaEap = {
        ds_etapa: req.body.ds_etapa,
        dt_inicio_vigencia: req.body.dt_inicio_vigencia,
        dt_fim_vigencia: req.body.dt_fim_vigencia
    }
    etapaEapService.updateEtapaEap(id, etapaEap);
    res.json({
        "status": 200,
        "message": "Etapa eap atualizada com sucesso"
    });
});

module.exports = router;