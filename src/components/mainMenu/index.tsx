import React from 'react';
import { NavLink } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
import { TRouteStatic } from 'constants/routes/type.routes.constants';
import ThemeSwitcher from 'components/themeSwitcher';
import Authorization from 'components/authorization';

const MainMenu: React.FC = () => {
  const styleNavLink = ' underline px-5 cursor-pointer flex items-end';
  return (
    <nav className="w-2/3 flex gap-x-10 md:justify-between items-center md:gap-x-0">
      <div className="flex flex-col text-lg gap-y-2 md:flex-row lg:items-center lg:text-xl lg:gap-y-0">
        {STATIC_ROUTES.map((route: TRouteStatic) =>
          !route.isNeedInMainMenu ? null : (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                (isActive ? 'text-amber-700 dark:text-amber-500' : '').concat(
                  styleNavLink
                )
              }
            >
              {route.img && <div className="w-7 h-7 mr-1 lg:w-9 lg:h-9 lg:mr-2">{route.img}</div>}
              <p>{route.name}</p>
            </NavLink>
          )
        )}
      </div>
      <ThemeSwitcher />

      <Authorization />
    </nav>
  );
};

export default MainMenu;
