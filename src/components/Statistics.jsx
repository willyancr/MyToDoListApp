import React from 'react';
import {
  CircleUserRound,
  LineChart,
  PieChart,
  CheckCircleIcon,
  Dumbbell,
} from 'lucide-react';
import SvgWaves from '@/image/Waves';
import { Card } from './ui/card';
import { useTask } from '../TaskContext';
import { useActivitys } from './hooks/useActivitys';

const Statistics = () => {
  const { tasks, countCompletedTasks, qtdActivity, countTasks } = useTask();
  const { activitys, icons } = useActivitys();

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
        <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-3 ">
          <div className="grid grid-cols-[60px_auto] items-center gap-2 ">
            <div className="text-projeto-Roxo justify-self-center">
              <LineChart size={38} />
            </div>
            <div className="grid grid-cols-1 items-center">
              <h3 className="text-xl font-bold">Total de tarefas</h3>
              <p className="text-xl text-projeto-CinzaClaro">0{tasks.length}</p>
            </div>
          </div>
        </Card>
        <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-4 static">
          <div className="grid grid-cols-[60px_auto] items-center gap-2 ">
            <div className="text-projeto-Roxo justify-self-center">
              <CheckCircleIcon size={38} />
            </div>
            <div className="grid grid-cols-1 items-center">
              <h3 className="text-xl font-bold">Tarefas completas</h3>
              <p className="text-xl text-projeto-CinzaClaro">
                0{countCompletedTasks()}
              </p>
            </div>
          </div>
        </Card>
        <div className="border border-projeto-Rosa/50 rounded mb-4"></div>
        <div className="grid grid-cols-2 items-center gap-2 mb-4">
          {activitys.map((activity) => (
            <Card className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-1 ">
              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="text-projeto-Roxo/70">
                  {icons[activity.icon]}
                </div>
                <div>
                  <h2 className=" font-bold">{activity.name}</h2>
                  <p className="text-projeto-CinzaClaro">
                    0{qtdActivity(tasks)[activity.name]}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default Statistics;
