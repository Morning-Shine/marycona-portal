import React from 'react';
import { NavLink } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
import { TRouteStatic } from 'constants/routes/type.routes.constants';
import ThemeSwitcher from 'components/themeSwitcher';
import Authorization from 'components/authorization';


const MainMenu: React.FC = () => {
  const styleNavLink = '  underline px-5 cursor-pointer flex items-end';
  return (
    <nav className="w-2/3 flex justify-between items-center">
      <div className="flex items-center text-xl ">
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
              {!!route.img && <div className="w-9 h-9 mr-2">{route.img}</div>}
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
