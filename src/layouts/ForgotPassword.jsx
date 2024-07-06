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
              <div className='grid grid-cols-6 gap-x-5 mb-10 mt-20'>
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
                    className='rounded-md font-normal text-fg-text-black bg-gray-100 w-[30px] h-[48px] flex items-center justify-center text-center text-xl transition-all transform  hover:border-fg-primary-01 hover:border-[2px] focus:outline-none focus:border-[1px] focus:border-fg-primary-01 hover:scale-105 focus-within:bg-fg-primary-02/20'
                  />
                ))}
              </div>
              <div className='flex  flex-col w-full'>
                {' '}
                <Button
                  onClick={handleResendOtp}
                  disabled={isResendDisabled}
                  className='h-[35px] w-full bg-white  text-fg-text-black ring-[1px] ring-fg-primary-01 hover:bg-fg-primary-02/20 hover:border-[2px] focus:bg-fg-primary-01/25 active:bg-fg-primary-02 focus-visible:bg-fg-primary-01 transition-all transform  hover:scale-110 focus-within:bg-fg-primary-02/20 active:scale-90 active:ring-[3px] font-light'
                >
                  Request Again (
                  {isResendDisabled
                    ? `${Math.floor(resendCountdown / 60)}:${String(resendCountdown % 60).padStart(2, '0')}`
                    : 'Send OTP'}
                  )
                </Button>
                <Button
                  onClick={handleVerifyOtp}
                  className='mt-3 h-[35px] w-full text-white hover:bg-fg-primary-02 hover:border-[2px] focus:bg-fg-primary-01 active:bg-fg-primary-02 focus-visible:bg-fg-primary-01 transition-all transform  hover:scale-110 focus-within:bg-fg-primary-02/20 active:scale-90 shadow-[0_3px_10px_rgb(0,0,0,0.2)] font-light'
                >
                  Verify ({Math.floor(otpCountdown / 60)}:
                  {String(otpCountdown % 60).padStart(2, '0')})
                </Button>
              </div>

              {otpCountdown === 0 && (
                <p className='text-red-500 text-center mt-3 text-[13px]'>
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
