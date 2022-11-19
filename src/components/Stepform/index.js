import StepProgress from './StepProgress';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
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