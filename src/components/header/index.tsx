import Logo from 'components/logo';
import MainMenu from 'components/mainMenu';

const Header: React.FC = () => {
  return (
    <header
      className={`flex justify-between items-center
                bg-slate-200 dark:bg-slate-950
                /*bg-blue-200 dark:bg-blue-950*/
     `}
    >
      <div className="w-20 h-20 m-3">
        <Logo />
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
