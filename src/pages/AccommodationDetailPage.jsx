import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
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
import { fetchAccomDetail } from '../store/slices/accomDetail-slice';
import { fetchAvailRoomListByAccomId } from '../store/slices/rooms-slice';
import { resetReservationSlice } from '../store/slices/reservation-slice';
import wishListApi from '../api/wishlist';
import cancelPolicy from '../constant/cancelPolicy';

const images = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10];

const AccommodationDetailPage = () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const { accom_id } = useParams();
  const { roomList } = useSelector((state) => state.rooms);
  const { detail } = useSelector((state) => state.accom);
  const { date, capacity } = useSelector((state) => state.info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fadeInReviewRef = useRef(null);
  const fadeInHouseRulesRef = useRef(null);
  const fadeInRoomRef = useRef(null);
  const fadeInDetail = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนหน้าไปยังด้านบนสุด
    dispatch(fetchAccomDetail(accom_id));
    const data = {
      checkInDate: dayjs(date.checkInDate)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0)
        .toDate(),
      checkOutDate: dayjs(date.checkOutDate)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0)
        .toDate(),
      capacity: capacity.adults + capacity.children,
      accom_id,
    };
    dispatch(fetchAvailRoomListByAccomId(data));
    dispatch(resetReservationSlice());
  }, [dispatch, accom_id, date, capacity]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (fadeInReviewRef.current) {
      observer.observe(fadeInReviewRef.current);
    }

    if (fadeInRoomRef.current) {
      observer.observe(fadeInRoomRef.current);
    }

    if (fadeInHouseRulesRef.current) {
      observer.observe(fadeInHouseRulesRef.current);
    }

    if (fadeInDetail.current) {
      observer.observe(fadeInDetail.current);
    }

    return () => {
      if (fadeInReviewRef.current) {
        observer.unobserve(fadeInReviewRef.current);
      }

      if (fadeInRoomRef.current) {
        observer.unobserve(fadeInRoomRef.current);
      }

      if (fadeInHouseRulesRef.current) {
        observer.unobserve(fadeInHouseRulesRef.current);
      }

      if (fadeInDetail.current) {
        observer.unobserve(fadeInDetail.current);
      }
    };
  }, []);

  //toggle favorite
  const [isFavorite, setIsFavorite] = useState(false);
  const allWishList = useSelector((state) => state.user.authUser?.wishList);

  useEffect(() => {
    const isOnUserWishList = allWishList?.find(
      (el) => el.accomId === +accom_id
    );
    if (isOnUserWishList) setIsFavorite(true);
  }, [allWishList, accom_id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      wishListApi.removeFromWishList(accom_id);
    } else {
      wishListApi.addToWishList(accom_id);
    }
  };

  return (
    <>
      <div className='p-8 mx-16 text-fg-text-black relative'>
        <div className='flex gap-2'>
          <Link className='hover:underline' to='/'>
            Home
          </Link>
          <p>/</p>
          <Link className='hover:underline'>{detail?.accom?.name}</Link>
        </div>
        <div className='my-6'>
          <FilterBar />
        </div>
      </div>

      {/* ภาพปก */}
      <div className='h-[480px] w-full border-[2px] text-fg-text-black relative'>
        <div className='relative flex items-center overflow-hidden'>
          <img
            src={
              detail?.accomPhoto?.length >= 1
                ? detail.accomPhoto[Math.trunc(Math.random() * 10)]?.imagePath
                : randomImage
            }
            alt='Cover'
            className='z-0 h-full object-cover w-full absolute grayscale-[60%] hover:grayscale-0 transition-all duration-500 ease-in-out'
          />
          <div
            onClick={() => navigate(`/hostProfile/${detail?.accom.userId}`)}
            className='z-10 w-[650px] h-[100%] relative p-10 flex object-cover animate-fade'
          >
            <div className='bg-white/50 backdrop-blur w-[600px] h-[400px] rounded-[40px] flex py-10 px-4 cursor-pointer hover:scale-105 transition-all duration-500'>
              <div className='w-[70%] h-[100%] border-r-[2px] border-fg-text-black/20 flex flex-col items-center justify-center'>
                <Avatar src={detail?.user?.photo} size='220' />
                <div className='text-3xl font-semibold mt-6'>
                  {detail?.user?.name}
                </div>
              </div>
              <div className='w-[30%] h-[100%] mx-5 flex flex-col items-center'>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {detail?.reviews?.count}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {detail?.reviews?.overAllReview}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%] flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {detail?.hostDuration}
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
          <div className='absolute top-10 right-10 mb-7 ml-0.5 z-50'>
            <button
              onClick={toggleFavorite}
              className='bg-black bg-opacity-20  rounded-full p-1 shadow-lg hover:bg-opacity-30'
            >
              <div></div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill={isFavorite ? 'red' : 'white'}
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-12 h-12'
              >
                <path
                  d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                  stroke='none'
                  fill={isFavorite ? 'red' : 'white'}
                />
              </svg>
            </button>
          </div>
          <Album photos={detail?.accomPhoto} />
        </div>
      </div>

      {/* detail accom */}
      <div className='mx-16 py-8 px-20 flex' ref={fadeInDetail}>
        <div className='w-[65%]'>
          <div className='flex items-center gap-4'>
            <div className='text-3xl font-semibold'>{detail?.accom?.name}</div>
            <div>
              <Stack spacing={1}>
                <Rating
                  name='half-rating-read'
                  defaultValue={0}
                  value={detail?.reviews?.overAllReview || 0}
                  precision={0.5}
                  readOnly
                  className='flex translate-x-1 -translate-y-[1px]'
                />
              </Stack>
            </div>
          </div>
          <div className='text-sm font-semibold'>{detail?.accom?.address}</div>
          <div className='h-[2px] bg-fg-grey/60 mx-14 my-8'></div>
          <div className='mr-10 font-light h-[300px]'>
            {detail?.accom?.description}
          </div>
          <div className='text-2xl mt-10'>
            <h1>What this place offers</h1>
            <div className='w-full overflow-hidden mt-4'>
              <Amenities amenities={roomList?.amenities} />
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className='w-[35%] h-full border-[2px] p-4 rounded-[40px]'>
          <div className=''>
            <MapNearByPlace 
            nearbyPlace={detail?.nearbyPlace}
            accom={detail.accom} 
            />
          </div>
        </div>
      </div>

      {/* Room part */}
      <div className='p-8 mx-36'>
        <div className='border-t-[2px] my-16 mx-28'></div>
        <FilterBar />
        <div ref={fadeInRoomRef}>
          <RoomCard room={roomList?.room} />
        </div>
      </div>

      {/* Review part */}
      <div
        className='p-8 mx-36 border-b-[2px] pb-14 mb-6'
        ref={fadeInReviewRef}
      >
        <h1 className='text-3xl'>Reviews</h1>
        <div className='relative'>
          <div className='absolute z-20 left-0 w-[300px] h-[400px] bg-gradient-to-r from-fg-white/100 pointer-events-none'></div>
          <div className='absolute z-20 right-0 w-[300px] h-[400px] bg-gradient-to-l from-fg-white/100 pointer-events-none'></div>
          <Review reviews={detail?.featureReviews} />
        </div>
      </div>

      {/* House Rules */}
      <div className='p-8 mx-36 pb-14 mb-6' ref={fadeInHouseRulesRef}>
        <div className='text-3xl mt-2 mb-10'>
          <h1>House rules</h1>
        </div>
        <div className='grid grid-cols-7 grid-rows-5 gap-4 justify-between border-[2px] rounded-[40px] px-24 py-8 font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='col-span-2'>Check-In</div>
          <div className='col-span-5 col-start-3 font-light'>
            {detail?.houseRule?.checkIn}
          </div>
          <div className='col-span-2 row-start-2'>Check-Out</div>
          <div className='col-span-5 col-start-3 row-start-2 font-light'>
            {detail?.houseRule?.checkOut}
          </div>
          <div className='col-span-2 row-start-3'>Cancellation</div>
          <div className='col-span-5 col-start-3 row-start-3 font-light'>
            {cancelPolicy[detail?.houseRule?.cancelPolicy]}
          </div>
          <div className='col-span-2 row-start-4'>Pets</div>
          <div className='col-span-5 col-start-3 row-start-4 font-light'>
            {detail?.houseRule?.petsRule}
          </div>
          <div className='col-span-2 row-start-5'>Age restriction</div>
          <div className='col-span-5 col-start-3 row-start-5 font-light'>
            {detail?.houseRule?.ageRule}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationDetailPage;
