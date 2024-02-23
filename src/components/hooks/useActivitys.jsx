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

  return {
    activitys,
    icons,
  };
};
