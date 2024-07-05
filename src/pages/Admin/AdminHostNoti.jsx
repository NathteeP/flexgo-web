import React from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import { openNoti, closeNoti } from '../../store/slices/modal-slice';
import CustomModal from '../../components/Modal';
import CardModal from '../../components/HostNotification/CardModal';

const detailMockup = [
  {
    HostID: 30102934,
    AccomID: 30102934,
    HostName: 'Wendy Shon',
    Accommodations: 'HotelA',
    Address: 'Bangkok, Thailand',
    CreatedDate: '20.12.24',
    Status: 'Received',
  },
  {
    HostID: 30102934,
    AccomID: 30102934,
    HostName: 'Wendy Shon',
    Accommodations: 'HotelB',
    Address: 'Bangkok, Thailand',
    CreatedDate: '20.12.24',
    Status: 'Received',
  },
  {
    HostID: 30102934,
    AccomID: 30102934,
    HostName: 'Wendy Shon',
    Accommodations: 'HotelC',
    Address: 'Bangkok, Thailand',
    CreatedDate: '20.12.24',
    Status: 'Pending',
  },
  {
    HostID: 30102934,
    AccomID: 30102934,
    HostName: 'Wendy Shon',
    Accommodations: 'HotelD',
    Address: 'Bangkok, Thailand',
    CreatedDate: '20.12.24',
    Status: 'Received',
  },
  {
    HostID: 30102934,
    AccomID: 30102934,
    HostName: 'Wendy Shon',
    Accommodations: 'HotelE',
    Address: 'Bangkok, Thailand',
    CreatedDate: '20.12.24',
    Status: 'Pending',
  },
];

function AdminHostNoti() {
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

        <div className='grid grid-cols-7 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-tl-[40px] rounded-tr-[40px] mb-2'>
          <div>HostID</div>
          <div>Accom ID</div>
          <div>Host Name</div>
          <div>Accommodations</div>
          <div>Address</div>
          <div>Created Date</div>
          <div>Status</div>
        </div>

        {detailMockup.map((detail, index) => (
          <div
            key={index}
            className='grid grid-cols-7 gap-4 text-center items-end pb-2 hover:bg-fg-primary-02/20 font-light text-sm transition duration-500 hover:scale-[105%] cursor-pointer'
            onClick={() => {
              dispatch(openNoti());
            }}
          >
            <div className='h-[60px] flex items-center justify-center'>
              {detail.HostID}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.AccomID}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.HostName}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.Accommodations}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.Address}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {detail.CreatedDate}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              <span
                className={`px-2 py-1 rounded-lg text-[12px] ${detail.Status === 'Received' ? 'bg-green-200' : 'bg-red-300'}`}
              >
                {detail.Status}
              </span>
            </div>
          </div>
        ))}

        {renderModal(isNotiOpen, closeNoti, <CardModal />)}

        <div className='grid grid-cols-7 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-bl-[40px] rounded-br-[40px] mb-10'></div>
      </div>
    </>
  );
}

export default AdminHostNoti;
