import React from 'react';
import { useSelector } from 'react-redux';

const UploadPhotos = ({ formData, setFormData }) => {
  const { accom } = useSelector((state) => state.hostForm);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      photos: [...prevData.photos, ...files],
    }));
  };

  const removePhoto = (index) => {
    setFormData((prevData) => {
      const newPhotos = prevData.photos.filter((_, i) => i !== index);
      return { ...prevData, photos: newPhotos };
    });
  };
  return (
    <div className='p-12 bg-white border border-gray-300 rounded-2xl mb-8'>
      <h2 className='text-xl font-semibold mb-4'>
        Upload Photos for Acommodation
      </h2>
      <input
        type='file'
        multiple
        onChange={handleFileChange}
        className='mb-4'
      />
      <div className='flex flex-wrap'>
        {formData.photos.map((photo, index) => (
          <div key={index} className='relative m-2'>
            <div className='flex justify-center items-center'>
              <img
                src={URL.createObjectURL(photo)}
                alt={`Uploaded ${index}`}
                className='w-56 h-56 object-cover'
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

export default UploadPhotos;
