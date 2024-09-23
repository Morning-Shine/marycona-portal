import { TLabelRating } from './type';

const LabelRating: React.FC<TLabelRating> = ({ rating }) => {
  let ratingBg;
  switch (true) {
    case rating >= 7:
      ratingBg = 'bg-green-400';
      break;
    case rating < 7 && rating >= 4:
      ratingBg = 'bg-yellow-400';
      break;
    case rating < 4 && rating > 0:
      ratingBg = 'bg-red-400';
      break;
    default:
      ratingBg = 'bg-gray-500';
      break;
  }

  return (
    <div className={`w-10 h-10 flex rounded-full ${ratingBg}  justify-center p-1 border border-white`}>
      <p className="text-2xl self-center text-white">{rating}</p>
    </div>
  );
};

export default LabelRating;
