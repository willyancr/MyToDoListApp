import React from 'react';
import { Card } from './ui/card';
import { ChevronRight } from 'lucide-react';
import { useActivitys } from './hooks/useActivitys';
import { useTask } from '@/TaskContext';

const CardsChooseActivity = () => {
  const { activitys, icons } = useActivitys();
  const { handleActivity, countTasks } = useTask();

  return (
    <main className="pt-6 px-5">
      {activitys.map((activity) => (
        <Card
          onClick={() => handleActivity(activity)}
          key={activity.name}
          className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-4 static"
        >
          <div className="grid grid-cols-[60px_auto] items-center gap-1">
            <div className="text-projeto-Roxo justify-self-center">
              {icons[activity.icon]}
            </div>
            <div className="grid grid-cols-2 items-center">
              <div>
                <h3 className="text-xl font-bold">{activity.name}</h3>
                <p className="text-projeto-CinzaClaro">
                  {countTasks(activity.name)}
                </p>
              </div>
              <div className="text-projeto-Roxo justify-self-end ">
                <ChevronRight size={30} />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </main>
  );
};

export default CardsChooseActivity;
