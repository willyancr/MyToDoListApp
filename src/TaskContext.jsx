import React from 'react';

const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (name, time, description) => {
    setTasks((prevTasks) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name,
        time,
        description,
      };
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    });
  };

  React.useEffect(() => {
    const loadTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(loadTasks);
  }, []);

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
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
