import React from 'react';

const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([
    {
      id: '01',
      name: 'Willyan',
      time: '22:00',
      description: 'teste',
    },
  ]);
  const addTask = (name, time, description) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * 1000),
        name,
        time,
        description,
      },
    ]);
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTask = () => {
  return React.useContext(TaskContext);
};
