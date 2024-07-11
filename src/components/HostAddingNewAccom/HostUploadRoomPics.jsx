import React, { useState } from 'react';

const UploadRoomPhotos = ({ setFormData, formData }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    setFormData({ ...formData, roomPhotos: files });
  };

  return (
    <div className='p-12 bg-white border border-gray-300 rounded-2xl mb-8'>
      <h3 className='text-xl font-semibold mb-4'>Upload Photos for Room</h3>
      <input
        type='file'
        multiple
        onChange={handleFileChange}
        className='mb-2'
      />
      <div className='flex flex-wrap'>
        {formData.roomPhotos.map((src, index) => (
          <div key={index} className='relative m-2'>
            <div className='flex justify-center items-center'>
              <img
                src={URL.createObjectURL(src)}
                alt={`Preview ${index}`}
                className='w-56 h-56 object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadRoomPhotos;
