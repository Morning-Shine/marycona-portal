import { STATIC_ROUTES } from 'constants/routes/routes';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to={STATIC_ROUTES[0].path}>
      <img
        src={logo}
        alt="logo"
        className="w-full h-full"
      />
    </Link>
  );
};

export default Logo;
