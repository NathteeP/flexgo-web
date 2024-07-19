import React, { useEffect, useRef } from 'react';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from './Avatar';

const Review = ({ direction = 'right', reviews = [] }) => {
  const userReviews = [
    {
      name: 'Oiled',
      avatar: Avatar,
      star: 4.5,
      comment:
        'I like animal I like animal I like animal I like animal I like animal I like animal I like animal I like animal I like animal I like animal I like animal ',
    },
    {
      name: 'Champ',
      avatar: Avatar,
      star: 4.0,
      comment:
        'I like feel fans I like feel fans I like feel fans I like feel fans I like feel fans I like feel fans I like feel fans I like feel fans I like feel fans ',
    },
    {
      name: 'IT',
      avatar: Avatar,
      star: 5.0,
      comment:
        'I like git merge I like git merge I like git merge I like git merge I like git merge I like git merge I like git merge I like git merge I like git merge ',
    },
    {
      name: 'BM',
      avatar: Avatar,
      star: 4.5,
      comment:
        'I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets I like sweets ',
    },
    {
      name: 'Pluemza',
      avatar: Avatar,
      star: 0.5,
      comment:
        'I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว I like ชายสี่หมี่เกี๊ยว ',
    },
  ];
  const reviewContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const reviewContainer = reviewContainerRef.current;
    if (!reviewContainer) return;

    const scrollStep = 1; // จำนวนพิกเซลที่เลื่อนแต่ละขั้นตอน
    const delay = 50; // เวลาหน่วงในมิลลิวินาทีระหว่างขั้นตอน

    scrollIntervalRef.current = setInterval(() => {
      if (direction === 'right') {
        if (
          reviewContainer.scrollLeft >=
          reviewContainer.scrollWidth - reviewContainer.clientWidth
        ) {
          reviewContainer.scrollLeft = 0; // เลื่อนกลับไปจุดเริ่มต้น
        } else {
          reviewContainer.scrollLeft += scrollStep;
        }
      } else {
        if (reviewContainer.scrollLeft <= 0) {
          reviewContainer.scrollLeft =
            reviewContainer.scrollWidth - reviewContainer.clientWidth; // เลื่อนไปยังจุดสิ้นสุด
        } else {
          reviewContainer.scrollLeft -= scrollStep;
        }
      }
    }, delay);

    return () => clearInterval(scrollIntervalRef.current);
  }, [direction]);

  const handleMouseEnter = () => {
    clearInterval(scrollIntervalRef.current);
  };

  const handleMouseLeave = () => {
    const reviewContainer = reviewContainerRef.current;
    const scrollStep = 1; // จำนวนพิกเซลที่เลื่อนแต่ละขั้นตอน
    const delay = 50; // เวลาหน่วงในมิลลิวินาทีระหว่างขั้นตอน

    scrollIntervalRef.current = setInterval(() => {
      if (direction === 'right') {
        if (
          reviewContainer.scrollLeft >=
          reviewContainer.scrollWidth - reviewContainer.clientWidth
        ) {
          reviewContainer.scrollLeft = 0; // เลื่อนกลับไปจุดเริ่มต้น
        } else {
          reviewContainer.scrollLeft += scrollStep;
        }
      } else {
        if (reviewContainer.scrollLeft <= 0) {
          reviewContainer.scrollLeft =
            reviewContainer.scrollWidth - reviewContainer.clientWidth; // เลื่อนไปยังจุดสิ้นสุด
        } else {
          reviewContainer.scrollLeft -= scrollStep;
        }
      }
    }, delay);
  };

  if (reviews.length === 0) {
    return (
      <div className='py-4'>
        <div className='w-full h-[300px] flex justify-center items-center bg-[#d1dadc] rounded-[32px]'>
          <p className='text-[#ffffff]'>THERE'S NO REVIEW YET</p>
        </div>
      </div>
    );
  }

  function shuffleFn(arr) {
    const result = [];
    const length = arr.length;

    for (let i = 0; i < length; i += 2) {
      result.push(arr[i]);
      if (i + 2 < length) {
        result.push(arr[i + 2]);
      }
      if (i + 1 < length) {
        result.push(arr[i + 1]);
      }
    }

    return result;
  }

  return (
    <div className='py-4 relative'>
      <div className='absolute z-20 left-0 w-[10px] md:w-[300px] h-[400px] bg-gradient-to-r from-fg-white/100 pointer-events-none'></div>
      <div className='absolute z-20 right-0 w-[10px] md:w-[300px] h-[400px] bg-gradient-to-l from-fg-white/100 pointer-events-none'></div>
      <div
        className='flex mt-10'
        ref={reviewContainerRef}
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {shuffleFn(reviews).map((review, index) => (
          <div key={index} className='flex'>
            <div className=' w-[500px] h-[300px] border-fg-text-blue/30 border-[2px] rounded-[32px] relative flex justify-center items-start cursor-pointer flex-col gap ml-5 pl-10'>
              <div className='flex mb-6'>
                <div>
                  <Avatar src={review.user?.imagePath} size={60} />
                </div>
                <div>
                  <div>
                    <h3 className='ml-2 text-lg text-fg-text-black font-bold'>
                      {review.user?.fullName || 'Anonymous'}
                    </h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      value={review.overAllReview}
                      name='half-rating-read'
                      precision={0.5}
                      readOnly
                      className='flex translate-x-1 -translate-y-[1px]'
                    />
                  </Stack>
                </div>
              </div>
              <div className='w-[400px] whitespace-normal break-words text-[#818181]'>
                {review.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
