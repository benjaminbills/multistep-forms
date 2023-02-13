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
      <div className='flex mx-auto my-auto pt-12'>
        <div className='flex border rounded-xl p-3 justify-center mx-auto my-auto bg-white '>
          <div className=' bg-[url("/public/assets/images/bg-sidebar-desktop.svg")] h-[568px] w-[274px]'>
            <Steps activeIndex={step} />
          </div>
          <div className='ml-[4em] mr-[4em] mt-8  mb-8 flex flex-col container w-[600px]'>
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
