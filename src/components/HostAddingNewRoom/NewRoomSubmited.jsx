import React from 'react';

const RoomSubmitSuccess = () => (
  <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
    <div className='text-center'>
      <div className='mb-8'>
        <h1 className='text-3xl font-medium'>
          Adding Brand New Room Submission Status
        </h1>
      </div>
      <div className='bg-white border-2 border-gray-200 shadow-lg rounded-xl w-[800px] h-[500px] flex flex-col justify-center items-center p-6'>
        <div className='flex flex-col justify-center bg-fg-primary-03 bg-opacity-80 w-[700px] h-[400px] p-8 rounded-lg shadow-lg text-center'>
          <div className='flex justify-center mb-4'>
            <div className='relative'>
              <svg
                viewBox='0 -2.5 64 64'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlnsSketch='http://www.bohemiancoding.com/sketch/ns'
                fill='#5be17d'
                stroke='#5be17d'
                className='w-28 h-28'
              >
                <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  <title>Thumb-up</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id='Page-1'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                    sketchType='MSPage'
                  >
                    <g
                      id='Thumb-up'
                      sketchType='MSLayerGroup'
                      transform='translate(1.000000, 2.000000)'
                      stroke='#5be17d'
                      strokeWidth='2'
                    >
                      <path
                        d='M18,20 L2.9,20 C0.1,20 0,22.1 0,24.8 L0,49.1 C0,51.7 0.1,53.9 2.9,53.9 L18,53.9 C20.8,53.9 20.9,51.8 20.9,49.1 L20.9,24.8 C20.9,22.2 20.8,20 18,20 L18,20 Z'
                        id='Shape'
                        sketchType='MSShapeGroup'
                      ></path>
                      <path
                        d='M20.7,50.3 L22.1,50.3 C25.9,50.2 28.4,56 31.3,56 L53.9,56 C56.7,56 57.3,51.8 57.2,50 C57.2,50 60.7,48.4 59.1,42 C59.3,41.9 61.1,40.2 61.1,36.9 C61.1,33.6 59.2,32 59.2,32 C59.2,32 61.1,29.9 61.1,26.8 C61.1,23.7 58.4,22 55.6,22 L47.3,22 C40.1,22 40.7,18.1 40.7,18.1 C40.7,18.1 39.9,8 37.3,3.3 C34.1,-2.5 27.7,-0.6 30.1,7 C31.9,12.6 23.8,21 20.8,23.8'
                        id='Shape'
                        sketchType='MSShapeGroup'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <h2 className='text-2xl font-bold mb-2'>Submission Success</h2>
          <p className='mb-4'>
            Your brand new room is waiting for approval. <br />
            We will let you know when your room is approved and ready to
            activate.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RoomSubmitSuccess;
