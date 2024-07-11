import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutSpinner from '../../pages/CheckOut/CheckoutSpinner';
import AccommodationSubmitFailed from '../HostAddingNewRoom/NewAccomFailed';
import AccommodationSubmitSuccess from '../HostAddingNewRoom/NewAccomSubmitted';

const AddingNewAccomResult = () => {
  const { isLoading, error } = useSelector((state) => state.hostForm);

  if (isLoading) {
    return (
      <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
        <CheckoutSpinner />
      </div>
    );
  } else if (error) {
    return <AccommodationSubmitFailed />;
  }

  return <AccommodationSubmitSuccess />;
};

export default AddingNewAccomResult;
