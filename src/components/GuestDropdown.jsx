import React, { useState } from 'react';
import { setGuest } from '../store/slices/searchInfo-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const GuestDropdown = () => {
  const { capacity } = useSelector((state) => state.info);

  const dispatch = useDispatch();

  return (
    <div className='absolute top-full mt-2 w-[200px] p-2 bg-white border rounded shadow-lg z-50 text-fg-text-blue'>
      <div className='flex justify-between items-center mb-2'>
        <span>Adults</span>
        <div className='flex items-center'>
          <button
            className='rounded-full bg-fg-primary-03 w-6 hover:bg-fg-primary-01/50 active:bg-fg-primary-01 transition-all duration-300'
            type='button'
            onClick={() =>
              dispatch(
                setGuest({
                  type: 'adults',
                  operation: 'decrement',
                })
              )
            }
          >
            -
          </button>
          <span className='mx-2'>{capacity.adults}</span>
          <button
            type='button'
            className='rounded-full bg-fg-primary-03 w-6 hover:bg-fg-primary-01/50 active:bg-fg-primary-01 transition-all duration-300'
            onClick={() =>
              dispatch(
                setGuest({
                  type: 'adults',
                  operation: 'increment',
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <span>Children</span>
        <div className='flex items-center'>
          <button
            className='rounded-full bg-fg-primary-03 w-6 hover:bg-fg-primary-01/50 active:bg-fg-primary-01 transition-all duration-300'
            type='button'
            onClick={() =>
              dispatch(
                setGuest({
                  type: 'children',
                  operation: 'decrement',
                })
              )
            }
          >
            -
          </button>
          <span className='mx-2'>{capacity.children}</span>
          <button
            className='rounded-full bg-fg-primary-03 w-6 hover:bg-fg-primary-01/50 active:bg-fg-primary-01 transition-all duration-300'
            type='button'
            onClick={() =>
              dispatch(
                setGuest({
                  type: 'children',
                  operation: 'increment',
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestDropdown;
