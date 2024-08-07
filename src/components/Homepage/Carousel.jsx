import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wishListApi from '../../api/wishlist';

const Carousel = ({ accoms }) => {
  const [favorites, setFavorites] = useState({});

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

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prevFavorites) => {
      const isFavorite = !prevFavorites[id];
      if (isFavorite) {
        wishListApi.addToWishList(id);
      } else {
        wishListApi.removeFromWishList(id);
      }
      return { ...prevFavorites, [id]: isFavorite };
    });
  };

  return (
    <div className='py-4'>
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
            className='flex items-center'
          >
            <div className='w-[430px] h-[653px] border-white border-[2px] rounded-[32px] relative flex justify-center items-center cursor-pointer'>
              <div className='transition transform hover:-translate-y-2 relative z-30 pointer-events-none'>
                <div className='absolute opacity-20 hover:opacity-100 top-4 right-4 mb-7 ml-0.5 z-50 scale-[80%] rounded-full hover:scale-100 active:scale-75 transition-all duration-300 pointer-events-auto'>
                  <button
                    onClick={(e) => toggleFavorite(e, item.id)}
                    className='bg-black bg-opacity-20 rounded-full p-1 shadow-lg hover:bg-opacity-30'
                  >
                    <div></div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill={favorites[item.id] ? 'red' : 'white'}
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='w-12 h-12'
                    >
                      <path
                        d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                        stroke='none'
                        fill={favorites[item.id] ? 'red' : 'white'}
                      />
                    </svg>
                  </button>
                </div>

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
