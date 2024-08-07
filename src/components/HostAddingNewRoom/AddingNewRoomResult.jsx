import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutSpinner from '../../pages/CheckOut/CheckoutSpinner';
import RoomSubmitFailed from '../HostAddingNewRoom/NewRoomFailed';
import RoomSubmitSuccess from '../HostAddingNewRoom/NewRoomSubmited';
import { useDispatch } from 'react-redux';
import { fetchAllRoomByAccomId } from '../../store/slices/user-slice';
import checkObjectValue from '../../utils/checkObjectValue';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { INIT_ROOM } from '../../constant/initialState-schema';

const AddingNewRoomResult = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.hostForm);
  const { roomsList } = useSelector((state) => state.user);
  const { room } = useSelector((state) => state.hostForm);

  if (isLoading) {
    return (
      <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
        <CheckoutSpinner />
      </div>
    );
  } else if (error) {
    return <RoomSubmitFailed />;
  } else if (!isLoading && !error) {
    return <RoomSubmitSuccess />;
  } else if (checkObjectValue(room, INIT_ROOM) || roomsList.length < 1) {
    return <Navigate to='/host/AssetsManagement' />;
  }
};

export default AddingNewRoomResult;
