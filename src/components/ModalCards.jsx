import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTask } from '../TaskContext';

const ModalCards = ({ selectedTask, open, onOpenChange }) => {
  const { removeTask, doneTask } = useTask();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="max-w-[325px] rounded-md">
        <DialogHeader className="text-left">
          <DialogTitle>{selectedTask.name}</DialogTitle>
          <DialogDescription>{selectedTask.description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-3">
          <Button
            className="bg-green-700/70 w-1/2"
            type="submit"
            onClick={() => doneTask(selectedTask.id)}
          >
            Confirmar
          </Button>
          <Button
            className="bg-red-700/70 w-1/2"
            type="submit"
            onClick={() => removeTask(selectedTask.id)}
          >
            Remover
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCards;
