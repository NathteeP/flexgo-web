import React from 'react';
import Button from '../Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const CardHomePage = ({
  photo,
  name,
  province,
  district,
  description,
  price,
  distance,
  reviews,
  id,
}) => {
  const navigate = useNavigate();
  const onClickNavigate = () => navigate(`/accommodationDetail/${id}`);

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
            src={photo[0].imagePath}
          />
        </div>
        <div className='col-span-6 row-span-2 bg-red-300 rounded-tr-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[1].imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[2].imagePath}
          />
        </div>
        <div className='row-span-1 bg-red-300 rounded-bl-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[3].imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[4].imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[5].imagePath}
          />
        </div>
        <div className='row-span-1 col-span-2 bg-red-300'>
          <img
            className='object-cover w-full h-full'
            src={photo[6].imagePath}
          />
        </div>
        <div className='row-span-1 col-span-1 bg-red-300 rounded-br-[40px] overflow-hidden'>
          <img
            className='object-cover w-full h-full'
            src={photo[7].imagePath}
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
            <h1 className='text-4xl font-thin'>$ {price}</h1>
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
