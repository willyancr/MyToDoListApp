import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check, Clock } from 'lucide-react';
import { useActivitys } from './hooks/useActivitys';
import CalenderPicker from './CalenderPicker';
import { useTask } from '../TaskContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

  const [calendar, setCalendar] = React.useState(new Date());
  const [name, setName] = React.useState('');
  const [time, setTime] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleCreateTask() {
    if (!name || !time || !description || !calendar) return;
    addTask(name, time, description, calendar, activitySelected.name);
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
      <div className="space-y-3 pb-4 relative">
        {activitySelected && (
          <Card
            className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-4 mb-2 static"
            key={activitySelected.name}
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
                  <Check />
                </div>
              </div>
            </div>
          </Card>
        )}
        <CalenderPicker
          className="border-projeto-CinzaClaro/50 "
          value={calendar}
          onChange={(e) => setCalendar(e.target.value)}
        />
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
          className="border-projeto-CinzaClaro/50 outline-none py-6 "
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Digite a hora da tarefa..."
        />
        <Clock className="text-projeto-CinzaClaro/75 absolute top-[125px] right-5" />
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
        className="bg-projeto-Roxo text-white text-xl hover:bg-projeto-RoxoClaro py-6"
      >
        Criar Tarefa
      </Button>
    </form>
  );
};

export default FormsCreateTask;
