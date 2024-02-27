import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [activitySelected, setActivitySelected] = React.useState(null);
  const navigate = useNavigate();

  const addTask = (name, time, description, calendar) => {
    setTasks((prevTasks) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name,
        time,
        description,
        calendar,
      };
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  React.useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const removeTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  const handleActivity = (activity) => {
    setActivitySelected(activity);
    navigate('/atividade/criartarefa');
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, activitySelected, handleActivity }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export const useTask = () => {
  return React.useContext(TaskContext);
};
