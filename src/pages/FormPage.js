import Steps from '../components/Steps';

const FormPage = () => {
  return (
    <div className='w-full'>
      <div className='flex mx-auto my-auto pt-12'>
        <div className='flex border rounded-xl p-3 justify-center mx-auto my-auto bg-white '>
          <div className=' bg-[url("/public/assets/images/bg-sidebar-desktop.svg")] h-[568px] w-[274px]'>
            <Steps />
          </div>
          <div className=''>
            <p>Personal Info </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
