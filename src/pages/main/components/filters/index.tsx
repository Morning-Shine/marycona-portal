import { TFilters } from '../type';
import Search from './Search';

const Filters: React.FC<TFilters> = ({ setSearchInput }) => {

  return (
    <>
      <Search setSearchInput={setSearchInput} />
    </>
  );
};

export default Filters;
