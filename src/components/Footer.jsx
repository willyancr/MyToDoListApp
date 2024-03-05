import React from 'react';
import { Home, PieChart, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-12 py-3 bg-gradient-to-r from-projeto-Roxo to-projeto-RoxoClaro text-white fixed w-full z-50 bottom-0">
      <Link to="/">
        <Home size={28} />
      </Link>
      <PieChart size={28} />
      <Link to="/atividade">
        <Button className="px-2 py-1 bg-white size-9 hover:bg-white">
          <Plus className="text-projeto-Roxo " />
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
