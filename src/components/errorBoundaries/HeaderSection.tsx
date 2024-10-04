import Logo from 'components/logo';
import React from 'react';

const HeaderSection: React.FC = (props) => {
  return (
    <header
      className={`flex items-center
                bg-slate-200 dark:bg-slate-950
     `}
    >
      <div className="w-20 h-20 m-3">
        <Logo />
      </div>
      <p className="ml-14 text-xl text-[#EC433F]">
        Ого! Что-то серьёзно сломалось. Разработчики скоро починят^^
      </p>
    </header>
  );
};

export default HeaderSection;
