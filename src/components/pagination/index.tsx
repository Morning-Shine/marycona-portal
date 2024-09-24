import React, { useState } from 'react';
import { TPagination } from './type';
import OnePage from './components/onePage';
import ChangePage from './components/changePage';

const Pagination: React.FC<TPagination> = (props) => {
  const { limit, page, pages, total } = props;
  const [isChangePageMode, setIsChangePageMode] = useState(false);
  return (
    <div className="flex flex-col items-center max-w-min">
      {isChangePageMode ? (
        <ChangePage
          page={page}
          pages={pages}
          changeMode={() => setIsChangePageMode((prev) => !prev)}

          // changeMode={setIsChangePageMode}
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
