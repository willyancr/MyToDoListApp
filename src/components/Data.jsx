import React from 'react';
import { Button } from './ui/button';

const Data = () => {
  return (
    <div className="flex items-center justify-between py-4 px-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Button
          key={index}
          className="bg-projeto-Rosa text-projeto-CinzaEscuro py-7 px-4 hover:bg-projeto-Rosa"
        >
          <div className="flex items-center flex-col">
            <span className="font-bold">16</span>
            <span className="text-projeto-CinzaClaro">Fev</span>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default Data;
