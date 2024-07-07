import React, { useRef, useEffect, useState } from 'react';
import adminSideBarBg from '../assets/images/SideBar/Admin/Background.png';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const dashboardRef = useRef(null);
  const location = useLocation();
  const [focused, setFocused] = useState('/host/');

  useEffect(() => {
    if (dashboardRef.current && location.pathname === '/host/') {
      dashboardRef.current.focus();
    }
  }, [location]);

  return (
    <div className='md:flex flex-shrink-0 flex flex-col items-end w-64 lg:w-[320px] min-h-[calc(100vh-90px)] bg-fg-primary-02 text-right relative'>
      <img
        src={adminSideBarBg}
        alt=''
        className='absolute z-0 w-full h-full object-cover'
      />

      <div className='flex flex-col overflow-y-auto text-right items-end relative z-10 w-full'>
        <nav className='flex-1 py-4 text-right'>
          <Link to='/Admin/'>
            <div
              ref={dashboardRef}
              className={`flex w-[250px] justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-300 cursor-pointer ${focused === '/Admin/' ? 'bg-fg-secondary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/Admin/')}
            >
              Dashboard
            </div>
          </Link>
          <Link to='/Admin/UserManagement'>
            <div
              className={`flex w-[250px] justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-300 cursor-pointer ${focused === '/Admin/UserManagement' ? 'bg-fg-secondary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/Admin/UserManagement')}
            >
              User Management
            </div>
          </Link>

          <Link to='/Admin/AccomManagement'>
            <div
              className={`flex w-[250px] justify-end px-2 py-6 mt-10 text-white text-right text-xl border-white border-y-[2px] border-l-[2px] rounded-l-[40px] backdrop-blur-[4px] transition duration-300 cursor-pointer ${focused === '/Admin/AccomManagement' ? 'bg-fg-secondary-01 outline-none' : ''}`}
              tabIndex={0}
              onFocus={() => setFocused('/Admin/AccomManagement')}
            >
              Accom Management
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
