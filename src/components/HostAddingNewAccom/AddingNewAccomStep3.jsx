import React from 'react';
import AmenitiesSelector from '../HostAddingNewAccom/AmenitiesSelector';
import UploadPhotos from '../HostAddingNewAccom/HostPhotoUploaded';
import UploadRoomPhotos from '../HostAddingNewAccom/HostUploadRoomPics';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setRoomFormData,
  setRoomCapacity,
  changeRoomType,
} from '../../store/slices/hostForm-slice';

const HostAddingNewAccomStep3 = ({
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

  const dispatch = useDispatch();
  const { accom, room } = useSelector((state) => state.hostForm);

  if (!formData.roomTypes) {
    setFormData({
      ...formData,
      roomTypes: [],
    });
  }

  const handleAddRoomAndBedType = () => {
    setFormData((prevData) => ({
      ...prevData,
      roomTypes: [
        ...prevData.roomTypes,
        {
          id: Date.now(),
          name: '',
          bedType: 'Single bed',
          bedQuantity: 1,
          guests: 1,
          price: '',
          photos: [],
        },
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

  const handleRoomChange = (index, field, value) => {
    const newRoomTypes = [...formData.roomTypes];
    newRoomTypes[index][field] = value;
    setFormData({ ...formData, roomTypes: newRoomTypes });
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-medium mb-6 p-4'>
          Adding New Accommodations
        </h1>
      </div>
      <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-8 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Let's start with the basic
          </h2>
          <p className='text-gray-500 p-2'>
            You'll add more details later, like bed types.
          </p>
        </div>

        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-8 rounded-xl text-center'>
          {room.roomTypes.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center space-y-4 p-4'
            >
              <div className='flex space-x-2 items-center'>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>
                    Room type (create your own name)
                  </label>
                  <input
                    type='text'
                    value={item.name}
                    onChange={(e) =>
                      dispatch(
                        changeRoomType({
                          data: e.target.value,
                          index,
                        })
                      )
                    }
                    className='p-2 border border-gray-300 rounded'
                    style={{ width: '270px' }}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>Bed Type</label>
                  <select
                    value={item.bedType}
                    onChange={(e) =>
                      dispatch(
                        setRoomFormData({
                          type: 'bedTypes',
                          data: e.target.value,
                        })
                      )
                    }
                    className='p-2 border border-gray-300 rounded'
                    style={{ width: '170px' }}
                  >
                    {bedTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>Bed Quantity</label>
                  <input
                    type='number'
                    value={item.bedQuantity}
                    min='1'
                    onChange={(e) =>
                      handleRoomChange(index, 'bedQuantity', e.target.value)
                    }
                    className='p-2 border border-gray-300 rounded'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>Guests</label>
                  <input
                    type='number'
                    value={item.guests}
                    min='1'
                    onChange={(e) =>
                      handleRoomChange(index, 'guests', e.target.value)
                    }
                    className='p-2 border border-gray-300 rounded'
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2 text-center'>Price / night</label>
                  <input
                    type='number'
                    value={item.price}
                    min='0'
                    onChange={(e) =>
                      handleRoomChange(index, 'price', e.target.value)
                    }
                    className='p-2 border border-gray-300 rounded'
                    style={{ width: '100px' }}
                  />
                </div>
                {index > 0 && (
                  <button
                    type='button'
                    onClick={() =>
                      dispatch(setRoomFormData({ type: 'remove', index }))
                    }
                    className=' bg-red-600 text-white rounded-full p-1 mt-8'
                  >
                    &times;
                  </button>
                )}
              </div>
              {/* <UploadRoomPhotos formData={formData} setFormData={setFormData} /> */}
            </div>
          ))}
          <div className='flex justify-center mt-4'>
            <button
              type='button'
              onClick={(e) => dispatch(setRoomFormData({ type: 'roomBed' }))}
              className='px-4 py-2 mb-4 bg-fg-primary-01 bg-opacity-65 hover:bg-fg-primary-01 text-fg-text-black font-medium rounded-md'
            >
              Add More Room
            </button>
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-4 rounded-xl text-center'>
          <h2 className='text-xl font-medium p-2'>
            Tell guest what your place has to offer
          </h2>
          <p className='text-gray-500 p-2'>
            You can add more amenities after you publish your listing.
          </p>
        </div>

        <AmenitiesSelector />
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

      <div className='flex justify-between'>
        <button
          type='button'
          onClick={prevStep}
          className='px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md'
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewAccomStep3;
