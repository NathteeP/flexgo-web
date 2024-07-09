import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHostFormData } from '../../store/slices/hostForm-slice';
import MapWrapper from '../../google-maps/MapWrapper';
import PlaceAutoComplete from '../../google-maps/PlaceAutoComplete';

const HostAddingAccommodationPage1 = ({ formData, setFormData, nextStep }) => {
  const dispatch = useDispatch();
  const { accom } = useSelector((state) => state.hostForm);
  const accommodationTypes = ['House', 'Hotel', 'Apartment', 'Guesthouse'];
  const placeTypes = [
    {
      label: 'An entire place',
      description: 'Guests will have the whole place for themselves.',
    },
    {
      label: 'A room',
      description:
        'Guests have their own room in a place, allow to access shared space.',
    },
    {
      label: 'A shared room',
      description:
        'Guests sleep in a shared room with others and use common shared area.',
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='bg-fg-primary-02 bg-opacity-75 w-full text-center items-center rounded-xl'>
        <h1 className='text-2xl font-semibold mb-6 p-4'>
          Adding New Accommodations
        </h1>
      </div>
      <div className='bg-fg-secondary-01 bg-opacity-75  w-full mb-8 rounded-xl text-center'>
        <h2 className='text-xl font-medium p-4'>Accommodation's Types</h2>
        <div className='flex space-x-4 justify-center'>
          {accommodationTypes.map((type, index) => (
            <button
              key={index}
              onClick={() =>
                dispatch(setHostFormData({ type: 'selectedType', data: type }))
              }
              className={`px-4 py-2 mb-3 rounded-md  shadow-lg hover:bg-fg-grey ${
                accom.selectedType === type
                  ? 'bg-fg-secondary-02 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* <div className='mb-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full rounded-xl text-center py-6 pb-8 '>
          <h2 className='text-xl font-medium mb-4'>
            What type of place will guests have?
          </h2>
          <div className='space-y-4'>
            {placeTypes.map((place, index) => (
              <button
                key={index}
                onClick={() =>
                  dispatch(
                    setHostFormData({
                      type: 'selectedPlace',
                      data: place.label,
                    })
                  )
                }
                className={`w-[70%] text-left px-4 py-4 rounded-md shadow-lg hover:bg-fg-grey ${
                  accom.selectedPlace === place.label
                    ? 'bg-fg-secondary-02 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                <div className='font-bold'>{place.label}</div>
                <div className='text-sm'>{place.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <div className='mb-8'>
        <h2 className='text-xl font-medium mb-4'>
          Where's your place located?
        </h2>
        <div className='relative'>
          {/* <MapWrapper MapWithAutoComplete={true} /> */}
        </div>
      </div>

      <div className='flex justify-end'>
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

export default HostAddingAccommodationPage1;
