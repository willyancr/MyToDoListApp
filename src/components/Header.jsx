import React from 'react';
import { Card, CardHeader } from './ui/card';
import { CircleUserRound, ListChecks } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useTask } from '../TaskContext';

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
    <div>
      <Card className="border-none ">
        <CardHeader className="bg-projeto-Roxo h-auto py-8 text-white">
          <div className="flex items-center justify-between pb-8">
            <ListChecks size={28} />
            <p className="text-xl">16 de Fevereiro</p>
            <CircleUserRound size={28} />
          </div>
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-2xl">Hoje</p>
              <p className="text-xs">{todayTasks(tasks)}</p>
            </div>
            <Link to="/criartarefa">
              <Button className="bg-white text-projeto-Roxo hover:bg-white">
                Nova tarefa
              </Button>
            </Link>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Header;
