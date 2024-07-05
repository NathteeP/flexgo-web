import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Input from '../components/Input';
import Button from '../components/Button';
import { emailSchema } from '../validators/validate-forgotPassword';
import { requestOtp, verifyOtp } from '../store/slices/user-slice';
import { toast } from 'sonner';
import {
  closeForgotPassword,
  openResetPassword,
} from '../store/slices/modal-slice';
import logo from '../assets/images/logo/Logo.png';
import Bg from '../assets/images/SignInUp/Bg.png';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isLoading, otpRefCode } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(emailSchema),
  });

  const [email, setEmail] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(300); // 5 นาที คือ 300 วิ
  const [resendCountdown, setResendCountdown] = useState(60); // 1 นาที คือ 60 วิ
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOtpSent) {
      const otpTimer = setInterval(() => {
        setOtpCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(otpTimer);
    }
  }, [isOtpSent]);

  useEffect(() => {
    if (isOtpSent) {
      const resendTimer = setInterval(() => {
        setResendCountdown((prev) => {
          if (prev === 1) {
            clearInterval(resendTimer);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(resendTimer);
    }
  }, [isOtpSent, resendCountdown]);

  const handleRequestOtp = async (data) => {
    try {
      const promise = dispatch(requestOtp(data)).unwrap();
      toast.promise(promise, {
        loading: 'Sending OTP...',
        success: 'OTP sent successfully',
        error: 'Failed to send OTP',
      });

      await promise;
      setEmail(data.email);
      setIsOtpSent(true);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const otp = otpValues.join('');
      const promise = dispatch(
        verifyOtp({ email, otp, refCode: otpRefCode })
      ).unwrap();
      toast.promise(promise, {
        loading: 'Verifying OTP...',
        success: 'OTP verified successfully',
        error: 'Invalid or expired OTP.',
      });

      await promise;
      dispatch(closeForgotPassword());
      dispatch(openResetPassword());
    } catch (error) {
      console.error('Failed to verify OTP:', error);
    }
  };

  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && index < otpValues.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleResendOtp = async () => {
    try {
      setIsResendDisabled(true);
      setResendCountdown(60);
      setOtpCountdown(300);
      setOtpValues(['', '', '', '', '', '']);
      const promise = dispatch(requestOtp({ email })).unwrap();
      toast.promise(promise, {
        loading: 'Resending OTP...',
        success: 'OTP resent successfully',
        error: 'Failed to resend OTP',
      });

      await promise;
    } catch (error) {
      console.error('Failed to resend OTP:', error);
    }
  };

  return (
    <div className='w-[500px] md:w-[500px] lg:w-[1000px] flex flex-col lg:flex-row justify-between'>
      <div className=' w-[500px] h-[650px] flex items-start justify-center pt-20'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt='' className='w-[125px] invert pb-6' />
          {!isOtpSent ? (
            <form
              onSubmit={handleSubmit(handleRequestOtp)}
              className='flex flex-col items-center justify-center'
            >
              <Input
                htmlFor='email'
                id='email'
                type='email'
                name='email'
                inputName='Email Address'
                {...register('email')}
                error={errors.email?.message}
              />
              <Button
                className='h-[31px] w-[90px] text-white text-[11px]'
                type='submit'
              >
                GET OTP
              </Button>
            </form>
          ) : (
            <div className='w-full flex flex-col items-center'>
              <div className='grid grid-cols-6 gap-x-4 my-2'>
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    id={`otp-${index}`}
                    type='text'
                    maxLength='1'
                    value={value}
                    onChange={(event) =>
                      handleInputChange(index, event.target.value)
                    }
                    className='rounded-lg bg-gray-100 w-14 aspect-square flex items-center justify-center text-center text-2xl'
                  />
                ))}
              </div>
              <Button onClick={handleVerifyOtp}>
                Verify ({Math.floor(otpCountdown / 60)}:
                {String(otpCountdown % 60).padStart(2, '0')})
              </Button>
              <Button onClick={handleResendOtp} disabled={isResendDisabled}>
                Request Again (
                {isResendDisabled
                  ? `${Math.floor(resendCountdown / 60)}:${String(resendCountdown % 60).padStart(2, '0')}`
                  : 'Send OTP'}
                )
              </Button>
              {otpCountdown === 0 && (
                <p className='text-red-500 text-center'>
                  OTP expired, please request a new one
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className=' hidden lg:block'>
        <img src={Bg} alt='' className='w-[500px] h-[650px]' />
      </div>
    </div>
  );
};

export default ForgotPassword;
