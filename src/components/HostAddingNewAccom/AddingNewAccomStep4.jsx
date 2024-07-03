import React from 'react';

const AddingNewAccomStep4 = ({
  formData,
  setFormData,
  prevStep,
  handleSubmit,
}) => {
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
        <h1 className='text-2xl font-medium mb-6 p-4'>
          Adding New Accommodations
        </h1>
      </div>

      <div className='mt-8'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Now, let's give your house title
          </h2>
          <p className='text-gray-600 p-2'>
            Short titles work best. Have fun with it - you can absolutely change
            it later.
          </p>
        </div>
        <input
          type='text'
          name='houseTitle'
          value={formData.houseTitle}
          onChange={handleChange}
          className='w-full p-4 border border-gray-300 rounded-xl mb-2'
          placeholder='Enter your house title...'
        />
        <p className='text-right text-gray-600'>
          {formData.houseTitle.length}/50
        </p>
      </div>

      <div className='mt-12'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>Create your description</h2>
          <p className='mb-4 text-gray-600 p-2'>
            Share what makes your place remarkable.
          </p>
        </div>
        <textarea
          name='accommodationDescription'
          value={formData.accommodationDescription}
          onChange={handleChange}
          className='w-full p-4 border border-gray-300 rounded-xl mb-2'
          rows='4'
          placeholder='You will have a great time at this comfortable place to stay'
        />
        <p className='text-right text-gray-600'>
          {formData.accommodationDescription.length}/500
        </p>
      </div>

      <div className='mt-12'>
        <div className='bg-fg-secondary-01 bg-opacity-75 w-full mb-6 rounded-xl text-center'>
          <h2 className='text-xl font-semibold p-2'>
            Let's clarify your House Rules
          </h2>
          <p className='mb-4 text-gray-600 p-2'>
            Clarify and demonstrate your house rules in detail to allow the
            guest to be strict with the rules.
          </p>
        </div>
        <textarea
          name='houseRule'
          value={formData.houseRule}
          onChange={handleChange}
          className='w-full p-4 border border-gray-300 rounded-xl mb-2'
          rows='4'
          placeholder={`Check-in after 14:00 \nCheck-out before 12:00 pm \nPet is prohibited in bedroom and shared area`}
        />
        <p className='text-right text-gray-600'>
          {formData.houseRule.length}/500
        </p>
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

      <div className='flex justify-between mt-8'>
        <button
          type='button'
          onClick={prevStep}
          className='px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-md'
        >
          Previous
        </button>
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

export default AddingNewAccomStep4;
