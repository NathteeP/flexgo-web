import React from 'react';
import FilterBar from '../components/FilterBar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import c01 from '../assets/images/coverImage/01.png';
import c02 from '../assets/images/coverImage/02.png';
import c03 from '../assets/images/coverImage/03.png';
import c04 from '../assets/images/coverImage/04.png';
import c05 from '../assets/images/coverImage/05.png';
import c06 from '../assets/images/coverImage/06.png';
import c07 from '../assets/images/coverImage/07.png';
import c08 from '../assets/images/coverImage/08.png';
import c09 from '../assets/images/coverImage/09.png';
import c10 from '../assets/images/coverImage/10.png';
import Avatar from '../components/Avatar';
import Album from '../components/AccomDetailPage/Album';
import Amenities from '../components/AccomDetailPage/Amenities'; // import Amenities
import Button from '../components/Button';
import MapNearByPlace from '../components/AccomDetailPage/MapNearByPlace';
import RoomCard from '../components/AccomDetailPage/RoomCard';
import Review from '../components/Review';

const images = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10];

const HostProfile = {
  name: 'Aerichan U.',
  id: '123123123',
  rating: '4.8',
  review: '301',
  hosting: '3',
  language: 'English and Thai',
  location: 'Bangkok, Thailand',
  profileDetail: `I'm Aerichan , your host, and I've been living in this vibrant city for over a decade. I love sharing my cozy space with travelers from around the world. Our house is located in a serene neighborhood, just a stone's throw away from all the bustling attractions.

  You'll have access to a comfortable room with modern amenities, and I'll be here to provide you with local tips and hidden gems. Whether you're here for business or leisure, my home is the perfect retreat.
  
  Come experience the warmth of Thai hospitality and make your stay in Bangkok truly unforgettable. 
  
  Looking forward to hosting you soon!`,
};

const accomSeeding = [
  {
    userId: 1,
    name: 'Best Western Plus Wanda Grand Hotel',
    lat: '13.9037776',
    lng: '100.5281616',
    address: '111 M.4 Chaeng Watthana Rd Tambon Khlong Klua',
    province: 'Nonthaburi',
    district: 'Pak Kret',
    type: 'HOTEL',
    status: 'ACTIVE',
    description:
      "In addition to the standard of SHA, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Conveniently situated in the Don Mueang International Airport part of Bangkok, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Wat Phra Chetuphon. Rated with 4 stars, this high-quality property provides guests with access to restaurant and fitness center on-site.",
    rating: '4.5',
  },
];

const houseRulesSeeding = [
  {
    checkIn: 'From 15.00 to 00.00',
    checkOut: 'Available 24 hours',
    petsRule: 'Pets are not allowed',
    ageRule: 'There is no age requirement for check-in',
    cancelPolicy: 'STRICT',
    accomId: 1,
  },
];

const AccommodationDetailPage = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <div className=' p-8 mx-16 text-fg-text-black relative'>
        <div>
          <p>Breadcrum / Breadcrum</p>
        </div>
        <div className='my-6'>
          <FilterBar />
        </div>

        <div className=''></div>
      </div>

      {/* ภาพปก */}
      <div className='h-[480px] w-full border-[2px] text-fg-text-black relative '>
        <div className='relative flex items-center overflow-hidden'>
          <img
            src={randomImage}
            alt='Cover'
            className='z-0 h-full object-cover w-full absolute grayscale-[60%] hover:grayscale-0  transition-all duration-500 ease-in-out'
          />
          {/* div profile host */}
          <div className='z-10 w-[650px] h-[100%] relative p-10 flex object-cover'>
            <div className='bg-white/50 backdrop-blur w-[600px] h-[400px] rounded-[40px] flex py-10 px-4 cursor-pointer '>
              <div className='w-[70%] h-[100%] border-r-[2px] border-fg-text-black/20 flex flex-col items-center justify-center'>
                <Avatar size='220' />
                <div className='text-3xl font-semibold mt-6'>
                  {' '}
                  {HostProfile.name}
                </div>
              </div>
              <div className='w-[30%] h-[100%] mx-5 flex flex-col items-center'>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {HostProfile.review}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {HostProfile.rating}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%]  flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {HostProfile.hosting}
                  </div>
                  <small>Year Hosting</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* album ภาพ */}
      <div className='relative mt-8 mx-16 p-8 h-full rounded-[50px]'>
        <div className='relative'>
          <Album />
        </div>
      </div>

      {/* detail accom */}
      {/* left Part */}
      <div className='mx-16 py-8 px-20  flex '>
        <div className='w-[65%] '>
          <div className='flex items-center gap-4'>
            <div className='text-3xl font-semibold'>{accomSeeding[0].name}</div>
            <div>
              <Stack spacing={1}>
                <Rating
                  name='half-rating-read'
                  defaultValue={parseFloat(accomSeeding[0].rating)}
                  precision={0.5}
                  readOnly
                  className='flex translate-x-1 -translate-y-[1px]'
                />
              </Stack>
            </div>
          </div>
          <div className='text-sm font-semibold'>{accomSeeding[0].address}</div>
          <div className='h-[2px] bg-fg-grey/60 mx-14 my-8'></div>

          <div className='mr-10 font-light h-[300px]'>
            {accomSeeding[0].description}
          </div>

          {/* amenities */}
          <div className='text-2xl'>
            <h1>What this place offers</h1>
            <div className='w-full overflow-hidden mt-4'>
              <Amenities />
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className='w-[35%] h-[720px] border-[2px] p-4 rounded-[40px]'>
          {/* แผนที่ */}
          <MapNearByPlace />
        </div>
      </div>

      {/* Room part */}
      <div className='p-8 mx-36 '>
        <div className='border-t-[2px] my-16 mx-28'></div>
        <FilterBar />
        <div>
          <RoomCard />
        </div>
      </div>

      {/* Review part */}

      <div className='p-8 mx-36 border-b-[2px] pb-14 mb-6'>
        <h1 className='text-3xl'>Reviews</h1>
        <div className='relative'>
          <div className='absolute z-20 left-0 w-[300px] h-[400px] bg-gradient-to-r from-fg-white/100 pointer-events-none'></div>
          <div className='absolute z-20 right-0 w-[300px] h-[400px] bg-gradient-to-l from-fg-white/100 pointer-events-none'></div>
          <Review />
        </div>
      </div>

      {/* House Rules */}

      <div className='p-8 mx-36  pb-14 mb-6  '>
        <div className='text-3xl mt-2 mb-10'>
          <h1>House rules</h1>
        </div>
        <div className='grid grid-cols-7 grid-rows-5 gap-4 justify-between border-[2px] rounded-[40px] px-24 py-8 font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='col-span-2 '>Check-In</div>
          <div className='col-span-5 col-start-3 font-light'>
            {houseRulesSeeding[0].checkIn}
          </div>
          <div className='col-span-2 row-start-2'>Check-Out</div>
          <div className='col-span-5 col-start-3 row-start-2 font-light'>
            {houseRulesSeeding[0].checkOut}
          </div>
          <div className='col-span-2 row-start-3'>Cancellation</div>
          <div className='col-span-5 col-start-3 row-start-3 font-light'>
            {houseRulesSeeding[0].cancelPolicy}
          </div>
          <div className='col-span-2 row-start-4'>Pets</div>
          <div className='col-span-5 col-start-3 row-start-4 font-light'>
            {houseRulesSeeding[0].petsRule}
          </div>
          <div className='col-span-2 row-start-5'>Age restriction</div>
          <div className='col-span-5 col-start-3 row-start-5 font-light'>
            {houseRulesSeeding[0].ageRule}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationDetailPage;
