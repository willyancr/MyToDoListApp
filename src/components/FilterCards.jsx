import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const FilterCards = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <Input
          className="pl-10 relative border-projeto-CinzaClaro/50 outline-none py-5"
          placeholder="Pesquisar tarefas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-7 text-projeto-CinzaClaro/75" />
      </div>
      <RadioGroup
        className="flex items-center justify-between mt-4"
        defaultValue={filter}
        onValueChange={setFilter}
      >
        <div className="flex items-center gap-1">
          <RadioGroupItem value="all" id="all" />
          <Label
            htmlFor="all"
            className="text-projeto-CinzaClaro/75"
            value="all"
          >
            Todas
          </Label>
        </div>
        <div className="flex items-center gap-1">
          <RadioGroupItem value="completed" id="completed" />
          <Label
            htmlFor="completed"
            className="text-projeto-CinzaClaro/75"
            value="completed"
          >
            Completas
          </Label>
        </div>
        <div className="flex items-center gap-1">
          <RadioGroupItem value="incompleted" id="incompleted" />
          <Label
            htmlFor="incompleted"
            className="text-projeto-CinzaClaro/75"
            value="incompleted"
          >
            Incompletas
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default FilterCards;
