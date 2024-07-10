import React, { useState, useEffect, useCallback } from 'react';
import TitlePage from '../../layouts/TitlePage';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../../components/Modal';
import CardModal from '../../components/HostNotification/CardModal';
import Input from '../../components/Input';
import { closeHostConfirmAddNewAccom, openHostConfirmAddNewAccom } from '../../store/slices/modal-slice';
import GenericTable from '../../components/GenericTable';
import { fetchReservationByHostId, setPage, setSortConfig, setSearchTerm } from '../../store/slices/host-accom-slice';
import dayjs from 'dayjs';


function HostNotification() {
  const dispatch = useDispatch();
  const { isHostConfirmAddNewAccom } = useSelector((state) => state.modal);
  const authUser = useSelector((state) => state.user.authUser)
  const { reservationData, isLoading } = useSelector((state) => state.host)
  const {currentPage, totalPages, sortKey, sortOrder, searchTerm} = reservationData
  const [selectedReservation, setSelectedReservation] = useState(null)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const reservation = reservationData.reservation || []

  useEffect(() => {
    if (authUser) dispatch(fetchReservationByHostId({
      userId: authUser.id,
      page: currentPage,
      sortKey,
      sortOrder,
      searchTerm: debouncedSearchTerm
  }))
  },[authUser, currentPage, sortKey, sortOrder, debouncedSearchTerm, dispatch])

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

    const debouncedSetSearchTerm = useCallback(
      debounce((term) => {
        setDebouncedSearchTerm(term);
      }, 1000),
      []
    );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
    debouncedSetSearchTerm(term);
  };

  const data = reservation.map(el => {
    return {
      ...el, 
      checkInDate: dayjs(el.checkInDate).format('DD/MM/YYYY'),
      checkOutDate: dayjs(el.checkOutDate).format('DD/MM/YYYY'),
    }
  })

  const renderModal = (isOpen, closeAction, children) => (
    <CustomModal open={isOpen} onClose={() => dispatch(closeAction())}>
      {children}
    </CustomModal>
  );

  const handleRowClick = (reservation) => {
    setSelectedReservation(reservation);
    dispatch(openHostConfirmAddNewAccom());
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortKey === key && sortOrder === 'asc') {
      direction = 'desc';
    }
    dispatch(setSortConfig({ key, direction }));
    debouncedSetSearchTerm(searchTerm); // 
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchReservationByHostId({
      userId: authUser.id,
      page,
      sortKey,
      sortOrder,
      searchTerm: debouncedSearchTerm
    }));
  };

  const columns = [
    {key: 'id', label: 'Booking ID'},
    {key: 'customerName', label: 'Customer'},
    {key: 'customerAmount', label: 'Guests'},
    {key: 'accomName', label: 'Accommodations'},
    {key: 'roomType', label: 'Room Type'},
    {key: 'checkInDate', label: 'Check-In'},
    {key: 'checkOutDate', label: 'Check-Out'},
    {key: 'status', label: 'Status'},
  ]

  return (
    <>
      <div className='w-screen mx-36 mt-6'>
        <div className='mb-10'>
          <TitlePage>Booking Details</TitlePage>
        </div>
        <div className='flex justify-end items-end h-[48px] w-full animated-background bg-gradient-to-r from-fg-primary-03 to-fg-gradientBlue rounded-[40px] my-2'>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search by Booking ID or Customer'
            className='flex border-[1px] mb-2 bg-[#F3F4F6] rounded-xl w-[350px] h-[32px] px-2 text-gray-500 text-[13px] mr-8 hover:border-[2px] hover:border-fg-secondary-02 hover:scale-105 transition duration-500 focus:border-[1px] focus:border-fg-secondary-02 focus:outline-none'
          />
        </div>
        <GenericTable
        columns={columns}
        data={data}
        onRowClick={handleRowClick}
        onSort={handleSort}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={isLoading}
        sortKey={sortKey}
        sortOrder={sortOrder}
        />

        {renderModal(isHostConfirmAddNewAccom, 
          closeHostConfirmAddNewAccom, 
          <CardModal reservation={selectedReservation} />)}

      </div>
    </>
  );
}

export default HostNotification;
