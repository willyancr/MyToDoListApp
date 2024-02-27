import React from 'react';
import { Button } from './ui/button';

const Data = () => {
  const [dates, setDates] = React.useState([]);
  React.useEffect(() => {
    const futureDates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      futureDates.push({
        day: date.toLocaleDateString('pt-BR', { day: 'numeric' }),
        month: date.toLocaleDateString('pt-BR', { month: 'short' }),
      });
    }
    setDates(futureDates);
  }, []);

  return (
    <div className="flex items-center justify-between py-4 px-5">
      {dates.map((data) => (
        <Button
          key={data}
          className="bg-projeto-Rosa text-projeto-CinzaEscuro h-14 w-14 hover:bg-projeto-Rosa"
        >
          <div className="flex items-center flex-col">
            <span className="font-bold">{data.day}</span>
            <span className="text-projeto-CinzaClaro">{data.month}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Data;
