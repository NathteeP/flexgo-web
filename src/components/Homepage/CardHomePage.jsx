import React from 'react';
import Button from '../Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import wishListApi from '../../api/wishlist';

const CardHomePage = ({
  photo = [],
  name,
  province,
  district,
  description,
  price,
  distance,
  reviews,
  id,
  isOnUserWishList,
}) => {
  const navigate = useNavigate();
  const onClickNavigate = () => navigate(`/accommodationDetail/${id}`);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isOnUserWishList);
  }, [isOnUserWishList]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      wishListApi.removeFromWishList(id);
    } else {
      wishListApi.addToWishList(id);
    }
  };

  return (
    <div
      onClick={onClickNavigate}
      id={id}
      className='flex h-[450px] px-10 py-4 gap-8 relative cursor-pointer'
    >
      <div className='w-[50%] grid grid-rows-3 grid-cols-8 gap-2'>
        <div className='col-span-2 bg-red-300 rounded-tl-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[0]?.imagePath}
          />
        </div>
        <div className='col-span-6 row-span-2 bg-red-300 rounded-tr-[40px] overflow-hidden relative'>
          <div className='absolute top-6 right-6 mb-7 ml-0.5 z-50 scale-90 rounded-full hover:scale-100 active:scale-75 transition-all duration-300 opacity-60 hover:opacity-100'>
            <button
              onClick={toggleFavorite}
              className='bg-black bg-opacity-20  rounded-full p-1 shadow-lg hover:bg-opacity-30 '
            >
              <div></div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill={isFavorite ? 'red' : 'white'}
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-12 h-12 '
              >
                <path
                  d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                  stroke='none'
                  fill={isFavorite ? 'red' : 'white'}
                  className=''
                />
              </svg>
            </button>
          </div>

          <img
            className='object-cover w-full h-full'
            src={photo[1]?.imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[2]?.imagePath}
          />
        </div>
        <div className='row-span-1 bg-red-300 rounded-bl-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[3]?.imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[4]?.imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[5]?.imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[6]?.imagePath}
          />
        </div>
        <div className='row-span-1 col-span-1 bg-red-300 rounded-br-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[7]?.imagePath}
          />
        </div>
      </div>

      {/* right detail part */}
      <div className='w-[50%] relative'>
        <div>
          <h1 className='text-xl md:text-xl lg:text-4xl text-fg-text-black font-medium w-[80%] mt-4'>
            {name}
          </h1>
          <h2 className='text-sm md:text-sm text-xl text-fg-text-black mb-4'>
            {district}, {province}
          </h2>
          <h3 className='w-[90%] font-light md:h-[120px] md:overflow-hidden md: text-sm'>
            {description}
          </h3>
        </div>
        <div className='flex justify-between items-end w-[90%]'>
          <div className=''>
            <h3 className='flex items-center mt-10'>
              Rating: {reviews?.overAllReview}
              <Stack spacing={1}>
                <Rating
                  name='half-rating-read'
                  value={reviews?.overAllReview || 0}
                  precision={0.5}
                  readOnly
                  className='flex translate-x-1 -translate-y-[1px]'
                />
              </Stack>
            </h3>
            <h3>Distance: {distance} km.</h3>
          </div>
          <div>
            <h1 className='text-4xl font-thin'>THB {price}</h1>
          </div>
        </div>
        <div className='flex justify-end w-[90%] mt-10 absolute bottom-8'>
          <Button
            className='h-[48px] hover:bg-fg-primary-02 w-[140px]'
            variant='contained'
          >
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardHomePage;
