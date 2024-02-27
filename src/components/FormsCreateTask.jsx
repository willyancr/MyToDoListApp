import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTask } from '../TaskContext';
import Calendar from 'react-calendar';
import { Card } from './ui/card';
import { ChevronDown } from 'lucide-react';
import { useActivitys } from './hooks/useActivitys';

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
  const { addTask, activitySelected } = useTask();
  const { icons } = useActivitys();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [time, setTime] = React.useState('');
  const [calendar, setCalendar] = React.useState(new Date());
  
  function handleCreateTask() {
    if (!name || !time || !description || !calendar) return;
    addTask(name, time, description, calendar);
    setName('');
    setTime('');
    setDescription('');
    setCalendar(new Date());
  }
  return (
    <form
      onSubmit={handleSubmit(handleCreateTask)}
      className="flex flex-col  pt-4 "
    >
      <div className="space-y-3 pb-4">
        <Calendar
          className="rounded-md "
          value={calendar}
          onChange={(e) => setCalendar(e.target.value)}
        />
        {activitySelected && (
          <Card
            key={activitySelected.name}
            className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-4 mb-4 static"
          >
            <div className="grid grid-cols-[60px_auto] items-center gap-1">
              <div className="text-projeto-Roxo justify-self-center">
                {icons[activitySelected.icon]}
              </div>
              <div className="grid grid-cols-2 items-center">
                <div>
                  <h3 className="text-xl font-bold">{activitySelected.name}</h3>
                </div>
                <div className="text-projeto-Roxo justify-self-end ">
                  <ChevronDown size={30} />
                </div>
              </div>
            </div>
          </Card>
        )}

        <Input
          {...register('name')}
          className="border-projeto-CinzaClaro/50 outline-none py-6"
          placeholder="Nome da Tarefa"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="text-red-500 text-sm m-0">{errors.name?.message}</span>
        <Input
          {...register('time')}
          className="border-projeto-CinzaClaro/50 outline-none py-6"
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Textarea
          {...register('description')}
          className="border-projeto-CinzaClaro/50 outline-none "
          placeholder="Descrição da Tarefa..."
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="bg-projeto-Roxo text-white text-xl hover:bg-projeto-RoxoClaro py-8"
      >
        Criar Tarefa
      </Button>
    </form>
  );
};

export default FormsCreateTask;
