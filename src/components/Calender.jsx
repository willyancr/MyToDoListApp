import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Calender = () => {
  const [value, onChange] = React.useState(new Date());
  return (
    <>
      <header>
        <Card className="border-none ">
          <CardContent className="bg-projeto-Roxo h-auto pt-8">
            <div className="flex items-center text-white justify-between pb-8">
              <Link to="/criartarefa">
                <ArrowLeft size={28} />
              </Link>
              <p className="font-semibold text-xl">Criar Tarefa</p>
              <CircleUserRound size={28} />
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="py-4 px-5">
        <Calendar onChange={onChange} value={value} className="rounded-md" />
        <form className="flex flex-col gap-4 pt-4">
          <Input
            placeholder="Nome da Tarefa"
            className="border-projeto-CinzaClaro outline-none "
          />
          <Textarea
            placeholder="Descrição da Tarefa..."
            className="border-projeto-CinzaClaro outline-none "
          />
          <Button className="bg-projeto-Roxo text-white hover:bg-projeto-Rosa">
            <span className="text-xl">Criar Tarefa</span>
          </Button>
        </form>
      </main>
    </>
  );
};

export default Calender;
