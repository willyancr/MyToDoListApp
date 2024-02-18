import React from 'react';
import { Button } from './ui/button';

const Data = () => {
  return (
    <div className="flex items-center justify-between py-4 px-5">
      <Button className="bg-projeto-Roxo text-white drop-shadow-md py-7 px-5 hover:bg-projeto-Rosa">
        <div className="flex items-center flex-col">
          <span>16</span>
          <span>Fev</span>
        </div>
      </Button>
      <Button className="bg-projeto-Rosa text-projeto-CinzaEscuro drop-shadow-md py-7 px-5 hover:bg-projeto-Rosa">
        <div className="flex items-center flex-col">
          <span>16</span>
          <span>Fev</span>
        </div>
      </Button>
      <Button className="bg-projeto-Rosa text-projeto-CinzaEscuro drop-shadow-md py-7 px-5 hover:bg-projeto-Rosa">
        <div className="flex items-center flex-col">
          <span>16</span>
          <span>Fev</span>
        </div>
      </Button>
      <Button className="bg-projeto-Rosa text-projeto-CinzaEscuro drop-shadow-md py-7 px-5 hover:bg-projeto-Rosa">
        <div className="flex items-center flex-col">
          <span>16</span>
          <span>Fev</span>
        </div>
      </Button>
    </div>
  );
};

export default Data;
