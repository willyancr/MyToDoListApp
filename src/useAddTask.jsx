import React from 'react';

const useAddTask = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: '01',
      name: 'Willyan',
      time: '22:00',
      description: 'teste',
    },
  ]);
  const addTask = (name, time, description) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      name,
      time,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  return {
    tasks,
    addTask,
  };
};

export default useAddTask;
