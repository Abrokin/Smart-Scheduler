import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
