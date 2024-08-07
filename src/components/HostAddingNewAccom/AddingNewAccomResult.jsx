import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutSpinner from '../../pages/CheckOut/CheckoutSpinner';
import AccommodationSubmitFailed from '../HostAddingNewRoom/NewAccomFailed';
import AccommodationSubmitSuccess from '../HostAddingNewRoom/NewAccomSubmitted';
import { useDispatch } from 'react-redux';
import checkObjectValue from '../../utils/checkObjectValue';
import { defaultAddress } from '../../constant/google-map';
import { INIT_ROOM, INIT_ACCOM } from '../../constant/initialState-schema';
import { fetchAllUserAccom } from '../../store/slices/user-slice';

const AddingNewAccomResult = () => {
  const dispatch = useDispatch();

  const { isLoading, error, accom, room } = useSelector(
    (state) => state.hostForm
  );
  const { authUser, accomsList } = useSelector((state) => state.user);
  if (isLoading) {
    return (
      <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
        <CheckoutSpinner />
      </div>
    );
  } else if (error) {
    return <AccommodationSubmitFailed />;
  } else if (!isLoading && !error) {
    return <AccommodationSubmitSuccess />;
  } else if (
    checkObjectValue(accom, INIT_ACCOM) ||
    (checkObjectValue(room, INIT_ROOM) && accomsList.length < 1)
  ) {
    return <Navigate to='/host/AssetsManagement' />;
  }
};

export default AddingNewAccomResult;
