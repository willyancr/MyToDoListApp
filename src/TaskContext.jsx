import React from 'react';

const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

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
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTask = () => {
  return React.useContext(TaskContext);
};
