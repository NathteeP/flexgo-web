import React from 'react';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import FilterBar from '../components/FilterBar';
import CardHomePage from '../components/CardHomePage';
import Button from '../components/Button';
import Review from '../components/Review';

const Homepage = () => {
  return (
    <>
      {/* Hero Part */}
      <iframe
        src='https://my.spline.design/untitled-6b21d776b97e21ea55f29b4d7bd83761/'
        frameBorder='0'
        width='100%'
        height='100%'
        className='w-[1000px] md:w-[1000px] lg:w-screen h-[1700px] -translate-y-[540px] absolute z-0'
      ></iframe>
      <div className='absolute z-50 bottom-[-370px] w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
      <div className='absolute z-50 bottom-[-370px] w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>

      <div className='relative z-50 w-[700px] md:w-[700px] lg:w-[90%] h-[830px] mx-auto my-2 border-white border-[2px] rounded-[40px] pointer-events-none'>
        <div className='flex flex-col'>
          <div className='mx-24 mt-32 flex flex-col'>
            <div className='mb-8 overflow-hidden w-[600px] md:w-[600px] lg:w-[600px]'>
              <div className='text-[64px] font-bold mb-4 text-fg-text-black w-[600px] md:w-[600px] lg:w-[600px]'>
                FIND YOUR OWN HAPPINESS WITH US
              </div>
              <div className='text-sm font-thin'>
                Discover the ultimate solution for finding nearby accommodations
                with FlexGo. Combining the best features of Airbnb, Grab, Agoda,
                and Booking.com, we offer a seamless experience for booking and
                enjoying your stay. Whether you're looking for a cozy apartment
                or a luxury hotel, FlexGo makes travel planning effortless and
                efficient.
              </div>
            </div>
            <div className='mt-6 border-white border-[2px] h-[190px] rounded-[40px] bg-white/40 flex justify-center items-center'>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Accom Recommendation Part */}
      <div className='relative z-50 mt-32 '>
        <Carousel />
      </div>
      <div className='flex justify-center flex-col items-center text-fg-text-black mt-12 '>
        <h1 className='text-[38px] font-bold'>THIS IS OUR</h1>
        <h1 className='text-[38px] font-bold'>RECOMMENDATION</h1>
        <h1 className='text-[16px] font-light w-[50%] text-center mt-5 mb-24'>
          Relaxation is an art, and we believe in crafting the perfect
          experience for you. Our carefully selected accommodations provide a
          harmonious blend of comfort and style, each situated in prime
          locations. Whether you seek the serenity of a scenic view or the
          convenience of a central spot, we have the perfect place to match your
          lifestyle and desires. Let your stay be a memorable escape where every
          moment is designed to refresh and rejuvenate you.
        </h1>
      </div>

      {/* Main Content */}
      <div className='w-screen flex flex-col items-center relative'>
        <div className='w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-10 cursor-pointer'>
          <FilterBar />
        </div>
        <div className='w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-5 cursor-pointer'>
          <CardHomePage />
        </div>
        <div className='w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-5 cursor-pointer'>
          <CardHomePage />
        </div>
        <div className='w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-5 cursor-pointer'>
          <CardHomePage />
        </div>
        <div className='w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-5 pointer-events-none '>
          <CardHomePage />
        </div>
        <div className='absolute z-20 bottom-0 w-full h-[500px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-20 bottom-0 w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-20 bottom-0 w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <Button
          className='absolute z-30 bottom-0 w-[25%] h-[58px] text-white hover:bg-fg-primary-02 text-xl'
          variant='contained'
        >
          See all Accommodation
        </Button>
      </div>

      {/* Review Part */}
      <div className='relative flex flex-col'>
        <div>
          <h1 className='text-[50px] font-bold text-fg-primary-01 flex justify-center'>
            OUR REVIEW
          </h1>
        </div>
        <div>
          <Review direction='right' />
        </div>
        <div className=''>
          <Review direction='left' />
        </div>
        <Button
          className='relative z-30 bottom-0 w-[25%] h-[58px] text-white hover:bg-fg-primary-02 text-xl m-auto my-20'
          variant='contained'
        >
          Become our Family
        </Button>
      </div>
    </>
  );
};

export default Homepage;
