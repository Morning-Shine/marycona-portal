import { TNotFoundPlug } from "./type";

const NotFoundPlug: React.FC<TNotFoundPlug> = ({notificationMsg}) => {
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

export default NotFoundPlug;
