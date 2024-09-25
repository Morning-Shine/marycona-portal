import { Link } from 'react-router-dom';
import Faq from 'components/faq';

const Footer: React.FC = () => {
  return (
    <footer className="flex py-2 justify-center gap-5 bg-slate-100 dark:bg-slate-900">
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
    </footer>
  );
};

export default Footer;
