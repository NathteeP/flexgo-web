import React from 'react';
import UploadPhotos from '../HostAddingNewAccom/HostPhotoUploaded';

const HostAddingNewRoomStep1 = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const bedTypes = [
    'Single bed',
    'Semi double-bed',
    'Double bed',
    'Queen bed',
    'King bed',
    'Super king bed',
    'Sofa bed',
  ];

  const handleAddRoomAndBedType = () => {
    setFormData((prevData) => ({
      ...prevData,
      roomTypes: [
        ...prevData.roomTypes,
        { id: Date.now(), name: '', bedType: 'Single bed' },
      ],
    }));
  };

  const handleRoomTypeChange = (index, value) => {
    const newRoomTypes = [...formData.roomTypes];
    newRoomTypes[index].name = value;
    setFormData({ ...formData, roomTypes: newRoomTypes });
  };

  const handleBedTypeChange = (index, value) => {
    const newRoomTypes = [...formData.roomTypes];
    newRoomTypes[index].bedType = value;
    setFormData({ ...formData, roomTypes: newRoomTypes });
  };

  const handleRemoveRoom = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      roomTypes: prevData.roomTypes.filter((room) => room.id !== id),
    }));
  };

  const handleGuestChange = (increment) => {
    setFormData((prevData) => ({
      ...prevData,
      guests: Math.max(1, prevData.guests + increment),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      (name === 'houseTitle' && value.length <= 50) ||
      (name !== 'houseTitle' && value.length <= 500) ||
      (name === 'price' && /^[0-9]*$/.test(value))
    ) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>Adding New Room</h1>
      </div>
      <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-8 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Let's start with the basics
          </h2>
          <p className='text-gray-500 p-2'>
            You'll add more details later, like bed types.
          </p>
        </div>

        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-8 rounded-xl text-center'>
          {formData.roomTypes.map((item, index) => (
            <div
              key={item.id}
              className='flex flex-col items-center space-y-4 p-4'
            >
              <div className='flex space-x-4 items-center'>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>
                    Adding room type (create your own name)
                  </label>
                  <input
                    type='text'
                    value={item.name}
                    onChange={(e) =>
                      handleRoomTypeChange(index, e.target.value)
                    }
                    className='p-2 border border-gray-300 rounded'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>Bed Type</label>
                  <select
                    value={item.bedType}
                    onChange={(e) => handleBedTypeChange(index, e.target.value)}
                    className='p-2 border border-gray-300 rounded'
                  >
                    {bedTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                {index > 0 && (
                  <button
                    type='button'
                    onClick={() => handleRemoveRoom(item.id)}
                    className='bg-red-600 text-white rounded-full p-1 mt-8'
                  >
                    &times;
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className='flex justify-center mt-4'>
            <button
              type='button'
              onClick={handleAddRoomAndBedType}
              className='px-4 py-2 mb-4 bg-fg-primary-01 bg-opacity-65 hover:bg-fg-primary-01 text-fg-text-black font-medium rounded-md'
            >
              Add More Room
            </button>
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-8 rounded-xl text-center'>
          <h2 className='text-xl font-medium p-4'>
            How many guests fit comfortably in your place?
          </h2>
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <button
            onClick={() => handleGuestChange(-1)}
            className='px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md'
          >
            -
          </button>
          <span className='text-[64px] font-medium px-8'>
            {formData.guests}
          </span>
          <button
            onClick={() => handleGuestChange(1)}
            className='px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md'
          >
            +
          </button>
        </div>
      </div>

      <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-4 rounded-xl text-center'>
          <h2 className='text-xl font-medium p-2'>
            Let's show the guest how fascinating your place is
          </h2>
          <p className='text-gray-500 p-2'>
            You can add more photos after you publish your album.
          </p>
        </div>
        <UploadPhotos formData={formData} setFormData={setFormData} />
      </div>

      <div className='mt-12 text-center bg-white border border-gray-300 rounded-xl p-8'>
        <h2 className='text-2xl font-semibold'>Now, set your price</h2>
        <p className='text-gray-600'>You can change it anytime.</p>
        <div className='flex justify-center items-center mt-4'>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='text-3xl p-4 font-bold text-center w-[70%] border-[1px]'
            placeholder='0 ฿'
          />
        </div>
      </div>

      <div className='flex justify-end mt-8'>
        <button
          type='submit'
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Confirm and Publish
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewRoomStep1;
