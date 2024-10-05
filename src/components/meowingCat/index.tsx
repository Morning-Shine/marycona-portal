import React, { useContext } from 'react';
import meowing from 'assets/images/meowing.gif';
import { ShowCatContext } from 'store/context';

const MeowingCat: React.FC = () => {
  const { isShowCat } = useContext(ShowCatContext);

  return (
    <>
      {isShowCat ? (
        <aside
          className={`absolute right-0 bottom-0
          w-[240px] h-[161px]
          dark:opacity-65
          `}
        >
          <img
            src={meowing}
            alt="meow meow meow"
          />
        </aside>
      ) : null}
    </>
  );
};

export default React.memo(MeowingCat);
