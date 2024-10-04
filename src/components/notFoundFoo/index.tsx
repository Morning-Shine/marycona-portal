import { TNotFoundFoo } from "./type";

const NotFoundFoo: React.FC<TNotFoundFoo> = ({notificationMsg}) => {
  return (
    <>
      <div
        className={`rounded-2xl border
        border-black overflow-hidden
        bg-amber-500 
        dark:bg-amber-600 dark:opacity-80`}
      >
        <img
          src={require('assets/images/404.png')}
          alt="not found"
        />
      </div>
      <p className="text-3xl font-bold dark:text-amber-700">
        {notificationMsg}
      </p>
    </>
  );
};

export default NotFoundFoo;
