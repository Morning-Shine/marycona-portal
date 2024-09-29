import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TModalProps } from './type';

const Modal: React.FC<TModalProps> = (props) => {
  const { children, onClose } = props;

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const onCloseHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);
    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = (
    <div
      className="fixed top-0 w-full h-full bg-[rgba(26,26,26,0.5)] dark:bg-[rgba(26,26,26,0.7)]"
      onClick={(e) => onCloseHandler(e)}
    >
      <div
        className={`flex w-min mt-32 mx-auto p-5 rounded-md relative
            bg-slate-200 dark:bg-slate-950
            text-amber-950 dark:text-amber-300
            `}
      >
        <div
          onClick={onClose}
          className="absolute top-2 right-2 text-black cursor-pointer dark:text-white hover:text-red-600 hover:dark:text-red-800"
        >
          &#215;
        </div>
        {children}
      </div>
    </div>
  );

  return <>{createPortal(render, document.body)}</>;
};

export default Modal;
