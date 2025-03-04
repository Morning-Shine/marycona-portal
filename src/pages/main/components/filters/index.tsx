import { TFilters } from '../type';
import Search from './Search';
import SelectGenge from './SelectGenge';

const Filters: React.FC<TFilters> = ({ setSearchInput, isSearchInput, setGenreFilter }) => {
  return (
    <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0">
      <Search setSearchInput={setSearchInput} />
      <SelectGenge isSearchInput={isSearchInput} setGenreFilter={setGenreFilter}/>
    </div>
  );
};

export default Filters;
