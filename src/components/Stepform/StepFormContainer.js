import StepProgress from './StepProgress.js';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';
import ProgressControl from './ProgressControl.js';


function StepFormContainer() {
  return (
    <div className="stepFormContainer">
      <StepProgress />
      <StepOne />
      <StepTwo />
      <StepThree />
      <ProgressControl />
    </div>
  );
}

export default StepFormContainer;