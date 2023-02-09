const AddOns = ({ handleNext, handleBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
    handleNext();
  };
  return (
    <div className='relative h-[100%]'>
      <h1 className='text-2xl font-semibold text-marineblue'>Pick add-ons</h1>
      <label className='text-sm text-coolgray'>
        Add-ons help enhance your gaming experience.
      </label>
      <div className='pt-8 flex flex-col'>
        <div className='border flex rounded-lg h-[60px] p-4 mb-2'>
          <input type={'checkbox'} />
          <div className='flex flex-col justify-center align-center pl-4'>
            <p className='text-marineblue'>Online Service</p>
            <label className='text-coolgray text-sm'>
              Access to multiplayer games
            </label>
          </div>
          <p className='ml-auto'>+$1/mo</p>
        </div>
        <div></div>
        <div>I</div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <div className='flex'>
          <button onClick={handleBack}>Go Back</button>
          <button
            onClick={handleSubmit}
            type='submit'
            className='text-white bg-marineblue rounded p-2 ml-auto'
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
