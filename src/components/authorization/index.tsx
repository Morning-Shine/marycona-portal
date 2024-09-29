import { Link } from 'react-router-dom';
import { STATIC_ROUTES } from 'constants/routes/routes';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { resetUser } from 'store/userSlice';

// import {ReactComponent as BgImage} from 'assets/images/footprint.svg'

const logIn = STATIC_ROUTES.find((r) => r.path === '/login')!;
const signUp = STATIC_ROUTES.find((r) => r.path === '/signup')!;

const Authorization: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  /* <BgImage /> */
  return (
    <>
      {user ? (
        <div className="flex flex-col items-end mx-5 truncate">
          <p className="font-medium text-lg text-red-400 dark:text-yellow-200">
            {user.name}
          </p>
          <p className="text-md text-amber-500 dark:text-amber-600">
            @{user.login}
          </p>
          <p
            onClick={() => dispatch(resetUser())}
            className="text-sm mt-3 text-red-600 underline cursor-pointer"
          >
            выйти
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-end gap-2 p-5 underline font-medium">
          <Link
            to={logIn.path}
            className="text-amber-500 dark:text-amber-600"
          >
            {logIn.name}
          </Link>
          <Link
            to={signUp.path}
            className="text-red-400 dark:text-yellow-200"
          >
            {signUp.name}
          </Link>
        </div>
      )}
    </>
  );
};

export default Authorization;
