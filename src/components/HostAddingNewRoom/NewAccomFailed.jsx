const AccommodationSubmitFailed = () => (
  <div className='w-screen mx-36 mt-20 bg-white flex flex-col items-center'>
    <div className='mb-8'>
      <h1 className='text-3xl font-medium'>
        {' '}
        Accommodation Submission Status{' '}
      </h1>
    </div>
    <div className='bg-white-border border-[2px] border-gray-200 shadow-lg rounded-xl w-[800px] h-[500px] flex flex-col justify-center items-center p-6'>
      <div className='flex flex-col justify-center bg-fg-primary-03 bg-opacity-80 w-[700px] h-[400px] p-8 rounded-lg shadow-lg text-center'>
        <div className='flex justify-center mb-4'>
          <div className='relative'>
            <svg
              className='w-40 h-40 text-red-400'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                  stroke='#FF6B6B'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <h2 className='text-2xl font-bold mb-2'>Submission Failed</h2>
        <p className='text-black'>
          Sorry, somthing went wrong. Please try to add new accommodation again.
        </p>
      </div>
    </div>
  </div>
);

export default AccommodationSubmitFailed;
