import React from 'react';
import { Card, CardHeader } from './ui/card';
import { CircleUserRound, ListChecks } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useTask } from '../TaskContext';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import SvgComponent from '@/image/Waves-header';

const Header = () => {
  const { tasks } = useTask();

  const date = new Date();
  const dateFormated = format(date, `dd 'de' MMMM`, {
    locale: ptBR,
  });

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
      <div className="absolute w-full top-0 p-4">
        <div className="flex items-center justify-between pb-8">
          <ListChecks size={28} />
          <p className="text-xl">{dateFormated}</p>
          <CircleUserRound size={28} />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-2xl">Hoje</p>
            <p className="text-xs">{todayTasks(tasks)}</p>
          </div>
          <Link to="/atividade">
            <Button className="bg-white text-projeto-Roxo hover:bg-white">
              Nova tarefa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
