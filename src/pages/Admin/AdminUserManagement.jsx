import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setPage } from '../../store/slices/users-slice';
import {
  openUserManagement,
  closeUserManagement,
} from '../../store/slices/modal-slice';
import TitlePage from '../../layouts/TitlePage';
import CustomModal from '../../components/Modal';
import Input from '../../components/Input';
import UserManagementCard from '../../components/AdminUserManagement/UserManagementCard';
import GenericTable from '../../components/GenericTable';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, isLoading, currentPage, totalPages } = useSelector(
    (state) => state.users
  );
  const { isUserManagementOpen } = useSelector((state) => state.modal);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowClick = (user) => {
    dispatch(openUserManagement());
    // ส่งค่าของ user ไปที่ UserManagementCard
  };

  const handleSort = (key, direction) => {
    // ปรับปรุงให้ทำการเรียงลำดับตาม key และ direction
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    // Fetch data ใหม่เมื่อมีการเปลี่ยนหน้า
    dispatch(fetchUsers());
  };

  const filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user.id.toString().includes(searchTerm) ||
          (user.username &&
            user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const columns = [
    { key: 'id', label: 'User ID' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'phoneNumber', label: 'Phone Number' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'role', label: 'Role' },
    { key: 'isActive', label: 'Is Active' },
  ];

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
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <GenericTable
            columns={columns}
            data={filteredUsers}
            onRowClick={handleRowClick}
            onSort={handleSort}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        {renderModal(
          isUserManagementOpen,
          closeUserManagement,
          <UserManagementCard />
        )}
      </div>
    </>
  );
};

export default UserManagement;
