import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHostFormData,
  setRoomFormData,
} from '../../store/slices/hostForm-slice';

const AddingNewAccomStep4 = ({
  formData,
  setFormData,
  prevStep,
  nextStep,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { accom, room } = useSelector((state) => state.hostForm);
  const dispatch = useDispatch();

  const cancelPolicy = {
    FLEXIBLE:
      'Guests can cancel up to 24 hours before check-in for a full refund, and you won’t be paid. If they cancel less than 24 hours before check-in and never check in, you’ll be paid for the first night. If they cancel after check-in, you’ll be paid for each night they stay, plus 1 additional night.',
    MODERATE:
      'Guests can cancel up to 5 days before check-in for a full refund, and you won’t be paid. If they cancel after that, you’ll be paid for each night they stay, plus 1 additional night and 50% for all unspent nights.',
    STRICT:
      'To receive a full refund, guests must cancel within 48 hours of booking, and the cancellation must occur at least 14 days before check-in. If they cancel between 7 and 14 days before check-in, you’ll be paid 50% for all nights. If they cancel after that, you’ll be paid 100% for all nights.',
  };

  const handleCancelPolicyChange = (e) => {
    const { value } = e.target;
    dispatch(setHostFormData({ type: 'cancelPolicyKey', data: value }));
    dispatch(
      setHostFormData({ type: 'cancelPolicy', data: cancelPolicy[value] })
    );
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>
          Adding New Accommodations
        </h1>
      </div>

      <div className='mt-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Now, let's give your accommodation title
          </h2>
          <p className='text-gray-600 p-2'>
            Short titles work best. Have fun with it - you can absolutely change
            it later.
          </p>
        </div>
        <input
          type='text'
          name='name'
          value={accom.name}
          onChange={(e) =>
            dispatch(setHostFormData({ type: 'name', data: e.target.value }))
          }
          className='w-full p-4 border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          placeholder='Enter your accommodation title...'
        />
        <p className='text-right text-gray-600'>{accom.name.length}/50</p>
      </div>

      <div className='mt-12'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>Create your description</h2>
          <p className='mb-4 text-gray-600 p-2'>
            Share what makes your place remarkable.
          </p>
        </div>
        <textarea
          name='description'
          value={accom.description}
          onChange={(e) =>
            dispatch(
              setHostFormData({ type: 'description', data: e.target.value })
            )
          }
          className='w-full p-4 border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          rows='4'
          placeholder='You will have a great time at this comfortable place to stay'
        />
        <p className='text-right text-gray-600'>
          {accom.description.length}/500
        </p>
      </div>

      <div className='mt-12'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Let's clarify your House Rules
          </h2>
          <p className='mb-4 text-gray-600 p-2'>
            Clarify and demonstrate your house rules in detail to allow the
            guest to be strict with the rules.
          </p>
        </div>
        <input
          type='text'
          name='checkIn'
          value={accom.houseRule.checkIn}
          onChange={(e) =>
            dispatch(
              setHostFormData({
                type: 'houseRule',
                topic: 'checkIn',
                data: e.target.value,
              })
            )
          }
          className='w-full p-4  border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          placeholder='Check-in time'
        />
        <input
          type='text'
          name='checkOut'
          value={accom.houseRule.checkOut}
          onChange={(e) =>
            dispatch(
              setHostFormData({
                type: 'houseRule',
                topic: 'checkOut',
                data: e.target.value,
              })
            )
          }
          className='w-full p-4 border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          placeholder='Check-out time'
        />
        <input
          type='text'
          name='ageRule'
          value={accom.houseRule.ageRule}
          onChange={(e) =>
            dispatch(
              setHostFormData({
                type: 'houseRule',
                topic: 'ageRule',
                data: e.target.value,
              })
            )
          }
          className='w-full p-4 border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          placeholder='Age rule'
        />
        <textarea
          name='petRules'
          value={accom.houseRule.petRules}
          onChange={(e) =>
            dispatch(
              setHostFormData({
                type: 'houseRule',
                topic: 'petsRule',
                data: e.target.value,
              })
            )
          }
          className='w-full p-4  border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          rows='4'
          placeholder='Pet rules'
        />
        <div>
          <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-4 mt-8 rounded-xl text-center'>
            <h2 className='text-xl font-semibold p-2'>Cancellation Policy</h2>
            <p className='mb-4 text-gray-600 p-4'>
              Select an appropriate cancellation policy for your accommodation
              in order to inform your clients about the booking cancellation in
              advance. <br />
              <br />
              <span className='font-bold'>FLEXIBLE</span> : Guests can cancel up
              to 24 hours before check-in for a full refund, and you won’t be
              paid. If they cancel less than 24 hours before check-in and never
              check in, you’ll be paid for the first night. If they cancel after
              check-in, you’ll be paid for each night they stay, plus 1
              additional night.
              <br />
              <br />
              <span className='font-bold'>MODERATE</span> : Guests can cancel up
              to 5 days before check-in for a full refund, and you won’t be
              paid. If they cancel after that, you’ll be paid for each night
              they stay, plus 1 additional night and 50% for all unspent nights.
              <br />
              <br />
              <span className='font-bold'>STRICT</span> : To receive a full
              refund, guests must cancel within 48 hours of booking, and the
              cancellation must occur at least 14 days before check-in. If they
              cancel between 7 and 14 days before check-in, you’ll be paid 50%
              for all nights. If they cancel after that, you’ll be paid 100% for
              all nights.
            </p>
          </div>
          <select
            name='cancelPolicy'
            value={accom.houseRule.cancelPolicy}
            onChange={(e) => {
              dispatch(
                setHostFormData({
                  type: 'houseRule',
                  topic: 'cancelPolicy',
                  data: e.target.value,
                })
              );
            }}
            className='w-full p-4  border-gray-300 rounded-xl mb-2 border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
          >
            {Object.keys(cancelPolicy).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex justify-between mt-8'>
        <button
          type='button'
          onClick={prevStep}
          className='px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md'
        >
          Previous
        </button>
        <button
          type='button'
          onClick={nextStep}
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default AddingNewAccomStep4;
