import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HostSidebar from './HostSidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAmenities } from '../store/slices/amenities-slice';
import { fetchAllUserAccom, fetchAuthUser } from '../store/slices/user-slice';
import { useSelector } from 'react-redux';

const HostContainer = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!authUser) {
      dispatch(fetchAuthUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) return;
    dispatch(fetchAllUserAccom(authUser?.id));
    dispatch(fetchAmenities());
  }, [dispatch, authUser]);

  return (
    <>
      <Header />
      <div className='flex'>
        <HostSidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HostContainer;
