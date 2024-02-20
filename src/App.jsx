import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import Calender from './components/Calender';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criartarefa" element={<CreateTask />} />
        <Route path="/criartarefa/calendario" element={<Calender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
