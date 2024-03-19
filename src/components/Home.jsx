import React from 'react';
import Header from './Header';
import MyTasks from './MyTasks';

const Home = () => {
  return (
    <div className=''>
      <Header className="fixed w-full z-50 top-0" />
      <main className="min-h-screen mt-[160px]">
        <MyTasks />
      </main>
    </div>
  );
};

export default Home;
