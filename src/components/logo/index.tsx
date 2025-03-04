import { STATIC_ROUTES } from 'constants/routes/routes';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link to={STATIC_ROUTES[0].path}
    >
      <img
        src={logo}
        alt="logo"
        className="h-16 lg:h-20 aspect-square"
      />
    </Link>
  );
};

export default React.memo(Logo);