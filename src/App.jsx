import React from 'react';
import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import MyTasks from './components/MyTasks';

function App() {
  return (
    <div>
      <Header />
      <Data />
      <MyTasks />
    </div>
  );
}

export default App;
