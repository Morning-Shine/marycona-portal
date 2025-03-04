import Logo from 'components/logo';
import MainMenu from 'components/mainMenu';

const Header: React.FC = () => {
  return (
    <header
      className={`flex gap-x-10 lg:justify-between lg:items-center
                bg-slate-200 dark:bg-slate-950
     `}
    >
      <div className="m-3">
        <Logo />
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
