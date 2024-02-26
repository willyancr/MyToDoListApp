import React from 'react';
import { Card } from './ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useActivitys } from './hooks/useActivitys';

const CardsChooseActivity = () => {
  const { activitys, icons } = useActivitys();
  return (
    <main className="py-4 px-5">
      <h2 className="text-xl font-bold">Escolha uma atividade</h2>
      <div className="pt-4">
        {activitys.map((activity) => (
          <Card
            key={activity.name}
            className="bg-projeto-Rosa text-projeto-CinzaEscuro text-sm px-2 py-2 mb-4 static"
          >
            <div className="grid grid-cols-[60px_auto] items-center gap-1">
              <div className="text-projeto-Roxo justify-self-center">
                {icons[activity.icon]}
              </div>
              <Link
                to="/criartarefa/calendario"
                className="grid grid-cols-2 items-center"
              >
                <div className=" ">
                  <h3 className="text-xl font-bold">{activity.name}</h3>
                  <p className="text-projeto-CinzaClaro">5 atividades</p>
                </div>
                <div className="text-projeto-Roxo justify-self-end ">
                  <ChevronRight size={30} />
                </div>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default CardsChooseActivity;
