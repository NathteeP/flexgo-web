import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HostSidebar from './HostSidebar';

const HostContainer = () => {
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
