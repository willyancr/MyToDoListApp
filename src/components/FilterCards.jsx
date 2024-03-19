import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const FilterCards = ({ search, setSearch }) => {
  const [completas, setCompletas] = React.useState(false);
  const [incompletas, setIncompletas] = React.useState(false);
  return (
    <div className='mb-4'>
      <div className="flex items-center justify-between">
        <Input
          className="pl-10 relative border-projeto-CinzaClaro/50 outline-none py-5"
          placeholder="Pesquisar tarefas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-7 text-projeto-CinzaClaro/75" />
      </div>
      <div className="flex gap-4 py-3 ">
        <div className="flex items-center gap-2">
          <Switch id="completas" />
          <Label htmlFor="completas">Completas</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="incompletas" />
          <Label htmlFor="incompletas">Incompletas</Label>
        </div>
      </div>
    </div>
  );
};

export default FilterCards;
