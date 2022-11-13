import StepProgress from './StepProgress.js';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';
import styles from './base.module.scss';


function StepFormContainer({step}) {
  return (
    <div className={styles.stepFormContainer}>
      <StepProgress step={step} />
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
}

export default StepFormContainer;