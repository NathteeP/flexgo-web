import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  numberToDecimalString,
  numberToString,
} from '../../utils/numberToString';
import { Skeleton } from '@mui/material';

export default function BookingSummary() {
  const roomAccom = useSelector((state) => state.room.roomData);
  const accom = roomAccom?.accom;
  const { bookingDays } = useSelector(
    (state) => state.reservation.reservationData
  );
  const { clientFee } = useSelector((state) => state.reservation.feeData);
  const transactionData = useSelector((state) => state.payment.transactionData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // หน่วงเวลา 2 วินาที
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='lg:sticky lg:top-8 lg:p-8 p-2 bg-white shadow rounded'>
      {loading ? (
        <>
          <Skeleton variant='text' width={200} height={30} />
          <div className='flex mb-4'>
            <Skeleton
              variant='rectangular'
              width={224}
              height={126}
              className='rounded-xl'
            />
            <div className='flex flex-col ml-4'>
              <Skeleton variant='text' width={150} height={25} />
              <Skeleton variant='text' width={200} height={20} />
              <Skeleton variant='text' width={180} height={20} />
              <div className='flex mt-2'>
                <Skeleton variant='circular' width={30} height={30} />
                <Skeleton
                  variant='text'
                  width={100}
                  height={20}
                  className='ml-2'
                />
              </div>
            </div>
          </div>
          <div className='flex mb-4'>
            <Skeleton
              variant='rectangular'
              width={224}
              height={126}
              className='rounded-xl'
            />
            <div className='flex flex-col ml-4'>
              <Skeleton variant='text' width={150} height={25} />
              <Skeleton variant='text' width={200} height={20} />
              <Skeleton variant='text' width={180} height={20} />
              <Skeleton variant='text' width={200} height={20} />
              <Skeleton variant='text' width={150} height={20} />
            </div>
          </div>
          <Skeleton variant='rectangular' width='100%' height={1} />
          <div className='mt-8'>
            <div className='flex justify-between'>
              <Skeleton variant='text' width={150} height={20} />
              <Skeleton variant='text' width={100} height={20} />
            </div>
            <div className='flex justify-between'>
              <Skeleton variant='text' width={150} height={20} />
              <Skeleton variant='text' width={100} height={20} />
            </div>
            <div className='flex justify-between mt-2'>
              <Skeleton variant='text' width={150} height={25} />
              <Skeleton variant='text' width={100} height={25} />
            </div>
            <Skeleton variant='text' width={300} height={20} className='mt-2' />
          </div>
        </>
      ) : (
        <>
          <h2 className='text-xl text-fg-text-black font-semibold mb-4'>
            Booking Summary
          </h2>
          <div className='flex mb-4 transition-all duration-500'>
            <img
              src={accom?.accomPhoto}
              className='w-[24vw] lg:w-56 h-full rounded-xl'
            />
            <div className='flex flex-col ml-4'>
              <h3 className='text:sm lg:text-lg text-fg-text-black font-semibold'>
                {accom?.name}
              </h3>
              <p className='text-fg-text-black lg:text-base text-[10px]'>
                {accom?.address} {accom?.district} {accom?.province}
              </p>
              <div className='flex -translate-x-2 lg:translate-x-0'>
                <div className='lg:scale-100 scale-50'>
                  <svg
                    viewBox='0 0 24 24'
                    width='30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z'
                        fill='#ffe27a'
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className='mt-2 text-[12px] lg:text-base'>
                  <p>
                    {accom?.review.overAllReview} ({accom?.review.count}{' '}
                    reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex mb-4 items-center'>
            <img
              src={roomAccom?.roomPhoto}
              className='w-[24vw] lg:w-56 h-full rounded-xl'
            />
            <div className='flex flex-col ml-4 text-fg-text-black '>
              <h4 className='text:sm lg:text-lg text-fg-text-black font-semibold'>
                {roomAccom.roomType}
              </h4>
              <div className='md:text-base text-[12px]'>
                {roomAccom.name}
                {roomAccom.roomBed &&
                  roomAccom.roomBed.map((el) => (
                    <p key={el.bedType.name}>
                      {el.amount} {el.bedType.name}
                    </p>
                  ))}
                <p>{roomAccom.size} sq.m.</p>
                <p>THB {numberToString(roomAccom.price)} / Per night</p>
              </div>
            </div>
          </div>
          <hr />
          <div className='mt-8'>
            <div className='flex justify-between text-fg-text-black'>
              <p>Room price (1 room x {bookingDays} nights):</p>
              <p>THB {numberToDecimalString(roomAccom.price * bookingDays)}</p>
            </div>
            <div className='flex justify-between text-fg-text-black'>
              <p>Service fee:</p>
              <p>THB {numberToDecimalString(transactionData.serviceFee)}</p>
            </div>
            <div className='flex justify-between mt-2 text-lg font-semibold'>
              <p>Total Payment:</p>
              <p>THB {numberToDecimalString(transactionData.netPrice)}</p>
            </div>
            <div className='mt-2'>
              <small className='text-fg-text-black'>
                Included in price: Service charge {clientFee * 100}%, Tax 7%
              </small>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
