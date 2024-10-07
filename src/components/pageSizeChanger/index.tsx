import React from 'react';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { PAGE_SIZES } from 'constants/enums';
import { changeMainPageSize } from 'store/pageSizesSlice';
import { changeMainPageNumber } from 'store/pageNumbersSlice';

const PageSizeChanger: React.FC = () => {
  const pageSize = useAppSelector(
    (state) => state.pageSizes.mainPageSize //.toString()
  );
 
  const dispatch = useAppDispatch();

  const handlePageChange = (direction: 'prev' | 'next'): void => {
    const currentPageIndex = PAGE_SIZES.findIndex((page) => page === +pageSize);
    let currentPage;
    if (direction === 'prev') {
      if (currentPageIndex > 0) currentPage = PAGE_SIZES[currentPageIndex - 1];
    }
    if (direction === 'next') {
      if (currentPageIndex < PAGE_SIZES[PAGE_SIZES.length - 1])
        currentPage = PAGE_SIZES[currentPageIndex + 1];
    }
    if (!currentPage) return;
    if (currentPage > pageSize) {
      dispatch(changeMainPageNumber(1));
    }
    dispatch(changeMainPageSize(currentPage));
  };

  const pStyle = 'w-10 h-10 leading-10 text-center rounded-full bg-lime-300';
  return (
    <div className="flex items-end gap-3 mb-1 text-2xl dark:text-slate-950">
      <p
        onClick={() => {
          handlePageChange('prev');
        }}
        className={`${pStyle}
                    ${
                      +pageSize === PAGE_SIZES[0]
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                    }
                    `}
      >
        &#12298;
      </p>
      <div
        className={`min-w-10 max-w-min h-10 px-2 flex
        rounded-full items-center justify-center
        bg-lime-400`}
      >
        <p className="font-bold">{pageSize}</p>
      </div>
      <p
        onClick={() => {
          handlePageChange('next');
        }}
        className={`${pStyle}
                    ${
                      +pageSize === PAGE_SIZES[PAGE_SIZES.length - 1]
                        ? 'cursor-not-allowed'
                        : 'cursor-pointer'
                    }`}
      >
        &#12299;
      </p>
    </div>
  );
};

export default PageSizeChanger;
