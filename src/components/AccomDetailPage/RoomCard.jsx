import React from 'react';
import guestLogo from '../../assets/images/guestIcon/guest.png';
import Button from '../Button';

const roomSeeding = [
  {
    name: 'A201',
    roomType: 'Deluxe',
    bedRoom: 1,
    bathRoom: 1,
    size: 20,
    capacity: 3,
    accomId: 1,
    // ขาด
    roomImage:
      'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/akqcskbuwlvmt16owy2b.webp',
    price: `3,999`,
  },
  {
    name: 'A202',
    roomType: 'Two Bedroom',
    bedRoom: 2,
    bathRoom: 1,
    size: 40,
    capacity: 2,
    accomId: 1,
    // ขาด
    roomImage:
      'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/akqcskbuwlvmt16owy2b.webp',
    price: `3,999`,
  },
  {
    name: 'A202',
    roomType: 'Two Bedroom',
    bedRoom: 2,
    bathRoom: 1,
    size: 40,
    capacity: 2,
    accomId: 1,
    // ขาด
    roomImage:
      'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/akqcskbuwlvmt16owy2b.webp',
    price: `3,999`,
  },
  {
    name: 'A202',
    roomType: 'Two Bedroom',
    bedRoom: 2,
    bathRoom: 1,
    size: 40,
    capacity: 2,
    accomId: 1,
    // ขาด
    roomImage:
      'https://res.cloudinary.com/dtlwfpitf/image/upload/v1719561701/accomAlbumSeed/akqcskbuwlvmt16owy2b.webp',
    price: `3,999`,
  },
];

const RoomCard = () => {
  return (
    <div className='p-4 '>
      <div className='grid grid-cols-10 grid-rows-1 gap-4 px-16 bg-fg-primary-02 h-[60px] items-center rounded-[20px]'>
        <div className='col-span-5 text-white text-xl ml-4'>Room type</div>
        <div className='col-span-2 col-start-6 text-white text-xl ml-20'>
          Guest
        </div>
        <div className='col-span-3 col-start-8'></div>
      </div>

      {roomSeeding.map((item, index) => (
        <div className='grid grid-cols-9 grid-rows-4 gap-4 px-16 mt-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-[20px] text-fg-text-black'>
          <div className='col-span-5 row-span-4 flex gap-6 border-r-[2px] mr-4 '>
            <div>
              <img
                src={item.roomImage}
                alt=''
                className='w-[250px] h-[200px] object-cover rounded-[40px]'
              />
            </div>
            <div className='flex flex-col '>
              <div className='text-2xl font-semibold '>{item.roomType}</div>
              <small className='font-light mt-2'>{item.bedRoom} Bedroom</small>
              <small className='font-light'>{item.size} Sqm.</small>
              <h2 className='text-xl mt-6'>THB {item.price} Per night</h2>
            </div>
          </div>
          <div className='col-span-2 row-span-4 col-start-6 border-r-[2px] mr-4'>
            <div className='flex flex-wrap gap-1'>
              {Array.from({ length: item.capacity }, (_, i) => (
                <img key={i} src={guestLogo} alt='' className='w-6 h-6' />
              ))}
            </div>
          </div>
          <div className='col-span-2 row-span-4 col-start-8 h-full flex justify-end items-end pb-2'>
            <Button
              variant='contained'
              className='w-[200px] h-[48px] hover:bg-fg-primary-02'
            >
              Booking
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCard;
