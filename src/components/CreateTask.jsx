import React from 'react';
import { Card, CardContent } from './ui/card';
import { CircleUserRound, Home } from 'lucide-react';
import Data from './Data';
import { Link } from 'react-router-dom';
import ChooseActivity from './ChooseActivity';

const CreateTask = () => {
  return (
    <>
      <header>
        <Card className="border-none ">
          <CardContent className="bg-projeto-Roxo h-auto pt-8">
            <div className="flex items-center text-white justify-between pb-8">
              <Link to="/">
                <Home size={28} />
              </Link>
              <p className="font-semibold text-xl">Criar Tarefa</p>
              <CircleUserRound size={28} />
            </div>
          </CardContent>
        </Card>
      </header>
      <Data />
      <main>
        <ChooseActivity />
      </main>
    </>
  );
};

export default CreateTask;
