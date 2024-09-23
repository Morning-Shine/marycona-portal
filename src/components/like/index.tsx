import React from 'react';
import { TLike } from './type';

const Like: React.FC<TLike> = ({ isLiked }) => {
  return (
    <div className="absolute flex justify-end w-8 top-2 left-3">
      <img
        src={
          isLiked
            ? require('assets/images/liked.png')
            : require('assets/images/like.png')
        }
        alt="heart"
      />
     </div>
  );
};

export default Like;
