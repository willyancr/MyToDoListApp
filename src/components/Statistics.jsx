import React from 'react';
import { CircleUserRound, LineChart, PieChart } from 'lucide-react';
import SvgWaves from '@/image/Waves';
import { Card } from './ui/card';
import { useTask } from '../TaskContext';

const Statistics = () => {
  const { tasks, countCompletedTasks } = useTask();
  return (
    <>
      <header className="fixed w-full z-50 top-0 text-projeto-CinzaEscuro">
        <div className="relative">
          <SvgWaves />
        </div>
        <div className="flex items-center justify-between absolute w-full top-0 p-5 py-9">
          <PieChart size={28} />
          <p className="font-semibold text-xl">Estatísticas</p>
          <CircleUserRound size={28} />
        </div>
      </header>
      <main className="min-h-screen mt-[150px] px-4">
        <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-4 static">
          <div className="grid grid-cols-[60px_auto] items-center gap-2 ">
            <div className="text-projeto-Roxo justify-self-center">
              <LineChart size={38} />
            </div>
            <div className="grid grid-cols-1 items-center">
              <div>
                <h3 className="text-xl font-bold">Total de tarefas</h3>
                <p className="text-xl text-projeto-CinzaClaro">
                  {tasks.length}
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-4 static">
          <div className="grid grid-cols-[60px_auto] items-center gap-2 ">
            <div className="text-projeto-Roxo justify-self-center">
              {/* <CheckCircleIcon size={38} /> */}
            </div>
            <div className="grid grid-cols-1 items-center">
              <div>
                <h3 className="text-xl font-bold">Tarefas completas</h3>
                <p className="text-xl text-projeto-CinzaClaro">
                  {countCompletedTasks()}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Statistics;
