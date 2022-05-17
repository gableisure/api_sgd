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
    tedService.createTed(req.body.ds_ted);
    res.send(req.body)
});

router.put('/ted/:id', (req, res) => {
    const { id } = req.params;
    tedService.updateTed(id, req.body.ds_ted)
    res.json({ "ds_ted":  req.body.ds_ted })
});

router.delete('/ted/:id', (req, res) => {
    const { id } = req.params;
    tedService.deleteTed(id)
    return res.json({
        "statusCode": 200,
        "message": "TED deletado com sucesso"
    })
});

module.exports = router;