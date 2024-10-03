const PageNotFound: React.FC = () => {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center">
      <div className={`rounded-2xl border
        border-black overflow-hidden
        bg-amber-500 
        dark:bg-amber-600 dark:opacity-80`}>
        <img
          src={require('assets/images/404.png')}
          alt="not found"
          className=""
        />
      </div>
      <p className="text-3xl font-bold dark:text-amber-700">
        Ничего не нашли О_о
      </p>
    </section>
  );
};

export default PageNotFound;
