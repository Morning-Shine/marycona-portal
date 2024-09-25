import React, { useState } from 'react';
import { TPaginationComponents } from '../type';
import { useAppDispatch } from 'utils/hooks/useRedux';
import { changeMainPageNumber } from 'store/pageSizesSlice';

const ChangePage: React.FC<TPaginationComponents> = ({
  page,
  pages,
  changeMode,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState<string | number>(
    page
  );

  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.value) {
      const val = +e.target.value;
      val > 0 && val <= pages
        ? setCurrentPageNumber(val)
        : setCurrentPageNumber(pages);
      if (val <= 0) setCurrentPageNumber(1);
    } else setCurrentPageNumber('');
  };

  const handlePageChange = () => {
    if (
      !currentPageNumber ||
      typeof currentPageNumber !== 'number' ||
      currentPageNumber === page
    )
      return;
    dispatch(changeMainPageNumber(currentPageNumber));
    changeMode();
  };

  return (
    <div className="flex flex-col justify-center mb-3 max-w-min">
      <p
        className={`h-10 rounded-full max-w-min
        flex items-center text-xl
        bg-lime-300 dark:bg-lime-700`}
      >
        <input
          type="number"
          inputMode="numeric"
          min="1"
          max={pages}
          value={currentPageNumber}
          onChange={(e) => handleInput(e)}
          className="bg-transparent outline-none text-right"
        />
        <span
          onClick={() => handlePageChange()}
          className={`${
            !currentPageNumber ? 'cursor-not-allowed' : 'cursor-pointer'
          } pr-2 font-bold text-lime-900 dark:text-lime-200`}
        >
          &#10003;
        </span>
      </p>
      <p className="text-xs self-center text-amber-950 dark:text-amber-600">максимум {pages}</p>
    </div>
  );
};

export default ChangePage;
