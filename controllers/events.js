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

router.get('/:eventId', async (req, res) => {
    try {
        const foundEvent = await Event.findById(req.params.eventId);
        if (!foundEvent) {
            res.status(404);
            throw new Error('Event not found.');
        }
        res.status(200).json(foundEvent);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message})
        } else {
            res.status(500).json({error:error.message});
        }
    } 
});


router.delete('/:eventId', async (req, res) => {
   try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.eventId);
    if (!deletedEvent) {
        res.status(404);
        throw new Error('Event not found.');
    }
    res.status(200).json(foundEvent);
   } catch (error) {
    if (res.statusCode === 404) {
        res.json({error: error.message})
    } else {
        res.status(500).json({error:error.message})
    }
   }
}); 

router.put('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body);
        if (!updatedEvent) {
            res.status(404);
            throw new Error('Event not found.')
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});


module.exports = router;