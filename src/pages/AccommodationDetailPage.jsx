import React from 'react';
import FilterBar from '../components/FilterBar';
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

const AccommodationDetailPage = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <div className='p-8 mx-16 text-fg-text-black relative'>
        <div>
          <p>Breadcrum / Breadcrum</p>
        </div>
        <div className='my-6'>
          <FilterBar />
        </div>

        <div className=''></div>
      </div>

      {/* ภาพปก */}
      <div className='h-[480px] w-screen border-[2px] text-fg-text-black relative'>
        <div className='relative flex items-center overflow-hidden'>
          <img
            src={randomImage}
            alt='Cover'
            className='z-0 absolute grayscale-[60%] hover:grayscale-0  transition-all duration-500 ease-in-out'
          />
          {/* div profile host */}
          <div className='z-10 w-[50%] h-[100%] relative p-10 flex '>
            <div className='bg-white/50 backdrop-blur w-[600px] h-[400px] rounded-[40px] flex py-10 px-4 cursor-pointer'>
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
      <div className='relative mt-8 mx-16 p-8 h-full rounded-[50px]'>
        <div className='relative'>
          <Album />
        </div>
      </div>
    </>
  );
};

export default AccommodationDetailPage;
