import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs().tz('Asia/Bangkok'));
  console.log(value);
  console.log(value.$d);

  // console.log(value.$D);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label='From'
          defaultValue={dayjs().tz('Asia/Bangkok')}
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
          value={value}
          onChange={(newValue) => setValue(newValue)}
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
