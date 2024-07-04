import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AccomSelector = () => {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size='small' className='flex border-0'>
      <Select
        id='demo-select-small'
        value={age}
        onChange={handleChange}
        className='w-full h-12 flex rounded-xl text-center border border-gray-200  animated-background bg-gradient-to-l from-fg-primary-03 to-fg-gradientBlue shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] focus:ring-0 focus:border-0 focus:outline-0 [&_.MuiOutlinedInput-notchedOutline]:border-0 hover:ring-2 transform transition-colors delay-1000 duration-1000 hover:ring-fg-primary-01/50 text-fg-text-black'
      >
        <MenuItem value={0}>Novotel Impact Bangkok</MenuItem>
        <MenuItem value={10}>Ascott Embassy Sathorn Bangkok</MenuItem>
        <MenuItem value={20}>The Westin Grande Sukhumvit</MenuItem>
        <MenuItem value={30}>Millennium Hilton Bangkok</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AccomSelector;
