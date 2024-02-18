import React from 'react';
import { Card } from './ui/card';
import { ChevronRight, Dumbbell } from 'lucide-react';

const ChooseActivity = () => {
  return (
    <div className="py-4 px-5">
      <h2 className="text-xl font-bold">Escolha uma atividade</h2>
      <div className="pt-4">
        <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2">
          <div className="grid grid-cols-[60px_auto_1fr] items-center gap-1">
            <div className="text-projeto-Roxo justify-self-center">
              <Dumbbell />
            </div>
            <div className=" ">
              <h3 className="text-xl font-bold">Esporte</h3>
              <p className="text-projeto-CinzaClaro">5 atividades</p>
            </div>
            <div className="text-projeto-Roxo justify-self-end ">
              <ChevronRight />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChooseActivity;
