import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  overflow: 'hidden',
};

const CustomModal = ({ open = false, onClose, children }) => {
  return (
    <MuiModal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </MuiModal>
  );
};

export default CustomModal;
