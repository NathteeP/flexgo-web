import React, { useState } from 'react';
import {
  IconButton,
  Typography,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CountrySelect from '../../components/Country';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';

const accountPage = () => {
  const [open, setOpen] = useState(false);
  const [editField, setEditField] = useState('');
  const [formData, setFormData] = useState({
    name: 'Keartisuk Sookkow',
    email: 'k***w@gmail.com',
    phone: '66+ 123123123',
    birthday: '99/04/99',
    nationality: 'Thailand',
    gender: 'Male',
    address: 'วรรณสร้าว',
  });
  const [avatar, setAvatar] = useState(null);

  const handleOpen = (field) => {
    setEditField(field);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditField('');
  };

  const handleSave = () => {
    handleClose();
  };

  const handleCancel = () => {
    setAvatar(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [editField]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className='flex flex-col items-center py-8 bg-gray-100 min-h-screen'>
      <Box className='bg-white shadow rounded p-6 w-full max-w-2xl'>
        <Box className='flex justify-between mb-6 bg-white border border-gray-200 rounded-lg p-4 '>
          <div className='flex flex-col mt-4'>
            <Typography variant='h6' className='mt-4'>
              Personal details
            </Typography>
            <Typography
              variant='body2'
              className='text-gray-500 text-center mt-2'
            >
              Update your profile and tell us your up-to-date information.
            </Typography>
          </div>
          <div className='flex flex-col'>
            <Avatar
              sx={{ width: 150, height: 150 }}
              src={avatar}
              className='ml-4'
            ></Avatar>
            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='upload-avatar'
              type='file'
              onChange={handleAvatarChange}
            />
            <label htmlFor='upload-avatar'>
              <Button
                variant='contained'
                component='span'
                className='mt-3 ml-4 text-sm bg-fg-secondary-02 hover:bg-fg-secondary-01'
              >
                Upload Profile
              </Button>
            </label>
          </div>
        </Box>

        {Object.entries(formData).map(([key, value]) => (
          <div className='mb-6' key={key}>
            <Typography
              variant='subtitle1'
              className='font-medium text-gray-700 capitalize'
            >
              {key.replace('_', ' ')}
            </Typography>
            <div className='flex justify-between items-center mt-1'>
              <Typography className='text-gray-800'>{value}</Typography>
              <IconButton
                size='small'
                color='primary'
                onClick={() => handleOpen(key)}
              >
                <EditIcon fontSize='small' />
              </IconButton>
            </div>
          </div>
        ))}
        <div className='flex justify-end gap-4 mt-8'>
          <CustomButton
            onClick={handleCancel}
            className='font-medium text-fg-white text-lg hover:bg-fg-secondary-01 shadow-inner'
          >
            {' '}
            Cancel
          </CustomButton>
          <CustomButton className='font-medium text-fg-white text-lg hover:bg-fg-secondary-01 shadow-inner'>
            Save
          </CustomButton>
        </div>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>
          Edit {editField.charAt(0).toUpperCase() + editField.slice(1)}
        </DialogTitle>
        <DialogContent>
          {editField === 'nationality' ? (
            <CountrySelect
              value={formData[editField]}
              onChange={handleChange}
            />
          ) : (
            <CustomInput
              label={editField.charAt(0).toUpperCase() + editField.slice(1)}
              value={formData[editField]}
              onChange={handleChange}
              className='mb-4 block bg-white border border-gray-400 rounded-lg w-full h-12 px-3 text-gray-700 text-lg'
            />
          )}
        </DialogContent>
        <DialogActions>
          <CustomButton onClick={handleClose}>Cancel</CustomButton>
          <CustomButton onClick={handleSave}>Save</CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default accountPage;
