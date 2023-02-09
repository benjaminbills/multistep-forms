const ControlButton = ({ handleNext, handleBack }) => {
  const nextPage = () => {
    console.log('nextClicked');
    handleNext();
  };
  const backPage = () => {
    handleBack();
  };
  return (
    <div className='flex justify-between'>
      <button onClick={backPage}>Go Back</button>
      <button
        onClick={nextPage}
        className='text-white bg-marineblue rounded p-2'
      >
        Next Step
      </button>
    </div>
  );
};

export default ControlButton;
