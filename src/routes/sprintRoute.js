const express = require('express');
const router = express.Router();
const sprintService = require('../service/sprintService');

router.get('/sprint', async function(req, res) {
    const sprints = await sprintService.getSprints()
    res.json(sprints)
});

router.get('/sprint/:id', async function(req, res) {
    const { id } = req.params;
    const sprint = await sprintService.getSprintById(id)
    res.json(sprint)
});

module.exports = router;