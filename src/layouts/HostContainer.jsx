import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const HostContainer = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HostContainer;
