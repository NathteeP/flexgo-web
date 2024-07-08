import React, { useState } from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import {
  openUserManagement,
  closeUserManagement,
} from '../../store/slices/modal-slice';
import CustomModal from '../../components/Modal';
import Input from '../../components/Input';
import UserManagementCard from '../../components/AdminUserManagement/UserManagementCard';

const userMockup = [
  {
    id: 1,
    username: 'john123',
    email: 'John@mail.com',
    full_name: 'John Doe',
    phone_number: '0112345671',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 2,
    username: 'john124',
    email: 'john12@mail.com',
    full_name: 'John Dim',
    phone_number: '0123456712',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 3,
    username: 'jack123',
    email: 'Jack@mail.com',
    full_name: 'Jack Die',
    phone_number: '0112345673',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 4,
    username: 'abby123',
    email: 'abbie@mail.com',
    full_name: 'Abby Brown',
    phone_number: '045451217',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 5,
    username: 'bob12321',
    email: 'Bob@mail.com',
    full_name: 'Bobby Carter',
    phone_number: '0112141271',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 6,
    username: 'cathy12321',
    email: 'cathy@mail.com',
    full_name: 'Catherine Carlie',
    phone_number: '0112141271',
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 7,
    username: 'dim12321',
    email: 'Dim@mail.com',
    full_name: 'Dimon Long',
    phone_number: '0258341271',
    role: 'ADMIN',
    is_active: 1,
    created_at: '2024-07-02 07:40:45.487',
  },
  {
    id: 8,
    username: null,
    email: 'keartisukookow@gmail.com',
    full_name: 'Keartisku Sookow',
    phone_number: null,
    role: 'CLIENT',
    is_active: 1,
    created_at: '2024-07-05 09:11:29.150',
  },
  {
    id: 9,
    username: null,
    email: 'keartisukp@gmail.com',
    full_name: 'white shiro',
    phone_number: null,
    role: null,
    is_active: null,
    created_at: null,
  },
];

function UserManagement() {
  const dispatch = useDispatch();
  const { isUserManagementOpen } = useSelector((state) => state.modal);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = userMockup.filter(
    (user) =>
      user.id.toString().includes(searchTerm) ||
      (user.username &&
        user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
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
          <TitlePage>User Management</TitlePage>
        </div>
        <div className='flex justify-end items-end h-[48px] w-full animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue rounded-[40px] my-2'>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search by User ID, Username, Email, or Full Name'
            className='flex border-[1px] mb-2 bg-[#F3F4F6] rounded-xl w-[350px] h-[32px] px-2 text-gray-500 text-[13px] mr-8 hover:border-[2px] hover:border-fg-secondary-02 hover:scale-105 transition duration-500 focus:border-[1px] focus:border-fg-secondary-02 focus:outline-none'
          />
        </div>
        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-tl-[40px] rounded-tr-[40px] mb-2'>
          <div>User ID</div>
          <div>Username</div>
          <div>Email</div>
          <div>Full Name</div>
          <div>Phone Number</div>
          <div>Created At</div>
          <div>Role</div>
          <div>Is Active</div>
        </div>

        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className='grid grid-cols-8 gap-4 text-center items-end pb-2 hover:bg-fg-primary-02/20 font-light text-sm transition duration-500 hover:scale-[105%] cursor-pointer'
            onClick={() => {
              dispatch(openUserManagement());
            }}
          >
            <div className='h-[60px] flex items-center justify-center'>
              {user.id}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {user.username || 'N/A'}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {user.email}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {user.full_name}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {user.phone_number || 'N/A'}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              {user.created_at || 'N/A'}
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              <span
                className={`px-2 py-1 rounded-lg text-[12px] w-[80px] ${
                  user.role === 'ADMIN' ? 'bg-blue-200' : 'bg-fg-primary-03'
                }`}
              >
                {user.role || 'N/A'}
              </span>
            </div>
            <div className='h-[60px] flex items-center justify-center'>
              <span
                className={`px-2 py-1 rounded-lg text-[12px]  w-[80px] ${
                  user.is_active ? 'bg-green-200' : 'bg-red-200'
                }`}
              >
                {user.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}

        {renderModal(
          isUserManagementOpen,
          closeUserManagement,
          <UserManagementCard />
        )}

        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-bl-[40px] rounded-br-[40px] mb-10'></div>
      </div>
    </>
  );
}

export default UserManagement;
