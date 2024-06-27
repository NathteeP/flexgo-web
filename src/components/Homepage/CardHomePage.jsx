import React from 'react';
import Button from '../Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CardHomePage = () => {
  return (
    <div className='flex   h-[450px] px-10 py-4 gap-8 relative'>
      {/* left album part */}
      <div className='w-[50%] grid grid-rows-3 grid-cols-8 gap-2'>
        <div class='col-span-2 bg-red-300 rounded-tl-[40px]'>01</div>
        <div class='col-span-6 row-span-2 bg-red-300 rounded-tr-[40px]'>02</div>
        <div class='row-span-1 col-span-2 bg-red-300'>04</div>
        <div class='row-span-1  bg-red-300 rounded-bl-[40px]'>05</div>
        <div class='row-span-1 col-span-2  bg-red-300'>06</div>
        <div class='row-span-1 col-span-2  bg-red-300'>07</div>
        <div class='row-span-1 col-span-2  bg-red-300'>08</div>
        <div class='row-span-1 col-span-1  bg-red-300 rounded-br-[40px]'>
          08
        </div>
      </div>

      {/* right detail part */}
      <div className='w-[50%] relative'>
        <div>
          <h1 className='text-xl md:text-xl lg:text-4xl text-fg-text-black font-medium w-[80%] mt-4'>
            Espana Vacation Residence Jomtien & Yahaha
          </h1>
          <h2 className='text-sm md:text-sm text-xl text-fg-text-black mb-4'>
            Pattaya, Chonburi
          </h2>
          <h3 className='w-[90%] font-light md:h-[120px] md:overflow-hidden md: text-sm'>
            Espana Vacation Residence Jomtien & Yahaha is a recently renovated
            apartment in Pattaya South where guests can make the most of its
            pool with a view and garden. This property offers access to a
            balcony, free private parking, and free Wifi. The accommodation
            provides an elevator, full-day security, and currency exchange for
            guests.
          </h3>
        </div>
        <div className='flex justify-between items-end w-[90%] '>
          <div className=''>
            <h3 className='flex items-center mt-10'>
              Rating:{' '}
              <Stack spacing={1}>
                <Rating
                  name='half-rating-read'
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                  className='flex translate-x-1 -translate-y-[1px]'
                />
              </Stack>
            </h3>
            <h3>Distance: 0.7 km.</h3>
          </div>
          <div>
            <h1 className='text-4xl font-thin '>$ 4,999</h1>
          </div>
        </div>
        <div className='flex justify-end w-[90%] mt-10 absolute bottom-8'>
          <Button
            className='h-[48px]  hover:bg-fg-primary-02 w-[140px]'
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
