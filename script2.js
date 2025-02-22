import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events').then((response) => setEvents(response.data));
  }, []);

  return (
    <div>
      <h1>My Schedule</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
