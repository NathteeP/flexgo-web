import React from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import { openNoti, closeNoti } from '../../store/slices/modal-slice';
import CustomModal from '../../components/Modal';
import CardModal from '../../components/HostNotification/CardModal';

const detailMockup = [
  {
    id: 3012345,
    customer: 'Wendy',
    guests: '2 adults, 1 child',
    accommodations: 'Ascott Embassy Sathorn',
    roomType: 'Single Bed room',
    checkIn: '15.10.2024',
    checkOut: '18.10.2024',
    payment: 'Approved',
  },
  {
    id: 3012346,
    customer: 'John',
    guests: '1 adult',
    accommodations: 'Mandarin Oriental',
    roomType: 'Double Bed room',
    checkIn: '10.11.2024',
    checkOut: '15.11.2024',
    payment: 'Pending',
  },
  {
    id: 3012347,
    customer: 'Alice',
    guests: '2 adults',
    accommodations: 'The Peninsula',
    roomType: 'Suite',
    checkIn: '01.12.2024',
    checkOut: '05.12.2024',
    payment: 'Approved',
  },
  {
    id: 3012348,
    customer: 'Michael',
    guests: '3 adults, 2 children',
    accommodations: 'Shangri-La Hotel',
    roomType: 'Family Room',
    checkIn: '20.10.2024',
    checkOut: '25.10.2024',
    payment: 'Pending',
  },
  {
    id: 3012349,
    customer: 'Sarah',
    guests: '2 adults',
    accommodations: 'Anantara Siam',
    roomType: 'Single Bed room',
    checkIn: '12.11.2024',
    checkOut: '17.11.2024',
    payment: 'Approved',
  },
  {
    id: 3012350,
    customer: 'David',
    guests: '1 adult',
    accommodations: 'Banyan Tree',
    roomType: 'Double Bed room',
    checkIn: '05.12.2024',
    checkOut: '10.12.2024',
    payment: 'Pending',
  },
  {
    id: 3012351,
    customer: 'Emma',
    guests: '2 adults, 1 child',
    accommodations: 'Siam Kempinski Hotel',
    roomType: 'Suite',
    checkIn: '15.10.2024',
    checkOut: '20.10.2024',
    payment: 'Approved',
  },
  {
    id: 3012352,
    customer: 'James',
    guests: '1 adult',
    accommodations: 'St. Regis',
    roomType: 'Single Bed room',
    checkIn: '10.11.2024',
    checkOut: '13.11.2024',
    payment: 'Pending',
  },
  {
    id: 3012353,
    customer: 'Olivia',
    guests: '2 adults, 2 children',
    accommodations: 'Conrad Bangkok',
    roomType: 'Family Room',
    checkIn: '01.12.2024',
    checkOut: '06.12.2024',
    payment: 'Approved',
  },
  {
    id: 3012354,
    customer: 'Liam',
    guests: '3 adults',
    accommodations: 'JW Marriott',
    roomType: 'Suite',
    checkIn: '20.10.2024',
    checkOut: '25.10.2024',
    payment: 'Pending',
  },
];

function HostNotification() {
  const dispatch = useDispatch();
  const { isNotiOpen } = useSelector((state) => state.modal);

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );
  return (
    <>
      <div className='w-screen mx-36 mt-6'>
        <div className='mb-10'>
          <TitlePage>Booking Details</TitlePage>
        </div>

        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-tl-[40px] rounded-tr-[40px] mb-2'>
          <div>BookingID</div>
          <div>Customer</div>
          <div>Guests</div>
          <div>Accommodations</div>
          <div>Room Type</div>
          <div>Check-In</div>
          <div>Check-Out</div>
          <div>Status</div>
        </div>

        {detailMockup.map((detail, index) => (
          <div
            key={index}
            className='grid grid-cols-8 gap-4 text-center items-end pb-2 hover:bg-fg-primary-02/20 font-light text-sm transition duration-500  hover:scale-[105%] cursor-pointer'
            onClick={() => {
              dispatch(openNoti());
            }}
          >
            <div className='h-[60px] flex items-center justify-center'>
              {detail.id}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.customer}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.guests}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.accommodations}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.roomType}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.checkIn}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.checkOut}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              <span
                className={`px-2 py-1 rounded-lg text-[12px] ${detail.payment === 'Approved' ? 'bg-green-200' : 'bg-red-300'}`}
              >
                {detail.payment}
              </span>
            </div>
          </div>
        ))}

        {renderModal(isNotiOpen, closeNoti, <CardModal />)}

        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-bl-[40px] rounded-br-[40px] mb-10'></div>
      </div>
    </>
  );
}

export default HostNotification;
