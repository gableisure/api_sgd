const express = require('express');
const router = express.Router();
const tedService = require('../service/tedService');

router.get('/ted', async (req, res) => {
    const teds = await tedService.getTed();
    res.json(teds);
});

router.get('/ted/teddetails/:id', async (req, res) => {
    const { id } = req.params;
    const tedInfo = await tedService.getTedDetailsById(id);
    res.json(tedInfo);
});

router.get('/ted/:id', async (req, res) => {
    const { id } = req.params;
    const ted = await tedService.getTedById(id);
    res.json(ted[0]);
});

router.post('/ted', async (req, res) => {
    const ted = {
        ds_ted: req.body.ds_ted,
        sg_ted: req.body.sg_ted
    }
    tedService.createTed(ted);
    res.json({
        "status": 200,
        "message": "TED criada com sucesso"
    });
});

router.put('/ted/:id', (req, res) => {
    const { id } = req.params;
    const ted = {
        ds_ted: req.body.ds_ted,
        sg_ted: req.body.sg_ted,
        dt_fim: req.body.dt_fim
    }
    tedService.updateTed(id, ted);
    res.json({
        "status": 200,
        "message": "TED atualizada com sucesso"
    });
});

module.exports = router;