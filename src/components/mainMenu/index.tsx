import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
// import classNames from 'classnames';
import { TRouteStatic } from 'constants/routes/type.routes.constants';
import ThemeSwitcher from 'components/themeSwitcher';
import Authorization from 'components/authorization';

const MainMenu: React.FC = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const style = '';
  return (
    <nav className="w-2/3 flex justify-between items-center">
      <div className="flex items-center text-xl ">
        {STATIC_ROUTES.map((route: TRouteStatic) =>
          !route.isNeedInMainMenu ? null : (
            <Link
              key={route.path}
              to={route.path}
              className="underline px-5 cursor-pointer flex items-end"
            >
              {!!route.img && <div className="w-9 h-9 mr-2">{route.img}</div>}
              <p>{route.name}</p>
            </Link>
          )
        )}
      </div>
      <ThemeSwitcher />

      <Authorization />
    </nav>
  );
};

export default MainMenu;
