import StepProgress from './StepProgress.js';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';
import styles from './base.module.scss';


function StepForm({step, setDeliverPrice, setNewSubmitContent}) {
  return (
    <div className={styles.stepFormContainer}>
      <StepProgress step={step} />
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo setDeliverPrice={setDeliverPrice} setNewSubmitContent={setNewSubmitContent} />}
      {step === 3 && <StepThree setNewSubmitContent={setNewSubmitContent} />}
    </div>
  );
}

export default StepForm;