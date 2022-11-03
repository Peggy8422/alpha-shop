import {InputBox, InputGroup} from './StepOne.js';
import React from 'react';
import styles from './StepThree.module.scss';
import './base.module.scss';

function StepThreeContent() {
  return (
    <section>
      <div className="col col-12">
        <InputGroup global=" input-w-4" labelTitle="持卡人姓名">
          <InputBox type="text" placeholder="John Doe" />
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-4" labelTitle="卡號">
          <InputBox type="text" placeholder="1111 2222 3333 4444" />
        </InputGroup>
      </div>
      <div className="col col-12">
        <InputGroup global=" input-w-3" labelTitle="有效期限">
          <InputBox type="text" placeholder="MM/YY" />
        </InputGroup>
        <InputGroup global=" input-w-3" labelTitle="CVC / CCV">
          <InputBox type="text" placeholder="123" />
        </InputGroup>
      </div>
    </section>
  );
}

function StepThreeWrapper() {
  return (
    <form className={styles.formContainer}>
      <h3 className={styles.formTitle}>付款資訊</h3>
      <StepThreeContent />
    </form>
  );
}

export default StepThreeWrapper;