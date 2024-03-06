import React from 'react';
import { Check, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from '@/components/ui/badge';
import { useTask } from '../TaskContext';

const CardsMyTasks = () => {
  const { removeTask, tasksSorted } = useTask();

  return (
    <>
      {tasksSorted.map((task) => (
        <Card
          key={task.id}
          className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-2"
        >
          <div className="grid grid-cols-[60px_auto_1fr] items-center ">
            <div className="flex items-center flex-col ">
              <span className="text-sm ">{task.time}h</span>
              <Badge className="flex flex-col bg-projeto-RoxoClaro hover:bg-projeto-RoxoClaro font-normal py-0 w-[50px] text-[9px]">
                <span>{task.activitys}</span>
              </Badge>
            </div>
            <div className="truncate max-w-[170px] break-words pl-1">
              <h3 className="text-xl font-bold ">{task.name}</h3>
              <p>{task.description}</p>
            </div>
            <div className="text-right mr-1">
              <Button className="px-2 mr-1 bg-green-700/60 size-7">
                <Check />
              </Button>
              <Button
                onClick={() => removeTask(task.id)}
                className="px-2 py-1 bg-red-700/60 size-7"
              >
                <X />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CardsMyTasks;
