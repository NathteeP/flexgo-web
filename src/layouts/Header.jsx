import React from 'react';
import logo from '../assets/images/logo/Logo.png';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Input from '../components/Input';
import Button from '../components/Button';
import { IoCartOutline } from 'react-icons/io5';

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
            ></Input>
            <div className='rounded-r-full h-[44px] border-white/75 border-r-[1px] border-y-[1px] bg-fg-white/[0.2] flex items-center p-4'>
              <RxMagnifyingGlass className='text-[24px] text-fg-text-white' />
            </div>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='cursor-pointer hover:bg-fg-primary-02 w-[40px] h-[40px] flex items-center justify-center rounded-full mr-8'>
            <IoCartOutline className='text-fg-text-white text-[26px]  ' />
          </div>
          <Button variant='outlined'>Sign Up</Button>
          <Button variant='contained'>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
