// HostAddingNewRoomPreview.js
import React from 'react';

const HostAddingNewRoomPreview = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>
          Review Your Room Details
        </h1>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-6 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Rooms and Bed Types</h2>
        {formData.roomTypes.map((room, index) => (
          <div key={index}>
            <p>
              Room {index + 1}: {room.name} - {room.bedType}
            </p>
          </div>
        ))}
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-6 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Number of Guests</h2>
        <p>{formData.guests}</p>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-6 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Photos</h2>
        <div className='flex justify-center flex-wrap '>
          {formData.photos.map((photo, index) => (
            <div key={index} className='m-2'>
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded ${index}`}
                className='w-56 h-56 object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mb-8 w-full bg-white border-[2px] border-gray-300 rounded-xl p-6 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Price per night</h2>
        <p>{formData.price} ฿</p>
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
          onClick={handleSubmit}
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Confirm and Submit
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewRoomPreview;
