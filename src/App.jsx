import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseActivity from './components/ChooseActivity';
import CreateTask from './components/CreateTask';
import { TaskProvider } from './TaskContext';
import Footer from './components/Footer';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="desktop">
      <BrowserRouter>
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atividade" element={<ChooseActivity />} />
            <Route path="/atividade/criartarefa" element={<CreateTask />} />
            <Route path="/estatisticas" element={<Statistics />} />
          </Routes>
          <Footer />
        </TaskProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
