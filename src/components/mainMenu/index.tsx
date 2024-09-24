import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
// import classNames from 'classnames';
import { TRouteStatic } from 'constants/routes/type.routes.constants';
import ThemeSwitcher from 'components/themeSwitcher';

const MainMenu: React.FC = (props) => {
  //   const { pathname } = useLocation();
  return (
    <nav
      className="flex justify-between w-2/3"
      //className="grid grid-cols-2 grid-rows-2 md:flex items-center justify-center "
    >
      <div className="flex items-center text-xl ">
        {STATIC_ROUTES.map(
          (route: TRouteStatic) => (
            // route.isNeedAuthentication ? null : (
            <Link
              key={route.path}
              to={route.path}
              className={
                'underline px-5 cursor-pointer flex'
                //   classNames(
                //   'underline md:px-5',
                //   route.path === pathname
                //     ? `text-${COLOR_MAIN}-300 dark:text-${COLOR_MAIN}-400`
                //     : `text-${COLOR_CONTRAST}-50 dark:text-${COLOR_CONTRAST}-300`
                // )
              }
            >
              {!!route.img && <div className="w-9 h-9 mr-2">{route.img}</div>}
              <p>{route.name}</p>
            </Link>
          )
          // )
        )}
      </div>
      <ThemeSwitcher />
      <div className="flex items-center gap-5 p-5">
        <p>войти</p>
        <p>авторизация</p>
      </div>
    </nav>
  );
};

export default MainMenu;
