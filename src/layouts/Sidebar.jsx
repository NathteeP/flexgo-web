import React, { useRef, useEffect, useState } from 'react';
import sBg from '../assets/images/SideBar/Background.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const dashboardRef = useRef(null);
  const location = useLocation();
  const [focused, setFocused] = useState('/host/');

  useEffect(() => {
    if (dashboardRef.current && location.pathname === '/host/') {
      dashboardRef.current.focus();
    }
  }, [location]);

  return (
    <div className='md:flex flex flex-col items-end w-64 bg-fg-primary-02 min-h-screen lg:w-[320px] text-right relative'>
      <img
        src={sBg}
        alt=''
        className='absolute z-0 w-full h-full object-cover'
      />

      <div className='flex flex-col overflow-y-auto text-right relative z-10'>
        <nav className='flex-1 py-4 text-right'>
          <Link to='/host/'>
            <div
              ref={dashboardRef}
              className={`flex w-[200px] justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-1000 cursor-pointer ${focused === '/host/' ? 'bg-fg-primary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/host/')}
            >
              Dashboard
            </div>
          </Link>
          <Link to='/host/AssetsManagement'>
            <div
              className={`flex justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-1000 cursor-pointer ${focused === '/host/AssetsManagement' ? 'bg-fg-primary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/host/AssetsManagement')}
            >
              Accommodation
            </div>
          </Link>

          <Link to='/host/Notification'>
            <div
              className={`flex justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-1000 cursor-pointer ${focused === '/host/Notification' ? 'bg-fg-primary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/host/Notification')}
            >
              Notification
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
