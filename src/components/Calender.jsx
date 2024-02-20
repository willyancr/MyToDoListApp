import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
        <Calendar onChange={onChange} value={value}  />
      </main>
    </>
  );
};

export default Calender;
