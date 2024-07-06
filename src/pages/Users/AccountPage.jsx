import React, { useState } from 'react';
import Input from '../../components/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserAccountPage = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    birthday: new Date(),
    nationality: '',
    gender: '',
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      birthday: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='p-8 bg-white rounded-lg shadow-md w-full max-w-3xl mx-auto my-12'
    >
      <div className='flex items-center mb-8 w-full border-[2px] border-gray-100 rounded-lg p-6 shadow-sm'>
        <div className='flex-1 '>
          <h2 className='text-3xl font-bold mb-2'>Personal details</h2>
          <p className='text-gray-600 mb-4'>
            Update your profile and tell us your up-to-date information.
          </p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden'>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            ) : (
              <img
                src='https://via.placeholder.com/80'
                alt='Profile Placeholder'
                className='w-full h-full object-cover'
              />
            )}
          </div>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='hidden'
            id='upload-profile'
          />
          <label
            htmlFor='upload-profile'
            className='bg-fg-secondary-02 hover:bg-fg-secondary-01 hover:text-fg-text-black text-white px-4 py-2 text-center rounded-lg cursor-pointer w-[150px] transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
          >
            Upload Profile
          </label>
        </div>
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='name'
          inputName='Name'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          className='mb-4 block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        />
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='email'
          type='email'
          inputName='Email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='mb-4 block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        />
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='phone'
          type='tel'
          inputName='Phone'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter your phone number'
          className='mb-4 block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
          inputMode='numeric'
          pattern='[0-9]*'
        />
      </div>

      <div className='mb-6'>
        <label
          className='text-[12px] font-semibold text-gray-600 mb-2 block'
          htmlFor='birthday'
        >
          Birthday
        </label>
        <DatePicker
          id='birthday'
          selected={formData.birthday}
          onChange={handleDateChange}
          className='block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          minDate={new Date(1900, 0, 1)}
          maxDate={new Date()}
        />
      </div>

      <div className='mb-6'>
        <label
          className='text-[12px] font-semibold text-gray-600 mb-2 block'
          htmlFor='nationality'
        >
          Nationality
        </label>
        <select
          id='nationality'
          name='nationality'
          value={formData.nationality}
          onChange={handleChange}
          className='block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        >
          <option value='' disabled>
            Select your nationality
          </option>
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
          <option value='United Kingdom - UK'>United Kingdom - UK 🇬🇧</option>
          <option value='Canada - CAN'>Canada - CAN 🇨🇦</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className='mb-6'>
        <label
          className='text-[12px] font-semibold text-gray-600 mb-2 block'
          htmlFor='gender'
        >
          Gender
        </label>
        <select
          id='gender'
          name='gender'
          value={formData.gender}
          onChange={handleChange}
          className='block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        >
          <option value='' disabled>
            Select your gender
          </option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='prefer_not_to_say'>Prefer not to say</option>
        </select>
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='address'
          inputName='Address'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
          placeholder='Enter your address'
          className='mb-4 block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        />
      </div>

      <div className='flex justify-end space-x-6 mt-8'>
        <button
          type='submit'
          className='bg-fg-secondary-02 text-white hover:bg-fg-secondary-01 hover:text-fg-text-black px-6 py-1 rounded-lg text-lg shadow-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
        >
          Save
        </button>
        <button
          type='button'
          onClick={handleCancel}
          className='bg-gray-500 text-white hover:bg-gray-700 px-6 py-2 rounded-lg text-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default UserAccountPage;
