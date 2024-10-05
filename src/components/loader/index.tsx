import React from 'react';

const Loader: React.FC = (props) => {
  return (
    <div className="p-3 bg-white rounded-2xl dark:opacity-75">
      <img
        src={require('assets/images/loader.webp')}
        alt="loading..."
      />
      <p className="text-sm text-center dark:text-black">
        производится загрузка контента...
      </p>
    </div>
  );
};

export default React.memo(Loader);
