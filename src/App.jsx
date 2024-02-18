import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criartarefa" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
