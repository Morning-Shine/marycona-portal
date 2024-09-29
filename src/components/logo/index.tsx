import { STATIC_ROUTES } from 'constants/routes/routes';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to={STATIC_ROUTES[0].path}
    className="h-full min-h-16 min-w-16 aspect-square"
    >
      <img
        src={logo}
        alt="logo"
        className="h-full aspect-square"
      />
    </Link>
  );
};

export default Logo;
