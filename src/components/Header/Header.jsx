import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { CircleUserRound, LayoutGrid } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div>
      <Card>
        <CardHeader className="bg-projeto-Roxo h-auto py-8">
          <div className="flex items-center justify-between pb-6">
            <LayoutGrid className="text-white" />
            <p className="text-white">16 de Fevereiro</p>
            <CircleUserRound className="text-white" />
          </div>
          <div className="flex items-center justify-between ">
            <div className="text-white">
              <p className="text-2xl">Hoje</p>
              <p className="text-xs">6 Tasks</p>
            </div>
            <Button className="bg-white text-projeto-Roxo">Nova tarefa</Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Header;
