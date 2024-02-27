import React from 'react';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import FormsCreateTask from './FormsCreateTask';
const CreateTask = () => {
  return (
    <>
      <header className="fixed w-full z-50 top-0">
        <Card className="border-none ">
          <CardContent className="bg-projeto-Roxo h-auto pt-8">
            <div className="flex items-center text-white justify-between pb-8">
              <Link to="/atividade">
                <ArrowLeft size={28} />
              </Link>
              <p className="font-semibold text-xl">Criar Tarefa</p>
              <CircleUserRound size={28} />
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="min-h-screen mt-[110px] py-4 px-5">
        <FormsCreateTask />
      </main>
    </>
  );
};

export default CreateTask;
