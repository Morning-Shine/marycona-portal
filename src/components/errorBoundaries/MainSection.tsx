import React from 'react';

const MainSection: React.FC = (props) => {
  return (
    <section
      className={`flex w-5/6 mx-auto row-start-2 justify-center`}
    >
      <div className='mt-20 flex h-1/3 items-end'>
        <img
          src={require('assets/images/plug.png')}
          alt="main section error"
          className="w-60 aspect-square"
        />
        <p className='mb-5 text-xl text-[#EC433F]'>
          Ой! Возникла непредвиденная ошибка. Попробуйте покликать доступные
          ссылки^^
        </p>
      </div>
    </section>
  );
};

export default React.memo(MainSection);
