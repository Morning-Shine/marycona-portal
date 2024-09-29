import React from 'react';
import { TButton } from './type';

const Button: React.FC<TButton> = ({ type, func, size, name, className }) => {
  let style;
  switch (size) {
    /** 'sm' и 'lg' сделано для примера, доработать в случае необходимости */
    case 'sm':
      style = 'h-6 w-10';
      break;
    case 'md':
      style = 'h-10 min-w-36 max-w-max px-2';
      break;
    case 'lg':
      style = 'h-12 w-52';
      break;
  }
  const onClick = !!func ? () => func() : undefined;
  return (
    <button
      type={type}
      className={className ? `${className} ${style}` : style}
      onClick={onClick}
    >
      <span className="uppercase">{name}</span>
    </button>
  );
};

export default Button;
