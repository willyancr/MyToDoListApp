import React from 'react';
import { Button } from './ui/button';

const Data = () => {
  //Calcula o mês atual apenas uma vez na montagem do componente
  const month = React.useMemo(() => {
    const date = new Date();
    return date.toLocaleDateString('pt-BR', { month: 'short' });
  }, []);

  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    const futureDates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      futureDates.push(date.toLocaleDateString('pt-BR', { day: 'numeric' }));
    }
    setDates(futureDates);
  }, []);

  return (
    <div className="flex items-center justify-between py-4 px-5">
      {dates.map((data) => (
        <Button
          key={data}
          className="bg-projeto-Rosa text-projeto-CinzaEscuro py-7 px-4 hover:bg-projeto-Rosa"
        >
          <div className="flex items-center flex-col">
            <span className="font-bold">{data}</span>
            <span className="text-projeto-CinzaClaro">{month}</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Data;
