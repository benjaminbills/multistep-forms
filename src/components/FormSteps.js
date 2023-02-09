import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Summary from './Summary';
import ThankYou from './ThankYou';

const FormSteps = ({ step }) => {
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <Plan />;
    case 3:
      return <AddOns />;
    case 4:
      return <Summary />;
    case 5:
      return <ThankYou />;
    default:
      return null;
  }
};

export default FormSteps;
