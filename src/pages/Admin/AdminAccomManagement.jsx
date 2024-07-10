import React, { useState, useCallback, useEffect } from 'react';
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
import GenericTable from '../../components/GenericTable';

import {
  fetchUsers,
  setPage,
  setSortConfig,
  setSearchTerm,
} from '../../store/slices/users-slice';

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

  const {
    users,
    isLoading,
    currentPage,
    totalPages,
    sortKey,
    sortOrder,
    searchTerm,
  } = useSelector((state) => state.users);
  // ใส่ไปก่อน
  const { isAccomManagementOpen } = useSelector((state) => state.modal);
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
    dispatch(openAccomManagement());
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

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  const columns = [
    { key: 'accomId', label: 'Accom ID' },
    { key: 'id', label: 'User ID' },
    { key: 'accomName', label: 'Accom Name' },
    { key: 'accomProvince', label: 'Province' },
    { key: 'accomDistrict', label: 'District' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'status', label: 'Status' },
  ];

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
        <GenericTable
          columns={columns}
          data={users}
          onRowClick={handleRowClick}
          onSort={handleSort}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          loading={isLoading}
          sortKey={sortKey}
          sortOrder={sortOrder}
        />

        {renderModal(
          isAccomManagementOpen,
          closeAccomManagement,
          <AdminAccomManagementCard />
        )}
      </div>
    </>
  );
}

export default AccommodationManagement;
