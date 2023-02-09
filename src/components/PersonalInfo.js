import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';
import Input from './Input';

const PersonalInfo = ({ handleNext, handleBack }) => {
  const { formState, setFormState } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
            error={false}
            name={'name'}
            value={formState.fields.name}
            errorMessage={'This field is reqired'}
          />
        </div>
        <div className='pt-4'>
          <Input
            type={'email'}
            required={true}
            title={'Email Address'}
            error={true}
            name={'email'}
            value={formState.fields.email}
            errorMessage={'This field is reqired'}
          />
        </div>
        <div className='pt-4'>
          <Input
            type={'tel'}
            error={true}
            errorMessage={'This field is reqired'}
            required={true}
            name={'phone'}
            title={'Phone Number'}
            value={formState.fields.phone}
          />
        </div>
        <div className='absolute bottom-0 w-full'>
          <div className='flex'>
            <button
            // onClick={backPage}
            >
              Go Back
            </button>
            <button
              onClick={handleSubmit}
              type='submit'
              className='text-white bg-marineblue rounded p-2 ml-auto'
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
