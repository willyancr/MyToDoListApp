import React from 'react';
import { CircleUserRound, ListChecks } from 'lucide-react';
import CardsChooseActivity from './CardsChooseActivity';
import SvgWaves from '@/image/Waves';

const ChooseActivity = () => {
  return (
    <div>
      <header className="fixed w-full z-50 top-0 text-projeto-CinzaEscuro desktop">
        <div className="relative">
          <SvgWaves />
        </div>
        <div className="flex items-center justify-between absolute w-full top-0 p-5 py-9">
          <ListChecks size={28} />
          <p className="font-semibold text-xl">Atividades</p>
          <CircleUserRound size={28} />
        </div>
      </header>
      <main className="min-h-screen mt-[120px]">
        <h2 className=" pt-4 px-5 text-xl font-bold">Escolha uma atividade</h2>
        <CardsChooseActivity />
      </main>
    </div>
  );
};

export default ChooseActivity;
