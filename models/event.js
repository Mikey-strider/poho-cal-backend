const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventTime: {
        type: Number,
        date: Number,
        time: Number,
    },

})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;