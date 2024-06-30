import React from 'react';
import Input from '../components/Input';
import logo from '../assets/images/logo/Logo.png';
import Button from '../components/Button';
import Bg from '../assets/images/SignInUp/Bg.png';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { registerSchema } from '../validators/validate-register';
import userApi from '../api/users';
import { toast } from 'sonner';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    // รวมชื่อ firatName กับ lastName ให้เป็น fullName ค่อยส่งไปหลังบ้าน
    const { firstName, lastName, ...rest } = data;
    const fullName = `${firstName} ${lastName}`;
    const formData = { ...rest, fullName };

    const promise = userApi.register(formData);
    toast.promise(promise, {
      loading: 'Registering...',
      success: 'Registeration successful!',
      error: 'Registration failed!',
    });

    try {
      const response = await promise;
      console.log('Registration Successful', response.data);
      // จะ redirect รึเปล่า? ต้อง navagate ไปไหนต่อไหม?
    } catch (error) {
      console.log('Registration Failed', error);
      // ต้องเขียน Axios Error ไหม อี instance of axios
    }
  };

  const onError = (errors) => {
    console.log('Form Errors:', errors);
  };

  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      <div className=' w-[500px] h-[650px] flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />

          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='flex flex-col items-center justify-center'
          >
            <Input
              htmlFor='username'
              id='username'
              type='text'
              name='username'
              inputName='Username'
              {...register('username')}
              error={errors.username?.message}
            />
            <Input
              htmlFor='email'
              id='email'
              type='email'
              name='email'
              inputName='Email'
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              htmlFor='password'
              id='password'
              type='password'
              name='password'
              inputName='Password'
              {...register('password')}
              error={errors.password?.message}
            />
            <Input
              htmlFor='confirmPassword'
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              inputName='Confirm Password'
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
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
                  {...register('firstName')}
                  error={errors.firstName?.message}
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
                {...register('lastName')}
                error={errors.lastName?.message}
              />
            </div>
            <Input
              htmlFor='phoneNumber'
              id='phoneNumber'
              type='text'
              name='phoneNumber'
              inputName='Phone Number'
              {...register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />
            <div className='flex flex-col'></div>
            <div className='flex mt-5 w-full'>
              <Button
                className='w-full h-[34px] focus:bg-fg-primary-02 hover:bg-fg-primary-02 text-sm'
                variant='contained'
                type='submit'
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
