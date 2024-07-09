import React, { useEffect } from 'react';
import UserDetails from '../../components/ReservationDetail/UserDetail';
import HotelDetails from '../../components/ReservationDetail/HotelDeatials';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  fetchReservationById,
  resetReservationSlice,
} from '../../store/slices/reservation-slice';
import { useParams } from 'react-router-dom';
import { fetchRoomAndAccomByRoomId } from '../../store/slices/room-accom-slice';
import dayjs from 'dayjs';
import monthsConstant from '../../constant/months';
import reservationApi from '../../api/reservation';

const userInfo = {
  name: 'Katarina Bluu',
  userId: '11042000',
  hotelName: 'Novotel Bangkok IMPACT',
  address:
    '94 Popular Road, Banmai Sub District, Pakkred, 11120 Nonthaburi, Thailand',
};

const HotelInfo = {
  adults: 2,
  roomType: 'Standard Twin Room',
  nights: 1,
  checkInDate: { day: 28, month: 'September' },
  checkOutDate: { day: 29, month: 'September' },
  price: '199',
  tax: '20',
  totalPrice: '219',
  imageSrc:
    'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/252156497.jpg?k=355b900708a7de8ebcbae929334c8875ec2fa6e7f0f8cf3f59897a62f18ed883&o=&hp=1',
};

const dateStringToObj = (date) => {
  return {
    day: dayjs(date).date(),
    month: monthsConstant[dayjs(date).month()],
  };
};

export default function CheckOutSuccessPage() {
  const dispatch = useDispatch();
  const { reservationId } = useParams();

  //=====================================FETCH DATA===========================================

  useEffect(() => {
    dispatch(fetchReservationById(reservationId));

    return () => {
      dispatch(resetReservationSlice());
    };
  }, []);

  const reservationData = useSelector(
    (state) => state.reservation.reservationData
  );

  useEffect(() => {
    if (reservationData.roomId) dispatch(fetchRoomAndAccomByRoomId(reservationData.roomId));
  }, [reservationData.roomId]);

  const roomAccom = useSelector((state) => state.room.roomData);
  const accom = roomAccom.accom;
  const bookingDays = dayjs(reservationData.checkOutDate).diff(
    reservationData.checkInDate,
    'days'
  );
  const transaction = reservationData?.transaction;
  const basePrice = transaction
    ? transaction.netPrice - transaction.serviceFee
    : 0;

  //==========================RESERVATION APPROVE LOGIC========================================
  const handleReservationApproval = async (reservationId) => {
    //check if approval needed
    if (!accom.isApprovalNeeded) {
      await reservationApi.approve(reservationId);
    } else {
      //handle logic send to host here
    }
  };

  if (accom) handleReservationApproval(reservationId);

  return (
    <div className=' flex flex-col items-center justify-center p-4 mx-16'>
      <div className='w-full flex justify-center mt-8'>
        <h1 className='text-2xl font-medium'> Booking Details </h1>
      </div>
      <div className='max-w-5xl w-full border-[2px] border-fg-grey/50 shadow-lg rounded-2xl flex flex-col items-center p-8 mt-8 mb-12'>
        <div className='max-w-4xl w-full flex justify-start mb-8'>
          <p className='font-medium mt-2 text-xl text-fg-text-black'>
            Reservation ID: {reservationId}
          </p>
        </div>
        <div className='bg-fg-primary-01 bg-opacity-60 shadow-md rounded-tl-2xl rounded-tr-2xl max-w-5xl w-full border-[1px] border-fg-grey/50'>
          <UserDetails
            name={reservationData.customerName}
            userId={reservationData.userId || 'Not Registered'}
            hotelName={accom?.name}
            address={`${accom?.address} ${accom?.district} ${accom?.province}`}
          />
        </div>
        <div className='bg-fg-primary-03 shadow-md rounded-bl-2xl rounded-br-2xl max-w-5xl w-full border-[1px] border-fg-grey/50'>
          <HotelDetails
            guests={reservationData.customerAmount}
            roomType={roomAccom.roomType}
            nights={bookingDays}
            checkInDate={dateStringToObj(reservationData.checkInDate)}
            checkOutDate={dateStringToObj(reservationData.checkOutDate)}
            price={basePrice}
            tax={transaction?.serviceFee}
            totalPrice={transaction?.netPrice}
            imageSrc={roomAccom.roomPhoto}
          />
        </div>
      </div>
    </div>
  );
}
