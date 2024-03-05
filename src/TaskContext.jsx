import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [activitySelected, setActivitySelected] = React.useState(null);
  const navigate = useNavigate();

  //Quantidade de tarefas por atividade
  const qtdActivity = (tasksList) => {
    const activitys = tasksList.map((task) => task.activitys);
    const total = activitys.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
    return total;
  };
  //Contagem de tarefas
  const countTasks = (activityName) => {
    const count = qtdActivity(tasks);
    const tasksCount = count[activityName] || 0;
    if (tasksCount === 0) {
      return `Sem Tarefa`;
    } else if (tasksCount === 1) {
      return `${tasksCount} Tarefa`;
    }
    return `${tasksCount} Tarefas`;
  };
  //Adicionar tarefa
  const addTask = (name, time, description, calendar, activitys) => {
    setTasks((prevTasks) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        name,
        time,
        description,
        calendar,
        activitys,
      };
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  //Carregar tarefas
  React.useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);
  //Remover tarefa
  const removeTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  //Selecionar atividade
  const handleActivity = (activity) => {
    setActivitySelected(activity);
    navigate('/atividade/criartarefa');
  };

  return (
    <TaskContext.Provider
      value={{
        qtdActivity,
        countTasks,
        tasks,
        addTask,
        removeTask,
        activitySelected,
        handleActivity,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export const useTask = () => {
  return React.useContext(TaskContext);
};
