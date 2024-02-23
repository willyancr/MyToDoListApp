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
      return updatedTasks;
    });
  };

  window.addEventListener('load', loadTasks);
  function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
      setTasks([]);
      console.log('Nenhuma tarefa salva');
    }
  }
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
