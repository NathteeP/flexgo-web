import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAccomDetail } from '../../store/slices/accomDetail-slice';
import { fetchAllRoomByAccomId } from '../../store/slices/user-slice';
import { useState } from 'react';

const AccomSelector = ({ accoms, setSelectedAccom, selectedAccom }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const accomId = accoms.findIndex((item) => item.name === e.target.value);
    if (accomId === -1) return;
    setSelectedAccom(accomId);
  };

  useEffect(() => {
    if (accoms.length < 1) return;
    setSelectedAccom(0);
  }, [accoms]);

  return (
    <FormControl size='small' className='flex border-0'>
      <Select
        id='demo-select-small'
        value={accoms[selectedAccom]?.name || ''}
        onChange={handleChange}
        className='w-full h-12 flex rounded-xl text-center border border-gray-200  animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black'
      >
        {accoms?.length >= 1
          ? accoms?.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};

export default AccomSelector;
