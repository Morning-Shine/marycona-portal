import React from 'react';
import { TLike } from './type';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { addMovie, deleteMovie } from 'store/favoriteSlice';
import { useNavigate } from 'react-router-dom';

const Like: React.FC<TLike> = ({ movieInfo }) => {
  const { id } = movieInfo;
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user?.user?.login);

  const isLiked = useAppSelector((state) =>
    user ? state.favorite.movies?.[user]?.find((i) => i.id === id) : null
  );
  const dispatch = useAppDispatch();

  return (
    <img
      src={
        isLiked
          ? require('assets/images/like.png')
          : require('assets/images/liked.png')
      }
      alt="heart"
      onClick={(e) => {
        e.preventDefault();
        !!user
          ? isLiked
            ? dispatch(deleteMovie({ user, movieId: movieInfo.id }))
            : dispatch(addMovie({ user, movie: movieInfo }))
          : navigate('/login');
      }}
    />
  );
};

export default Like;
