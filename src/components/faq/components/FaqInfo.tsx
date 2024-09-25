import { TASK_REQUIREMENTS } from 'constants/faq/faq';

//TODO добавить пагинацию с * * * и боковыми стрелками, внести еще два пункта + анимация
const FaqInfo: React.FC = (props) => {
  return (
    <div className='px-3 text-justify'>
      <h3 className='font-bold'>Состав:</h3>
      <ol className='list-decimal'>
        {TASK_REQUIREMENTS.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ol>
    </div>
  );
};

export default FaqInfo;
