import React, { useState } from 'react';
import { TPagination } from './type';
import OnePage from './components/onePage';
import ChangePage from './components/changePage';

const Pagination: React.FC<TPagination> = (props) => {
  const { limit, page, pages, total } = props;
  const [isChangePageMode, setIsChangePageMode] = useState(false);
  return (
    <div
      className="flex flex-col items-center max-w-min h-28 dark:text-slate-950 mb-3"
    >
      {isChangePageMode ? (
        <ChangePage
          page={page}
          pages={pages}
          changeMode={() => setIsChangePageMode((prev) => !prev)}
        />
      ) : (
        <div className="h-16 mb-1"></div>
      )}
      <OnePage
        page={page}
        pages={pages}
        changeMode={() => setIsChangePageMode((prev) => !prev)}
      />
    </div>
  );
};

export default Pagination;
