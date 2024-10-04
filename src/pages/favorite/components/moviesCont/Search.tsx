import React, { useState } from 'react';
import { TSearch } from '../../type';
import useDebounce from 'utils/hooks/useDebounce';

const Search: React.FC<TSearch> = ({ setSearchInput }) => {
  const [val, setVal] = useState('');
  const debouncedSearchInput = useDebounce(val);

  React.useEffect(() => {
    setSearchInput(debouncedSearchInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);
  return (
    <div className="h-14 w-1/4 flex flex-col justify-between">
      <h6 className="text-sm font-bold truncate text-amber-600 dark:text-amber-500">
        Поиск по названию
      </h6>
      <input
        placeholder="введите текст..."
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className={`h-10 w-full px-2 rounded outline-none
            text-slate-950
            focus-visible:border-2 border-amber-500 dark:border-amber-600
             bg-yellow-200`}
      />
    </div>
  );
};

export default Search;
