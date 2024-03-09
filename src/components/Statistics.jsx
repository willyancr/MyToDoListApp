import React from 'react';
import { CircleUserRound, PieChart } from 'lucide-react';
import SvgWaves from '@/image/Waves';

const Statistics = () => {
  return (
    <>
      <header className="fixed w-full z-50 top-0 text-projeto-CinzaEscuro">
        <div className="relative">
          <SvgWaves />
        </div>
        <div className="flex items-center justify-between absolute w-full top-0 p-5">
          <PieChart size={28} />
          <p className="font-semibold text-xl">Estatísticas</p>
          <CircleUserRound size={28} />
        </div>
      </header>
      <main>

        
      </main>
    </>
  );
};

export default Statistics;
