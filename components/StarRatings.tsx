'use client'
import Star from "./homepage/Star";

const StarRating = ({ rating ,filled  } :any) => {

  return (
    <div  className='flex items-center gap-x-[2px]'>
      {Array.from({ length: rating }, (_, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

export default StarRating;