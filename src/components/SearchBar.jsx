import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import DatePickerValue from './DatePicker';
import GuestDropdown from './GuestDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDesiredLocation } from '../store/slices/searchInfo-slice';
import { fetchAvailAccom } from '../store/slices/accoms-slice';
import dayjs from 'dayjs';
import PlaceAutoComplete from '../google-maps/PlaceAutoComplete';

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const { userLocation, desiredLocation, rooms, capacity, date } = useSelector(
    (state) => state.info
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(desiredLocation.coordinate).length < 1) {
      dispatch(setUserDesiredLocation({ ...userLocation.coordinate }));
    }
    const data = {
      checkInDate: dayjs(date.checkInDate)
        .set('hour', 0)
        .set('minute', 0)
        .set('second', 0),
      checkOutDate: date.checkOutDate,
      lat: desiredLocation.coordinate.lat,
      lng: desiredLocation.coordinate.lng,
      capacity: capacity.adults + capacity.children,
    };
    dispatch(fetchAvailAccom(data));
  };

  return (
    <div className='px-4 bg-white w-full max-w-[90%] h-full md:h-full lg:h-[85px] mx-10 rounded-[20px] shadow-sm pointer-events-none flex justify-center'>
      <form
        action=''
        className='flex flex-col lg:flex-row gap-2 w-full justify-between items-center'
        onSubmit={handleOnSubmit}
      >
        <div className='flex items-center w-full lg:flex-1 pointer-events-auto hover:scale-[103%] transition-all duration-500 '>
          <div className='flex items-center w-full border border-fg-grey rounded-lg overflow-hidden '>
            <div className='flex-shrink-0 w-[50px] h-[48px] flex justify-center items-center bg-white'>
              <HiMagnifyingGlass className='text-2xl text-fg-text-black' />
            </div>
            <input
              htmlFor='location'
              id='location'
              type='text'
              name='location'
              placeholder='Bangkok, Thailand | Within 1 Km.'
              className='w-full h-[48px] border-none focus:outline-none text-fg-text-blue text-sm placeholder:text-fg-text-blue pl-2 pr-2' // เพิ่ม padding ขวา
            />
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:flex-1 -translate-y-1 pointer-events-auto'>
          <DatePickerValue />
        </div>
        <div className='flex items-center justify-center w-full lg:flex-1 relative pointer-events-auto'>
          <button
            type='button'
            onClick={() => setShowDropdown(!showDropdown)}
            className='w-full h-[48px] bg-white border border-fg-grey rounded-lg focus:outline-none  text-fg-text-blue text-sm text-start pl-4 hover:scale-[103%] transition-all duration-500'
          >
            {`${capacity.adults} adults, ${capacity.children} children`}
          </button>
          {showDropdown && <GuestDropdown />}
        </div>
        <div className='flex justify-center items-center w-full lg:w-[150px] pointer-events-auto cursor-pointer'>
          <Button
            className='w-full h-[48px] hover:bg-fg-primary-02 hover:scale-105  transition-all duration-500 active:scale-90'
            variant='contained'
            type='submit'
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
