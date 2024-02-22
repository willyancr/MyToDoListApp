import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useAddTask from '@/useAddTask';

const schema = yup.object({
  name: yup.string().min(3, 'Minimo de 3 caracteres'),
});

const FormsCreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [time, setTime] = React.useState('');
  const { addTask } = useAddTask();

  function handleCreateTask() {
    if (!name || !time || !description) return;
    addTask(name, time, description);
    setName('');
    setTime('');
    setDescription('');
  }
  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex flex-col  pt-4 "
    >
      <div className="space-y-2 pb-4">
        <Input
          {...register('name')}
          className="border-projeto-CinzaClaro outline-none "
          placeholder="Nome da Tarefa"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="text-red-500 text-sm m-0">{errors.name?.message}</span>
        <Input
          {...register('time')}
          className="border-projeto-CinzaClaro outline-none"
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Textarea
          {...register('description')}
          className="border-projeto-CinzaClaro outline-none "
          placeholder="Descrição da Tarefa..."
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="bg-projeto-Roxo text-white hover:bg-projeto-RoxoClaro py-8"
      >
        <span className="text-xl">Criar Tarefa</span>
      </Button>
    </form>
  );
};

export default FormsCreateTask;
