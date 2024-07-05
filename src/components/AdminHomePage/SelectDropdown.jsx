import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectDropdown = () => {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size='small' className='w-full h-full flex border-0'>
      <Select
        id='demo-select-small'
        value={age}
        onChange={handleChange}
        className='w-full h-full flex rounded-xl text-center animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black'
      >
        <MenuItem value={0}>Overall Dashboard</MenuItem>
        <MenuItem value={10}>accom1</MenuItem>
        <MenuItem value={20}>accom2</MenuItem>
        <MenuItem value={30}>accom3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectDropdown;
