import React from 'react';
import {
  Dumbbell,
  Lightbulb,
  UtensilsCrossed,
  Briefcase,
  Music4,
} from 'lucide-react';

export const useActivitys = () => {
  const activitys = [
    { name: 'Esporte', icon: 'Dumbbell' },
    { name: 'Ideia', icon: 'Lightbulb' },
    { name: 'Comida', icon: 'UtensilsCrossed' },
    { name: 'Trabalho', icon: 'Briefcase' },
    { name: 'Música', icon: 'Music4' },
  ];
  const icons = {
    Dumbbell: <Dumbbell size={30} />,
    Lightbulb: <Lightbulb size={30} />,
    UtensilsCrossed: <UtensilsCrossed size={30} />,
    Briefcase: <Briefcase size={30} />,
    Music4: <Music4 size={30} />,
  };

  return {
    activitys,
    icons,
  };
};
