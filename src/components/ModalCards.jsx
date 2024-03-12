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

const ModalCards = ({ selectedTask, open, onOpenChange }) => {
  const { removeTask, doneTask } = useTask();

  function handleCloseModal() {
    onOpenChange(false);
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
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="max-w-[325px] rounded-md">
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl">{selectedTask.name}</DialogTitle>
              <DialogDescription className="text-base">
                {selectedTask.description}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-3">
              <Button
                className="bg-green-700/60 w-1/2"
                onClick={handleDoneTask}
              >
                Confirmar
              </Button>
              <Button
                className="bg-red-700/60 w-1/2 outline-none"
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
