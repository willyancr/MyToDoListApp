import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CircleUserRound, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
const Calender = () => {
  return (
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
  );
};

export default Calender;
