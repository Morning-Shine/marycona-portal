import { useContext } from 'react';
import { ShowCatContext } from 'store/context';

const MeowingCheckBox: React.FC = () => {
  const { isShowCat, setIsShowCat } = useContext(ShowCatContext);
  return (
    <>
      <p>показать котика?^-^</p>

      <input
        type="checkbox"
        checked={isShowCat}
        onChange={() => setIsShowCat(!isShowCat)}
        //TODO заморочиться стилями
        className={`w-5 h-5 cursor-pointer`}
      />
    </>
  );
};

export default MeowingCheckBox;
