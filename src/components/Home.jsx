import React from 'react'
import Header from './components/Header';
import Data from './components/Data';
import MyTasks from './components/MyTasks';

const Home = () => {
  return (
    <div>
      <Header />
      <Data />
      <MyTasks />
    </div>
  )
}

export default Home