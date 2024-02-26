import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateTask from './components/CreateTask';
import Calender from './components/Calender';
import { TaskProvider } from './TaskContext';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/criartarefa" element={<CreateTask />} />
            <Route path="/criartarefa/calendario" element={<Calender />} />
          </Routes>
          <Footer />
        </TaskProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
