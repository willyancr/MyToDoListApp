import React from 'react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';

const MyTasks = () => {
  return (
    <div className="py-4 px-5">
      <h2 className="text-xl font-bold">Minhas Tarefas</h2>
      {Array.from({ length: 10 }).map((_, index) => (
        <main className="pt-4" key={index}>
          <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2">
            <div className="flex items-center">
              <div className="flex-1">
                <span className="text-sm">6:00 - 7:30</span>
              </div>
              <div className="flex-1 ">
                <h3 className="text-xl font-bold">Tarefa 1</h3>
                <p>Descrição</p>
              </div>
              <div className="flex-1 text-right mr-1">
                <Checkbox className="border-projeto-Roxo h-5 w-5" />
              </div>
            </div>
          </Card>
        </main>
      ))}
    </div>
  );
};

export default MyTasks;
