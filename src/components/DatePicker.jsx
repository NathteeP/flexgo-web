import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import userApi from '../api/users';
import { storeAccessToken } from '../utils/localStorage';
// import { setHoursService } from '../utils/time/setHourService';
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
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          minDate={dayjs().tz('Asia/Bangkok')}
          label='From'
          value={dayjs(date.checkInDate).tz('Asia/Bangkok')}
          onChange={(newValue) =>
            dispatch(setUserCheckInDay(newValue.toString()))
          }
          sx={{
            '& .MuiInputBase-root': { height: 48, borderRadius: '8px' },
            '& .MuiOutlinedInput-root': {
              height: 48,
              overflow: 'hidden',
              borderRadius: '8px',
            },
            '& .MuiInputBase-input': {
              height: '100%',
              color: '#6EAAA6',
              fontSize: '14px',
            },
            '& .MuiInputBase-input::placeholder': { color: '#6EAAA6' },
            '& .MuiInputAdornment-root': { height: '100%' },
          }}
        />
        <DatePicker
          label='To'
          minDate={dayjs().add('1', 'day').tz('Asia/Bangkok')}
          value={dayjs(date.checkOutDate).tz('Asia/Bangkok')}
          onChange={(newValue) =>
            dispatch(setUserCheckOutDay(newValue.toString()))
          }
          sx={{
            '& .MuiInputBase-root': { height: 48, borderRadius: '8px' },
            '& .MuiOutlinedInput-root': {
              height: 48,
              overflow: 'hidden',
              borderRadius: '8px',
            },
            '& .MuiInputBase-input': {
              height: '100%',
              color: '#6EAAA6',
              fontSize: '14px',
            },
            '& .MuiInputBase-input::placeholder': { color: '#6EAAA6' },
            '& .MuiInputAdornment-root': { height: '100%' },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
