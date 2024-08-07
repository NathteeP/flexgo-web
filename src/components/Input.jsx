import React from 'react';

const Input = React.forwardRef(
  (
    {
      htmlFor,
      type = 'text',
      error,
      id,
      value,
      onChange,
      name,
      inputName,
      className = '  block bg-[#F3F4F6] rounded-lg w-[350px] h-[32px] px-2 text-gray-500 text-[13px]',
      divClassName,
      disabled,
      placeholder,
    },
    ref
  ) => {
    return (
      <div className={divClassName}>
        <label
          htmlFor={htmlFor}
          className=' text-[12px] font-semibold text-gray-600  '
        >
          {inputName}
        </label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
        />
        {error ? (
          <small className='text-red-500 text-[12px] block leading-none mt-2'>
            {error}
          </small>
        ) : null}
      </div>
    );
  }
);

export default Input;
