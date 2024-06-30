import React, { useEffect, useRef } from 'react';
import hotel from '../../assets/images/test/hotelMockup.png';

const Carousel = () => {
  const hotels = [
    {
      name: 'SriChan-Hotel, Bangkok',
      distance: '0.7 Km',
      image: hotel,
    },
    {
      name: 'ConsoleLog-Hotel, Bangkok',
      distance: '1.2 Km',
      image: hotel,
    },
    {
      name: 'KissKiss-Hotel, Bangkok',
      distance: '0.5 Km',
      image: hotel,
    },
    {
      name: 'Champza-Hotel, Bangkok',
      distance: '0.5 Km',
      image: hotel,
    },
    {
      name: 'KissKiss-Hotel, Bangkok',
      distance: '0.5 Km',
      image: hotel,
    },
  ];

  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

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
        {hotels.concat(hotels).map((hotel, index) => (
          <div key={index} className='flex items-center '>
            <div className='w-[430px] h-[653px] border-white border-[2px] rounded-[32px] relative flex justify-center items-center cursor-pointer '>
              <div className=' transition transform hover:-translate-y-2'>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className='w-[390px] h-[613px] object-cover grayscale-[40%] hover:grayscale-0   '
                />
                <div className='px-8 py-5 absolute bottom-0 flex justify-between w-full items-center'>
                  <h3 className='text-lg text-white'>{hotel.name}</h3>
                  <p className='text-sm text-white'>{hotel.distance}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx='true'>{`
        .example::-webkit-scrollbar {
          display: none;
        }

        .example {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
