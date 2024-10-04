import { useGetPossibleValuesForFiltersQuery } from 'api/movie';
import { TSelectGenge } from '../type';

const SelectGenge: React.FC<TSelectGenge> = ({
  isSearchInput,
  setGenreFilter,
}) => {
  const params = new URLSearchParams();
  params.append('field', 'genres.name');

  const { data, isLoading } = useGetPossibleValuesForFiltersQuery(
    params.toString()
  );

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreFilter(e.target.value);
  };

  return (
    <div className="h-14 w-1/4 flex flex-col justify-between">
      <h6 className="text-sm font-bold truncate text-amber-600 dark:text-amber-500">
        Фильтр по жанру
      </h6>
      <select
        disabled={isSearchInput}
        defaultValue=""
        onChange={(e) => changeHandler(e)}
        className={`h-10 w-full px-2 rounded outline-none
          text-slate-950
            focus-visible:border-2 border-amber-500 dark:border-amber-600
          bg-yellow-200
        `}
      >
        <option
          value=""
          className="appearance-none bg-yellow-200"
        >
          Все
        </option>
        {isLoading && (
          <option
            disabled
            value=""
            className="appearance-none bg-yellow-200"
          >
            загружаю варианты...
          </option>
        )}
        {!isLoading && !!data?.length &&
          data.map((genre) => (
            <option
              key={genre.slug}
              value={genre.name}
            >
              {genre.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectGenge;
