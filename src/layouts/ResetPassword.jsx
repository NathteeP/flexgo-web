import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Input from '../components/Input';
import Button from '../components/Button';
import { resetPasswordSchema } from '../validators/validate-forgotPassword';
import { changePassword } from '../store/slices/user-slice';
import { toast } from 'sonner';
import { closeResetPassword } from '../store/slices/modal-slice';
import logo from '../assets/images/logo/Logo.png';
import Bg from '../assets/images/SignInUp/Bg.png';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(resetPasswordSchema),
  });

  const handleResetPassword = async (data) => {
    try {
      const promise = dispatch(changePassword({ ...data, userEmail })).unwrap();
      toast.promise(promise, {
        loading: 'Changing Password...',
        success: 'Password changed successfully',
        error: 'Failed to change password',
      });

      await promise;
      dispatch(closeResetPassword());
    } catch (error) {
      console.error('Failed to change password:', error);
    }
  };

  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      <div className=' w-[500px] h-[650px] flex items-start justify-center pt-20'>
        <div className='flex flex-col items-center '>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />
          <form
            onSubmit={handleSubmit(handleResetPassword)}
            className='flex flex-col items-center justify-center w-[350px]'
          >
            <Input
              htmlFor='newPassword'
              id='newPassword'
              type='password'
              name='newPassword'
              inputName='New Password'
              {...register('newPassword')}
              error={errors.newPassword?.message}
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
            <Button
              className='h-[31px] w-full text-white text-[11px] mt-4 transition-all transform hover:bg-fg-primary-02 active:scale-90 hover:border-fg-primary-01 hover:border-[2px] focus:outline-none focus:border-[1px] focus:border-fg-primary-01 hover:scale-105 focus-within:bg-fg-primary-02/20'
              type='submit'
            >
              Submit
            </Button>
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
