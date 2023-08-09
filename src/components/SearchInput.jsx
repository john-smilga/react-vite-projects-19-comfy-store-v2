const SearchInput = ({ label, name, defaultValue }) => {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type='search'
        className='input input-bordered input-xs '
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default SearchInput;
