import Modal from 'components/modal';
import React from 'react';
import { TShowInfo } from './type';
import Button from 'components/button';
import {  useNavigate } from 'react-router-dom';

const ShowInfo: React.FC<TShowInfo> = ({ setIsModal, info }) => {
  const navigate = useNavigate();

  let child;
  const childPStyle = 'text-center';
  const childSpanStyle = `underline cursor-pointer
                        text-amber-600 dark:text-amber-700
                        hover:text-amber-500 hover:dark:text-amber-400`

  switch (info) {
    case 'noUserExist':
      child = (
        <p className={childPStyle}>
          Tакой пользователь не найден,{' '}
          <span
            onClick={() => {
              setIsModal(false);
              navigate('/signup');
            }}
            className={childSpanStyle}
          >
            зарегистрируемся?
          </span>
        </p>
      );
      break;
    case 'wrongPassword':
      child = <p className={childPStyle}>Пароль не подходит :-(</p>;
      break;
    case 'userAlreadyExists':
      child = (
        <p className={childPStyle}>
          Этот пользователь уже существует, попробуйте{' '}
          <span
            onClick={() => {
              setIsModal(false);
              navigate('/login');
            }}
            className={childSpanStyle}
          >
            войти.
          </span>
        </p>
      );
      break;
  }

  return (
    <Modal
      children={
        <div className="flex flex-col w-96 h-44 justify-between text-xl">
          {child}
          <Button
            type={'button'}
            size={'md'}
            name={'Ок!'}
            func={() => setIsModal(false)}
            className={`text-center self-center 
                bg-amber-600 dark:bg-amber-700
                text-lg rounded-sm font-bold`}
          />
        </div>
      }
      onClose={() => setIsModal(false)}
    />
  );
};

export default ShowInfo;
