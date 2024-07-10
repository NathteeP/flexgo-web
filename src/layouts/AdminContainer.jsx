import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAuthUser } from '../store/slices/user-slice';
import { useNavigate } from 'react-router-dom';
import CheckoutSpinner from '../pages/CheckOut/CheckoutSpinner';

const AdminContainer = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(fetchAuthUser());
      setLoading(false);
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (!authUser || authUser?.role !== 'ADMIN') {
        navigate('/');
    }
    }
  }, [authUser, navigate, loading]);

  if (loading || !authUser || authUser.role !== 'ADMIN') {
    return <CheckoutSpinner />
  }

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
