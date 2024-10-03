import React from 'react';
import { Link } from 'react-router-dom';

const NeedAuthorization: React.FC = (props) => {
  return (
    <p className="text-xl w-full mx-auto mt-10 text-center">
    Для просмотра избранных фильмов нужно{' '}
    <Link
      to={'/login'}
      className={`underline cursor-pointer font-medium
                  text-amber-600 dark:text-amber-700
                  hover:text-amber-500 hover:dark:text-amber-400`}
    >
      войти
    </Link>{' '}
    или{' '}
    <Link
      to={'/signup'}
      className={`underline cursor-pointer font-medium
                  text-amber-600 dark:text-amber-700
                  hover:text-amber-500 hover:dark:text-amber-400`}
    >
      авторизоваться
    </Link>
  </p>
  );
};

export default NeedAuthorization;