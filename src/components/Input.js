import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';

const Input = ({ title, type, required, error, errorMessage, name, value }) => {
  const { formState, setFormState } = useContext(FormContext);

  const validate = (field) => {
    console.log(field.name);
    const errors = {};
    if (!field.name) errors.name = 'Name Required';
    if (!field.email) errors.email = 'Email Required';
    if (!field.phone) errors.phone = 'Email Required';

    return errors;
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    // const error = validate ? validate(value) : false;
    setFormState({ ...formState, [name]: value, error });
  };
  return (
    <div className='flex flex-col text-marineblue'>
      <div className='flex'>
        <label className='text-sm'>{title}</label>
        {error && (
          <p className='ml-auto text-red-500 text-sm '>{errorMessage}</p>
        )}
      </div>
      <input
        onChange={handleChange}
        className='mt-2 focus:ring-1 text-marineblue font-semibold focus:ring-purplishblue focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 ring-1 ring-slate-200 shadow-sm'
        type={type}
        required={required}
        name={name}
        value={value || ''}
      />
    </div>
  );
};

export default Input;
