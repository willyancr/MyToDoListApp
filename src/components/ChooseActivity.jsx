import React from 'react';
import { Card } from './ui/card';
import {
  ChevronRight,
  Dumbbell,
  Lightbulb,
  UtensilsCrossed,
  Briefcase,
  Music4,
  Plus,
} from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ChooseActivity = () => {
  const activitys = [
    { name: 'Esporte', icon: 'Dumbbell', to: '/' },
    { name: 'Ideia', icon: 'Lightbulb', to: '/' },
    { name: 'Comida', icon: 'UtensilsCrossed', to: '/' },
    { name: 'Trabalho', icon: 'Briefcase', to: '/' },
    { name: 'Música', icon: 'Music4', to: '/' },
  ];
  const icons = {
    Dumbbell: <Dumbbell size={30} />,
    Lightbulb: <Lightbulb size={30} />,
    UtensilsCrossed: <UtensilsCrossed size={30} />,
    Briefcase: <Briefcase size={30} />,
    Music4: <Music4 size={30} />,
  };
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
      {/* <Button className="bg-projeto-Roxo hover:bg-projeto-Roxo text-white py-6 absolute bottom-8 right-5">
        <Plus strokeWidth={3} />
      </Button> */}
    </main>
  );
};

export default ChooseActivity;
