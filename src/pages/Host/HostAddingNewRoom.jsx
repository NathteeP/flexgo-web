// HostAddingNewRoom.js
import React, { useState, useRef } from 'react';
import HostAddingNewRoomStep1 from '../../components/HostAddingNewRoom/AddingNewRoomStep1';
import HostAddingNewRoomPreview from '../../components/HostAddingNewRoom/HostAddingNewRoomPreview';
import checkHostForm from '../../utils/checkHostForm';
import { useSelector } from 'react-redux';
import createFormData from '../../utils/createFormData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitCreateRoomAndUploadPhoto } from '../../store/slices/hostForm-slice';

const HostAddingNewRoom = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roomPhotos: [],
  });

  const { room } = useSelector((state) => state.hostForm);
  const navigate = useNavigate();
  const topOfPageRef = useRef(null);

  const dispatch = useDispatch();

  const nextStep = () => {
    switch (step) {
      case 1:
        const result1 = checkHostForm(room, [
          'name',
          'roomType',
          'beds',
          'bedroom',
          'bathroom',
          'size',
          'capacity',
          'price',
          'accomId',
        ]);
        const photoResult = checkHostForm(formData, ['roomPhotos']);
        if (result1.length < 1 && photoResult.length < 1) {
          setStep((prev) => prev + 1);
          scrollToTop();
          break;
        }
        if (result1.includes('accomId')) {
          navigate('/host/AssetsManagement');
          alert('Missing accommodation detail. Please try again');
        } else {
          alert(`${result1.join(' ')} ${photoResult.join(' ')} is missing`);
        }
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
    const roomCheck = checkHostForm(room);
    if (roomCheck.length >= 1) {
      return alert(
        `${roomCheck.join(' ')} is missing. Please input the field.`
      );
    }
    const body = { ...room };
    dispatch(
      submitCreateRoomAndUploadPhoto({ body, photo: formData.roomPhotos[0] })
    );
    navigate('/host/AssetsManagement/NewRoomPage/status');
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
