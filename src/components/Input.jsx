export default function Input({
  htmlFor,
  type = 'text',
  error,
  id,
  value,
  onChange,
  name,
  inputName,
  className = ' mb-2  block bg-[#F3F4F6] rounded-lg w-[350px] h-[32px]  px-2 text-gray-500 text-[13px]',
  divClassName,
  disabled,
}) {
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
      />
      {error ? <small className='text-red-500'>{error}</small> : null}
    </div>
  );
}
