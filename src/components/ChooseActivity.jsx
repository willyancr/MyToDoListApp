import React from 'react';
import { Card, CardContent } from './ui/card';
import { CircleUserRound, ListChecks } from 'lucide-react';
import Data from './Data';
import CardsChooseActivity from './CardsChooseActivity';

const ChooseActivity = () => {
  return (
    <>
      <header className="fixed w-full z-50 top-0">
        <Card className="border-none ">
          <CardContent className="bg-projeto-Roxo h-auto pt-8">
            <div className="flex items-center text-white justify-between pb-8">
              <ListChecks size={28} />
              <p className="font-semibold text-xl">Atividades</p>
              <CircleUserRound size={28} />
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="min-h-screen mt-[120px]">
        <Data />
        <h2 className=" pt-4 px-5 text-xl font-bold">Escolha uma atividade</h2>
        <CardsChooseActivity />
      </main>
    </>
  );
};

export default ChooseActivity;
