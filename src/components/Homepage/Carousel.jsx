import React, { useEffect, useRef } from 'react';
import hotel from '../../assets/images/test/hotelMockup.png';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ accoms }) => {
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const navigate = useNavigate();

  const onClickNavigate = (to) => navigate(to);

  useEffect(() => {
    const startScrolling = () => {
      const carousel = carouselRef.current;
      const scrollStep = 1; // จำนวนพิกเซลที่เลื่อนแต่ละขั้นตอน
      const delay = 50; // เวลาหน่วงในมิลลิวินาทีระหว่างขั้นตอน

      scrollIntervalRef.current = setInterval(() => {
        if (carousel) {
          if (
            carousel.scrollLeft >=
            carousel.scrollWidth - carousel.clientWidth
          ) {
            carousel.scrollLeft = 0; // เลื่อนกลับไปจุดเริ่มต้น
          } else {
            carousel.scrollLeft += scrollStep;
          }
        }
      }, delay);
    };

    const stopScrolling = () => {
      clearInterval(scrollIntervalRef.current);
    };

    startScrolling();

    return () => stopScrolling();
  }, []);

  const handleMouseEnter = () => {
    clearInterval(scrollIntervalRef.current);
  };

  const handleMouseLeave = () => {
    const carousel = carouselRef.current;
    const scrollStep = 1; // จำนวนพิกเซลที่เลื่อนแต่ละขั้นตอน
    const delay = 50; // เวลาหน่วงในมิลลิวินาทีระหว่างขั้นตอน

    scrollIntervalRef.current = setInterval(() => {
      if (carousel) {
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.clientWidth
        ) {
          carousel.scrollLeft = 0; // เลื่อนกลับไปจุดเริ่มต้น
        } else {
          carousel.scrollLeft += scrollStep;
        }
      }
    }, delay);
  };

  return (
    <div className=' py-4 '>
      <div
        className='flex gap-4'
        ref={carouselRef}
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {accoms.concat(accoms).map((item, index) => (
          <div
            key={index}
            id={item.id}
            onClick={() => onClickNavigate(`/accommodationDetail/${item.id}`)}
            className='flex items-center '
          >
            <div className='w-[430px] h-[653px] border-white border-[2px] rounded-[32px] relative flex justify-center items-center cursor-pointer  '>
              <div className=' transition transform hover:-translate-y-2 relative z-30 pointer-events-none'>
                <img
                  src={item?.accomPhoto[0]?.imagePath}
                  alt={item?.name}
                  className='w-[390px] h-[613px] object-cover grayscale-[40%] hover:grayscale-0 rounded-[20px] pointer-events-auto'
                />
                <div className='h-full pointer-events-auto'>
                  <div className='w-full h-[120px] rounded-[20px] bg-gradient-to-t from-black/80 absolute z-40 bottom-0 transition-all duration-300'></div>
                </div>
                <div className='px-8 py-5 absolute bottom-0 flex justify-between w-full items-center'>
                  <h3 className='text-lg text-white relative z-50'>
                    {item?.name}
                  </h3>
                  <p className='text-sm text-white relative z-50'>
                    {item?.distance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
