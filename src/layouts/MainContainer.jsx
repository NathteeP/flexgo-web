import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthUser } from '../store/slices/user-slice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (authUser) {
      if (authUser.role === 'ADMIN') {
        navigate('/admin');
      }
    }
  }, [authUser, navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainContainer;
