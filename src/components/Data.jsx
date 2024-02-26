import React from 'react';
import { Button } from './ui/button';

const Data = () => {
  const date = new Date();
  const month = date.toLocaleDateString('pt-BR', { month: 'short' });
  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    const datasTemp = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      datasTemp.push(date.toLocaleDateString('pt-BR', { day: 'numeric' }));
    }
    setDatas(datasTemp);
  }, []);

  return (
    <div className="flex items-center justify-between py-4 px-5">
      {datas.map((data, index) => (
        <Button
          key={index}
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
