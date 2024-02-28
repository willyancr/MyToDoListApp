import React from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const CalenderPicker = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Popover className="">
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[320px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <span>Selecione uma data</span>
          ) : (
            format(date, 'PPP', {
              locale: ptBR,
            })
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 " align="start">
        <Calendar
          className="text-red"
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalenderPicker;
