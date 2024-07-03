import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import DatePickerValue from './DatePicker';
import GuestDropdown from './GuestDropdown';
import { useSelector } from 'react-redux';

const FilterBar = () => {
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [showDropdown, setShowDropdown] = useState(false);

  const { capacity } = useSelector((state) => state.info);

  return (
    <div className='px-4 bg-white w-full  h-full md:h-full lg:h-[85px]  rounded-[20px] shadow-sm pointer-events-auto flex justify-center'>
      <form
        action=''
        className='flex flex-col lg:flex-row gap-2 w-full justify-between items-center'
        onSubmit={(e) => e.preventDefault()}
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
          {showDropdown && <GuestDropdown updateGuests={setGuests} />}
        </div>
        <div className='flex justify-center items-center w-full lg:w-[150px]'>
          <Button
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
