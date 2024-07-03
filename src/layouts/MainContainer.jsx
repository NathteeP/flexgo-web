import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthUser } from '../store/slices/user-slice';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);

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
