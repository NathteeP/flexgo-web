import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo/Logo.png';
import { RxMagnifyingGlass } from 'react-icons/rx';
import Input from '../components/Input';
import Button from '../components/Button';
import { IoCartOutline } from 'react-icons/io5';
import CustomModal from '../components/Modal';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  openRegister,
  closeRegister,
  openSignIn,
  closeSignIn,
  closeForgotPassword,
} from '../store/slices/modal-slice';
import UserDropdown from '../components/UserDropdown';
import ForgotPassword from './ForgotPassword';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isRegisterOpen, isSignInOpen, isForgotPasswordOpen } = useSelector(
    (state) => state.modal
  );
  const { authUser } = useSelector((state) => state.user);

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  return (
    <div className='z-50 relative'>
      <div
        className={`${isHomePage ? 'bg-gradient-to-b from-fg-black/50' : 'bg-fg-primary-01'} h-20 w-screen px-14 flex items-center justify-between`}
      >
        <div className='flex items-center'>
          <div>
            <img src={logo} alt='Logo' />
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

        <div className='flex gap-3 items-center'>
          <div className='cursor-pointer hover:bg-fg-primary-02 w-[40px] h-[40px] flex items-center justify-center rounded-full mr-8'>
            <IoCartOutline className='text-fg-text-white text-[26px]' />
          </div>
          {authUser ? (
            <UserDropdown />
          ) : (
            <>
              <Button
                variant='outlined'
                className='bg-opacity-10 hover:border-fg-primary-02 hover:bg-fg-primary-02 text-white h-[40px]'
                onClick={() => dispatch(openSignIn())}
              >
                Sign In
              </Button>

              <Button
                variant='contained'
                className='h-[40px] hover:bg-fg-primary-02'
                onClick={() => dispatch(openRegister())}
              >
                Sign Up
              </Button>
            </>
          )}

          {renderModal(isSignInOpen, closeSignIn, <LoginForm />)}
          {renderModal(isRegisterOpen, closeRegister, <RegisterForm />)}
          {renderModal(
            isForgotPasswordOpen,
            closeForgotPassword,
            <ForgotPassword />
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;