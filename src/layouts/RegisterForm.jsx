import React from 'react';
import Input from '../components/Input';
import logo from '../assets/images/logo/Logo.png';
import Button from '../components/Button';
import Bg from '../assets/images/SignInUp/Bg.png';

const RegisterForm = () => {
  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      {/* ฝั่งซ้้าย */}
      <div className=' w-[500px] h-[650px] flex items-center justify-center'>
        {/* logo */}
        <div className='flex flex-col items-center'>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />

          {/* INPUT */}
          <form action='' className='flex flex-col items-center justify-center'>
            <Input
              htmlFor='username'
              id='username'
              type='username'
              name='username'
              inputName='Username'
            />
            <Input
              htmlFor='email'
              id='email'
              type='email'
              name='email'
              inputName='Email'
            />
            <Input
              htmlFor='password'
              id='password'
              type='password'
              name='password'
              inputName='Password'
            />
            <Input
              htmlFor='confirmPassword'
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              inputName='Confirm Password'
            />
            <div className='flex mt-2'>
              <div className='flex flex-col'>
                <Input
                  divClassName='flex flex-col'
                  htmlFor='firstName'
                  id='firstName'
                  type='text'
                  name='firstName'
                  inputName='First Name'
                  className='mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500'
                />
              </div>
              <Input
                divClassName='flex flex-col ml-2'
                htmlFor='lastName'
                id='lastName'
                type='text'
                name='lastName'
                inputName='Last Name'
                className='mb-4 bg-[#F3F4F6] rounded-lg w-[170px] h-[32px] px-2 text-gray-500'
              />
            </div>
            <Input
              htmlFor='phoneNumber'
              id='phoneNumber'
              type='text'
              name='phoneNumber'
              inputName='Phone Number'
            />
            <div className='flex flex-col'></div>
            <div className='flex mt-5 w-full'>
              <Button
                className='w-full h-[34px] focus:bg-fg-primary-02 hover:bg-fg-primary-02  text-sm'
                variant='contained'
              >
                Sign Up
              </Button>
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

export default RegisterForm;
