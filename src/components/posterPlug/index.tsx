import React from 'react';

const PosterPlug: React.FC = () => {
  return (
    <div className='flex px-1 h-full'>
          <img
            src={require('assets/images/posterPlug.png')}
            alt="posterPlug"
            className='self-center justify-self-center'
          />
    </div>
  );
};

export default React.memo(PosterPlug);