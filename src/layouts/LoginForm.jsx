import React from 'react';
import Input from '../components/Input';
import logo from '../assets/images/logo/Logo.png';
import Button from '../components/Button';
import Bg from '../assets/images/SignInUp/Bg.png';
import { FaGoogle } from 'react-icons/fa';
import CustomModal from '../components/Modal';
import ForgotPassword from './ForgotPassword';
import RegisterForm from './RegisterForm';
import { FaFacebookF } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      <div className=' w-[500px] h-[650px] flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />
          <form action='' className='flex flex-col items-center justify-center'>
            <Input
              htmlFor='username'
              id='username'
              type='username'
              name='username'
              inputName='Username'
            />
            <Input
              htmlFor='password'
              id='password'
              type='password'
              name='password'
              inputName='Password'
            />
            <div className='flex flex-col mt-5 w-full gap-4'>
              <Button
                className='w-full h-[34px] focus:bg-fg-primary-02 hover:bg-fg-primary-02 text-sm'
                variant='contained'
              >
                Sign Up
              </Button>
              <Button
                className='w-full h-[34px] bg-fg-secondary-01  focus:bg-fg-secondary-02 hover:bg-fg-secondary-02 flex items-center gap-4  text-sm'
                variant='contained'
              >
                <FaGoogle />
                Sign In with Google
              </Button>
              <Button
                className='w-full h-[34px] bg-fg-secondary-01  focus:bg-fg-secondary-02 hover:bg-fg-secondary-02 flex items-center gap-4  text-sm'
                variant='contained'
              >
                <FaFacebookF />
                Sign In with Facebook
              </Button>
              <div className='flex flex-col  gap-4 translate-y-10'>
                <CustomModal
                  trigger={
                    <Button
                      className='w-full h-[34px] bg-fg-white text-fg-grey focus:bg-fg-grey  hover:bg-fg-grey shadow-sm hover:text-white  text-sm '
                      variant='contained'
                    >
                      Sign Up
                    </Button>
                  }
                >
                  <RegisterForm />
                </CustomModal>

                <CustomModal
                  trigger={
                    <Button
                      className='w-full h-[34px] bg-fg-white text-black focus:bg-fg-grey  hover:bg-fg-grey shadow-none hover:text-white  text-sm'
                      variant='contained'
                    >
                      Forgot your password ?
                    </Button>
                  }
                >
                  <ForgotPassword />
                </CustomModal>
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

export default LoginForm;
