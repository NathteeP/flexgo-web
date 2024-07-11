import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateAccomStatus,
  fetchAllAccoms,
  deleteAccom,
} from '../../store/slices/accoms-slice';
import { toast } from 'sonner';
import Button from '../Button';
import Avatar from '../Avatar';
import Album from '../AccomDetailPage/Album';
import Amenities from '../AccomDetailPage/Amenities';
import MapNearByPlace from '../AccomDetailPage/MapNearByPlace';
import RoomCard from '../AccomDetailPage/RoomCard';
import Review from '../Review';
import cancelPolicy from '../../constant/cancelPolicy';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';
import { closeAccomManagement } from '../../store/slices/modal-slice';

const AdminAccomManagementCard = ({ accom }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(true);
  const [isStatus, setIsStatus] = useState(accom.status);
  const state = accom;

  const handleStatusChange = async (newStatus) => {
    const promise = dispatch(
      updateAccomStatus({ accomId: accom.id, status: newStatus })
    ).unwrap();
    toast.promise(promise, {
      loading: 'Updating status...',
      success: 'Status updated successfully!',
      error: 'Failed to update status.',
    });

    try {
      const result = await promise;

      if (result) {
        setIsStatus(newStatus);
        dispatch(fetchAllAccoms());
      }
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  const handleRemoveAccom = async () => {
    console.log('first');
    const promise = dispatch(deleteAccom(accom.id)).unwrap();

    toast.promise(promise, {
      loading: 'Removing accom...',
      success: 'Accom removed successfully!',
      error: 'Failed to remove accom.',
    });

    try {
      await promise;
      dispatch(fetchAllAccoms());
      dispatch(closeAccomManagement());
    } catch (error) {
      console.error('Remove failed', error);
    }
  };

  if (!accom) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full lg:w-[1400px] h-[80vh] overflow-y-auto p-8 text-fg-text-black relative'>
      <div className='flex justify-end gap-4'>
        {isStatus === 'UNAPPROVED' && (
          <>
            <Button
              className='bg-white hover:bg-green-200 hover:text-white ring-[1px] ring-green-300 text-green-500 hover:scale-110 hover:ring-[3px] transition-all duration-300 active:scale-90'
              onClick={() => handleStatusChange('ACTIVE')}
            >
              Approve Accom
            </Button>
            <Button
              className='bg-white ring-[1px] ring-red-300 text-red-500 hover:scale-110 hover:ring-[3px] transition-all duration-300 active:scale-90'
              onClick={handleRemoveAccom}
            >
              Remove Accom
            </Button>
          </>
        )}
        {isStatus === 'ACTIVE' && (
          <Button
            className='bg-white ring-[1px] ring-red-300 text-red-500 hover:scale-110 hover:ring-[3px] transition-all duration-300 active:scale-90'
            onClick={() => handleStatusChange('INACTIVE')}
          >
            Deactivate Accom
          </Button>
        )}
        {isStatus === 'INACTIVE' && (
          <Button
            className='bg-white ring-[1px] ring-green-300 text-green-500 hover:scale-110 hover:ring-[3px] transition-all duration-300 active:scale-90'
            onClick={() => handleStatusChange('ACTIVE')}
          >
            Activate Accom
          </Button>
        )}
      </div>

      <div className='my-6'></div>

      {/* ภาพปก */}
      <div className='h-[480px] w-full border-[2px] text-fg-text-black relative '>
        <div className='relative flex items-center overflow-hidden'>
          <img
            src={
              accom?.accomPhoto?.length >= 1
                ? accom.accomPhoto[0].imagePath
                : ''
            }
            alt='Cover'
            className='z-0 h-full object-cover w-full absolute grayscale-[60%] hover:grayscale-0 transition-all duration-500 ease-in-out'
          />
          {/* div profile host */}
          <div
            onClick={() => navigate(`/hostProfile/${accom?.userId}`)}
            className='z-10 w-[650px] h-[100%] relative p-10 flex object-cover'
          >
            <div className='bg-white/50 backdrop-blur w-[600px] h-[400px] rounded-[40px] flex py-10 px-4 cursor-pointer'>
              <div className='w-[70%] h-[100%] border-r-[2px] border-fg-text-black/20 flex flex-col items-center justify-center'>
                <Avatar src={accom?.user?.photo} size='220' />
                <div className='text-3xl font-semibold mt-6'>
                  {accom?.user?.name}
                </div>
              </div>
              <div className='w-[30%] h-[100%] mx-5 flex flex-col items-center'>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {accom?.reviews?.count}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%] border-b-[2px] border-fg-text-black/20 flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {accom?.reviews?.overAllReview}
                  </div>
                  <small>Reviews</small>
                </div>
                <div className='h-[33%] w-[100%] flex flex-col justify-center items-center'>
                  <div className='text-3xl font-semibold'>
                    {accom?.hostDuration}
                  </div>
                  <small>Year Hosting</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* album ภาพ */}
      <div className='relative mt-8 mx-16 p-8 h-full rounded-[50px]'>
        <div className='relative'>
          <Album photos={accom?.accomPhoto} />
        </div>
      </div>

      {/* detail accom */}
      {/* left Part */}
      <div className='mx-16 py-8 px-20 flex'>
        <div className='w-[65%]'>
          <div className='flex items-center gap-4'>
            <div className='text-3xl font-semibold'>{accom?.name}</div>
            <div>
              <Stack spacing={1}>
                <Rating
                  name='half-rating-read'
                  defaultValue={0}
                  value={accom?.reviews?.overAllReview || 0}
                  precision={0.5}
                  readOnly
                  className='flex translate-x-1 -translate-y-[1px]'
                />
              </Stack>
            </div>
          </div>
          <div className='text-sm font-semibold'>{accom?.address}</div>
          <div className='h-[2px] bg-fg-grey/60 mx-14 my-8'></div>

          <div className='mr-10 font-light h-[300px]'>{accom?.description}</div>

          {/* amenities */}
          <div className='text-2xl'>
            <h1>What this place offers</h1>
            <div className='w-full overflow-hidden mt-4'>
              <Amenities amenities={accom?.amenities} />
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className='w-[35%] h-[720px] border-[2px] p-4 rounded-[40px]'>
          {/* แผนที่ */}
          {/* <MapNearByPlace nearbyPlace={accom?.nearbyPlace} /> */}
        </div>
      </div>

      {/* Room part */}
      <div className='p-8 mx-36'>
        <div className='border-t-[2px] my-16 mx-28'></div>
        <div>
          <RoomCard room={accom?.roomList} />
        </div>
      </div>

      {/* Review part */}
      <div className='p-8 mx-36 border-b-[2px] pb-14 mb-6'>
        <h1 className='text-3xl'>Reviews</h1>
        <div className='relative'>
          <div className='absolute z-20 left-0 w-[300px] h-[400px] bg-gradient-to-r from-fg-white/100 pointer-events-none'></div>
          <div className='absolute z-20 right-0 w-[300px] h-[400px] bg-gradient-to-l from-fg-white/100 pointer-events-none'></div>
          <Review reviews={accom?.featureReviews} />
        </div>
      </div>

      {/* House Rules */}
      <div className='p-8 mx-36 pb-14 mb-6'>
        <div className='text-3xl mt-2 mb-10'>
          <h1>House rules</h1>
        </div>
        <div className='grid grid-cols-7 grid-rows-5 gap-4 justify-between border-[2px] rounded-[40px] px-24 py-8 font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='col-span-2'>Check-In</div>
          <div className='col-span-5 col-start-3 font-light'>
            {accom?.houseRule?.checkIn}
          </div>
          <div className='col-span-2 row-start-2'>Check-Out</div>
          <div className='col-span-5 col-start-3 row-start-2 font-light'>
            {accom?.houseRule?.checkOut}
          </div>
          <div className='col-span-2 row-start-3'>Cancellation</div>
          <div className='col-span-5 col-start-3 row-start-3 font-light'>
            {cancelPolicy[accom?.houseRule?.cancelPolicy]}
          </div>
          <div className='col-span-2 row-start-4'>Pets</div>
          <div className='col-span-5 col-start-3 row-start-4 font-light'>
            {accom?.houseRule?.petsRule}
          </div>
          <div className='col-span-2 row-start-5'>Age restriction</div>
          <div className='col-span-5 col-start-3 row-start-5 font-light'>
            {accom?.houseRule?.ageRule}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccomManagementCard;
