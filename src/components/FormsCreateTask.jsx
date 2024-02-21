import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Nome obrigatório').min(3, 'Nome muito curto'),
  description: yup.string(),
});
const FormsCreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function handleCreateTask() {}
  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex flex-col  pt-4 "
    >
      <div className="space-y-2 pb-4">
        <Input
          className="border-projeto-CinzaClaro outline-none "
          placeholder="Nome da Tarefa"
          id="name"
          {...register('name')}
        />
        <span className="text-red-500 text-sm m-0">{errors.name?.message}</span>
        <Input
          className="border-projeto-CinzaClaro outline-none"
          type="time"
          onChange={handleCreateTask}
          id="time"
          {...register('time')}
        />
        <Textarea
          className="border-projeto-CinzaClaro outline-none "
          placeholder="Descrição da Tarefa..."
          id="description"
          {...register('description')}
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
