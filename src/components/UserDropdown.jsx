import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Button from './Button';
import { logoutUser } from '../store/slices/user-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    const promise = dispatch(logoutUser()).unwrap();
    toast.promise(promise, {
      loading: 'Logout...',
      success: 'Logout Successfully',
      error: 'Logout Failed',
    });

    try {
      const response = await promise;
      navigate('/');
    } catch (error) {
      console.error('Logout Failed', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      className='relative inline-block text-left md:mr-12 transition-all duration-500 '
      ref={dropdownRef}
    >
      <div
        type='button'
        className='cursor-pointer flex justify-center items-center w-[50px]'
        onClick={handleToggle}
      >
        <Avatar src={authUser?.profileImage?.imagePath} size='50' />
      </div>

      {isOpen && (
        <div className='origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  z-50'>
          <div className='py-1 mx-4 w-64 flex flex-col gap-2'>
            <div className='flex items-center p-2 border-b  h-full '>
              <Avatar src={authUser?.profileImage?.imagePath} size='40' />
              <div className='ml-3 flex w-full justify-between items-center pr-6'>
                <p className='text-base font-light text-gray-900'>
                  {authUser.fullName}
                </p>
                <p className='text-xs text-fg-text-blue'>{authUser.role}</p>
              </div>
            </div>
            <div className=' border-b pb-2'>
              <Link
                to='/history'
                className='flex px-4 py-3 text-base text-fg-text-black  transition duration-300 hover:bg-fg-primary-01/50  items-center rounded-xl'
              >
                Booking History
              </Link>
            </div>
            <div className=' border-b pb-2'>
              <Link
                to='/account'
                className='flex px-4 py-3 text-base text-fg-text-black hover:bg-fg-primary-01/50 rounded-xl'
              >
                Account
              </Link>
            </div>
            {/* <div className=' border-b pb-2'>
              <Link
                to='/property-message'
                className='flex px-4 py-3 text-base text-fg-text-black hover:bg-fg-primary-01/50 rounded-xl'
              >
                Property Message
              </Link>
            </div> */}
            <div className=' border-b pb-2'>
              <Link
                to='/wishList'
                className='flex px-4 py-3 text-base text-fg-text-black hover:bg-fg-primary-01/50 rounded-xl'
              >
                Wish List
              </Link>
            </div>

            <div className='flex mb-3 mt-10 items-end'>
              <Button
                className=' flex m-auto w-full h-[48px] text-base hover:bg-fg-primary-02  transition-transform duration-1000 hover:h-[52px] hover:-translate-y-3 '
                variant='contained'
                onClick={handleLogout}
              >
                SignOut
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
