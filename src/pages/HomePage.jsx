import React, { useEffect, useRef, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Homepage/Carousel';
import FilterBar from '../components/FilterBar';
import CardHomePage from '../components/Homepage/CardHomePage';
import Button from '../components/Button';
import Review from '../components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailAccom } from '../store/slices/accoms-slice';
import { useNavigate } from 'react-router-dom';
import { getUserCurrentLocation } from '../store/slices/searchInfo-slice';
import MockupReview from '../components/Homepage/MockupReview';

const Homepage = () => {
  const { isLoading, error, accomsList } = useSelector((state) => state.accoms);
  const dispatch = useDispatch();
  const { userLocation, date } = useSelector((state) => state.info);

  const { authUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const fadeInCarouselRef = useRef(null);
  const fadeInCardRefs = useRef([]);

  // Get User location and Set state in searchInfo-slice
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(getUserCurrentLocation({ lat: latitude, lng: longitude }));
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true }
      );
    }
  }, [dispatch]);

  // Fetching all available Accom with/without userLocation
  useEffect(() => {
    dispatch(fetchAvailAccom({ ...userLocation.coordinate, ...date }));
  }, [dispatch, userLocation, date]);

  // Observer for Carousel to add fade animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
            observer.unobserve(entry.target); // Stop observing after adding the animation
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (fadeInCarouselRef.current) {
      observer.observe(fadeInCarouselRef.current);
    }

    return () => {
      if (fadeInCarouselRef.current) {
        observer.unobserve(fadeInCarouselRef.current);
      }
    };
  }, []);

  // Observer for CardHomePage to add fade animation
  const observeCards = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInCardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      fadeInCardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  useEffect(() => {
    observeCards();
  }, [accomsList, observeCards]);

  const onClickNavigate = (to) => navigate(to);

  //===================WISHLIST LOGIC=======================
  
  const allWishList = useSelector((state) => state.user.authUser?.wishList);

  const cloneAccomsList = accomsList.map((el) => {
    return {
      ...el,
      isOnUserWishList: Boolean(
        allWishList?.find((wlEl) => wlEl.accomId === el.id)
      ),
    };
  });


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

      <div className='relative z-30 w-[700px] md:w-[700px] lg:w-[90%] h-[830px] mx-auto my-2 border-white border-[2px] rounded-[40px] pointer-events-none animate-fade delay-[4000ms]'>
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
            <div className='mt-6 border-white border-[2px] h-[190px] rounded-[40px] bg-white/40 flex justify-center items-center pointer-events-none'>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>

      {/* Accom Recommendation Part */}
      <div className='relative z-50 mt-32' ref={fadeInCarouselRef}>
        <Carousel accoms={accomsList} />
      </div>
      <div className='relative'>
        <div className='absolute z-10 bottom-[400px] w-full h-[420px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-10 bottom-[400px] w-full h-[420px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-10 bottom-[400px] w-full h-[420px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-10 bottom-[300px] w-full h-[420px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
      </div>
      <div className='flex justify-center flex-col items-center text-fg-text-black mt-12'>
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
        {cloneAccomsList?.length >= 1
          ? cloneAccomsList?.map((item, index) => (
              <div
                key={item.id}
                className='w-[768px] transition transform hover:scale-[103%] md:w-[768px] lg:w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[20px] mb-5 cursor-pointer '
                ref={(el) => (fadeInCardRefs.current[index] = el)}
              >
                <CardHomePage
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  province={item.province}
                  district={item.district}
                  description={item.description}
                  price={item.price}
                  distance={item.distance}
                  reviews={item.reviews}
                  photo={item.accomPhoto}
                  isOnUserWishList={item.isOnUserWishList}
                />
              </div>
            ))
          : null}
        <div className='absolute z-20 bottom-0 w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-20 bottom-0 w-full h-[300px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <div className='absolute z-20 bottom-0 w-full h-[500px] bg-gradient-to-t from-fg-white/100 pointer-events-none'></div>
        <Button
          onClick={() => onClickNavigate('/searchList')}
          className='absolute z-30 bottom-0 w-[25%] h-[58px] text-white hover:bg-fg-primary-02 text-xl'
          variant='contained'
        >
          See all Accommodation
        </Button>
      </div>

      {/* Review Part */}
      <div className='relative flex flex-col my-44'>
        <div>
          <h1 className='text-[50px] font-bold text-fg-primary-01 flex justify-center'>
            OUR REVIEW
          </h1>
        </div>
        <div>
          <MockupReview direction='right' />
        </div>
        <div className=''>
          <MockupReview direction='left' />
        </div>
        <Button
          className='relative z-30 bottom-0 w-[25%] h-[58px] mt-44 text-white hover:bg-fg-primary-02 text-xl m-auto my-20'
          variant='contained'
        >
          Become our Family
        </Button>
      </div>
    </>
  );
};

export default Homepage;
