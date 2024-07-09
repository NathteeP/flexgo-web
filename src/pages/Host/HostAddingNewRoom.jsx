// HostAddingNewRoom.js
import React, { useState, useRef } from 'react';
import HostAddingNewRoomStep1 from '../../components/HostAddingNewRoom/AddingNewRoomStep1';
import HostAddingNewRoomPreview from '../../components/HostAddingNewRoom/HostAddingNewRoomPreview';

const HostAddingNewRoom = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roomTypes: [{ id: Date.now(), name: '', bedType: 'Single bed' }],
    bedTypes: ['Single'],
    guests: 4,
    photos: [],
    price: '',
  });

  const topOfPageRef = useRef(null);

  const nextStep = () => {
    setStep((prev) => prev + 1);
    scrollToTop();
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    scrollToTop();
  };

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
          {step === 1 && (
            <HostAddingNewRoomStep1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <HostAddingNewRoomPreview
              formData={formData}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default HostAddingNewRoom;
