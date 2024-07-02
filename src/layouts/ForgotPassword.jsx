import React from 'react';
import Input from '../components/Input';
import logo from '../assets/images/logo/Logo.png';
import Button from '../components/Button';
import Bg from '../assets/images/SignInUp/Bg.png';
import CustomModal from '../components/Modal';
import ResetPassword from './ResetPassword';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  openRegister,
  closeRegister,
  openSignIn,
  closeSignIn,
  closeForgotPassword,
  openResetPassword,
  closeResetPassword,
} from '../store/slices/modal-slice';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isResetPasswordOpen } = useSelector((state) => state.modal);
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
            <div className='flex items-end w-full justify-start gap-1 pt-2'>
              <Button className='h-[31px] w-[90px] text-white text-[11px]'>
                GET OTP
              </Button>
              <Input
                htmlFor='otp'
                id='otp'
                type='otp'
                name='otp'
                className='w-[258px] block bg-[#F3F4F6] rounded-lg h-[32px]  px-2 text-gray-500 text-[13px]'
                labelClassName='text-white'
              />
            </div>

            <div className='flex flex-col mt-5 w-full gap-4'>
              <div className='flex flex-col  gap-4 translate-y-10 pt-60'>
                <Button
                  className='w-full  bg-fg-primary-01 text-white focus:bg-fg-grey  hover:bg-fg-grey  hover:text-white  text-sm'
                  variant='contained'
                  onClick={() => {
                    dispatch(openResetPassword());
                    dispatch(closeForgotPassword());
                  }}
                >
                  Reset your password
                </Button>
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

export default ForgotPassword;
