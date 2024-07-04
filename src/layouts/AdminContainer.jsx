import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';

const AdminContainer = () => {
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
