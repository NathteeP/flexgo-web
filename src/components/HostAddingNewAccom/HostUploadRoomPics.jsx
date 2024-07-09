import React, { useState } from 'react';

const UploadRoomPhotos = ({ roomIndex, formData, setFormData }) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

    setFormData((prevData) => {
      const newRoomTypes = [...prevData.roomTypes];
      if (!newRoomTypes[roomIndex].photos) {
        newRoomTypes[roomIndex].photos = [];
      }
      newRoomTypes[roomIndex].photos = [
        ...newRoomTypes[roomIndex].photos,
        ...files,
      ];
      return { ...prevData, roomTypes: newRoomTypes };
    });
  };

  const removePhoto = (index) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setFormData((prevData) => {
      const newRoomTypes = [...prevData.roomTypes];
      newRoomTypes[roomIndex].photos = newRoomTypes[roomIndex].photos.filter(
        (_, i) => i !== index
      );
      return { ...prevData, roomTypes: newRoomTypes };
    });
  };

  return (
    <div className='p-4 bg-white border border-gray-300 rounded-2xl mb-4'>
      <h3 className='text-lg font-semibold mb-2'>
        Upload Photos for Room {roomIndex + 1}
      </h3>
      <input
        type='file'
        multiple
        onChange={handleFileChange}
        className='mb-2'
      />
      <div className='flex flex-wrap'>
        {previews.map((src, index) => (
          <div key={index} className='relative m-2'>
            <div className='flex justify-center items-center'>
              <img
                src={src}
                alt={`Preview ${index}`}
                className='w-32 h-32 object-cover'
              />
            </div>
            <button
              type='button'
              onClick={() => removePhoto(index)}
              className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-1'
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadRoomPhotos;
