import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';
import Input from './Input';

const PersonalInfo = ({ handleNext, handleBack }) => {
  const { formState, setFormState } = useContext(FormContext);

  const onInputChange = ({ name, value, error }) => {
    console.log(name, value, error);
    const fields = Object.assign({}, formState.fields);
    const fieldErrors = Object.assign({}, formState.fieldErrors);
    fields[name] = value;
    fieldErrors[name] = error;
    setFormState({ ...formState, fields, fieldErrors });
  };
  const validate = (field) => {
    // console.log(name, value);
    const errors = {};
    if (!field.name) errors.name = 'Name is Required';
    if (!field.email) errors.email = 'Email is Required';
    if (!field.phone) errors.phone = 'Phone is Required';
    // console.log(errors);
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    const details = formState.fields;
    const fieldErrors = validate(details);
    setFormState({ ...formState, fieldErrors });
    if (Object.keys(fieldErrors).length) return;
    handleNext();
  };
  return (
    <div className='relative h-[100%]'>
      <h1 className='text-2xl font-semibold text-marineblue'>Personal info</h1>
      <label className='text-sm text-coolgray'>
        Please provide your name, email address, and phone number.
      </label>
      <form>
        {/* <div className='flex flex-col'> */}
        <div className='pt-8'>
          <Input
            type={'text'}
            required={false}
            title={'Name'}
            // error={true}
            name={'name'}
            value={formState.fields.name}
            onChange={onInputChange}
            validate={(val) => (val ? false : 'Name is Required')}
            errorMessage={formState.fieldErrors.name}
          />
        </div>
        <div className='pt-4'>
          <Input
            type={'email'}
            required={true}
            title={'Email Address'}
            // error={true}
            name={'email'}
            value={formState.fields.email}
            onChange={onInputChange}
            validate={(val) => (val ? false : 'Email is Required')}
            errorMessage={formState.fieldErrors.email}
          />
        </div>
        <div className='pt-4'>
          <Input
            type={'tel'}
            // error={true}
            errorMessage={formState.fieldErrors.phone}
            required={true}
            name={'phone'}
            onChange={onInputChange}
            title={'Phone Number'}
            value={formState.fields.phone}
          />
        </div>
        <div className='absolute bottom-0 w-full'>
          <div className='flex'>
            <span></span>
            <button
              onClick={handleSubmit}
              type='submit'
              className='text-white bg-marineblue rounded w-[100px] p-2 ml-auto'
            >
              Next Step
            </button>
          </div>
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default PersonalInfo;
