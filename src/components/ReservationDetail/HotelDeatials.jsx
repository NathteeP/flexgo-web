import React from 'react';

const HotelDetails = ({
  hotelName,
  adults,
  roomType,
  nights,
  checkInDate,
  checkOutDate,
  price,
  tax,
  totalPrice,
  imageSrc,
}) => {
  return (
    <div className='p-6 flex mx-6'>
      <div className='flex-shrink-0'>
        <img
          className='h-48 w-full object-cover rounded-lg'
          src={imageSrc}
          alt={hotelName}
        />
      </div>
      <div className='ml-6 flex-1'>
        <div className='mt-4 flex items-center '>
          <div className='w-[50%] border-r-[2px] border-gray-300 px-2'>
            <p className='text-gray-500'>{adults} adults</p>
            <p className='text-gray-500'>1x {roomType}</p>
            <p className='text-gray-500'>{nights} night</p>
            <div className='mt-2 flex border-[2px] border-fg-grey/50 p-2 rounded-xl w-[73%]'>
              <div className='text-center mr-4'>
                <p className='text-gray-500'>Check in</p>
                <p className='font-bold text-gray-800'>{checkInDate.day}</p>
                <p className='text-gray-500'>{checkInDate.month}</p>
              </div>
              <div className='text-center'>
                <p className='text-gray-500'>Check out</p>
                <p className='font-bold text-gray-800'>{checkOutDate.day}</p>
                <p className='text-gray-500'>{checkOutDate.month}</p>
              </div>
            </div>
          </div>
          <div className='w-[50%] flex flex-col justify-end text-end'>
            <p className='text-gray-500'>PRICE</p>
            <p className='text-black'>${price}</p>
            <p className='text-gray-500'>10% Tax</p>
            <p className='text-black'>${tax}</p>
            <p className='font-bold text-gray-800 mt-2'>Total Price</p>
            <p className='text-xl font-bold text-gray-800'>${totalPrice}</p>
          </div>
        </div>
        <div className='flex justify-end'>
          <p className='mt-4 text-green-500 font-semibold'>
            Confirmation Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
