import React, { useState } from 'react';

function HostAddingNewAccomPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // ใส่ฟิลด์ที่ต้องการ
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // ทำการ submit data ที่นี่
  };
  return (
    <div className='min-h-screen flex  justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className='text-2xl mb-4'>Step 1</h2>
              <input
                type='text'
                name='field1'
                value={formData.field1}
                onChange={handleChange}
                className='mb-4 p-2 border rounded w-full'
                placeholder='Field 1'
              />
              <button
                type='button'
                onClick={nextStep}
                className='bg-blue-500 text-white py-2 px-4 rounded'
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className='text-2xl mb-4'>Step 2</h2>
              <input
                type='text'
                name='field2'
                value={formData.field2}
                onChange={handleChange}
                className='mb-4 p-2 border rounded w-full'
                placeholder='Field 2'
              />
              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-gray-500 text-white py-2 px-4 rounded'
                >
                  Previous
                </button>
                <button
                  type='button'
                  onClick={nextStep}
                  className='bg-blue-500 text-white py-2 px-4 rounded'
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className='text-2xl mb-4'>Step 3</h2>
              <input
                type='text'
                name='field3'
                value={formData.field3}
                onChange={handleChange}
                className='mb-4 p-2 border rounded w-full'
                placeholder='Field 3'
              />
              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-gray-500 text-white py-2 px-4 rounded'
                >
                  Previous
                </button>
                <button
                  type='button'
                  onClick={nextStep}
                  className='bg-blue-500 text-white py-2 px-4 rounded'
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 className='text-2xl mb-4'>Step 4</h2>
              <input
                type='text'
                name='field4'
                value={formData.field4}
                onChange={handleChange}
                className='mb-4 p-2 border rounded w-full'
                placeholder='Field 4'
              />
              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-gray-500 text-white py-2 px-4 rounded'
                >
                  Previous
                </button>
                <button
                  type='button'
                  onClick={nextStep}
                  className='bg-blue-500 text-white py-2 px-4 rounded'
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <h2 className='text-2xl mb-4'>Step 5</h2>
              <input
                type='text'
                name='field5'
                value={formData.field5}
                onChange={handleChange}
                className='mb-4 p-2 border rounded w-full'
                placeholder='Field 5'
              />
              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-gray-500 text-white py-2 px-4 rounded'
                >
                  Previous
                </button>
                <button
                  type='submit'
                  className='bg-green-500 text-white py-2 px-4 rounded'
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default HostAddingNewAccomPage;
