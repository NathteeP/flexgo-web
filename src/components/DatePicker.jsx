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

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [date, setDate] = React.useState('');

  // const userSeed = {
  //   id: 8,
  //   birthDate: value.$d,
  // };

  // const loginUser = {
  //   username: 'jack123',
  //   password: 'abcd1234',
  // };

  // -------------- ## LOGIN Fn ## -----------------------

  // const handleLogin = async (userInfo) => {
  //   try {
  //     const { data } = await userApi.login(userInfo);
  //     console.log(data);
  //     storeAccessToken(data.accessToken);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // -------------- ## EDIT Fn ## -----------------------
  // const handleEdit = async (info) => {
  //   try {
  //     const { data } = await userApi.edit(info);
  //     console.log('Unformat to locale', data.birthDate);
  //     console.log(dayjs(data.birthDate).tz('Asia/Bangkok'));
  //     setDate(dayjs(data.birthDate).tz('Asia/Bangkok').format('DD/MM/YY'));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label='From'
          defaultValue={dayjs('2022-04-17')}
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
