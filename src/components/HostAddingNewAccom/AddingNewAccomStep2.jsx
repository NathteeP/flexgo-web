import React from 'react';
import MapWrapper from '../../google-maps/MapWrapper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setHostFormData } from '../../store/slices/hostForm-slice';
const HostAddingNewAccomStep2 = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { accom } = useSelector((state) => state.hostForm);

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>
          Adding New Accommodations
        </h1>
      </div>
      <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75  w-full mb-8 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>Confirm your address</h2>
          <p className='mb-4 text-gray-600 p-2'>
            Your address is only shared with guests after they've made a
            reservation.
          </p>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor='country' className='block mb-2 font-medium'>
              Country / Region
            </label>
            <select
              name='country'
              id='country'
              value={accom.country}
              onChange={(e) =>
                dispatch(
                  setHostFormData({ type: 'country', data: e.target.value })
                )
              }
              className='w-full px-4 py-2 mb-4 rounded-md border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
            >
              <option value=' '>Select your Country / Region</option>
              <option value='Thailand - TH'>Thailand - THA 🇹🇭</option>
              <option value='Japan - JP'>Japan - JPN 🇯🇵</option>
              <option value='Korea - KR'>South Korea - KOR 🇰🇷</option>
              <option value='Singapore - SGP'>Singapore - SGP 🇸🇬</option>
              <option value='China - CHN'>China - CHN 🇨🇳</option>
              <option value='Indonesia - IDN'>Indonesia - IDN 🇮🇩</option>
              <option value='Malaysia - MYS'>Malaysia - MYS 🇲🇾</option>
              <option value='Taiwan - TWN'>Taiwan - TWN 🇹🇼</option>
              <option value='Germany - DEU'>Germany - DEU 🇩🇪</option>
              <option value='Hungary - HUN'>Hungary - HUN 🇭🇺</option>
              <option value='Italy - ITA'>Italy - ITA 🇮🇹</option>
              <option value='Spain - ESP'>Spain - ESP 🇪🇸</option>
              <option value='Sweden - SWE'>Sweden - SWE 🇸🇪</option>
              <option value='United States of America - USA'>
                United States of America - USA 🇺🇸
              </option>
              <option value='United Kingdom - UK'>
                United Kingdom - UK 🇬🇧
              </option>
              <option value='Canada - CAN'>Canada - CAN 🇨🇦</option>
              {/* Add more country options here if needed */}
            </select>
          </div>

          <div>
            <label htmlFor='streetAddress' className='block mb-2 font-medium'>
              Address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              value={accom.address}
              onChange={(e) =>
                dispatch(
                  setHostFormData({ type: 'address', data: e.target.value })
                )
              }
              className='w-full px-4 py-2 mb-4 rounded-md border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
            />
          </div>

          <div>
            <label htmlFor='district' className='block mb-2 font-medium'>
              District
            </label>
            <input
              type='text'
              name='district'
              id='district'
              value={accom.district}
              onChange={(e) =>
                dispatch(
                  setHostFormData({ type: 'district', data: e.target.value })
                )
              }
              className='w-full px-4 py-2 mb-4 rounded-md border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
            />
          </div>
          <div>
            <label htmlFor='province' className='block mb-2 font-medium'>
              Province
            </label>
            <input
              type='text'
              name='province'
              id='province'
              value={accom.province}
              onChange={(e) =>
                dispatch(
                  setHostFormData({ type: 'province', data: e.target.value })
                )
              }
              className='w-full px-4 py-2 mb-4 rounded-md border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
            />
          </div>
        </div>
      </div>

      <div className='border-b-2' />

      <div className='mb-8 mt-8'>
        <h2 className='text-xl font-medium mb-4'>
          Show your specific location
        </h2>
        <p className='mb-4 text-gray-600'>
          Make it clear to guests where your place is located. We'll only share
          your address after they've made a reservation.
        </p>
      </div>

      <div>
        <MapWrapper />
      </div>
      <div className='flex justify-between mt-6'>
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
          Next
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewAccomStep2;
