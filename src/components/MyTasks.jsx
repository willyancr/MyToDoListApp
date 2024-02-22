import React from 'react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { useTask } from '../TaskContext';
import { Search } from 'lucide-react';

const MyTasks = () => {
  const { tasks } = useTask();

  return (
    <div className="py-4 px-5">
      <h2 className="text-xl font-bold">
        Minhas Tarefas <span>({tasks?.length})</span>
      </h2>
      <main className="pt-4">
        {tasks?.length === 0 ? (
          <p className="text-sm flex items-center gap-2 italic">
            <Search size={16} />
            Nenhuma tarefa cadastrada...
          </p>
        ) : (
          tasks.map((task) => (
            <Card
              key={task.id}
              className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-2"
            >
              <div className="grid grid-cols-[60px_auto_1fr] items-center ">
                <div className="text-center">
                  <span className="text-sm ">{task.time}</span>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">{task.name}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="text-right mr-1">
                  <Checkbox className="border-projeto-Roxo h-5 w-5" />
                </div>
              </div>
            </Card>
          ))
        )}
      </main>
    </div>
  );
};

export default MyTasks;
