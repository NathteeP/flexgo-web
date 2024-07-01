import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthUser } from '../store/slices/user-slice';

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainContainer;
