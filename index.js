const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/scheduler', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
});

const Event = mongoose.model('Event', EventSchema);

app.use(bodyParser.json());
app.use(cors());

// Get events
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Create an event
app.post('/api/events', async (req, res) => {
  const { title, date } = req.body;
  const event = new Event({ title, date });
  await event.save();
  res.status(201).send(event);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
