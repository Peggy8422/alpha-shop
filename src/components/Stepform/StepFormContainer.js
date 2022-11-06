import StepProgress from './StepProgress.js';
import StepOne from './StepOne.js';
// import StepTwo from './StepTwo.js';
// import StepThree from './StepThree.js';
import styles from './base.module.scss';


function StepFormContainer() {
  return (
    <div className={styles.stepFormContainer}>
      <StepProgress />
      <StepOne />
      
    </div>
  );
}

export default StepFormContainer;