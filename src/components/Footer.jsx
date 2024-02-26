import { AreaChart, Home, Plus } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-12 py-4 bg-projeto-Roxo text-white fixed w-full z-50 bottom-0">
      <Home size={28} />
      <AreaChart size={28} />
      <Button className="px-2 py-1 bg-white size-9 hover:bg-white">
        <Plus className="text-projeto-Roxo" />
      </Button>
    </div>
  );
};

export default Footer;
