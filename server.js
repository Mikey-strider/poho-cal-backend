const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const cors = require('cors');

const eventRouter = require('./controllers/events.js');

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

// Routes go here

app.use('/events', eventRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
