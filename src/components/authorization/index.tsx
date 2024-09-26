import { Link } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
// import {ReactComponent as BgImage} from 'assets/images/footprint.svg'


const logIn = STATIC_ROUTES.find((r) => r.path === '/login')!;
const signUp = STATIC_ROUTES.find((r) => r.path === '/signup')!;

const Authorization: React.FC = () => {
  return (
    <div className="flex flex-col items-end gap-2 p-5 underline font-medium">
        {/* <BgImage /> */}
      <Link to={logIn.path} className='text-amber-500 dark:text-amber-600'>{logIn.name}</Link>
      <Link to={signUp.path} className='text-red-400 dark:text-yellow-200'>{signUp.name}</Link>
    </div>
  );
};

export default Authorization;
