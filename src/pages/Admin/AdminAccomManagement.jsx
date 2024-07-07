import React, { useState } from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAccomManagement,
  closeAccomManagement,
} from '../../store/slices/modal-slice';
import CustomModal from '../../components/Modal';
// import CardModal from '../../components/HostNotification/CardModal';
import Input from '../../components/Input';
import AdminAccomManagementCard from '../../components/AdminAccomManagement/AdminAccomManagementCard';

const accommodationMockup = [
  {
    id: 1,
    userId: 1,
    name: 'Best Western Plus Wanda Grand Hotel',
    province: 'Nonthaburi',
    district: 'Pak Kret',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 2,
    userId: 1,
    name: 'Shambhala Hotel Pattaya',
    province: 'Chonburi',
    district: 'Pattaya',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 3,
    userId: 1,
    name: 'VIC 3 Bangkok Hotel',
    province: 'Bangkok',
    district: 'Phaya Thai',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 4,
    userId: 2,
    name: 'Emerald Dream Hotel',
    province: 'Bangkok',
    district: 'Khlong Toei',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 5,
    userId: 3,
    name: 'Lotus Palace Inn',
    province: 'Bangkok',
    district: 'Phra Nakhon',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 6,
    userId: 2,
    name: 'Grand Marina Hotel',
    province: 'Chonburi',
    district: 'Bang Lamung',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 7,
    userId: 4,
    name: 'Blue Lagoon Resort',
    province: 'Phuket',
    district: 'Kathu',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 8,
    userId: 4,
    name: 'Sunset Beach Hotel',
    province: 'Krabi',
    district: 'Ao Nang',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 9,
    userId: 3,
    name: 'Mountain View Resort',
    province: 'Chiang Mai',
    district: 'Mueang Chiang Mai',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
  {
    id: 10,
    userId: 5,
    name: 'Riverfront Hotel',
    province: 'Kanchanaburi',
    district: 'Mueang Kanchanaburi',
    created_at: '2024-07-02 07:40:45.496',
    status: 'ACTIVE',
  },
];

function AccommodationManagement() {
  const dispatch = useDispatch();
  const { isAccomManagementOpen } = useSelector((state) => state.modal);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAccommodations = accommodationMockup.filter(
    (accom) =>
      accom.id.toString().includes(searchTerm) ||
      accom.userId.toString().includes(searchTerm) ||
      accom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accom.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accom.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  return (
    <>
      <div className='w-screen mx-36 mt-6'>
        <div className='mb-10'>
          <TitlePage>Accommodation Management</TitlePage>
        </div>
        <div className='flex justify-end items-end h-[48px] w-full animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue rounded-[40px] my-2'>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search by Accom ID, User ID, Accom Name, Province, or District'
            className='flex border-[1px] mb-2 bg-[#F3F4F6] rounded-xl w-[350px] h-[32px] px-2 text-gray-500 text-[13px] mr-8 hover:border-[2px] hover:border-fg-secondary-02 hover:scale-105 transition duration-500 focus:border-[1px] focus:border-fg-secondary-02 focus:outline-none'
          />
        </div>
        <div className='grid grid-cols-7 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-tl-[40px] rounded-tr-[40px] mb-2'>
          <div>Accom ID</div>
          <div>User ID</div>
          <div>Accom Name</div>
          <div>Province</div>
          <div>District</div>
          <div>Created At</div>
          <div>Status</div>
        </div>

        {filteredAccommodations.map((accom, index) => (
          <div
            key={index}
            className='grid grid-cols-7 gap-4 text-center items-end pb-2 hover:bg-fg-primary-02/20 font-light text-sm transition duration-500 hover:scale-[105%] cursor-pointer'
            onClick={() => {
              dispatch(openAccomManagement());
            }}
          >
            <div className='h-[60px] flex items-center justify-center'>
              {accom.id}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {accom.userId}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {accom.name}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {accom.province}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {accom.district}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {accom.created_at}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              <span
                className={`px-2 py-1 rounded-lg text-[12px] ${
                  accom.status === 'ACTIVE' ? 'bg-green-200' : 'bg-red-200'
                }`}
              >
                {accom.status}
              </span>
            </div>
          </div>
        ))}

        {renderModal(
          isAccomManagementOpen,
          closeAccomManagement,
          <AdminAccomManagementCard />
        )}

        <div className='grid grid-cols-7 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-bl-[40px] rounded-br-[40px] mb-10'></div>
      </div>
    </>
  );
}

export default AccommodationManagement;
