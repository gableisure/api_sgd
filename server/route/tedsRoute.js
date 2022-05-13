const express = require('express');
const router = express.Router();
const tedsService = require('../service/tedsService');

router.get('/teds', async (req, res) => {
    const teds = await tedsService.getTeds();
    res.json(teds);
});

router.get('/teds/teddetails/:id', async (req, res) => {
    const { id } = req.params;
    const tedInfo = await tedsService.getTedDetailsById(id);
    res.json(tedInfo);
});

router.get('/teds/:id', async (req, res) => {
    const { id } = req.params;
    const ted = await tedsService.getTedById(id);
    res.json(ted[0]);
});

router.post('/teds', async (req, res) => {
    tedsService.createTed(req.body.ds_ted);
    res.send(req.body)
});

router.put('/teds/:id', (req, res) => {
    const { id } = req.params;
    tedsService.updateTed(id, req.body.ds_ted)
    res.json({ "ds_ted":  req.body.ds_ted })
});

router.delete('/teds/:id', (req, res) => {
    const { id } = req.params;
    tedsService.deleteTed(id)
    return res.json({
        "statusCode": 200,
        "message": "TED deletado com sucesso"
    })
});

module.exports = router;