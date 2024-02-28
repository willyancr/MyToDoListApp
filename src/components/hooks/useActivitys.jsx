import React from 'react';
import {
  Dumbbell,
  Lightbulb,
  UtensilsCrossed,
  Briefcase,
  NotebookPen,
} from 'lucide-react';

export const useActivitys = () => {
  const activitys = [
    { name: 'Esporte', icon: 'Dumbbell' },
    { name: 'Ideia', icon: 'Lightbulb' },
    { name: 'Trabalho', icon: 'Briefcase' },
    { name: 'Estudo', icon: 'NotebookPen' },
    { name: 'Comida', icon: 'UtensilsCrossed' },
  ];
  const icons = {
    Dumbbell: <Dumbbell size={30} />,
    Lightbulb: <Lightbulb size={30} />,
    UtensilsCrossed: <UtensilsCrossed size={30} />,
    Briefcase: <Briefcase size={30} />,
    NotebookPen: <NotebookPen size={30} />,
  };

  return {
    activitys,
    icons,
  };
};
