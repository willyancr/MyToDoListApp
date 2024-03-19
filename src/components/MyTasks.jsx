import React from 'react';
import { Search } from 'lucide-react';
import { useTask } from '../TaskContext';
import CardsMyTasks from './CardsMyTasks';

const MyTasks = () => {
  const { tasks } = useTask();

  return (
    <div className=" px-5">
      <main className="pt-4">
        {tasks.length === 0 ? (
          <p className="text-sm flex items-center gap-2 italic">
            <Search size={16} />
            Nenhuma tarefa cadastrada...
          </p>
        ) : (
          <CardsMyTasks />
        )}
      </main>
    </div>
  );
};

export default MyTasks;
