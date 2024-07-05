import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const FilterBar = () => {
  const [startDate, setStartDate] = useState(
    dayjs().tz('Asia/Bangkok').toDate()
  );
  const [endDate, setEndDate] = useState(dayjs().tz('Asia/Bangkok').toDate());

  const handleFilter = () => {
    console.log('Filter from', startDate, 'to', endDate);
    // Logic สำหรับการ filter ข้อมูล
  };

  console.log(startDate, endDate, '@@@@@@@@@@@@@@@@@@@@');
  return (
    <div className='flex items-center bg-white p-4 rounded-xl h-full w-full animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.05)_0px_9px_30px]'>
      <div className='flex items-center'>
        <label className='mr-2'>From:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className='border rounded px-2 py-1'
        />
      </div>
      <div className='flex items-center ml-4'>
        <label className='mr-2'>To:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className='border rounded px-2 py-1'
        />
      </div>
      <button
        onClick={handleFilter}
        className='w-[120px] ml-4 px-4 py-2 bg-fg-primary-01 text-white rounded-lg hover:bg-fg-primary-02'
      >
        Filter
      </button>
    </div>
  );
};

export default FilterBar;
