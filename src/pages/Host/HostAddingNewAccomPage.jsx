import React, { useState, useRef } from 'react';
import HostAddingAccommodationStep1 from '../../components/HostAddingNewAccom/AddingNewAccomStep1';
import HostAddingAccommodationStep2 from '../../components/HostAddingNewAccom/AddingNewAccomStep2';
import HostAddingAccommodationStep3 from '../../components/HostAddingNewAccom/AddingNewAccomStep3';
import HostAddingAccommodationStep4 from '../../components/HostAddingNewAccom/AddingNewAccomStep4';

const HostAddingNewAccomPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedType: '',
    selectedPlace: '',
    country: '',
    address: '',
    subdistrict: '',
    district: '',
    province: '',
    postalCode: '',
    roomTypes: [''],
    bedTypes: ['Single'],
    guests: 4,
    amenities: [],
    photos: [],
    houseTitle: '',
    accommodationDescription: '',
    houseRule: '',
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
            <HostAddingAccommodationStep1
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <HostAddingAccommodationStep2
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <HostAddingAccommodationStep3
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <HostAddingAccommodationStep4
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default HostAddingNewAccomPage;
