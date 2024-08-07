import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setUserCheckInDay,
  setUserCheckOutDay,
} from '../store/slices/searchInfo-slice';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DatePickerValue() {
  const { date } = useSelector((state) => state.info);
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='w-full flex flex-col md:flex md:flex-row md:items-start gap-2 translate-y-1'>
        <DatePicker
          minDate={dayjs().tz('Asia/Bangkok')}
          label='From'
          value={dayjs(date.checkInDate).tz('Asia/Bangkok')}
          onChange={(newValue) =>
            dispatch(setUserCheckInDay(newValue.toString()))
          }
          slotProps={{
            textField: {
              className: 'w-full h-full rounded-md text-teal-600 text-sm',
              InputProps: {
                className: 'w-full h-full rounded-md',
              },
              inputProps: {
                className:
                  'w-full h-full text-teal-600 text-sm placeholder:text-teal-600',
              },
            },
            adornment: {
              className: 'h-full',
            },
          }}
        />
        <DatePicker
          label='To'
          minDate={dayjs().add('1', 'day').tz('Asia/Bangkok')}
          value={dayjs(date.checkOutDate).tz('Asia/Bangkok')}
          onChange={(newValue) =>
            dispatch(setUserCheckOutDay(newValue.toString()))
          }
          slotProps={{
            textField: {
              className: 'w-full h-full rounded-md text-teal-600 text-sm',
              InputProps: {
                className: 'w-full h-full rounded-md',
              },
              inputProps: {
                className:
                  'w-full h-full text-teal-600 text-sm placeholder:text-teal-600',
              },
            },
            adornment: {
              className: 'h-full',
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
