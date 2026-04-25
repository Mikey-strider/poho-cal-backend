const Event = require('../models/event.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdEvent = await Event.create(req.body);
        res.status(201).json(createdEvent);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.find();
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});


module.exports = router;