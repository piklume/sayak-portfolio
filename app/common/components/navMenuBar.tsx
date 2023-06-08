'use client';

import React from 'react';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { MENU_LIST } from '../constants';
import { usePathname } from 'next/navigation';

const NavMenuBar = () => {
  let pathName = usePathname();
  pathName = pathName.replace('/', '');

  return (
    <header className="my-4">
      <NavigationMenu.Root className="relative z-[1] flex w-full justify-center">
        <NavigationMenu.List className="center shadow-indigo-500/40 m-0 flex list-none rounded-[6px] bg-transparent p-1 shadow-[0_2px_10px]">
          {MENU_LIST.map(({ name, path }) => {
            const menuPath = path.replace('/', '');
            return (
              <NavigationMenu.Item key={name}>
                <Link
                  className={`text-violet11 hover:bg-violet5 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] ${
                    menuPath &&
                    pathName.includes(menuPath) &&
                    'bg-rose-100 text-black'
                  }`}
                  href={path}
                >
                  {name}
                </Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};

export default NavMenuBar;
