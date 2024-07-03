import React, { useState, useRef } from 'react';
import HostAddingNewRoomStep1 from '../../components/HostAddingNewRoom/AddingNewRoomStep1';

const HostAddingNewRoom = () => {
  const [formData, setFormData] = useState({
    roomTypes: [{ id: Date.now(), name: '', bedType: 'Single bed' }], // Initialize with one room
    bedTypes: ['Single'],
    guests: 4,
    photos: [],
    price: '',
  });

  const topOfPageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Submit data here
  };

  const scrollToTop = () => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen w-full flex justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-full'>
        <form onSubmit={handleSubmit}>
          <div ref={topOfPageRef} />
          <HostAddingNewRoomStep1
            formData={formData}
            setFormData={setFormData}
          />
        </form>
      </div>
    </div>
  );
};

export default HostAddingNewRoom;
