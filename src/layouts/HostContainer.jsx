import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HostSidebar from './HostSidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAmenities } from '../store/slices/amenities-slice';

const HostContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAmenities());
  }, [dispatch]);

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
