import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ProductCard = ({ title, price, distance, rating, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='relative max-w-xs rounded-xl overflow-hidden shadow-lg my-2'>
      <img className='w-full' src={imageUrl} alt={title} />
      <div className='absolute top-0 left-0 bg-black bg-opacity-30 mt-2 ml-2 px-1 py-1 rounded-lg'>
        <div className='font-light text-white text-sm'>{title}</div>
      </div>
      <div className='absolute bottom-0 right-0 bg-black bg-opacity-30 px-1 py-1 mb-8 mr-1 rounded-lg -translate-y-1'>
        <p className='font-light text-white text-sm'>{price}</p>
      </div>

      <div className='absolute bottom-0 left-0 mb-7 ml-0.5'>
        <button
          onClick={toggleFavorite}
          className='bg-black bg-opacity-20  rounded-full p-1 shadow-lg -translate-y-2'
        >
          <div></div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill={isFavorite ? 'red' : 'white'}
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 '
          >
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              stroke='none'
              fill={isFavorite ? 'red' : 'white'}
            />
          </svg>
        </button>
      </div>

      <div className='flex justify-between'>
        <div className='ml-2 my-2 '>
          <Stack spacing={1}>
            <Rating
              name='half-rating'
              defaultValue={2.5}
              precision={0.5}
              className='text-sm'
            />
          </Stack>
        </div>
        <span className='inline-block  px-2 py-1 text-sm font-medium text-gray-700'>
          {distance}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
