import NotFoundFoo from 'components/notFoundFoo';

const PageNotFound: React.FC = () => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center">
      <NotFoundFoo notificationMsg={'Ничего не нашли o_О'} />
    </section>
  );
};

export default PageNotFound;
