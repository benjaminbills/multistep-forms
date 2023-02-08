const Steps = () => {
  return (
    <div className='pl-8 pt-4'>
      <ul className='list-none uppercase'>
        <li className='inline-flex items-center text-xs mt-6'>
          <span className='flex items-center justify-center content-center h-[40px] w-[40px] border rounded-[50%] text-white'>
            1
          </span>
          <span className='inline-flex pl-4 flex-col'>
            <span className='coolgray text-coolgray'>Step 1</span>
            <span className='font-semibold text-white'>Your Info</span>
          </span>
        </li>
        <li className='inline-flex items-center text-xs mt-6'>
          <span className='flex items-center justify-center content-center h-[40px] w-[40px] border rounded-[50%] text-white'>
            2
          </span>
          <span className='inline-flex pl-4 flex-col'>
            <span className='coolgray text-coolgray'>Step 2</span>
            <span className='font-semibold text-white'>Select plan</span>
          </span>
        </li>
        <li className='inline-flex items-center text-xs mt-6'>
          <span className='flex items-center justify-center content-center h-[40px] w-[40px] border rounded-[50%] text-white'>
            3
          </span>
          <span className='inline-flex pl-4 flex-col'>
            <span className='coolgray text-coolgray'>Step 3</span>
            <span className='font-semibold text-white'>Add-ons</span>
          </span>
        </li>
        <li className='items-center text-xs mt-6'>
          <p className='inline-flex'>
            <span className='flex items-center justify-center content-center h-[40px] w-[40px] border rounded-[50%] text-white'>
              4
            </span>
            <span className='inline-flex pl-4 flex-col'>
              <span className='coolgray text-coolgray'>Step 4</span>
              <span className='font-semibold text-white'>Summary</span>
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
