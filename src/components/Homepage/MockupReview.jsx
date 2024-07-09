import React, { useEffect, useRef } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '../Avatar';

const MockupReview = ({ direction = 'right' }) => {
  const userReviews = [
    {
      name: 'Oiled',
      avatar:
        'https://img.freepik.com/free-photo/expressive-asian-girl-posing-indoor_344912-797.jpg?w=2000&t=st=1720411145~exp=1720411745~hmac=d7bfb1369b2be22dc9db56fb7a830ac9160da89d77ddeefcd004f04eda646612',
      star: 4.5,
      comment:
        'The booking process was seamless and the accommodation exceeded my expectations. Highly recommended for a comfortable stay.',
    },
    {
      name: 'Champ',
      avatar:
        'https://img.freepik.com/premium-photo/portrait-serious-young-asian-man_774935-2692.jpg?w=2000',
      star: 4.0,
      comment:
        'Great user interface and easy to navigate. The booking confirmation was quick, and the place was as described. Will use this app again.',
    },
    {
      name: 'IT',
      avatar:
        'https://img.freepik.com/premium-photo/portrait-smiling-asian-guy-white-background_951116-916.jpg?w=1480',
      star: 5.0,
      comment:
        'Excellent app for booking accommodations. The customer service was very responsive, and the place we stayed at was fantastic.',
    },
    {
      name: 'BM',
      avatar:
        'https://img.freepik.com/premium-photo/wow-face-happy-asian-man-head-shot_39688-861.jpg?w=2000',
      star: 4.5,
      comment:
        'The app made it easy to find and book a great place to stay. The descriptions and photos were accurate, and I had a pleasant experience overall.',
    },
    {
      name: 'Pluemza',
      avatar:
        'https://img.freepik.com/premium-photo/man-model-white-background_974624-65.jpg?w=1480',
      star: 0.5,
      comment:
        'I had a poor experience with the booking process. The place was not as described, and the customer support was unhelpful.',
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

  return (
    <div className='py-4'>
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
        {userReviews.map((review, index) => (
          <div key={index} className='flex'>
            <div className=' w-[500px] h-[300px] border-fg-text-blue/30 border-[2px] rounded-[32px] relative flex justify-center items-start cursor-pointer flex-col gap ml-5 pl-10'>
              <div className='flex mb-6'>
                <div>
                  <Avatar src={review.avatar} size={60} />
                </div>
                <div>
                  <div>
                    <h3 className='ml-2 text-lg text-fg-text-black font-bold'>
                      {review.name}
                    </h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      value={review.star}
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

export default MockupReview;
