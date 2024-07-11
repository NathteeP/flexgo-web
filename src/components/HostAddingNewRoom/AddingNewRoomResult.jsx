import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutSpinner from '../../pages/CheckOut/CheckoutSpinner';
import RoomSubmitFailed from '../HostAddingNewRoom/NewRoomFailed';
import RoomSubmitSuccess from '../HostAddingNewRoom/NewRoomSubmited';

const AddingNewRoomResult = () => {
  const { isLoading, error } = useSelector((state) => state.hostForm);

  if (isLoading) {
    return (
      <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
        <CheckoutSpinner />
      </div>
    );
  } else if (error) {
    return <RoomSubmitFailed />;
  }

  return <RoomSubmitSuccess />;
};

export default AddingNewRoomResult;
