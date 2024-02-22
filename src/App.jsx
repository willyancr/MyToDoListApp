import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import Calender from './components/Calender';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criartarefa" element={<CreateTask />} />
          <Route path="/criartarefa/calendario" element={<Calender />} />
        </Routes>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
