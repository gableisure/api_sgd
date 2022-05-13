const express = require('express');
const router = express.Router();
const atividadeBacklogService = require('../service/atividadeBacklogService');

router.get('/atividadebacklog', async function(req, res) {
    const atividadesBacklog = await atividadeBacklogService.getAtividadesBacklog();
    res.json(atividadesBacklog);
});

router.get('/atividadebacklog/:id', async function(req, res) {
    const { id } = req.params;
    const atividadeBacklog = await atividadeBacklogService.getAtividadeBacklogById(id);
    res.json(atividadeBacklog);
});

module.exports = router;