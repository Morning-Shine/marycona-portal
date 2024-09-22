import Logo from 'components/logo';
import MainMenu from 'components/mainMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-200 flex justify-between">
      <div className="w-28 h-28 m-3">
        <Logo />
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
