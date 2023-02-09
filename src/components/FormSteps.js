import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Summary from './Summary';
import ThankYou from './ThankYou';

const FormSteps = ({ step, handleNext, handleBack }) => {
  switch (step) {
    case 1:
      return <PersonalInfo handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return <Plan handleNext={handleNext} handleBack={handleBack} />;
    case 3:
      return <AddOns handleNext={handleNext} handleBack={handleBack} />;
    case 4:
      return <Summary />;
    case 5:
      return <ThankYou />;
    default:
      return null;
  }
};

export default FormSteps;
