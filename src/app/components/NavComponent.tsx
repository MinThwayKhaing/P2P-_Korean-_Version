"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavComponentProps {
  routes: { name: string, path: string }[];
}

const NavComponent: React.FC<NavComponentProps> = ({ routes }) => {
  const pathname = usePathname();

  return (
    <div className="flex nav mt-2">
      {routes.map((route, index) => {
        const isActive = pathname.includes(route.path); // Check if current path includes route.path
        const navClass = `nav-item ${isActive ? 'active' : ''} ${index === 0 ? 'first-nav' : ''} ${index === routes.length - 1 ? 'last-nav' : ''} nav-font-size`;

        return (
          <nav key={route.path} className={navClass}>
            <div>
              <Link href={route.path}>
               {route.name}
              </Link>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default NavComponent;
