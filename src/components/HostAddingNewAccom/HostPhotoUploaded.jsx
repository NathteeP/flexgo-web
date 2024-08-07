import React from 'react';

const UploadPhotos = ({ formData, setFormData }) => {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    // if (forAccom) {
    setFormData((prevData) => ({
      ...prevData,
      accomPhotos: [...prevData.accomPhotos, ...files],
    }));
    // // } else {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     roomPhotos: [...files],
    //   }));
    // }
  };

  const removePhoto = (index, type) => {
    // if (type === 'accom') {
    setFormData((prevData) => {
      const newPhotos = prevData.accomPhotos.filter((_, i) => i !== index);
      return { ...prevData, accomPhotos: newPhotos };
    });
    // } else {
    // setFormData((prevData) => {
    //   const newPhotos = prevData.roomPhotos.filter((_, i) => i !== index);
    //   return { ...prevData, roomPhotos: newPhotos };
    // });
    // }
  };
  return (
    <div className='p-12 bg-white border border-gray-300 rounded-2xl mb-8'>
      <h2 className='text-xl font-semibold mb-4'>
        Upload Photos for Acommodation
      </h2>
      <input
        type='file'
        onChange={handleFileChange}
        className='mb-4'
        multiple
      />
      <div className='flex flex-wrap'>
        {formData.accomPhotos.map((photo, index) => (
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
              onClick={() => removePhoto(index, 'accom')}
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
