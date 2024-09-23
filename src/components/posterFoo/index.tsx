import React from 'react';

const PosterFoo: React.FC = (props) => {
  return (
    <div className='flex px-1 h-full'>
          <img
            src={require('assets/images/posterFoo.png')}
            alt="posterFoo"
            className='self-center justify-self-center'
          />
    </div>
  );
};

export default PosterFoo;