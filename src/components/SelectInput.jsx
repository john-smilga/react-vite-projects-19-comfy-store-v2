const SelectInput = ({ label, name, list, defaultValue }) => {
  return (
    <div className='form-control w-full '>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <select
        className='select select-bordered select-xs'
        name={name}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectInput;
