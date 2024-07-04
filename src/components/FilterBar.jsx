import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import DatePickerValue from './DatePicker';
import GuestDropdown from './GuestDropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserDesiredLocation } from '../store/slices/searchInfo-slice';
import { fetchAvailAccom } from '../store/slices/accoms-slice';
import dayjs from 'dayjs';
import { fetchAvailRoomListByAccomId } from '../store/slices/rooms-slice';
import { useParams } from 'react-router-dom';

const FilterBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const { capacity, userLocation, desiredLocation, date } = useSelector(
    (state) => state.info
  );

  const { accom_id } = useParams();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(desiredLocation.coordinate).length < 1) {
      dispatch(setUserDesiredLocation({ ...userLocation.coordinate }));
    }
    const data = {
      ...desiredLocation.coordinate,
      checkInDate: dayjs(date.checkInDate)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0)
        .toDate(),
      checkOutDate: dayjs(date.checkOutDate)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0)
        .toDate(),
      capacity: capacity.adults + capacity.children,
      accom_id,
    };
    if (window.location.pathname.split('/')[1] === 'accommodationDetail') {
      dispatch(fetchAvailRoomListByAccomId(data));
    } else {
      dispatch(fetchAvailAccom(data));
    }
  };

  return (
    <div className='px-4 bg-white w-full  h-full md:h-full lg:h-[85px]  rounded-[20px] shadow-sm pointer-events-auto flex justify-center'>
      <form
        action=''
        className='flex flex-col lg:flex-row gap-2 w-full justify-between items-center'
        onSubmit={handleOnSubmit}
      >
        <div className=' flex items-center justify-center w-full lg:flex-1'>
          <div className='flex items-center w-full border border-fg-grey rounded-lg overflow-hidden'>
            <div className='w-[50px] h-[48px] flex justify-center items-center bg-white'>
              <HiMagnifyingGlass className='text-2xl text-fg-text-black' />
            </div>
            <Input
              htmlFor='locationFilter'
              id='locationFilter'
              type='locationFilter'
              name='locationFilter'
              placeholder='Bangkok, Thailand | Within 1 Km.'
              className='w-full h-[48px] border-none focus:outline-none text-fg-text-blue text-sm placeholder:text-fg-text-blue pl-2 pr-2' // เพิ่ม padding ขวา
            />
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:flex-1 -translate-y-1'>
          <DatePickerValue />
        </div>
        <div className='flex items-center justify-center w-full lg:flex-1 relative'>
          <button
            type='button'
            onClick={() => setShowDropdown(!showDropdown)}
            className='w-full h-[48px] bg-white border border-fg-grey rounded-lg focus:outline-none focus:ring-fg-primary-01 focus:ring-2 text-fg-text-blue text-sm text-start pl-4'
          >
            {`${capacity.adults} adults, ${capacity.children} children`}
          </button>
          {showDropdown && <GuestDropdown />}
        </div>
        <div className='flex justify-center items-center w-full lg:w-[150px]'>
          <Button
            type='submit'
            className='w-full h-[48px] hover:bg-fg-primary-02'
            variant='contained'
          >
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
