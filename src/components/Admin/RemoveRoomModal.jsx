import React from 'react';
import { useDispatch } from 'react-redux';
import { closeAdminRemoveRoom } from '../../store/slices/modal-slice';

function RemoveRoomModal() {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-6 w-[550px] h-36 '>
      <h2 className='text-xl font-semibold mb-4'>
        Are you sure to remove this room?
      </h2>
      <div className='flex justify-end space-x-4'>
        <button
          className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-400'
          onClick={() => {
            dispatch(closeAdminRemoveRoom());
          }}
        >
          Cancel
        </button>
        <button className='px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600'>
          Remove
        </button>
      </div>
    </div>
  );
}

export default RemoveRoomModal;
