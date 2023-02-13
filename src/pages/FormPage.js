import { useState } from 'react';
import ControlButton from '../components/ControlButton';
import FormSteps from '../components/FormSteps';
import Steps from '../components/Steps';

const FormPage = () => {
  const [step, setStep] = useState(1);
  const goBack = () => {
    setStep(step - 1);
  };
  const nextPage = () => {
    setStep(step + 1);
  };
  const goToCom = (page) => {
    console.log('here');
    setStep(page);
  };
  return (
    <div className='w-full'>
      <div className='flex m-auto '>
        <div className='relative sm:border rounded-xl sm:p-3 justify-center mx-auto my-auto sm:bg-white sm:flex sm:flex-row'>
          <div className=' sm:bg-[url("/public/assets/images/bg-sidebar-desktop.svg")] min-h-[172px] bg-cover sm:h-[568px] sm:min-w-[274px] bg-[url("/public/assets/images/bg-sidebar-mobile.svg")] z-0'>
            <Steps activeIndex={step} />
          </div>
          <div className='sm:ml-[2em] ml-4 z-10 sm:mr-[2em] mr-4 sm:mt-8 mt-[-5em] mb-8 sm:mb-0 md:max-w-[600px] bg-white rounded-xl '>
            <FormSteps
              step={step}
              handleNext={nextPage}
              handleBack={goBack}
              handleGoToCom={goToCom}
            />
            {/* <div className='mt-auto'>
              <ControlButton handleNext={nextPage} handleBack={goBack} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
