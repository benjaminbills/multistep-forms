const Input = ({ title, type }) => {
  return (
    <div className='flex flex-col text-marineblue'>
      <label>{title}</label>
      <input className='border border-lightgray h-10 rounded' type={type} />
    </div>
  );
};

export default Input;
