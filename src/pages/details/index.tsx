import { useParams } from 'react-router-dom';
import About from './components/About';
import NotFoundPlug from 'components/notFoundPlug';

const PageDetails: React.FC = () => {
  const { id = '' } = useParams();
  const isIdAllNumbers = id.match(/^\d+$/);

  return (
    <section className="flex flex-col w-5/6 mx-auto row-start-2">
      {isIdAllNumbers ? (
        <About />
      ) : (
        <div className="flex flex-col w-full h-full items-center justify-center">
          <NotFoundPlug notificationMsg={`фильм с id ${id} не существует`} />
        </div>
      )}
    </section>
  );
};

export default PageDetails;
