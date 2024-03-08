import React from 'react';
import Header from './Header';
import Data from './Data';
import MyTasks from './MyTasks';

const Home = () => {
  return (
    <div>
      <Header className="fixed w-full z-50 top-0" />
      <main className="min-h-screen mt-[160px]">
        <Data />
        <MyTasks />
      </main>
    </div>
  );
};

export default Home;
