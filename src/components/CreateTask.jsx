import React from 'react';
import { Card, CardContent } from './ui/card';
import { CircleUserRound, Home } from 'lucide-react';
import Data from './Data';
import { Link } from 'react-router-dom';
import ChooseActivity from './ChooseActivity';

const CreateTask = () => {
  return (
    <div>
      <Card className="border-none">
        <CardContent className="h-auto pt-8">
          <div className="flex items-center justify-between pb-8">
            <Link to="/">
              <Home className="text-projeto-CinzaEscuro" />
            </Link>
            <p className="text-projeto-CinzaEscuro font-bold text-xl">
              Criar Tarefa
            </p>
            <CircleUserRound className="text-projeto-CinzaEscuro" />
          </div>
        </CardContent>
      </Card>
      <Data />
      <ChooseActivity />
    </div>
  );
};

export default CreateTask;
