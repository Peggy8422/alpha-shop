import React from 'react';
import styles from './StepProgress.module.scss';
import {ReactComponent as IconPgComplete} from '../icons/pg-complete.svg';

function Step({stepNum, step, label}) {
  return (
    <span className={styles.progressGroup}>
      <span className={stepNum <= step ? styles.pgiDone : styles.pgiUndone}>
        {stepNum >= step ? <span className={styles.text}>{stepNum}</span> : ''}
        {stepNum < step ? <IconPgComplete className={styles.icon} /> : '' }
      </span>
      <span className={stepNum <= step ? styles.pglDone : styles.pglUndone}>{label}</span>
    </span>
  );
}

function ConnectBar({className}) {
  return <span className={className}></span>
}

function StepProgress({step}) {
  return (
    <>
      <h2 className={styles.topTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step 
          stepNum={1}
          step={step}
          label={'寄送地址'}
        />
        <ConnectBar className={styles.progressBar}/>
        <Step 
          stepNum={2}
          step={step}
          label={'運送方式'}
        />
        <ConnectBar className={step === 1 ? styles.pgbUndone : styles.progressBar}/>
        <Step 
          stepNum={3}
          step={step}
          label={'付款資訊'}
        />
      </section>
    </>
  );
}

export default StepProgress;