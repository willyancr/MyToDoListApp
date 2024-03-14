import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTask } from '../TaskContext';

const ModalCards = ({ selectedTask, open, setOpenModal }) => {
  const { removeTask, doneTask } = useTask();

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleDoneTask() {
    doneTask(selectedTask.id);
    handleCloseModal();
  }
  function handleRemoveTask() {
    removeTask(selectedTask.id);
    handleCloseModal();
  }

  return (
    <>
      {!selectedTask.isCompleted && (
        <Dialog open={open} onOpenChange={setOpenModal}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="max-w-[325px] rounded-md">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-xl">{selectedTask.name}</DialogTitle>
              <DialogDescription className="text-base break-words max-w-[280px]">
                {selectedTask.description}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-3">
              <Button
                className="bg-projeto-Roxo/90 hover:bg-projeto-Roxo w-1/2 outline-none"
                onClick={handleDoneTask}
              >
                Confirmar
              </Button>
              <Button
                variant="outline"
                className=" w-1/2 outline-none"
                onClick={handleRemoveTask}
              >
                Remover
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ModalCards;
