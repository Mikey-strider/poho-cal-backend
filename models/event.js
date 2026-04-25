const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    producer: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    eventTime: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
    },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;