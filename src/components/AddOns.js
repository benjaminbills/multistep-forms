import { useContext } from 'react';
import { FormContext } from '../Context/FormContext';

const AddOns = ({ handleNext, handleBack }) => {
  const { formState, setFormState } = useContext(FormContext);

  const addOns = [
    {
      service: 'Online Service',
      advantage: 'Access to multiplayer games',
      id: '1',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      service: 'Larger Storage',
      advantage: 'Extra 1TB of cloud save',
      id: '2',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      service: 'Customizable profile',
      advantage: 'Custom theme on your profile',
      id: '3',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    handleNext();
  };
  const handleAddOnSelect = (id) => {
    const selectedAddOn = addOns.find((addOn) => addOn.id === id);
    console.log(selectedAddOn);
    const allAddOns = [...formState.addOns];
    console.log(allAddOns);
    if (
      formState.addOns.find((addOn) => addOn.id === selectedAddOn.id) ===
      undefined
    ) {
      setFormState({ ...formState, addOns: allAddOns.concat(selectedAddOn) });
    } else {
      setFormState({
        ...formState,
        addOns: allAddOns.splice(selectedAddOn.id, 1),
      });
    }
  };

  const checked = (id) => {
    let checking = formState.addOns.find((el) => el.id === id);
    console.log(checking);
    return checking;
  };
  return (
    // sm:relative h-[100%] pt-8 pb-8 pl-6 pr-6 sm:pt-0

    <div className='sm:relative h-[100%] pt-8 pb-8 pl-6 pr-6 sm:pt-0 font-medium'>
      <h1 className='text-2xl font-semibold text-marineblue'>Pick add-ons</h1>
      <label className='text-sm text-coolgray'>
        Add-ons help enhance your gaming experience.
      </label>
      <div className='pt-8 flex flex-col'>
        {addOns.map((addOn) => (
          <label
            key={addOn.id}
            className={`'border flex items-center rounded-lg h-[60px] p-2 mb-3 cursor-pointer' ${
              checked(addOn.id) ? 'checked bg-lightgray' : 'border'
            }`}
          >
            <input
              type={'checkbox'}
              className='w-4 h-4 text-green-900'
              checked={
                formState.addOns.find((item) => item.id === addOn.id) || false
              }
              onChange={() => handleAddOnSelect(addOn.id)}
            />
            <div className='flex flex-col justify-center align-center pl-4'>
              <p className='text-marineblue'>{addOn.service}</p>
              <p className='text-coolgray text-xs'>{addOn.advantage}</p>
            </div>
            <p className='ml-auto text-purplishblue text-sm'>
              +$
              {!formState.yearlyOrMonthly
                ? addOn.monthlyPrice
                : addOn.yearlyPrice}
              /{!formState.yearlyOrMonthly ? 'mo' : 'yr'}
            </p>
          </label>
        ))}
      </div>
      {/* fixed p-4 bg-white sm:p-4 sm:absolute bottom-0 left-0  w-full */}
      <div className='fixed p-4 sm:p-6 bg-white sm:absolute bottom-0 left-0  w-full'>
        <div className='flex'>
          <button onClick={handleBack} className='text-coolgray'>
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
    </div>
  );
};

export default AddOns;
