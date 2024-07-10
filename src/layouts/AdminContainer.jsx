import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthUser } from '../store/slices/user-slice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminContainer = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  useEffect(() => {
    console.log(authUser)
    if (!authUser || authUser?.role !== 'ADMIN') {
      navigate('/');
    }
  }, [authUser, navigate]);


  return (
    <>
      <Header />
      <div className='flex'>
        <AdminSidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminContainer;
