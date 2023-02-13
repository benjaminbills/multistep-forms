const Steps = ({ activeIndex }) => {
  return (
    <div className='sm:pl-8 sm:pt-4 pt-6 pl-8 pr-8 flex justify-center'>
      <div className=' flex flex-row align-center justify-between sm:flex-col uppercase w-[80%] sm:w-full'>
        <div className='inline-flex items-center text-xs sm:mt-6 '>
          <span
            className={`'flex items-center justify-center font-bold  content-center h-[40px] w-[40px] border rounded-[50%] ' ${
              activeIndex === 1
                ? 'flex items-center bg-lightblue text-black-900'
                : 'flex items-center text-white'
            }`}
          >
            1
          </span>
          <span className='pl-4 flex-col hidden sm:inline-flex'>
            <span className='coolgray text-coolgray'>Step 1</span>
            <span className='font-semibold text-white'>Your Info</span>
          </span>
        </div>
        <div className='inline-flex items-center text-xs sm:mt-6'>
          <span
            className={`'flex items-center justify-center font-bold content-center h-[40px] w-[40px] border rounded-[50%] '  ${
              activeIndex === 2
                ? 'flex items-center bg-lightblue text-black-900'
                : 'flex items-center text-white'
            }`}
          >
            2
          </span>
          <span className='pl-4 flex-col hidden sm:inline-flex'>
            <span className='coolgray text-coolgray'>Step 2</span>
            <span className='font-semibold text-white'>Select plan</span>
          </span>
        </div>
        <div className='inline-flex items-center text-xs sm:mt-6'>
          <span
            className={`'flex items-center justify-center font-bold  content-center h-[40px] w-[40px] border rounded-[50%] '  ${
              activeIndex === 3
                ? 'flex items-center bg-lightblue text-black-900'
                : 'flex items-center text-white'
            }`}
          >
            3
          </span>
          <span className=' pl-4 flex-col hidden sm:inline-flex'>
            <span className='coolgray text-coolgray'>Step 3</span>
            <span className='font-semibold text-white'>Add-ons</span>
          </span>
        </div>
        <div className='inline-flex items-center text-xs sm:mt-6'>
          <span
            className={`'flex items-center justify-center font-bold  content-center h-[40px] w-[40px] border rounded-[50%] '  ${
              activeIndex === 4
                ? 'flex items-center bg-lightblue text-black-900'
                : 'flex items-center text-white'
            }`}
          >
            4
          </span>
          <span className=' pl-4 flex-col hidden sm:inline-flex'>
            <span className='coolgray text-coolgray'>Step 4</span>
            <span className='font-semibold text-white'>Summary</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
