import React from 'react';
import { Card, CardContent } from '../ui/card';
import { CircleUserRound } from 'lucide-react';

const Header = () => {
  return (
    <div >
      <Card>
        <CardContent className='bg-projeto-Roxo'>
          <CircleUserRound className='text-white'/>

        </CardContent>
      </Card>
    </div>
  );
};

export default Header;
