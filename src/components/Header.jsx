import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useTask } from '../TaskContext';
import SvgComponent from '@/image/Waves-header';
import { Home, CircleUserRound } from 'lucide-react';

const Header = () => {
  const { tasks } = useTask();

  const todayTasks = (tasks) => {
    if (tasks.length === 0) {
      return `Sem Tarefa`;
    } else if (tasks.length === 1) {
      return `${tasks.length} Tarefa`;
    }
    return `${tasks.length} Tarefas`;
  };
  return (
    <div className="fixed w-full z-50 top-0 ">
      <div className="relative ">
        <SvgComponent />
      </div>
      <div className="absolute w-full top-0 p-5 text-projeto-CinzaEscuro">
        <div className="flex items-center justify-between pb-8">
          <Home size={28} />
          <p className="text-2xl logo ">My ToDo List</p>
          <CircleUserRound size={28} />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-2xl font-bold">Hoje</p>
            <p className="text-xs">{todayTasks(tasks)}</p>
          </div>
          <Link to="/atividade">
            <Button className="bg-white text-projeto-Roxo hover:bg-white ">
              Nova tarefa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
