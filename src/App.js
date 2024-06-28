// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import JobPreview from './components/JobPreview';
import Messages from './components/Messages';
import Payments from './components/Payments';

const App = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <Router>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/jobs" element={<JobPreview />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/" element={<JobPreview />} />
      </Routes>
    </Router>
  );
};

export default App;
