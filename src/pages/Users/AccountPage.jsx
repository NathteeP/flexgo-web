import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { userSchema } from '../../validators/validate-user';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserProfile,
  fetchAuthUser,
} from '../../store/slices/user-slice';
import { toast } from 'sonner';

const AccountPage = () => {
  const dispatch = useDispatch();
  const { authUser, isLoading } = useSelector((state) => state.user);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthday: '',
      nationality: '',
      gender: '',
      address: '',
    },
  });

  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  useEffect(() => {
    if (authUser) {
      setValue('firstName', authUser.fullName?.split(' ')[0] || '');
      setValue('lastName', authUser.fullName?.split(' ')[1] || '');
      setValue('email', authUser.email);
      setValue('phone', authUser.phoneNumber);
      setValue(
        'birthday',
        authUser.birthDate
          ? new Date(authUser.birthDate).toISOString().split('T')[0]
          : ''
      );
      setValue('nationality', authUser.nationality);
      setValue('gender', authUser.gender);
      setValue('address', authUser.address);
      setImagePreview(
        authUser.profileImage?.imagePath || 'https://via.placeholder.com/80'
      );
    }
  }, [authUser, setValue]);

  const onSubmit = async (data) => {
    const { firstName, lastName, ...rest } = data;
    const formData = new FormData();
    formData.append('fullName', `${firstName} ${lastName}`);
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    const promise = dispatch(updateUserProfile(formData)).unwrap();
    toast.promise(promise, {
      loading: 'Updating profile...',
      success: 'Profile updated successfully!',
      error: 'Failed to update profile.',
    });

    try {
      await promise;
    } catch (error) {
      console.error('Update failed', error);
    }
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
      onSubmit={handleSubmit(onSubmit)}
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
            <img
              src={imagePreview}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
          {!authUser?.googleId && (
            <>
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
            </>
          )}
        </div>
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='firstName'
          inputName='First Name'
          id='firstName'
          name='firstName'
          {...register('firstName')}
          error={errors.firstName?.message}
        />
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='lastName'
          inputName='Last Name'
          id='lastName'
          name='lastName'
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='email'
          type='email'
          inputName='Email'
          id='email'
          name='email'
          disabled={true}
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='phone'
          type='tel'
          inputName='Phone'
          id='phone'
          name='phone'
          {...register('phone')}
          error={errors.phone?.message}
        />
      </div>

      <div className='mb-6'>
        <label
          className='text-[12px] font-semibold text-gray-600 mb-2 block'
          htmlFor='birthday'
        >
          Birthday
        </label>
        <input
          type='date'
          id='birthday'
          {...register('birthday')}
          className='block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
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
          {...register('nationality')}
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
          {...register('gender')}
          className='block bg-gray-100 rounded-lg w-full h-[40px] px-4 text-gray-600 text-lg'
        >
          <option value='' disabled>
            Select your gender
          </option>
          <option value='MALE'>Male</option>
          <option value='FEMALE'>Female</option>
          <option value='OTHER'>Prefer not to say</option>
        </select>
      </div>

      <div className='mb-6'>
        <Input
          htmlFor='address'
          inputName='Address'
          id='address'
          name='address'
          {...register('address')}
          error={errors.address?.message}
        />
      </div>

      <div className='flex justify-end space-x-6 mt-8'>
        <Button
          className='w-full h-[34px] focus:bg-fg-primary-02 hover:bg-fg-primary-02 text-sm'
          variant='contained'
          type='submit'
        >
          Save
        </Button>
        <Button
          type='button'
          onClick={() => reset()}
          className='bg-gray-500 text-white hover:bg-gray-700 px-6 py-2 rounded-lg text-lg transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'
        >
          Reset
        </Button>
      </div>
    </form>
  );
};

export default AccountPage;
