import React, { useState } from 'react';

const HostAddingNewAccomStep2 = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              value={formData.country}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            <label htmlFor='address' className='block mb-2 font-medium'>
              Plot, house, etc. (if applicable)
            </label>
            <input
              type='text'
              name='address'
              id='address'
              value={formData.address}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='streetAddress' className='block mb-2 font-medium'>
              Street address
            </label>
            <input
              type='text'
              name='streetAddress'
              id='streetAddress'
              value={formData.streetAddress}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='subdistrict' className='block mb-2 font-medium'>
              Tambon/Thesaban (if applicable)
            </label>
            <input
              type='text'
              name='subdistrict'
              id='subdistrict'
              value={formData.subdistrict}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='district' className='block mb-2 font-medium'>
              Amphoe/district
            </label>
            <input
              type='text'
              name='district'
              id='district'
              value={formData.district}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
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
              value={formData.province}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='postalCode' className='block mb-2 font-medium'>
              Postal code
            </label>
            <input
              type='text'
              name='postalCode'
              id='postalCode'
              value={formData.postalCode}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500'
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
        <div className='relative'>
          <div className='w-full h-64 bg-gray-200 rounded-md'>
            <img
              src='https://i.pinimg.com/originals/56/24/7c/56247c2b070daa5aa66afac1b66ff7f6.png'
              alt='Map'
              className='w-full h-full object-cover rounded-md'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
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
