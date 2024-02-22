import React from 'react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { useTask } from '../TaskContext';
const MyTasks = () => {
  const { tasks } = useTask();
  return (
    <div className="py-4 px-5">
      <h2 className="text-xl font-bold">Minhas Tarefas</h2>
      <main className="pt-4">
        {tasks.map((task) => (
          <Card
            key={task.id}
            className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2"
          >
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <span className="text-sm ">{task.time}</span>
              </div>
              <div className="flex-1 ">
                <h3 className="text-xl font-bold">{task.name}</h3>
                <p>{task.description}</p>
              </div>
              <div className="flex-1 text-right mr-1">
                <Checkbox className="border-projeto-Roxo h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default MyTasks;
