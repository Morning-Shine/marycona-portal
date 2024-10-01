import { useAppDispatch } from 'utils/hooks/useRedux';
import { TPaginationComponents } from '../type';
import { changeMainPageNumber } from 'store/pageNumbersSlice';

const OnePage: React.FC<TPaginationComponents> = ({
  page,
  pages,
  changeMode,
}) => {
  const dispatch = useAppDispatch();

  const handlePageChange = (direction: 'prev' | 'next'): void => {
    let pageTo: number | undefined;

    if (direction === 'prev') {
      if (page > 1) pageTo = page - 1;
    }
    if (direction.toString() === 'next') {
      if (page < pages) {
        pageTo = page + 1;
      }
    }

    if (!pageTo) return;
    dispatch(changeMainPageNumber(pageTo));  
  };

  return (
    <div className="flex gap-3 text-2xl">
      <p
        onClick={() => {
          handlePageChange('prev');
        }}
        className={`w-10 h-10 font-bold 
                    text-center rounded-full
                    bg-yellow-200
                    ${page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
      >
        &#11064;
      </p>
      <div
        onClick={changeMode}
        className={`min-w-10 max-w-min h-10 px-2 flex
        cursor-pointer rounded-full items-center justify-center
        bg-yellow-300`}
      >
        <p className="font-bold">{page}</p>
      </div>
      <p
        onClick={() => {
          handlePageChange('next');
        }}
        className={`w-10 h-10 font-bold 
                    text-center rounded-full 
                    ${page === pages ? 'cursor-not-allowed' : 'cursor-pointer'}
                    bg-yellow-200`}
      >
        &#10513;
      </p>
    </div>
  );
};

export default OnePage;
