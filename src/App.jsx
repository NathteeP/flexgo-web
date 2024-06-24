import { Button } from '@mui/material';
import React from 'react';

function App() {
  return (
    <div>
      <Button>Love</Button>
      <Button className='bg-fg-primary-01'>Love</Button>
      <Button className='bg-fg-primary-02'>Love</Button>
      <Button className='bg-fg-secondary-01'>Love</Button>
      <Button className='bg-fg-secondary-02'>Love</Button>
      <Button className='bg-fg-primary-01'>Love</Button>
      <Button className='bg-fg-white'>Love</Button>
      <Button className='bg-fg-black text-fg-text-white'>Love</Button>
    </div>
  );
}

export default App;
