import React from 'react';
import { ArrowLeft, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import FormsCreateTask from './FormsCreateTask';
import SvgWaves from '@/image/Waves';

const CreateTask = () => {
  return (
    <>
      <header className="fixed w-full z-50 top-0 text-projeto-CinzaEscuro desktop">
        <div className="relative">
          <SvgWaves />
        </div>
        <div className="flex items-center justify-between absolute w-full top-0 p-5 py-9">
          <Link to="/atividade">
            <ArrowLeft size={28} />
          </Link>
          <p className="font-semibold text-xl">Criar Tarefa</p>
          <CircleUserRound size={28} />
        </div>
      </header>
      <main className="min-h-screen mt-[110px] py-4 px-5">
        <FormsCreateTask />
      </main>
    </>
  );
};

export default CreateTask;
