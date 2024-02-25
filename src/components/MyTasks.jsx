import React from 'react';
import { Card } from './ui/card';
import { useTask } from '../TaskContext';
import { Check, Search, X } from 'lucide-react';
import { Button } from './ui/button';

const MyTasks = () => {
  const { tasks, removeTask } = useTask();

  return (
    <div className="py-4 px-5">
      <h2 className="text-xl font-bold">Minhas Tarefas</h2>
      <main className="pt-4">
        {tasks.length === 0 ? (
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
                <div className="text-center ">
                  <span className="text-sm ">{task.time}</span>
                </div>
                <div className="truncate max-w-[170px] break-words">
                  <h3 className="text-xl font-bold ">{task.name}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="text-right mr-1">
                  <Button className="px-2 mr-1 bg-green-700/75 size-7">
                    <Check />
                  </Button>
                  <Button
                    onClick={() => removeTask(task.id)}
                    className="px-2 py-1 bg-red-700/75 size-7"
                  >
                    <X />
                  </Button>
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
