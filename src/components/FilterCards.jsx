import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const FilterCards = () => {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between px-5 ">
        <Input
          className="pl-10 relative border-projeto-CinzaClaro/50 outline-none py-6"
          placeholder="Pesquisar tarefas..."
        />
        <Search className="absolute left-7 text-projeto-CinzaClaro/75" />
      </div>
      <div className="flex gap-4 py-3 px-5 ">
        <div className="flex items-center gap-1">
          <Switch id="completas" />
          <Label htmlFor="completas">Completas</Label>
        </div>
        <div className="flex items-center gap-1">
          <Switch id="incompletas" />
          <Label htmlFor="incompletas">Incompletas</Label>
        </div>
      </div>
    </div>
  );
};

export default FilterCards;
