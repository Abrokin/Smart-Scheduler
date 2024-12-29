import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/events', { title, date }).then(() => {
      alert('Event created!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Event</h1>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateEvent;
