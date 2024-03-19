import React from 'react';
import { Info, CheckCircleIcon } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from '@/components/ui/badge';
import { useTask } from '../TaskContext';
import ModalCards from './ModalCards';
import FilterCards from './FilterCards';

const CardsMyTasks = () => {
  const { tasksSorted } = useTask();
  const [selectedTask, setSelectedTask] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  function handleClickModal(task) {
    setSelectedTask(task);
    setOpenModal(true);
  }

  return (
    <>
      {selectedTask && (
        <ModalCards
          selectedTask={selectedTask}
          open={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <FilterCards
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <h2 className="pb-2 text-xl font-bold">Minhas Tarefas</h2>
      {tasksSorted
        .filter((task) =>
          task.name.toLowerCase().includes(search.toLowerCase()),
        )
        .filter((task) =>
          filter === 'all'
            ? true
            : filter === 'completas'
            ? task.isCompleted
            : !task.isCompleted,
        )
        .map((task) => (
          <Card
            onClick={() => handleClickModal(task)}
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
              <div className="truncate max-w-[190px] break-words pl-1 ">
                <h3 className="text-lg font-bold ">{task.name}</h3>
                <p className="text-xs text-projeto-CinzaClaro truncate">
                  {task.description}
                </p>
              </div>
              <div className="flex justify-end mr-2 text-projeto-RoxoClaro/70">
                {!task.isCompleted ? (
                  <Info size={28} />
                ) : (
                  <div className="flex flex-col font-bold text-green-700/60">
                    <CheckCircleIcon size={26} />
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
    </>
  );
};

export default CardsMyTasks;
