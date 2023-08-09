const CheckboxInput = ({ label, name, defaultValue }) => {
  return (
    <div className='form-control w-full items-center'>
      <label className='label cursor-pointer  '>
        <span className='label-text capitalize '>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        defaultChecked={defaultValue}
        className='checkbox checkbox-primary checkbox-xs'
      />
    </div>
  );
};
export default CheckboxInput;
