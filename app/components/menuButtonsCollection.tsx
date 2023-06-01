'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import { MENU_LIST } from '../common/constants';

const MenuButtonsCollection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-x-4">
      {MENU_LIST.map((button) => (
        <Button
          key={button.name}
          className="text-slate-700"
          ghost
          onClick={() => router.push(button.path)}
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
};

export default MenuButtonsCollection;
