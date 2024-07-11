import React, { useState, useRef } from 'react';
import HostAddingAccommodationStep1 from '../../components/HostAddingNewAccom/AddingNewAccomStep1';
import HostAddingAccommodationStep2 from '../../components/HostAddingNewAccom/AddingNewAccomStep2';
import HostAddingAccommodationStep3 from '../../components/HostAddingNewAccom/AddingNewAccomStep3';
import HostAddingAccommodationStep4 from '../../components/HostAddingNewAccom/AddingNewAccomStep4';
import AddingNewAccomStep5 from '../../components/HostAddingNewAccom/AddingNewAccomStep5';
import { useSelector } from 'react-redux';
import checkHostForm from '../../utils/checkHostForm';
const HostAddingNewAccomPage = () => {
  const [step, setStep] = useState(1);
  const { accom, room } = useSelector((state) => state.hostForm);
  const [formData, setFormData] = useState({
    accomPhotos: [],
    roomPhotos: [],
  });
  const topOfPageRef = useRef(null);

  const nextStep = () => {
    switch (step) {
      case 1:
        const result1 = checkHostForm(accom, ['type', 'coordinate']);
        if (result1.length < 1) {
          setStep((prev) => prev + 1);
          scrollToTop();
          break;
        }
        alert(`${result1.join(' ')} is missing`);
        break;
      case 2:
        const result2 = checkHostForm(accom, [
          'country',
          'address',
          'district',
          'province',
        ]);
        if (result2.length < 1) {
          setStep((prev) => prev + 1);
          scrollToTop();
          break;
        }
        alert(`${result2.join(' ')} is missing`);
        break;
      case 3:
        const result3 = checkHostForm(room, [
          'roomType',
          'beds',
          'capacity',
          'price',
          'bathRoom',
          'bedRoom',
          'size',
          'roomNumber',
          'amenities',
        ]);
        const photoResult = checkHostForm(formData, [
          'accomPhotos',
          'roomPhotos',
        ]);
        if (result3.length < 1 && photoResult.length < 1) {
          setStep((prev) => prev + 1);
          scrollToTop();
          break;
        }
        alert(`${result3.join(' ')} ${photoResult.join(' ')}is missing`);
        break;
      case 4:
        const result4 = checkHostForm(accom, [
          'name',
          'description',
          'houseRule',
        ]);
        if (result4.length < 1) {
          setStep((prev) => prev + 1);
          scrollToTop();
          break;
        }
        alert(`${result4.join(' ')} is missing`);
        break;
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    scrollToTop();
  };

  const handleSubmit = (e) => {
    if (e.target.type !== 'submit') {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const accomCheck = checkHostForm(accom);
    const roomCheck = checkHostForm(room);
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
          {step === 5 && (
            <AddingNewAccomStep5
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
