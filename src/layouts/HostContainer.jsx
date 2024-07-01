import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HostContainer = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-[20%] bg-red-300 '></div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HostContainer;
