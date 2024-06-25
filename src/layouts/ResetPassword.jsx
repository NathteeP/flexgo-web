import React from 'react';
import Input from '../components/Input';
import logo from '../assets/images/logo/Logo.png';
import Button from '../components/Button';
import Bg from '../assets/images/SignInUp/Bg.png';
import CustomModal from '../components/Modal';

const ResetPassword = () => {
  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      <div className=' w-[500px] h-[650px] flex items-start justify-center pt-20'>
        <div className='flex flex-col items-center '>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />
          <form action='' className='flex flex-col items-center justify-center'>
            <Input
              htmlFor='email'
              id='email'
              type='email'
              name='email'
              inputName='Email Address'
            />
            <Input
              htmlFor='newPassword'
              id='newPassword'
              type='newPassword'
              name='newPassword'
              inputName='New Password'
            />
            <Input
              htmlFor='confirmPassword'
              id='confirmPassword'
              type='confirmPassword'
              name='confirmPassword'
              inputName='Confirm Password'
            />
            <div className='flex flex-col mt-5 w-full gap-4'>
              <div className='flex flex-col  gap-4 translate-y-10 pt-[150px]'>
                <CustomModal
                  trigger={
                    <Button
                      className='w-full  bg-fg-primary-01 text-white focus:bg-fg-grey  hover:bg-fg-grey  hover:text-white  text-sm'
                      variant='contained'
                    >
                      Submit
                    </Button>
                  }
                ></CustomModal>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=' hidden lg:block'>
        <img src={Bg} alt='' className='w-[500px] h-[650px]' />
      </div>
    </div>
  );
};

export default ResetPassword;
