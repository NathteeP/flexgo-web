import React from 'react';
import logo from '../assets/images/logo/Logo.png';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Input from '../components/Input';
import Button from '../components/Button';
import { IoCartOutline } from 'react-icons/io5';
import CustomModal from '../components/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Header = () => {
  return (
    <div>
      <div className='bg-fg-primary-01 h-20 w-screen px-14 flex items-center justify-between'>
        <div className='flex items-center'>
          <div>
            <img src={logo} alt='' />
          </div>
          <div className='flex items-center'>
            <Input
              className='rounded-l-full w-[200px] h-[44px] ml-10 border-white/75 border-l-[1px] border-y-[1px] bg-fg-white/[0.2] pl-5 placeholder:text-fg-text-white placeholder:text-base focus:outline-none text-fg-white'
              placeholder='Searching Pin'
            />
            <div className='rounded-r-full h-[44px] border-white/75 border-r-[1px] border-y-[1px] bg-fg-white/[0.2] flex items-center p-4'>
              <RxMagnifyingGlass className='text-[24px] text-fg-text-white' />
            </div>
          </div>
        </div>

        {/* Right Part ปุ่มsignin/up cart */}

        <div className='flex gap-3 items-center'>
          <div className='cursor-pointer hover:bg-fg-primary-02 w-[40px] h-[40px] flex items-center justify-center rounded-full mr-8'>
            <IoCartOutline className='text-fg-text-white text-[26px]' />
          </div>
          <CustomModal
            trigger={
              <Button
                variant='outlined'
                className='hover:border-fg-primary-02 text-white h-[40px]'
              >
                Sign In
              </Button>
            }
          >
            <LoginForm />
          </CustomModal>

          <CustomModal
            trigger={
              <Button variant='contained' className='h-[40px]'>
                Sign Up
              </Button>
            }
          >
            <RegisterForm />
          </CustomModal>
        </div>
      </div>
    </div>
  );
};

export default Header;
