import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBuilding, FaUser } from 'react-icons/fa';

const ToggleSwitch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHostPage, setIsHostPage] = useState(
    location.pathname.startsWith('/host')
  );

  useEffect(() => {
    setIsHostPage(location.pathname.startsWith('/host'));
  }, [location]);

  const handleToggle = () => {
    setIsHostPage(!isHostPage);
    setTimeout(() => {
      if (isHostPage) {
        navigate('/');
      } else {
        navigate('/host');
      }
    }, 300); // Adjust the delay to match the duration of the animation
  };

  return (
    <div className='flex h-[70px]w-full flex-col items-center justify-center gap-6 pointer-events-auto'>
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          id='switch'
          type='checkbox'
          className='peer sr-only'
          checked={isHostPage}
          onChange={handleToggle}
        />
        <div className="peer h-7 w-16 rounded-full border  after:absolute after:left-[2px] after:top-1 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-fg-secondary-02 peer-checked:after:translate-x-[40px] peer-checked:after:border-white peer-focus:ring-red-300-300">
          <div className='absolute inset-0 flex items-center justify-center'>
            {isHostPage ? (
              <FaBuilding className='text-white' />
            ) : (
              <FaUser className='text-white' />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
