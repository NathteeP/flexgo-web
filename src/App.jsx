import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Box, Modal, Typography } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button>LOVEYOU</Button>
      <Input inputName='Test'></Input>
      <Button onClick={handleOpen}>Open modal</Button>
    </>
  );
}

export default App;
