import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import wishListApi from '../api/wishlist';
import { useEffect } from 'react';

const ProductCard = ({
  id,
  title,
  price,
  distance,
  rating,
  imageUrl,
  isOnUserWishList,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(isOnUserWishList);
  }, [isOnUserWishList]);

  const navigate = useNavigate();

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      wishListApi.removeFromWishList(id);
    } else {
      wishListApi.addToWishList(id);
    }
  };

  const onClickNavigate = (to) => navigate(to);

  return (
    <div
      id={id}
      role='button'
      className='relative max-w-sm h-[235px] rounded-xl overflow-hidden shadow-lg my-2 transition-transform transform hover:scale-105'
      onClick={() => onClickNavigate(`/accommodationDetail/${id}`)}
    >
      <img className='w-full h-48  object-cover' src={imageUrl} alt={title} />
      <div className='absolute top-0 left-0 bg-black bg-opacity-30 mt-2 ml-2 px-1 py-1 rounded-lg'>
        <div className='font-light text-white text-sm'>{title}</div>
      </div>
      <div className='absolute bottom-0 right-0 bg-black bg-opacity-30 px-1 py-1 mb-10 mr-1 rounded-lg -translate-y-1'>
        <p className='font-medium text-white text-sm'>THB {price}</p>
      </div>

      <div className='absolute bottom-0 left-0 mb-9 ml-0.5'>
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

      <div className='flex justify-between items-center'>
        <div className='ml-2 mt-2 '>
          <Stack spacing={1}>
            <Rating
              name='half-rating'
              defaultValue={rating}
              precision={0.5}
              className='text-sm'
            />
          </Stack>
        </div>
        <span className='inline-block  px-2 py-1 mt-2 text-sm font-medium text-gray-700'>
          {distance} km.
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
