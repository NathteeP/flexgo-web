import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/Logo.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';

const Footer = () => {
  return (
    // ส่วนซ้าย logo
    <div className='bg-fg-primary-01 '>
      <div className=' mx-40 pt-20 h-[383px] flex justify-between items-start text-white font-normal'>
        <div>
          <img src={logo} alt='' />
          <div className='w-80 mt-6'>
            <small className='font-thin'>
              {' '}
              Our vision is to revolutionize travel by blending comfort and
              convenience seamlessly.
            </small>
          </div>
        </div>

        {/* part text ตรงกลาง */}
        <div className=' flex gap-20'>
          <div className=' flex flex-col '>
            <p className='mb-6'>History</p>

            <Link to='/wishList'>
              <small>Wish List</small>
            </Link>
            <Link to='/booking'>
              <small>Booking history</small>
            </Link>
          </div>
          <div className=' flex flex-col '>
            <p className='mb-6'>More links</p>
            <Link to='/'>
              <small>About Us</small>
            </Link>
            <Link to='/'>
              <small>Events</small>
            </Link>
          </div>
        </div>

        {/* social mediaด้านขวา */}
        <div className='flex flex-col justify-center items-center gap-5'>
          <p>Social Media</p>
          <div className='flex gap-5 text-2xl items-center'>
            <Link to='/'>
              <FaFacebook />
            </Link>
            <Link to='/'>
              {' '}
              <AiFillTwitterCircle className='text-[28px]' />
            </Link>
            <Link to='/'>
              <TiSocialInstagram className='text-[28px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
