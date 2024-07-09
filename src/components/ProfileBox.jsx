import React from 'react';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const ProfileBox = ({ src, children, size }) => {
  const { authUser } = useSelector((state) => state.user);
  const defaultSrc = authUser?.profileImage?.imagePath;

  return (
    <div className='h-[800px] w-[430px] border-[2px] border-fg-grey/50 rounded-[40px] flex flex-col items-center p-6 gap-6'>
      <div className='mt-8'>
        <Avatar src={src} size='300' />
      </div>
      <div className='w-[100%] h-[100%] rounded-[20px] bg-fg-primary-03 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
        {children}
      </div>
    </div>
  );
};

export default ProfileBox;
