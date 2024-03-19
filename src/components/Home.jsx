import React from 'react';
import Header from './Header';
import MyTasks from './MyTasks';
import FilterCards from './FilterCards';

const Home = () => {
  return (
    <div>
      <Header className="fixed w-full z-50 top-0" />
      <main className="min-h-screen mt-[160px]">
        {/* <FilterCards /> */}
        <MyTasks />
      </main>
    </div>
  );
};

export default Home;
