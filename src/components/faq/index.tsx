import Modal from 'components/modal';
import { useState } from 'react';
import FaqInfo from './components/FaqInfo';

const Faq: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => {
          setIsModalVisible(true);
        }}
        className="w-7 h-7 p-1 rounded-full cursor-pointer bg-amber-300 dark:bg-amber-600"
      >
        <img
          src={require('assets/images/faq.png')}
          alt="faq"
        />
      </div>
      {isModalVisible && (
        <Modal
          children={<FaqInfo/>}
          onClose={() => {
            setIsModalVisible(false);
          }}
        />
      )}
    </>
  );
};

export default Faq;
