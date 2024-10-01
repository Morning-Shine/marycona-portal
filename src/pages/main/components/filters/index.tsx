import { TFilters } from '../type';
import Search from './Search';
import SelectGenge from './SelectGenge';

const Filters: React.FC<TFilters> = ({ setSearchInput, isSearchInput, setGenreFilter }) => {
  return (
    <div className="flex gap-x-4">
      <Search setSearchInput={setSearchInput} />
      <SelectGenge isSearchInput={isSearchInput} setGenreFilter={setGenreFilter}/>
    </div>
  );
};

export default Filters;
