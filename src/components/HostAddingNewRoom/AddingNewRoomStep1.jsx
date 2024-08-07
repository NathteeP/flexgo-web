import React from 'react';
import UploadPhotos from '../HostAddingNewAccom/HostPhotoUploaded';
import HostUploadRoomPic from '../HostAddingNewAccom/HostUploadRoomPics';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  changeRoomType,
  setRoomCapacity,
  setRoomFormData,
} from '../../store/slices/hostForm-slice';
import UploadRoomPhotos from '../HostAddingNewAccom/HostUploadRoomPics';

const HostAddingNewRoomStep1 = ({ formData, setFormData, nextStep }) => {
  const { room } = useSelector((state) => state.hostForm);
  const dispatch = useDispatch();

  const bedTypes = [
    'Single bed',
    'Semi double-bed',
    'Double bed',
    'Queen bed',
    'King bed',
    'Super king bed',
    'Sofa bed',
  ];

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
          <div className='flex flex-col items-center space-y-4 p-4'>
            <div className='flex flex-wrap space-x-2 items-center'>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>Room Number</label>
                <input
                  type='text'
                  value={room.name}
                  min='1'
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({
                        type: 'name',
                        data: e.target.value,
                      })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '120px' }}
                  placeholder='FG123'
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>
                  Room type (create your own name)
                </label>
                <input
                  type='text'
                  value={room.roomType}
                  onChange={(e) =>
                    dispatch(changeRoomType({ data: e.target.value }))
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '280px' }}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>Bed Type</label>
                <select
                  value={room.beds?.type}
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({
                        type: 'bedTypes',
                        data: e.target.value,
                      })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '200px' }}
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
                  value={room.beds.amount}
                  min='1'
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({
                        type: 'bedAmount',
                        data: e.target.value,
                      })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '120px' }}
                />
              </div>
            </div>
            <div className='flex flex-wrap space-x-4 items-center'>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>Bedroom</label>
                <input
                  type='number'
                  value={room.bedroom}
                  min='1'
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({
                        type: 'bedRoom',
                        data: e.target.value,
                      })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '120px' }}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>Bathroom</label>
                <input
                  type='number'
                  value={room.bathroom}
                  min='1'
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({
                        type: 'bathRoom',
                        data: e.target.value,
                      })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '120px' }}
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2 text-center'>Room Size (sqm.)</label>
                <input
                  type='number'
                  value={room.size}
                  min='1'
                  onChange={(e) =>
                    dispatch(
                      setRoomFormData({ type: 'size', value: e.target.value })
                    )
                  }
                  className='p-2 border border-gray-300 rounded-lg focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
                  style={{ width: '150px' }}
                />
              </div>
            </div>
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
          <div>
            <button
              onClick={() => dispatch(setRoomCapacity({ value: -1 }))}
              className='px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md'
            >
              -
            </button>
            <span className='text-[64px] font-medium px-8'>
              {room.capacity}
            </span>
            <button
              onClick={() => dispatch(setRoomCapacity({ value: 1 }))}
              className='px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md'
            >
              +
            </button>
          </div>
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
        <UploadRoomPhotos setFormData={setFormData} formData={formData} />
      </div>

      <div className='mt-12 text-center bg-white border border-gray-300 rounded-xl p-8'>
        <h2 className='text-2xl font-semibold'>Now, set your room price</h2>
        <p className='text-gray-600'>You can change it anytime.</p>
        <div className='flex justify-center items-center mt-4'>
          <input
            type='number'
            name='price'
            value={room.price}
            onChange={(e) =>
              dispatch(
                setRoomFormData({ type: 'price', value: e.target.value })
              )
            }
            className='text-3xl p-4 font-bold text-center w-[70%] rounded-lg border focus:ring-[2px] focus:ring-fg-secondary-02 focus:outline-none focus:border-none'
            placeholder='0 ฿'
          />
        </div>
      </div>

      <div className='flex justify-end mt-8'>
        <button
          type='button'
          onClick={nextStep}
          className='px-6 py-2 bg-fg-primary-01 hover:bg-amber-600 text-white font-medium rounded-md shadow-lg'
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default HostAddingNewRoomStep1;
