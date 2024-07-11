import React from 'react';
import TitlePage from '../../layouts/TitlePage';
import Input from '../Input';
import Button from '../Button';
import { Rating } from '@mui/material';

const UserReview = () => {
  return (
    <form action=''>
      <div className='lg:w-[1000px] lg:h-[700px] rounded-full'>
        <div className='w-[90%] m-auto pt-10'>
          <TitlePage>Review</TitlePage>
          <div className='mt-5 flex justify-between'>
            <div className='text-center h-[200px] w-[200px] bg-[#3c2f1e]/10 rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300'>
              <p className=''>SERVICES</p>
              <Rating
                name='size-large'
                defaultValue={0}
                size='large'
                className=''
              />
            </div>
            <div className='text-center h-[200px] w-[200px] bg-[#3c2f1e]/10 rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300'>
              <p className=''>FACILITIES</p>
              <Rating
                name='size-large'
                defaultValue={0}
                size='large'
                className=''
              />
            </div>
            <div className='text-center h-[200px] w-[200px] bg-[#3c2f1e]/10 rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300'>
              <p className=''>CLEANLINESS</p>
              <Rating
                name='size-large'
                defaultValue={0}
                size='large'
                className=''
              />
            </div>
            <div className='text-center h-[200px] w-[200px] bg-[#3c2f1e]/10 rounded-[40px] flex flex-col justify-center items-center gap-4 hover:scale-[103%] transition-all duration-300'>
              <p className=''>LOCATION</p>
              <Rating
                name='size-large'
                defaultValue={0}
                size='large'
                className=''
              />
            </div>
          </div>
          <textarea
            id='description'
            name='description'
            className='mt-10 block bg-[#3c2f1e]/10 rounded-lg w-full h-[250px] px-4 text-gray-600 text-lg items-start text-start hover:scale-[103%] active:scale-95 hover:ring-[3px] hover:ring-fg-primary-01 transition-all duration-300 focus:outline-none'
            rows='5'
          />
          <div className='flex justify-end mt-5'>
            {' '}
            <Button
              type='button'
              className=' bg-fg-primary-01 text-white hover:bg-fg-primary-02 px-6 py-2 rounded-lg text-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
            >
              REVIEW
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserReview;
