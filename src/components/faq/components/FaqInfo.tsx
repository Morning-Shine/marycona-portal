import { FAQ } from 'constants/faq';
import { useState } from 'react';

//TODO добавить пагинацию с * * * и боковыми стрелками, внести еще два пункта + анимация
const FaqInfo: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="w-[80vw] h-[60vh] flex flex-col  justify-between">
      <div className='text-justify overflow-y-auto'>
        <h3 className="font-bold">{(FAQ?.[page] || FAQ[0]).name}</h3>
        <ol className="list-decimal mx-7">
          {(FAQ?.[page] || FAQ[0]).desc.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ol>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {FAQ.map((item, index) => (
          <p
            key={item.name}
            onClick={() => setPage(index)}
            className={`cursor-pointer ${
              index === page ? 'text-orange-600' : ''
            }`}
          >
            &#9679;
          </p>
        ))}
      </div>
    </div>
  );
};

export default FaqInfo;
