import { Link, useLocation } from 'react-router-dom';
import Faq from 'components/faq';
import MeowingCheckBox from '../meowingCheckBox/index.tsx';

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <footer className="relative flex py-2 justify-center gap-5 bg-slate-100 dark:bg-slate-900">
      <p>
        Создано по заданию ASTON,{' '}
        <Link
          to={'https://t.me/Marycona'}
          target="_blank"
          className="underline text-amber-950 dark:text-amber-600"
        >
          связаться с автором
        </Link>
      </p>
      <Faq />
      {(pathname === '/login' || pathname === '/signup') && (
        <div className="absolute right-6 gap-3 flex min-w-max items-center justify-items-end ">
          <MeowingCheckBox />
        </div>
      )}
    </footer>
  );
};

export default Footer;
