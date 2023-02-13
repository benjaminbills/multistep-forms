import { useState, useContext } from 'react';
import { FormContext } from '../Context/FormContext';
const Summary = ({ handleBack, handleGoToCom }) => {
  const { formState, setFormState } = useContext(FormContext);
  const [confirm, setconfirm] = useState(false);
  const goToPlans = () => {
    console.log('clicked');
    handleGoToCom(2);
  };
  const total = () => {
    const allTot = formState.yearlyOrMonthly
      ? Number(formState.plans.yearlyValue)
      : Number(formState.plans.monthlyValue);
    let additional = 0;
    if (!formState.yearlyOrMonthly) {
      for (let i = 0; i < formState.addOns.length; i++) {
        additional += parseInt(formState.addOns[i].monthlyPrice);
        console.log(additional);
      }
    } else {
      for (let i = 0; i < formState.addOns.length; i++) {
        additional += parseInt(formState.addOns[i].yearlyPrice);
        console.log(additional);
      }
    }
    return allTot + additional;
  };
  return (
    <>
      {!confirm ? (
        // sm:relative h-[100%] pt-8 pb-8 pl-6 pr-6 sm:pt-0
        <div className='sm:relative h-[100%] pt-8 sm:pt-0 pb-8 pl-6 pr-6  font-medium'>
          <h1 className='text-2xl font-semibold text-marineblue'>
            Finishing up
          </h1>
          <label className='text-sm text-coolgray mt-4'>
            Double-check everything looks OK before confirming.
          </label>
          <div className='bg-magnolia rounded mt-8 p-4 sm:p-10'>
            <div className='flex items-center pt-4'>
              <div className='flex flex-col justify-start'>
                <p className='text-marineblue font-semibold'>
                  {formState.plans.name} (
                  {formState.yearlyOrMonthly ? 'Yearly' : 'Monthly'})
                </p>
                <button
                  onClick={goToPlans}
                  className='inline-flex contain underline text-coolgray'
                >
                  Change
                </button>
              </div>
              <p className='ml-auto text-marineblue font-semibold'>
                $
                {!formState.yearlyOrMonthly
                  ? formState.plans.monthlyValue
                  : formState.plans.yearlyValue}
                /{!formState.yearlyOrMonthly ? 'mo' : 'yr'}
              </p>
            </div>
            <hr className='mt-4 mb-4' />
            {formState.addOns.map((addOn) => (
              <div key={addOn.id} className='flex'>
                <p className='text-coolgray'>{addOn.service}</p>
                <span className='text-marineblue ml-auto'>
                  +$
                  {!formState.yearlyOrMonthly
                    ? addOn.monthlyPrice
                    : addOn.yearlyPrice}
                  /{!formState.yearlyOrMonthly ? 'mo' : 'yr'}
                </span>
              </div>
            ))}
          </div>
          <div className='flex pt-8 mr-10 ml-10'>
            <p className='text-coolgray '>
              Total (per {!formState.yearlyOrMonthly ? 'month' : 'year'})
            </p>
            <p className='ml-auto font-semibold text-purplishblue'>
              ${total()}/{!formState.yearlyOrMonthly ? 'mo' : 'yr'}
            </p>
          </div>
          <div className='fixed p-4 sm:p-6 bg-white sm:absolute bottom-0 left-0  w-full'>
            <div className='flex'>
              <button onClick={handleBack} className='text-coolgray'>
                Go Back
              </button>
              <button
                onClick={() => setconfirm(true)}
                // type='submit'
                className='text-white w-[100px] bg-purplishblue rounded p-2 ml-auto'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='my-auto flex sm:flex h-[400px] sm:h-full pt-4 sm:pt-8 pb-8 pl-6 pr-6 sm:pt-0 font-medium'>
          <div className='flex flex-col text-center align-center items-center my-auto'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='80'
                height='80'
                viewBox='0 0 80 80'
              >
                <g fill='none'>
                  <circle cx='40' cy='40' r='40' fill='#F9818E' />
                  <path
                    fill='#E96170'
                    d='M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z'
                  />
                  <path
                    fill='#FFF'
                    d='M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z'
                  />
                </g>
              </svg>
            </span>
            <p className='text-2xl font-bold text-marineblue pt-8 pb-4'>
              Thank you!
            </p>
            <p className='text-coolgray '>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
