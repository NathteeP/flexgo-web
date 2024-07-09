import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  setPage,
  setSortConfig,
  setSearchTerm,
} from '../../store/slices/users-slice';
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
  const {
    users,
    isLoading,
    currentPage,
    totalPages,
    sortKey,
    sortOrder,
    searchTerm,
  } = useSelector((state) => state.users);
  const { isUserManagementOpen } = useSelector((state) => state.modal);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // หน่วงเวลาตอน search และ sort
  const debouncedSetSearchTerm = useCallback(
    debounce((term) => {
      setDebouncedSearchTerm(term);
    }, 1000),
    []
  );

  useEffect(() => {
    dispatch(
      fetchUsers({
        page: currentPage,
        sortKey,
        sortOrder,
        searchTerm: debouncedSearchTerm,
      })
    );
  }, [dispatch, currentPage, sortKey, sortOrder, debouncedSearchTerm]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
    debouncedSetSearchTerm(term);
  };

  const handleRowClick = (user) => {
    dispatch(openUserManagement());
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      direction = 'desc';
    }
    dispatch(setSortConfig({ key, direction }));
    debouncedSetSearchTerm(searchTerm); // เรียก debounce สำหรับการ sort ด้วย
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(
      fetchUsers({ page, sortKey, sortOrder, searchTerm: debouncedSearchTerm })
    );
  };

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
            data={users}
            onRowClick={handleRowClick}
            onSort={handleSort}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            sortKey={sortKey}
            sortOrder={sortOrder}
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
