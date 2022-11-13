import React from 'react';
import styles from './StepTwo.module.scss';
import './base.module.scss';

function RadioInfo({text, price, period}) {
  return (
    <>
      <div className={styles.radioInfo}>
        <div className="col col-12">
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.period + " col col-12"}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder}></div>
    </>
  );
}


function RadioGroup({id, children, ischecked = true}) {
  return (
    <label htmlFor={id} className={styles.radioGroup + " col col-12"}>
      <input className={styles.inputRadio} id={id} type="radio" name="shipping" defaultChecked={ischecked} />
      {children}
    </label>
  );
}

function StepTwoContent() {
  return (
    <section className={styles.formBody}>
      <RadioGroup id="shipping-standard">
        <RadioInfo text="運送標準" price="免費" period="約 3~7 個工作天" />
      </RadioGroup>
      <RadioGroup id="shipping-dhl" ischecked={false}>
        <RadioInfo text="DHL貨運" price="500" period="48 小時內送達" ischecked={false} />
      </RadioGroup>
    </section>
  );
}

function StepTwoWrapper() {
  return (
    <form className={styles.formContainer + " col col-12"}>
      <h3 className={styles.formTitle}>運送方式</h3>
      <StepTwoContent />
    </form>
  );
}

export default StepTwoWrapper;