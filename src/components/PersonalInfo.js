import Input from './Input';

const PersonalInfo = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-marineblue'>Personal info</h1>
      <label className='text-sm text-coolgray'>
        Please provide your name, email address, and phone number.
      </label>
      <form>
        <div className='pt-8'>
          <Input type={'text'} title={'Name'} />
        </div>
        <div className='pt-4'>
          <Input type={'text'} title={'Email Address'} />
        </div>
        <div className='pt-4'>
          <Input type={'number'} title={'Phone Number'} />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
