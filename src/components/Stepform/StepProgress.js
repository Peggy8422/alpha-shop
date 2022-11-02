import React from 'react';
import styles from './StepProgress.module.scss';


function Step({step, label}) {
  return (
    <span className={styles.progressGroup}>
      <span className={step === 1 ? styles.pgiDone : styles.pgiUndone}>
        <span className={styles.text}>{step}</span>
      </span>
      <span className={step === 1 ? styles.pglDone : styles.pglUndone}>{label}</span>
    </span>
  );
}

function ConnectBar({className}) {
  return <span className={className}></span>
}

function StepProgress() {
  return (
    <>
      <h2 className={styles.topTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <Step 
          step={1}
          label={'寄送地址'}
        />
        <ConnectBar className={styles.progressBar}/>
        <Step 
          step={2}
          label={'運送方式'}
        />
        <ConnectBar className={styles.pgbUndone}/>
        <Step 
          step={3}
          label={'付款資訊'}
        />
      </section>
    </>
  );
}

export default StepProgress;