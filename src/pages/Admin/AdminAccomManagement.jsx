import React, { useState, useCallback, useEffect } from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAccomManagement,
  closeAccomManagement,
} from '../../store/slices/modal-slice';
import CustomModal from '../../components/Modal';
import Input from '../../components/Input';
import AdminAccomManagementCard from '../../components/AdminAccomManagement/AdminAccomManagementCard';
import GenericTable from '../../components/GenericTable';
import {
  fetchAllAccoms,
  setPage,
  setSortConfig,
  setSearchTerm,
} from '../../store/slices/accoms-slice';

function AccommodationManagement() {
  const dispatch = useDispatch();

  const {
    accomsList = [],
    isLoading,
    currentPage,
    totalPages,
    sortKey,
    sortOrder,
    searchTerm,
  } = useSelector((state) => state.accoms);

  const { isAccomManagementOpen } = useSelector((state) => state.modal);

  const [selectedAccom, setSelectedAccom] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

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

  const debouncedSetSearchTerm = useCallback(
    debounce((term) => {
      setDebouncedSearchTerm(term);
    }, 1000),
    []
  );

  useEffect(() => {
    dispatch(
      fetchAllAccoms({
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

  const handleRowClick = (accom) => {
    setSelectedAccom(accom);
    dispatch(openAccomManagement());
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      direction = 'desc';
    }
    dispatch(setSortConfig({ key, direction }));
    debouncedSetSearchTerm(searchTerm);
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(
      fetchAllAccoms({
        page,
        sortKey,
        sortOrder,
        searchTerm: debouncedSearchTerm,
      })
    );
  };

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  const columns = [
    { key: 'id', label: 'Accom ID' },
    { key: 'userId', label: 'User ID' },
    { key: 'name', label: 'Accom Name' },
    { key: 'province', label: 'Province' },
    { key: 'district', label: 'District' },
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
          data={accomsList}
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
          <AdminAccomManagementCard accom={selectedAccom} />
        )}
      </div>
    </>
  );
}

export default AccommodationManagement;
